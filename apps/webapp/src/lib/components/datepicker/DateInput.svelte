<script lang="ts">
  import { scale, slide } from "svelte/transition";
  import type { Locale } from "./locale";
  import DatePicker from "./DatePicker.svelte";
  import { writable, type Writable } from "svelte/store";
  import dayjs, { Dayjs } from "dayjs";
  import { get_current_component, setContext } from "svelte/internal";
  import { exclude, forwardEventsBuilder, useActions } from "./utils";
  import type { ActionArray, DatePickerAction } from "./utils";
  const forwardEvents = forwardEventsBuilder(get_current_component());

  let input: HTMLInputElement;
  let valueInput: HTMLInputElement;

  export let use: ActionArray = [];
  export let showTime = false;
  export let name: string;
  export let error: string | undefined = undefined;
  export let placeholder: string | undefined = undefined;
  export let value: Date | null = null;
  export let min: Date | undefined = undefined;
  export let max: Date | undefined = undefined;
  export let format = showTime ? "MMMM D, YYYY @ h:mm A" : "MMMM D, YYYY";
  export let locale: Locale = {};
  export let visible = false;
  export let closeOnSelect = true;
  export let handleSelect: ((d: Date) => void) | undefined = undefined;
  export let tabindex: number | undefined = undefined;
  export let allowClear = false;
  export let disabled = false;
  export let minuteStep = 1;
  export let actions: DatePickerAction[] = [];
  let mobile = false;

  let valueDayJS: Dayjs | null;
  let text: string | undefined;

  $: {
    valueDayJS = value === null ? null : dayjs(value);
    text = valueDayJS?.format(format);
    if (input && input.value) {
      input.value = text || "";
    }
  }

  let currentError: Writable<string | undefined> = writable(error);
  $: currentError.set(error);

  function onFocusOut(event: unknown) {
    const e = event as FocusEvent;
    if (
      e?.currentTarget instanceof HTMLElement &&
      e.relatedTarget &&
      e.relatedTarget instanceof Node &&
      e.currentTarget.contains(e.relatedTarget)
    ) {
      return;
    } else if (
      e?.target instanceof HTMLButtonElement &&
      (e.target.id.includes("hour") ||
        e.target.id.includes("minute") ||
        e.target.id.includes("meridian"))
    ) {
      return;
    } else {
      visible = false;
    }
  }

  function keydown(event: unknown) {
    const e = event as KeyboardEvent;
    if (e.key === "Escape" && visible) {
      visible = false;
    } else if (e.key === "Tab") {
      visible = !visible;
    }
  }

  function onSelect(d: Dayjs) {
    value = new Date(d.toISOString());
    valueInput.value = value.toISOString();
    if (handleSelect) handleSelect(value);
    if (closeOnSelect && !showTime) {
      visible = false;
    }
  }

  function handleClose() {
    visible = false;
  }

  function handleOpen() {
    if (!disabled) {
      visible = true;
    }
  }

  function handleClear() {
    input.value = "";
    value = null;
  }

  setContext("datepicker-name", name);
  setContext("datepicker-error", currentError);
</script>

<div class={$$props.class} style={$$props.style}>
  <slot name="label" />
  <div
    class:dropdown-open={visible}
    on:focusout={onFocusOut}
    on:keydown={keydown}
    class="dropdown w-full"
  >
    <div>
      <div
        class="mt-1 relative rounded-md h-[2.5rem]"
        class:opacity-75={disabled}
        class:text-danger={error}
      >
        <input
          type="text"
          {name}
          id={name}
          tabindex="-1"
          readonly={true}
          class="h-0 w-0 invisible hidden"
          {disabled}
          bind:value
          bind:this={valueInput}
        />
        <input
          bind:this={input}
          readonly={true}
          autocomplete="off"
          name="{name}-visual"
          id="{name}-visual"
          bind:value={text}
          {tabindex}
          {placeholder}
          {disabled}
          type="text"
          on:focus={handleOpen}
          on:mousedown={handleOpen}
          on:keydown={keydown}
          class="block h-[2.5rem] w-full px-3 border outline-none focus:outline-none sm:text-sm rounded-md bg-surface placeholder-secondary-content placeholder-opacity-80"
          class:border-border={!error}
          class:border-danger={error}
          class:text-danger={error}
          class:placeholder-danger={error}
          class:focus:border-red-500={error}
          class:focus:border-primary={!error}
          class:group-focus-within:border-red-500={error}
          class:group-focus-within:border-primary={!error}
          class:group-active:border-red-500={error}
          class:group-active:border-primary={!error}
          class:bg-default={disabled}
          class:pl-10={$$slots.leading}
          class:pr-10={$$slots.trailing || error || allowClear}
          use:useActions={use}
          use:forwardEvents
          {...exclude($$props, ["use", "class", "value"])}
        />

        {#if allowClear && value}
          <button
            aria-label="clear"
            on:click={handleClear}
            class="absolute inset-y-0 group-focus-within:flex active:flex items-center"
            class:right-10={$$slots.trailing || error}
            class:right-3={!$$slots.trailing && !error}
          >
            <span transition:scale|local class="items-center flex">
              <div class="i-bx::close text-lg" />
            </span>
          </button>
        {/if}

        {#if $$slots.leading}
          <span
            class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            class:text-danger={error}
          >
            <slot name="leading" />
          </span>
        {/if}

        {#if $$slots.trailing && !error}
          <span class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <slot name="trailing" />
          </span>
        {:else if error}
          <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <div class="i-bx::error text-lg text-error" />
          </span>
        {/if}
      </div>
      {#if error}
        <p transition:slide|local class="mt-2 text-sm text-danger" id="{name}-error">{error}</p>
      {/if}
    </div>
    <div
      class="dropdown-content z-[10]"
      class:-mt-7={error}
      in:scale={{ start: 0.9, duration: 100, delay: 150 }}
      out:scale={{ start: 0.95, duration: 75 }}
    >
      <DatePicker
        on:focusout={onFocusOut}
        handleSelect={onSelect}
        bind:value={valueDayJS}
        min={min ? dayjs(min) : undefined}
        max={max ? dayjs(max) : undefined}
        {locale}
        {closeOnSelect}
        {handleClose}
        {handleClear}
        {showTime}
        step={minuteStep}
        {actions}
        {format}
      />
    </div>
  </div>
</div>
