<script lang="ts">
  import type { Dayjs } from "dayjs";
  import { onMount } from "svelte";

  export let mobile = false;
  export let showTime: boolean;
  export let hourSelected: string;
  export let minuteSelected: string;
  export let meridianSelected: string;
  export let step: number;
  export let browseDate: Dayjs;
  export let closeOnSelect: boolean;
  export let setValue: (d: Dayjs) => void;
  export let handleSelect: (d: Dayjs) => void;
  export let format: string;

  let hoursArray = [...Array(12).keys()];
  let hoursArray24 = [...Array(25).keys()];
  let minutesArray = [...Array(60).keys()];
  minutesArray = minutesArray.filter((x) => x % step === 0);

  let hourScroll: HTMLDivElement;
  let minuteScroll: HTMLDivElement;
  let meridianScroll: HTMLDivElement;

  let hoursVisible = false;
  let minutesVisible = false;
  let meridianVisible = false;

  function toggleHoursVisibility() {
    hoursVisible = !hoursVisible;

    if (hoursVisible) {
      setTimeout(() => {
        const hourEl = document.getElementById(`hour-${hourSelected}`);
        const hourDropdownScroll = document.getElementById("hourDropdownScroll");

        if (hourEl && hourDropdownScroll) {
          hourDropdownScroll.scrollTop = hourEl.offsetTop - hourDropdownScroll.offsetTop - 230;
        }
      }, 1);
    }
  }

  function closeHoursVisibility() {
    hoursVisible = false;
  }

  function toggleMinutesVisibility() {
    minutesVisible = !minutesVisible;

    setTimeout(() => {
      const minuteEl = document.getElementById(`minute-${minuteSelected}`);
      const minuteDropdownScroll = document.getElementById("minuteDropdownScroll");

      if (minuteEl && minuteDropdownScroll) {
        minuteDropdownScroll.scrollTop = minuteEl.offsetTop - minuteDropdownScroll.offsetTop - 230;
      }
    }, 1);
  }

  function closeMinutesVisibility() {
    minutesVisible = false;
  }

  function toggleMeridianVisibility() {
    meridianVisible = !meridianVisible;

    setTimeout(() => {
      const meridianEl = document.getElementById(`meridian-${meridianSelected}`);
      const meridianDropdownScroll = document.getElementById("meridianDropdownScroll");

      if (meridianEl && meridianDropdownScroll) {
        meridianDropdownScroll.scrollTop =
          meridianEl.offsetTop - meridianDropdownScroll.offsetTop - 230;
      }
    }, 1);
  }

  function closeMeridianVisibility() {
    meridianVisible = false;
  }

  function handleSelectHour(hour: string) {
    hourSelected = hour;
    if (format.includes("H")) {
      browseDate = browseDate
        .set("hour", parseInt(hourSelected))
        .set("minute", parseInt(minuteSelected));
    } else if (meridianSelected === "AM") {
      browseDate = browseDate
        .set("hour", parseInt(hourSelected))
        .set("minute", parseInt(minuteSelected));
    } else {
      browseDate = browseDate
        .set("hour", parseInt(hourSelected) + 12)
        .set("minute", parseInt(minuteSelected));
    }
    setValue(browseDate);
    handleSelect(browseDate);
    if (mobile) {
      closeHoursVisibility();
    }
  }

  function handleSelectMinute(minute: string) {
    minuteSelected = minute;
    if (!format.includes("H")) {
      browseDate = browseDate
        .set("hour", parseInt(hourSelected))
        .set("minute", parseInt(minuteSelected));
    } else if (meridianSelected === "AM") {
      browseDate = browseDate
        .set("hour", parseInt(hourSelected))
        .set("minute", parseInt(minuteSelected));
    } else {
      browseDate = browseDate
        .set("hour", parseInt(hourSelected) + 12)
        .set("minute", parseInt(minuteSelected));
    }
    setValue(browseDate);
    handleSelect(browseDate);

    if (mobile) {
      closeMinutesVisibility();
    }
  }

  function handleSelectMeridian(meridian: string) {
    meridianSelected = meridian;
    if (meridianSelected === "AM") {
      browseDate = browseDate
        .set("hour", parseInt(hourSelected))
        .set("minute", parseInt(minuteSelected));
    } else {
      browseDate = browseDate
        .set("hour", parseInt(hourSelected) + 12)
        .set("minute", parseInt(minuteSelected));
    }
    setValue(browseDate);
    handleSelect(browseDate);

    if (mobile) {
      closeMeridianVisibility();
    }
  }

  function findClosestNumber(target: number, array: number[]) {
    return array.reduce((closest, current) => {
      var closestDiff = Math.abs(closest - target);
      var currentDiff = Math.abs(current - target);
      return currentDiff < closestDiff ? current : closest;
    });
  }

  function scrollIfNeeded(element: HTMLElement, container: HTMLDivElement | HTMLUListElement) {
    container.scrollTop = element.offsetTop - container.offsetTop - 112;
  }

  function convertNumberToMinuteString(n: number) {
    if (n < 10) {
      return `0${n}`;
    }
    return `${n}`;
  }

  onMount(() => {
    if (showTime) {
      closeOnSelect = false;

      if (format.includes("h")) {
        hourSelected = browseDate.format("h");
      } else if (format.includes("H")) {
        hourSelected = browseDate.format("H");
      }

      minuteSelected = convertNumberToMinuteString(
        findClosestNumber(parseInt(browseDate.format("mm")), minutesArray)
      );

      if (format.includes("A")) {
        meridianSelected = browseDate.format("A");
      } else if (format.includes("a")) {
        meridianSelected = browseDate.format("a");
      }

      const hourEl = document.getElementById(`hour-${hourSelected}`);
      const minuteEl = document.getElementById(`minute-${minuteSelected}`);
      const meridianEl = document.getElementById(`meridian-${meridianSelected}`);

      if (hourEl) {
        scrollIfNeeded(hourEl, hourScroll);
      }

      if (minuteEl) {
        scrollIfNeeded(minuteEl, minuteScroll);
      }

      if (meridianEl) {
        scrollIfNeeded(meridianEl, meridianScroll);
      }
    }
  });
