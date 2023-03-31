<script lang="ts">
  import { auth } from "$lib/helpers/store"
  import { onMount } from "svelte"
  import { _ } from "svelte-i18n"

  let current: string = "dashboard"
  let current_child = "dashboard"

  function changeClassAttribute(attribute: string, child: string = "") {
    if (child && child === current_child) {
      current_child = ""
    } else if (attribute === current && child === null) {
      current = ""
      current_child = ""
    } else {
      current = attribute
      current_child = child
    }

    return false
  }

  onMount(() => {
    menuActivation()
  })

  function menuActivation() {
    var links = document.getElementsByClassName("side-nav-link-ref")
    var matchingMenuItem: any
    const paths: [] = []

    for (var i = 0; i < links.length; i++) {
      paths.push(links[i]["pathname"] as never)
    }
    var itemIndex = paths.indexOf(window.location.pathname as never)
    if (itemIndex === -1) {
      const strIndex = window.location.pathname.lastIndexOf("/")
      const item = window.location.pathname.substr(0, strIndex).toString()

      matchingMenuItem = links[paths.indexOf(item as never)]
    } else {
      matchingMenuItem = links[itemIndex]
    }
    if (matchingMenuItem) {
      matchingMenuItem.classList.add("active")
      var parent = matchingMenuItem.parentElement

      /**
       * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
       * We should come up with non hard coded approach
       */
      if (parent) {
        parent.classList.add("mm-active")
        const parent2 = parent.parentElement.closest("ul")
        if (parent2 && parent2.id !== "side-menu") {
          parent2.classList.add("mm-show")

          const parent3 = parent2.parentElement
          if (parent3) {
            parent3.classList.add("mm-active")
            var childAnchor = parent3.querySelector(".has-arrow")
            var childDropdown = parent3.querySelector(".has-dropdown")
            if (childAnchor) childAnchor.classList.add("mm-active")
            if (childDropdown) childDropdown.classList.add("mm-active")

            const parent4 = parent3.parentElement
            if (parent4 && parent4.id !== "side-menu") {
              parent4.classList.add("mm-show")
              const parent5 = parent4.parentElement
              if (parent5 && parent5.id !== "side-menu") {
                parent5.classList.add("mm-active")
                const childanchor = parent5.querySelector(".is-parent")
                if (childanchor && parent5.id !== "side-menu") {
                  childanchor.classList.add("mm-active")
                }
              }
            }
          }
        }
      }
    }
    return false
  }
</script>

