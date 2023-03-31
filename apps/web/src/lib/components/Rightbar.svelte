<script lang="ts">
  import { onMount } from "svelte";
  export let open = false;

  let layoutWidth = "fluid";
  let layoutPosition = "fixed";
  let topbarTheme = "light";
  let leftSideBarTheme = "dark";
  let leftSidebarType = "large";

  export let layout: string;

  onMount(() => {
    changeLayoutWidth(layoutWidth);
    if (layout == "vertical") {
      changeLeftSidebarTheme(leftSideBarTheme);
      changeLeftSidebarType(leftSidebarType);
    }
    changeTopbarTheme(topbarTheme);
    changeLaoutPosition(layoutPosition);
  });

  function changeLayoutWidth(value: string) {
    if (document.body) document.body.setAttribute("data-layout-size", value);
  }

  function changeLeftSidebarTheme(value: string) {
    if (document.body) document.body.setAttribute("data-sidebar", value);
  }

  function changeTopbarTheme(value: string) {
    if (document.body) document.body.setAttribute("data-topbar", value);
  }

  function changeLeftSidebarType(value: string) {
    if (document.body) document.body.setAttribute("data-sidebar-size", value);
  }

  function changeLaoutPosition(value: string) {
    if (document.body)
      if (value == "scrollable") {
        document.body.setAttribute("data-layout-scrollable", "true");
      } else {
        document.body.setAttribute("data-layout-scrollable", "false");
      }
  }

  function changeBodyAttribute(attribute: string, value: string) {
    if (document.body) document.body.setAttribute(attribute, value);

    if (
      (attribute == "data-sidebar-size" && value == "large") ||
      (attribute == "data-sidebar-size" && value == "small")
    ) {
      document.body.setAttribute("class", "");
    }

    if (attribute == "data-layout-size" && value == "boxed") {
      document.body.classList.add("vertical-collpsed");
      changeLeftSidebarType("icon");
    }

    return true;
  }
</script>

<!-- Right Sidebar -->

<div id="right-bar" class="right-bar {open === true ? 'open' : ''}">
  <div data-simplebar class="h-100">
    <div class="rightbar-title d-flex align-items-center p-3">
      <h5 class="m-0 me-2">Theme Customizer</h5>

      <a
        href={"#"}
        class="right-bar-toggle ms-auto"
        on:click={() => (open = false)}
      >
        <i class="mdi mdi-close noti-icon" />
      </a>
    </div>

    <!-- Settings -->
    <hr class="m-0" />

    <div class="p-4">
      <h6 class="mt-4 mb-3">Layout Width</h6>

      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="layout-width"
          id="layout-width-fuild"
          value="fluid"
          on:change={() => changeBodyAttribute("data-layout-size", "fluid")}
          checked={layoutWidth == "fluid"}
        />
        <label class="form-check-label" for="layout-width-fuild">Fluid</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="layout-width"
          id="layout-width-boxed"
          value="boxed"
          on:change={() => changeBodyAttribute("data-layout-size", "boxed")}
          checked={layoutWidth == "boxed"}
        />
        <label class="form-check-label" for="layout-width-boxed">Boxed</label>
      </div>

      <h6 class="mt-4 mb-3">Layout Position</h6>

      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="layout-position"
          id="layout-position-fixed"
          value="fixed"
          on:change={() =>
            changeBodyAttribute("data-layout-scrollable", "false")}
          checked={layoutPosition == "fixed"}
        />
        <label class="form-check-label" for="layout-position-fixed">Fixed</label
        >
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="layout-position"
          id="layout-position-scrollable"
          value="scrollable"
          on:change={() =>
            changeBodyAttribute("data-layout-scrollable", "true")}
          checked={layoutPosition == "scrollable"}
        />
        <label class="form-check-label" for="layout-position-scrollable"
          >Scrollable</label
        >
      </div>

      <h6 class="mt-4 mb-3">Topbar Color</h6>

      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="topbar-color"
          id="topbar-color-light"
          value="light"
          on:change={() => changeBodyAttribute("data-topbar", "light")}
          checked={topbarTheme == "light"}
        />
        <label class="form-check-label" for="topbar-color-light">Light</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="topbar-color"
          id="topbar-color-dark"
          value="dark"
          on:change={() => changeBodyAttribute("data-topbar", "dark")}
          checked={topbarTheme == "dark"}
        />
        <label class="form-check-label" for="topbar-color-dark">Dark</label>
      </div>

      {#if layout == "vertical"}
        <h6 class="mt-4 mb-3 sidebar-setting">Sidebar Size</h6>

        <div class="form-check sidebar-setting">
          <input
            class="form-check-input"
            type="radio"
            name="sidebar-size"
            id="sidebar-size-default"
            value="large"
            on:change={() => changeBodyAttribute("data-sidebar-size", "large")}
            checked={leftSidebarType == "large"}
          />
          <label class="form-check-label" for="sidebar-size-default"
            >Default</label
          >
        </div>
        <div class="form-check sidebar-setting">
          <input
            class="form-check-input"
            type="radio"
            name="sidebar-size"
            id="sidebar-size-compact"
            value="small"
            on:change={() => changeBodyAttribute("data-sidebar-size", "small")}
            checked={leftSidebarType == "small"}
          />
          <label class="form-check-label" for="sidebar-size-compact"
            >Compact</label
          >
        </div>
        <div class="form-check sidebar-setting">
          <input
            class="form-check-input"
            type="radio"
            name="sidebar-size"
            id="sidebar-size-small"
            value="icon"
            on:change={() => document.body.classList.add("vertical-collpsed")}
            checked={leftSidebarType == "icon"}
          />
          <label class="form-check-label" for="sidebar-size-small"
            >Small (Icon View)</label
          >
        </div>

        <h6 class="mt-4 mb-3 sidebar-setting">Sidebar Color</h6>

        <div class="form-check sidebar-setting">
          <input
            class="form-check-input"
            type="radio"
            name="sidebar-color"
            id="sidebar-color-light"
            value="light"
            on:change={() => changeBodyAttribute("data-sidebar", "light")}
            checked={leftSideBarTheme == "light"}
          />
          <label class="form-check-label" for="sidebar-color-light">Light</label
          >
        </div>
        <div class="form-check sidebar-setting">
          <input
            class="form-check-input"
            type="radio"
            name="sidebar-color"
            id="sidebar-color-dark"
            value="dark"
            on:change={() => changeBodyAttribute("data-sidebar", "dark")}
            checked={leftSideBarTheme == "dark"}
          />
          <label class="form-check-label" for="sidebar-color-dark">Dark</label>
        </div>
        <div class="form-check sidebar-setting">
          <input
            class="form-check-input"
            type="radio"
            name="sidebar-color"
            id="sidebar-color-brand"
            value="colored"
            on:change={() => changeBodyAttribute("data-sidebar", "colored")}
            checked={leftSideBarTheme == "colored"}
          />
          <label class="form-check-label" for="sidebar-color-brand">Brand</label
          >
        </div>
      {/if}
    </div>
  </div>
  <!-- end slimscroll-menu-->
</div>
<!-- Right-bar -->

<!-- Right bar overlay-->
<div class="rightbar-overlay" />

<style>
  .open {
    /* slide on screen */
    right: 0;
  }
</style>
