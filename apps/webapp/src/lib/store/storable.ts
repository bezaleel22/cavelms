import { browser } from "$app/environment";
import { writable, type Subscriber, type Unsubscriber, type Updater } from "svelte/store";

export class Storable {
  set: (this: void, value: {}) => void;
  subscribe: (this: void, run: Subscriber<{}>, invalidate?: any | undefined) => Unsubscriber;
  update: (this: void, updater: Updater<{}>) => void;

  constructor(name: string, initData: any={}) {
    if (browser) initData = JSON.parse(localStorage[name] ?? "{}") || initData;
    const { set, subscribe, update } = writable<any>(initData);

    this.set = set;
    this.subscribe = subscribe;
    this.update = update;

    if (browser) this.subscribe((value) => (localStorage[name] = JSON.stringify(value)));
  }
}

export const storable = new Storable("storable");
