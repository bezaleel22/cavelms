<script lang="ts">
  import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Modal,
  } from "sveltestrap";

  import { setLocale } from "$lib/helpers/i18n";

  import languages from "./data/languages";
  import { browser } from "$app/environment";

  export let selectedLang: string = "en";
  if (browser) selectedLang = localStorage.getItem("I18N_LANGUAGE") || "en";

  let isOpen = false;

  function handleLocaleChange(lang: string) {
    if (browser) {
      setLocale({ withLocale: lang });
      localStorage.setItem("I18N_LANGUAGE", lang);
    }
  }
</script>

<Dropdown {isOpen} toggle={() => (isOpen = !isOpen)} class="d-inline-block">
  <DropdownToggle class="btn header-item headerbtn" tag="button" color="">
    <img
      src="/assets/images/flags/us.jpg"
      alt="Adullam"
      height="16"
      class="d-block"
    />
  </DropdownToggle>
  <DropdownMenu class="language-switch dropdown-menu-end">
    {#each languages as language (language.value)}
      <DropdownItem
        on:click={() => handleLocaleChange(language.value)}
        class={`notify-item language ${
          selectedLang === language.value ? "active" : "none"
        }`}
      >
        <img src={language.flag} alt="Adullam" class="me-2" height="12" />
        <span class="align-middle">
          {language.label}
        </span>
      </DropdownItem>
    {/each}
  </DropdownMenu>
</Dropdown>
