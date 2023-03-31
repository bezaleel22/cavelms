<script lang="ts">
  import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Row,
    Col,
  } from "sveltestrap";
  let isOpen = false;
</script>

<Dropdown
  {isOpen}
  toggle={() => (isOpen = !isOpen)}
  class="d-lg-inline-block ms-1"
>
  <DropdownToggle
    class="btn header-item noti-icon waves-effect headerbtn"
    tag="button"
    color=""
  >
    <i class="bx bx-customize" />
  </DropdownToggle>
  <DropdownMenu class="dropdown-menu-lg dropdown-menu-end">
    <div class="px-lg-2">
      <Row class="g-0">
        <Col xl={0}>
          <a class="dropdown-icon-item" href="/">
            <img src="/assets/images/brands/github.png" alt="Github" />
            <span>GitHub</span>
          </a>
        </Col>
        <Col xl={0}>
          <a class="dropdown-icon-item" href="/">
            <img src="/assets/images/brands/bitbucket.png" alt="bitbucket" />
            <span>Bitbucket</span>
          </a>
        </Col>
        <Col xl={0}>
          <a class="dropdown-icon-item" href="/">
            <img src="/assets/images/brands/dribbble.png" alt="dribbble" />
            <span>Dribbble</span>
          </a>
        </Col>
      </Row>

      <Row class="g-0">
        <Col xl={0}>
          <a class="dropdown-icon-item" href="/">
            <img src="/assets/images/brands/dropbox.png" alt="dropbox" />
            <span>Dropbox</span>
          </a>
        </Col>
        <Col xl={0}>
          <a class="dropdown-icon-item" href="/">
            <img src="/assets/images/brands/mail_chimp.png" alt="mail_chimp" />
            <span>Mail Chimp</span>
          </a>
        </Col>
        <Col xl={0}>
          <a class="dropdown-icon-item" href="/">
            <img src="/assets/images/brands/slack.png" alt="slack" />
            <span>Slack</span>
          </a>
        </Col>
      </Row>
    </div>
  </DropdownMenu>
</Dropdown>
