<script>
  import Mobile from "./mobile.svelte";
</script>

<header class="header-style-2 sticky-on">
  <div id="topbar-wrap" class="topbar style-3">
    <div class="container">
      <div class="topbar-row">
        <ul class="left-box inline-list align-items-center">
          <strong>
            <li>
              <i class="fas fa-phone-alt" /> +234 802 216 4432, +234 706 515 8197
            </li>
            <li>
              <i class="fas fa-map-marker-alt" /> 4 Remnant Avenue, opposite State Library, Makurdi,
              Benue State.
            </li>
            <li><i class="far fa-clock" /> Mon - Sat 8.00 - 4.00 GMT+1</li></strong
          >
        </ul>
        <ul class="right-box inline-list">
          <li class="social align-items-center">
            <a href={null}><i class="fab fa-facebook-f" /></a>
            <a href={null}><i class="fab fa-twitter" /></a>
            <a href={null}><i class="fab fa-instagram" /></a>
            <a href={null}><i class="fab fa-pinterest-p" /></a>
            <a href="https://www.youtube.com/channel/UCg7kJOsWDdksyuUv5HiIvFg" target="_blank">
              <i class="fab fa-youtube" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div id="navbar-wrap" class="navbar-wrap">
    <div class="header-menu">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between">
          <div class="site-branding">
            <a href="/" class="logo">
              <img src="images/media/logo-light.png" alt="Logo" width="101" height="37" />
            </a>
          </div>
          <nav class="template-main-menu">
            <ul class="menu">
              <strong> <a href="/">Home</a></strong>

              <li class="menu-item menu-item-has-children">
                <a href={null}>About Us</a>
                <ul class="sub-menu">
                  <li class="menu-item">
                    <a href="/about">About Adullam</a>
                  </li>
                  <li class="menu-item">
                    <a href="/vision">Vision & Mission</a>
                  </li>
                  <li class="menu-item">
                    <a href="/provost">Office of the Provost</a>
                  </li>
                </ul>
              </li>
              <li class="menu-item menu-item-has-children">
                <a href="/academic">Academics</a>
                <ul class="sub-menu">
                  <li class="menu-item">
                    <a href="/explore">Explore Programs</a>
                  </li>
                  <li class="menu-item">
                    <a href="/pgdt">Post Graduate Diploma Training(PGDT)</a>
                  </li>
                  <li class="menu-item">
                    <a href="/diploma">Diploma program </a>
                  </li>
                  <li class="menu-item">
                    <a href="/tuition">Tuition Fees</a>
                  </li>
                  <li class="menu-item">
                    <a href="https://admin.adullam.ng/#/platform/practicum">Practicum Log book</a>
                  </li>
                </ul>
              </li>
              <li class="menu-item menu-item-has-children">
                <a href={null}>Admissions</a>
                <ul class="sub-menu">
                  <li class="menu-item">
                    <a href="https://portal.adullam.ng/signup/register">Apply Now</a>
                  </li>
                  <li class="menu-item">
                    <a href="/financialaid">Scholarship</a>
                  </li>

                  <li class="menu-item">
                    <a href="/calender">Academic Calender</a>
                  </li>

                  <li class="menu-item">
                    <a href="/health">Health Insurance </a>
                  </li>
                </ul>
              </li>

              <li class="menu-item menu-item-has-children">
                <a href={null}>Life at Adullam</a>
                <ul class="sub-menu">
                  <li class="menu-item">
                    <a href="/chapel">The Chapel </a>
                  </li>
                  <li class="menu-item">
                    <a href="/embassy">RCN Embassy</a>
                  </li>

                  <li class="menu-item">
                    <a href="/hostel">Housing & Hostels</a>
                  </li>
                </ul>
              </li>

              <li class="menu-item">
                <a href="/partnership">Partnership </a>
              </li>
              <li class="menu-item">
                <a href="/contact">Contact us</a>
              </li>
              <li class="menu-item">
                <a href="https://seminary.adullam.ng/main/login_form.php">Student Portal</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</header>
<div class="rt-header-menu mean-container position-relative" id="meanmenu">
  <div class="mean-bar">
    <a href={null}>
      <img src="images/media/logo-mobile.png" alt="Logo" width="80" height="29" />
    </a>
    <div class="mean-bar--right">
      <div class="actions user">
        <a href={null}><i class="flaticon-user" /></a>
      </div>
      <span class="sidebarBtn">
        <span class="bar" />
        <span class="bar" />
        <span class="bar" />
        <span class="bar" />
      </span>
    </div>
  </div>
  <div class="rt-slide-nav">
    <div class="offscreen-navigation">
      <Mobile />
    </div>
  </div>
</div>
