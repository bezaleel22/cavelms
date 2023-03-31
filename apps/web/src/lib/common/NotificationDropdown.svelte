<script>
// @ts-nocheck

  import { _ } from "$lib/helpers/store";
  import { Dropdown, DropdownToggle, DropdownMenu, Row } from "sveltestrap";
</script>

<Dropdown class="dropdown d-inline-block">
  <DropdownToggle
    class="btn header-item noti-icon headerbtn"
    id="page-header-notifications-dropdown"
    tag="button"
    color=""
  >
    <i class="bx bx-bell bx-tada" />
    <span class="badge bg-danger rounded-pill">3</span>
  </DropdownToggle>
  <DropdownMenu class="dropdown-menu-lg dropdown-menu-end p-0">
    <div class="p-3">
      <Row class="align-items-center">
        <div class="col">
          <h6 class="m-0">{$_.navbar.dropdown.notification.text}</h6>
        </div>
        <div class="col-auto">
          <a href={"#"} class="small" key="t-view-all"
            >{$_.navbar.dropdown.notification.subtext}
          </a>
        </div>
      </Row>
    </div>
    <div data-simplebar style="max-height: 230px;">
      <a href={"#"} class="text-reset notification-item d-block active">
        <div class="d-flex">
          <div class="avatar-xs me-3">
            <span class="avatar-title bg-primary rounded-circle font-size-16">
              <i class="bx bx-cart" />
            </span>
          </div>
          <div class="flex-1">
            <h6 class="mt-0 mb-1" key="t-your-order">
              {$_.navbar.dropdown.notification.order.title}
            </h6>
            <div class="font-size-13 text-muted">
              <p class="mb-1" key="t-grammer">
                {$_.navbar.dropdown.notification.order.text}
              </p>
              <p class="mb-0 font-size-12">
                <i class="mdi mdi-clock-outline" />
                <span key="t-min-ago"
                  >{$_.navbar.dropdown.notification.order.time}</span
                >
              </p>
            </div>
          </div>
        </div>
      </a>
      <a href={"#"} class="text-reset notification-item d-block ">
        <div class="d-flex">
          <img
            src="/assets/images/users/avatar-3.jpg"
            class="me-3 rounded-circle avatar-xs"
            alt="user-pic"
          />
          <div class="flex-1">
            <h6 class="mt-0 mb-1">
              {$_.navbar.dropdown.notification.james.title}
            </h6>
            <div class="font-size-13 text-muted">
              <p class="mb-1" key="t-simplified">
                {$_.navbar.dropdown.notification.james.text}
              </p>
              <p class="mb-0 font-size-12">
                <i class="mdi mdi-clock-outline" />
                <span key="t-hours-ago"
                  >{$_.navbar.dropdown.notification.james.time}</span
                >
              </p>
            </div>
          </div>
        </div>
      </a>
      <a href={"#"} class="text-reset notification-item d-block ">
        <div class="d-flex">
          <div class="avatar-xs me-3">
            <span class="avatar-title bg-success rounded-circle font-size-16">
              <i class="bx bx-badge-check" />
            </span>
          </div>
          <div class="flex-1">
            <h6 class="mt-0 mb-1" key="t-shipped">
              {$_.navbar.dropdown.notification.item.title}
            </h6>
            <div class="font-size-13 text-muted">
              <p class="mb-1" key="t-grammer">
                {$_.navbar.dropdown.notification.item.text}
              </p>
              <p class="mb-0 font-size-12">
                <i class="mdi mdi-clock-outline" />
                <span key="t-min-ago"
                  >{$_.navbar.dropdown.notification.item.time}</span
                >
              </p>
            </div>
          </div>
        </div>
      </a>

      <a href={"#"} class="text-reset notification-item d-block ">
        <div class="d-flex">
          <img
            src="/assets/images/users/avatar-4.jpg"
            class="me-3 rounded-circle avatar-xs"
            alt="user-pic"
          />
          <div class="flex-1">
            <h6 class="mt-0 mb-1">
              {$_.navbar.dropdown.notification.salena.title}
            </h6>
            <div class="font-size-13 text-muted">
              <p class="mb-1" key="t-occidental">
                {$_.navbar.dropdown.notification.salena.text}
              </p>
              <p class="mb-0 font-size-12">
                <i class="mdi mdi-clock-outline" />
                <span key="t-hours-ago"
                  >{$_.navbar.dropdown.notification.salena.time}</span
                >
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
    <div class="p-2 border-top d-grid">
      <a class="btn btn-sm btn-link font-size-14 text-center" href={"#"}>
        <i class="mdi mdi-arrow-right-circle me-1" />
        <span>{$_.navbar.dropdown.notification.button}</span>
      </a>
    </div>
  </DropdownMenu>
</Dropdown>