<!-- ========== Left Sidebar Start ========== -->
<div class="vertical-menu">
  <div data-simplebar class="h-100">
    <!--- Sidemenu -->
    <div id="sidebar-menu">
      <!-- Left Menu Start -->
      <ul class="metismenu list-unstyled" id="side-menu">
        <li class="menu-title">{$_("menuitems.menu.text")}</li>

        <li>
          <a
            href="/"
            class="waves-effect side-nav-link-ref"
            on:click={() => changeClassAttribute("dashboards")}
          >
            <i class="bx bx-home-circle" /><span class="badge rounded-pill bg-info float-end"
              >04</span
            >
            <span>{$_("menuitems.dashboards.text")}</span>
          </a>
        </li>

        <li class="menu-title">{$_("menuitems.apps.text")}</li>

        <li class={current == "account" ? "mm-active" : ""}>
          <a
            href=" "
            class="has-arrow waves-effect"
            on:click={() => changeClassAttribute("account")}
          >
            <i class="bx bxs-user-detail" />
            <span>{$_("menuitems.account.text")}</span>
          </a>
          <ul
            class="sub-menu mm-collapse {current === 'account' ? 'mm-show' : ''}"
            aria-expanded="false"
          >
            <li>
              <a class="side-nav-link-ref" href="/account"
                >{$_("menuitems.account.list.overview")}</a
              >
            </li>
            <!-- <li>
              <a class="side-nav-link-ref" href="/account/profile"
                >{$_("menuitems.account.list.profile")}</a
              >
            </li>
            <li>
              <a class="side-nav-link-ref" href="/account/activity"
                >{$_("menuitems.account.list.activity")}</a
              >
            </li>
            <li>
              <a class="side-nav-link-ref" href="task"
                >{$_("menuitems.account.list.task")}</a
              >
            </li>
            <li>
              <a class="side-nav-link-ref" href="/account/practicum"
                >{$_("menuitems.account.list.practicum")}</a
              >
            </li>
            <li>
              <a class="side-nav-link-ref" href="/account/settings"
                >{$_("menuitems.account.list.settings")}</a
              >
            </li> -->
          </ul>
        </li>
        {#if $auth.cred.role != "prospective"}
          <li class={current == "course" ? "mm-active" : ""}>
            <a
              href=" "
              class="has-arrow waves-effect"
              on:click={() => changeClassAttribute("course")}
            >
              <i class="mdi mdi-library" />
              <span>{$_("menuitems.course.text")}</span>
            </a>
            <ul
              class="sub-menu mm-collapse {current === 'course' ? 'mm-show' : ''}"
              aria-expanded="false"
            >
              <li>
                <a class="side-nav-link-ref" href="/course">{$_("menuitems.course.list.grid")}</a>
              </li>
              <!-- <li>
              <a class="side-nav-link-ref" href="/course/courses"
                >{$_("menuitems.account.list.overview")}</a
              >
            </li> -->
              <!-- <li>
              <a class="side-nav-link-ref" href="/account/activity"
                >{$_("menuitems.account.list.activity")}</a
              >
            </li> -->
              <!-- <li>
              <a class="side-nav-link-ref" href="task"
                >{$_("menuitems.account.list.task")}</a
              >
            </li> -->
              <!-- <li>
              <a class="side-nav-link-ref" href="/account/practicum"
                >{$_("menuitems.account.list.practicum")}</a
              >
            </li> -->
              <!-- <li>
              <a class="side-nav-link-ref" href="/account/settings"
                >{$_("menuitems.account.list.settings")}</a
              >
            </li> -->
            </ul>
          </li>
        {/if}
        {#if $auth.cred.role != "prospective"}
          <li class={current == "user" ? "mm-active" : ""}>
            <a href=" " class="waves-effect" on:click={() => changeClassAttribute("user")}>
              <span class="badge rounded-pill bg-success float-end"
                >{$_("menuitems.user.badge")}</span
              >
              <i class="fas fa-users" />
              <span>{$_("menuitems.user.text")}</span>
            </a>
            <ul
              class="sub-menu mm-collapse {current === 'user' ? 'mm-show' : ''}"
              aria-expanded="false"
            >
              <li>
                <a class="side-nav-link-ref" href="/users">{$_("menuitems.user.list.users")}</a>
              </li>
              <li>
                <a class="side-nav-link-ref" href="/users/prospective"
                  >{$_("menuitems.user.list.prospectives")}</a
                >
              </li>
              <li>
                <a class="side-nav-link-ref" href="/users/student"
                  >{$_("menuitems.user.list.sudents")}</a
                >
              </li>
              <li>
                <a class="side-nav-link-ref" href="/users/faculty"
                  >{$_("menuitems.user.list.tutors")}</a
                >
              </li>
              <li>
                <a class="side-nav-link-ref" href="/users/partner"
                  >{$_("menuitems.user.list.partners")}</a
                >
              </li>
              <li>
                <a class="side-nav-link-ref" href="/users/guest"
                  >{$_("menuitems.user.list.Guests")}</a
                >
              </li>
              <li>
                <a class="side-nav-link-ref" href="/users/administrator"
                  >{$_("menuitems.user.list.administrators")}</a
                >
              </li>
            </ul>
          </li>
        {/if}

        <!-- <li>
          <a class="side-nav-link-ref" href="calendar">
            <i class="bx bx-calendar" />
            <span>{$_("menuitems.calendar.text")}</span>
          </a>
        </li> -->

        <!-- <li>
          <a class="side-nav-link-ref" href="chat">
            <i class="bx bx-chat" />
            <span>{$_("menuitems.chat.text")}</span>
          </a>
        </li> -->

        <!-- <li>
          <a class="side-nav-link-ref" href="apps-filemanager">
            <i class="bx bx-file" />
            <span class="badge rounded-pill bg-success float-end"
              >{$_("menuitems.chat.badge")}</span
            >
            <span>{$_("menuitems.filemanager.text")}</span>
          </a>
        </li> -->

        <!-- <li class="menu-title">{$_("menuitems.pages.text")}</li>
        <li class="menu-title">{$_("menuitems.components.text")}</li> -->
      </ul>
    </div>
    <!-- Sidebar -->
  </div>
</div>
<!-- Left Sidebar End -->
