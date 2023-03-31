<script lang="ts">
  import { Dropdown, DropdownToggle, Form, Input } from "sveltestrap";

  import { _ } from "$lib/helpers/store";
  import { auth } from "$lib/store/authentication";
  import RightsidebarButton from "../../components/RightsidebarButton.svelte";
  import ProfileMenu from "../ProfileMenu.svelte";
  import { onMount } from "svelte";
  // import logoLightSvg from "$lib/assets/images/logo-light.svg?raw";
  // import logoLightPng from "$lib/assets/images/logo-light.png";
  // import logoSvg from "$lib/assets/images/logo.svg?raw";
  // import logoDarkPng from "$lib/assets/images/logo-dark.png";

  interface FsDocument extends Document {
    mozFullScreenElement?: Element;
    msFullscreenElement?: Element;
    webkitFullscreenElement?: Element;
    msExitFullscreen?: () => void;
    mozCancelFullScreen?: () => void;
    webkitExitFullscreen?: () => void;
  }

  export function isFullScreen(): boolean {
    const fsDoc = <FsDocument>document;

    return !!(
      fsDoc.fullscreenElement ||
      fsDoc.mozFullScreenElement ||
      fsDoc.webkitFullscreenElement ||
      fsDoc.msFullscreenElement
    );
  }

  interface FsDocumentElement extends HTMLElement {
    msRequestFullscreen?: () => void;
    mozRequestFullScreen?: () => void;
    webkitRequestFullscreen?: () => void;
  }

  export function toggleFullScreen(): void {
    const fsDoc = <FsDocument>document;

    if (!isFullScreen()) {
      const fsDocElem = <FsDocumentElement>document.documentElement;

      if (fsDocElem.requestFullscreen) fsDocElem.requestFullscreen();
      else if (fsDocElem.msRequestFullscreen) fsDocElem.msRequestFullscreen();
      else if (fsDocElem.mozRequestFullScreen) fsDocElem.mozRequestFullScreen();
      else if (fsDocElem.webkitRequestFullscreen) fsDocElem.webkitRequestFullscreen();
    } else if (fsDoc.exitFullscreen) fsDoc.exitFullscreen();
    else if (fsDoc.msExitFullscreen) fsDoc.msExitFullscreen();
    else if (fsDoc.mozCancelFullScreen) fsDoc.mozCancelFullScreen();
    else if (fsDoc.webkitExitFullscreen) fsDoc.webkitExitFullscreen();
  }

  export function setFullScreen(full: boolean): void {
    if (full !== isFullScreen()) toggleFullScreen();
  }

  function tToggle() {
    var body = document.body;

    body.classList.toggle("sidebar-enable");
    body.classList.toggle("vertical-collpsed");

    if (window.innerWidth >= 992) {
      if (body.getAttribute("data-sidebar-size") == "sm") {
        body.setAttribute("data-sidebar-size", "lg");
      } else {
        body.setAttribute("data-sidebar-size", "sm");
      }
    }
  }

  export let sidebar = false;
  let user: any;
  onMount(async () => {
    user = await auth.refresh();
  });
</script>