</script>

<div
  class="flex flex-row justify-evenly divide-x divide-border"
  class:divide-x={!mobile}
  class:divide-border={!mobile}
  class:items-stretch={!mobile}
  class:w-[168px]={!mobile}
  class:items-center={mobile}
  class:w-full={mobile}
  class:h-14={mobile}
  class:px-3={mobile}
  class:gap-3={mobile}
  class:gap-2={!mobile}
>
  {#if mobile}
    {#if format.includes("H")}
      <div class:dropdown-open={hoursVisible} class="dropdown w-full">
        <button on:click={toggleHoursVisibility} tabindex="-1" class="btn btn-primary w-full"
          >{hourSelected}</button
        >
        <ul id="hourDropdownScroll" class="dropdown-content z-[1] max-w-full w-full max-h-[160px] overflow-auto">
          {#each hoursArray24 as hour}
            <button
              id={`hour-${hour}`}
              on:click={() => handleSelectHour(`${hour}`)}
              class="w-full flex justify-center items-center snap-center"
              class:primary={`${hour}` === hourSelected}
            >
              {hour}
            </button>
          {/each}
        </ul>
      </div>
    {:else}
      <div class:dropdown-open={hoursVisible} class="dropdown w-full">
        <button
          class="btn w-full bg-transparent border-primary border active:bg-transparent focus:bg-transparent"
          on:click={toggleHoursVisibility}>{hourSelected}</button
        >
        <ul id="hourDropdownScroll" class="dropdown-content z-[1] max-w-full w-full max-h-[160px] overflow-auto">
          {#each hoursArray as hour}
            <button
              id={`hour-${hour + 1}`} 
              on:click={() => handleSelectHour(`${hour + 1}`)}
              class="w-full flex justify-center items-center snap-center"
              class:primary={`${hour + 1}` === hourSelected}
            >
              {hour + 1}
            </button>
          {/each}
        </ul>
      </div>
    {/if}

    <div class:dropdown-open={minutesVisible} class="dropdown w-full">
      <button
        class="w-full bg-transparent border-primary border active:bg-transparent focus:bg-transparent"
        on:click={toggleMinutesVisibility}>{minuteSelected}</button
      >
      <ul id="minuteDropdownScroll" class="dropdown-content z-[1] max-w-full w-full max-h-[160px] overflow-auto">
        {#each minutesArray as minute}
          <button
            id={`minute-${minute < 10 ? `0${minute}` : minute}`}
            on:click={() => handleSelectMinute(`${minute < 10 ? `0${minute}` : minute}`)}
            class="w-full flex justify-center items-center snap-center"
            class:primary={`${minute < 10 ? `0${minute}` : minute}` === minuteSelected}
          >
            {minute < 10 ? `0${minute}` : minute}
          </button>
        {/each}
      </ul>
    </div>

    {#if format.includes("h")}
      <div class:dropdown-open={meridianVisible} class="dropdown w-full">
        <button
          class="w-full bg-transparent border-primary border active:bg-transparent focus:bg-transparent"
          on:click={toggleMeridianVisibility}>{meridianSelected}</button
        >
        <ul id="meridianDropdownScroll" class="dropdown-content z-[1] max-w-full w-full max-h-[160px] overflow-auto">
          <button
            id="meridian-AM"
            on:click={() => handleSelectMeridian("AM")}
            class="w-full flex justify-center items-center snap-center"
            class:primary={"AM" === meridianSelected}>AM</button
          >
          <button
            id="meridian-PM"
            on:click={() => handleSelectMeridian("PM")}
            class="w-full flex justify-center items-center snap-center"
            class:primary={"PM" === meridianSelected}>PM</button
          >
        </ul>
      </div>
    {/if}
  {:else}
    {#if format.includes("H")}
      <div
        bind:this={hourScroll}
        class="overflow-auto w-full h-full snap-y snap-mandatory snap-always p-1 space-y-1"
      >
        {#each hoursArray24 as hour}
          <button
            id={`hour-${hour}`}
            on:click={() => handleSelectHour(`${hour}`)}
            class="w-full flex justify-center items-center snap-center"
            class:primary={`${hour}` === hourSelected}
          >
            {hour}
          </button>
        {/each}
      </div>
    {:else}
      <div
        bind:this={hourScroll}
        class="overflow-auto w-full h-full snap-y snap-mandatory snap-always p-1 space-y-1"
      >
        {#each hoursArray as hour}
          <button
            id={`hour-${hour + 1}`}
            on:click={() => handleSelectHour(`${hour + 1}`)}
            class="w-full flex justify-center items-center snap-center"
            class:primary={`${hour + 1}` === hourSelected}
          >
            {hour + 1}
          </button>
        {/each}
      </div>
    {/if}

    <div
      bind:this={minuteScroll}
      class="overflow-auto w-full h-full snap-y snap-mandatory snap-always p-1 space-y-1"
    >
      {#each minutesArray as minute}
        <button
          id={`minute-${minute < 10 ? `0${minute}` : minute}`}
          on:click={() => handleSelectMinute(`${minute < 10 ? `0${minute}` : minute}`)}
          class="w-full flex justify-center items-center snap-center"
          class:primary={`${minute < 10 ? `0${minute}` : minute}` === minuteSelected}
        >
          {minute < 10 ? `0${minute}` : minute}
        </button>
      {/each}
    </div>
    {#if format.includes("h")}
      <div
        bind:this={meridianScroll}
        class="overflow-auto w-full h-full snap-y snap-mandatory snap-always p-1 space-y-1"
      >
        <button
          id="meridian-AM"
          on:click={() => handleSelectMeridian("AM")}
          class="w-full flex justify-center items-center snap-center"
          class:primary={"AM" === meridianSelected}>AM</button
        >
        <button
          id="meridian-PM"
          on:click={() => handleSelectMeridian("PM")}
          class="w-full flex justify-center items-center snap-center"
          class:primary={"PM" === meridianSelected}>PM</button
        >
      </div>
    {/if}
  {/if}
</div>
