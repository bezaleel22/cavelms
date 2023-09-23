export interface DatePickerAction {
  label: string;
  action: () => void;
}

export function exclude(obj: KeyValue, keys: any) {
  let newObj = obj;

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const { [key]: removed, ...rest } = newObj;
    newObj = rest;
  }

  return newObj;
}

export type SvelteActionReturnType<P> = {
  update?: (newParams?: P) => void;
  destroy?: () => void;
} | void;

export type SvelteHTMLActionType<P> = (node: HTMLElement, params?: P) => SvelteActionReturnType<P>;

export type HTMLActionEntry<P = any> = SvelteHTMLActionType<P> | [SvelteHTMLActionType<P>, P];

export type HTMLActionArray = HTMLActionEntry[];

export type SvelteSVGActionType<P> = (node: SVGElement, params?: P) => SvelteActionReturnType<P>;

export type SVGActionEntry<P = any> = SvelteSVGActionType<P> | [SvelteSVGActionType<P>, P];

export type SVGActionArray = SVGActionEntry[];

export type ActionArray = HTMLActionArray | SVGActionArray;

export const useActions = (node: HTMLElement | SVGElement, actions: ActionArray) => {
  const actionReturns: SvelteActionReturnType<any>[] = [];

  if (actions) {
    for (let i = 0; i < actions.length; i++) {
      const actionEntry = actions[i];
      const action = Array.isArray(actionEntry) ? actionEntry[0] : actionEntry;
      if (Array.isArray(actionEntry) && actionEntry.length > 1) {
        actionReturns.push(action(node as HTMLElement & SVGElement, actionEntry[1]));
      } else {
        actionReturns.push(action(node as HTMLElement & SVGElement));
      }
    }
  }

  return {
    update(actions: ActionArray) {
      if (((actions && actions.length) || 0) != actionReturns.length) {
        throw new Error("You must not change the length of an actions array.");
      }

      if (actions) {
        for (let i = 0; i < actions.length; i++) {
          const returnEntry = actionReturns[i];
          if (returnEntry && returnEntry.update) {
            const actionEntry = actions[i];
            if (Array.isArray(actionEntry) && actionEntry.length > 1) {
              returnEntry.update(actionEntry[1]);
            } else {
              returnEntry.update();
            }
          }
        }
      }
    },

    destroy() {
      for (let i = 0; i < actionReturns.length; i++) {
        const returnEntry = actionReturns[i];
        if (returnEntry && returnEntry.destroy) {
          returnEntry.destroy();
        }
      }
    },
  };
};

import type { SvelteComponent } from "svelte";
import { bubble, listen, prevent_default, stop_propagation } from "svelte/internal";

// Match old modifiers. (only works on DOM events)
const oldModifierRegex =
  /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
// Match new modifiers.
const newModifierRegex =
  /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;

export const forwardEventsBuilder = (component: SvelteComponent) => {
  // This is our pseudo $on function. It is defined on component mount.
  let $on: (eventType: string, callback: (event: unknown) => void) => () => void;
  // This is a list of events bound before mount.
  const events: [string, (event: unknown) => void][] = [];

  // And we override the $on function to forward all bound events.
  component.$on = (fullEventType: string, callback: (event: unknown) => void) => {
    const eventType = fullEventType;
    let destructor = () => {
      return;
    };
    if ($on) {
      // The event was bound programmatically.
      destructor = $on(eventType, callback);
    } else {
      // The event was bound before mount by Svelte.
      events.push([eventType, callback]);
    }
    const oldModifierMatch = eventType.match(oldModifierRegex);

    if (oldModifierMatch && console) {
      console.warn(
        'Event modifiers in STWUI now use "$" instead of ":", so that ' +
          "all events can be bound with modifiers. Please update your " +
          "event binding: ",
        eventType
      );
    }

    return () => {
      destructor();
    };
  };

  function forward(e: Event) {
    // Internally bubble the event up from Svelte components.
    bubble(component, e);
  }

  return (node: HTMLElement | SVGElement) => {
    const destructors: (() => void)[] = [];
    const forwardDestructors: { [k: string]: () => void } = {};

    // This function is responsible for listening and forwarding
    // all bound events.
    $on = (fullEventType, callback) => {
      let eventType = fullEventType;
      let handler = callback;
      // DOM addEventListener options argument.
      let options: boolean | AddEventListenerOptions = false;
      const oldModifierMatch = eventType.match(oldModifierRegex);
      const newModifierMatch = eventType.match(newModifierRegex);
      const modifierMatch = oldModifierMatch || newModifierMatch;
      if (eventType.match(/^STWUI:\w+:/)) {
        const newEventTypeParts = eventType.split(":");
        let newEventType = "";
        for (let i = 0; i < newEventTypeParts.length; i++) {
          newEventType +=
            i === newEventTypeParts.length - 1
              ? ":" + newEventTypeParts[i]
              : newEventTypeParts[i]
                  .split("-")
                  .map((value) => value.slice(0, 1).toUpperCase() + value.slice(1))
                  .join("");
        }
        console.warn(
          `The event ${eventType.split("$")[0]} has been renamed to ${newEventType.split("$")[0]}.`
        );
        eventType = newEventType;
      }
      if (modifierMatch) {
        // Parse the event modifiers.
        // Supported modifiers:
        // - preventDefault
        // - stopPropagation
        // - passive
        // - nonpassive
        // - capture
        // - once
        const parts = eventType.split(oldModifierMatch ? ":" : "$");
        eventType = parts[0];
        const eventOptions: {
          passive?: true;
          nonpassive?: true;
          capture?: true;
          once?: true;
          preventDefault?: true;
          stopPropagation?: true;
        } = Object.fromEntries(parts.slice(1).map((mod) => [mod, true]));
        if (eventOptions.passive) {
          options = options || ({} as AddEventListenerOptions);
          options.passive = true;
        }
        if (eventOptions.nonpassive) {
          options = options || ({} as AddEventListenerOptions);
          options.passive = false;
        }
        if (eventOptions.capture) {
          options = options || ({} as AddEventListenerOptions);
          options.capture = true;
        }
        if (eventOptions.once) {
          options = options || ({} as AddEventListenerOptions);
          options.once = true;
        }
        if (eventOptions.preventDefault) {
          handler = prevent_default(handler);
        }
        if (eventOptions.stopPropagation) {
          handler = stop_propagation(handler);
        }
      }

      // Listen for the event directly, with the given options.
      const off = listen(node, eventType, handler, options);
      const destructor = () => {
        off();
        const idx = destructors.indexOf(destructor);
        if (idx > -1) {
          destructors.splice(idx, 1);
        }
      };

      destructors.push(destructor);

      // Forward the event from Svelte.
      if (!(eventType in forwardDestructors)) {
        forwardDestructors[eventType] = listen(node, eventType, forward);
      }

      return destructor;
    };

    for (let i = 0; i < events.length; i++) {
      // Listen to all the events added before mount.
      $on(events[i][0], events[i][1]);
    }

    return {
      destroy: () => {
        // Remove all event listeners.
        for (let i = 0; i < destructors.length; i++) {
          destructors[i]();
        }

        // Remove all event forwarders.
        for (const entry of Object.entries(forwardDestructors)) {
          entry[1]();
        }
      },
    };
  };
};