<header id="page-topbar">
  <div class="navbar-header">
    <div class="d-flex">
      <!-- LOGO -->
      <div class="navbar-brand-box">
        <a href="index" class="logo logo-dark">
          <span class="logo-sm">
            <img src="/assets/images/logo.svg" alt="" height="22" />
          </span>
          <span class="logo-lg">
            <img src="/assets/images/logo-dark.png" alt="" height="17" />
          </span>
        </a>

        <a href="index" class="logo logo-light">
          <span class="logo-sm">
            <img src="/assets/images/logo-light.svg" alt="" height="22" />
          </span>
          <span class="logo-lg">
            <img src="/assets/images/logo-light.png" alt="" height="19" />
          </span>
        </a>
      </div>

      <button
        class="btn btn-sm px-3 font-size-16 vertinav-toggle header-item waves-effect"
        id="vertical-menu-btn"
        on:click={tToggle}
      >
        <i class="fa fa-fw fa-bars" />
      </button>

      <!-- App Search-->
      <Form class="app-search d-none d-lg-block">
        <div class="position-relative">
          <Input type="text" class="form-control" placeholder={$_.navbar.search.text} />
          <span class="bx bx-search-alt" />
        </div>
      </Form>

      <Dropdown class="dropdown-mega d-none d-lg-block ms-2">
        <DropdownToggle class="btn header-item" color="white" caret tag="button">
          {$_.navbar.dropdown.megamenu.text}
          <i class="mdi mdi-chevron-down" />
        </DropdownToggle>
        <!-- <DropdownMenu class="dropdown-menu dropdown-megamenu">
          <Row>
            <Col sm={8}>
              <Row>
                <Col md={4}>
                  <h5 class="font-size-14 mt-0">
                    {$_("navbar.dropdown.megamenu.uicontent.title")}
                  </h5>
                  <ul class="list-unstyled megamenu-list">
                    <li>
                      <a href="/#"
                        >{$_(
                          "navbar.dropdown.megamenu.uicontent.list.lightbox"
                        )}</a
                      >
                    </li>
                    <li>
                      <a href="/#"
                        >{$_(
                          "navbar.dropdown.megamenu.uicontent.list.rangeslider"
                        )}</a
                      >
                    </li>
                    <li>
                      <a href="/#"
                        >{$_(
                          "navbar.dropdown.megamenu.uicontent.list.sweetalert"
                        )}</a
                      >
                    </li>
                    <li>
                      <a href="/#"
                        >{$_(
                          "navbar.dropdown.megamenu.uicontent.list.rating"
                        )}</a
                      >
                    </li>
                    <li>
                      <a href="/#"
                        >{$_(
                          "navbar.dropdown.megamenu.uicontent.list.forms"
                        )}</a
                      >
                    </li>
                    <li>
                      <a href="/#"
                        >{$_(
                          "navbar.dropdown.megamenu.uicontent.list.tables"
                        )}</a
                      >
                    </li>
                    <li>
                      <a href="/#"
                        >{$_(
                          "navbar.dropdown.megamenu.uicontent.list.charts"
                        )}</a
                      >
                    </li>
                  </ul>
                </Col>

                <Col md={4}>
                  <h5 class="font-size-14 mt-0">
                    {$_("navbar.dropdown.megamenu.application.title")}
                  </h5>
                  <ul class="list-unstyled megamenu-list">
                    <li>
                      <a href="/#"
                        >{$_(
                          "navbar.dropdown.megamenu.application.list.ecommerce"
                        )}</a
                      >
                    </li>
                    <li>
                      <a href="/#"
                        >{$_(
                          "navbar.dropdown.megamenu.application.list.calendar"
                        )}</a
                      >
                    </li>
                    <li>
                      <a href="/#"
                        >{$_(
                          "navbar.dropdown.megamenu.application.list.email"
                        )}</a
                      >
                    </li>
                    <li>
                      <a href="/#"
                        >{$_(
                          "navbar.dropdown.megamenu.application.list.projects"
                        )}</a
                      >
                    </li>
                    <li>
                      <a href="/#"
                        >{$_(
                          "navbar.dropdown.megamenu.application.list.tasks"
                        )}</a
                      >
                    </li>
                    <li>
                      <a href="/#"
                        >{$_(
                          "navbar.dropdown.megamenu.application.list.contacts"
                        )}</a
                      >
                    </li>
                  </ul>
                </Col>

                <Col md={4}>
                  <h5 class="font-size-14 mt-0">
                    {$_("navbar.dropdown.megamenu.extrapages.title")}
                  </h5>
                  <ul class="list-unstyled megamenu-list">
                    <li>
                      <a href="/#">
                        {$_(
                          "navbar.dropdown.megamenu.extrapages.list.lightsidebar"
                        )}
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        {$_(
                          "navbar.dropdown.megamenu.extrapages.list.compactsidebar"
                        )}
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        {$_(
                          "navbar.dropdown.megamenu.extrapages.list.horizontallayout"
                        )}
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        {$_(
                          "navbar.dropdown.megamenu.extrapages.list.maintenance"
                        )}</a
                      >
                    </li>
                    <li>
                      <a href="/#"
                        >{$_(
                          "navbar.dropdown.megamenu.extrapages.list.comingsoon"
                        )}</a
                      >
                    </li>
                    <li>
                      <a href="/#"
                        >{$_(
                          "navbar.dropdown.megamenu.extrapages.list.timeline"
                        )}</a
                      >
                    </li>
                    <li>
                      <a href="/#"
                        >{$_(
                          "navbar.dropdown.megamenu.extrapages.list.faqs"
                        )}</a
                      >
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col sm={4}>
              <Row>
                <Col sm={6}>
                  <h5 class="font-size-14 mt-0">
                    {$_("navbar.dropdown.megamenu.uicontent.title")}
                  </h5>
                  <ul class="list-unstyled megamenu-list">
                    <li>
                      <a href="/#"
                        >{$_(
                          "navbar.dropdown.megamenu.uicontent.list.lightbox"
                        )}</a
                      >
                    </li>
                    <li>
                      <a href="/#"
                        >{$_(
                          "navbar.dropdown.megamenu.uicontent.list.rangeslider"
                        )}</a
                      >
                    </li>
                    <li>
                      <a href="/#"
                        >{$_(
                          "navbar.dropdown.megamenu.uicontent.list.sweetalert"
                        )}</a
                      >
                    </li>
                    <li>
                      <a href="/#"
                        >{$_(
                          "navbar.dropdown.megamenu.uicontent.list.rating"
                        )}</a
                      >
                    </li>
                    <li>
                      <a href="/#"
                        >{$_(
                          "navbar.dropdown.megamenu.uicontent.list.forms"
                        )}</a
                      >
                    </li>
                    <li>
                      <a href="/#"
                        >{$_(
                          "navbar.dropdown.megamenu.uicontent.list.tables"
                        )}</a
                      >
                    </li>
                    <li>
                      <a href="/#"
                        >{$_(
                          "navbar.dropdown.megamenu.uicontent.list.charts"
                        )}</a
                      >
                    </li>
                  </ul>
                </Col>

                <Col sm={5}>
                  <div>
                    <img
                      src="assets/images/megamenu-img.png"
                      alt=""
                      class="img-fluid mx-auto d-block"
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </DropdownMenu> -->
      </Dropdown>
    </div>

    <div class="d-flex">
      <!-- <LanguageDropdown /> -->

      <!-- <HeaderApp /> -->

      <Dropdown class="d-none d-lg-inline-block ms-1">
        <button
          type="button"
          class="btn header-item noti-icon headerbtn"
          on:click={toggleFullScreen}
          data-toggle="fullscreen"
        >
          <i class="bx bx-fullscreen" />
        </button>
      </Dropdown>

      <!-- <NotificationDropdown /> -->

      <ProfileMenu {user} />

      <div class="dropdown d-inline-block">
        <RightsidebarButton open={sidebar} />
        <!-- <RightsidebarButton bind:open={sidebar} /> -->
      </div>
    </div>
  </div>
</header>
