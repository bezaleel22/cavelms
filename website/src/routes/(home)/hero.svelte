<script>
  // @ts-ignore
  import { isMobile } from "$lib/store";
  import { onMount } from "svelte";

  // $: console.log({ $isMobile });

  onMount(() => {
    // @ts-ignore
    var bannerFigure = new Swiper(".banner-figure", {
      slidesPerView: 1,
      spaceBetween: 0,
      loopFillGroupWithBlank: true,
      centeredSlides: true,
      speed: 2000,
      // effect: "fade",
      loop: true,
      // autoplay: {
      //   delay: 1000,
      // },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        // @ts-ignore
        renderBullet: function (index, className) {
          return (
            '<span class="' + className + '">' + 0 + (index + 1) + "</span>"
          );
        },
      },
    });
  });
</script>

<div class="swiper-container banner-figure">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <div class="slider-img-box">
        <img class="slider-img" src="/images/media/slide/5.png" alt="" />
        <div class="container-fluid banner-text text-center">
          <h1 style="color:white;">
            <strong>RCN Theological Seminary - Adullam</strong>
          </h1>
          <h4 class="" style="color:white;">
            Adullam is designed with a learning environment that has an intense
            atmosphere of Heaven, accompanied with Spiritual impartations.
          </h4>
          <br />
          <br />
          <br />
          <div class="btn-wrap">
            <a href="/explore" class="btn-fill style-1">
              Explore Programs
              <i class="fas fa-long-arrow-alt-right" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- <div
      class="swiper-slide"
      style="background-image: url(/images/media/slide/3.png)"
    >
      <div class="container banner-text text-center">
        <h1 style="color:white;">
          <strong>RCN Theological Seminary - Adullam</strong>
        </h1>
        <h4 class="" style="color:white;">
          Adullam is designed with a learning environment that has an intense
          atmosphere of Heaven, accompanied with Spiritual impartations.
        </h4>
        <br />
        <br />
        <br />
        <div class="btn-wrap">
          <a
            href="/explore"
            class="btn-fill style-1"
          >
            Explore Programs
            <i class="fas fa-long-arrow-alt-right" />
          </a>
        </div>
      </div>
    </div>
    <div
      class="swiper-slide"
      style="background-image: url(/images/media/slide/4.png)"
    >
      <div class="container banner-text text-center">
        <h1 style="color:white;">
          <strong>RCN Theological Seminary - Adullam</strong>
        </h1>
        <h4 class="" style="color:white;">
          Adullam is designed with a learning environment that has an intense
          atmosphere of Heaven, accompanied with Spiritual impartations.
        </h4>
        <br />
        <br />
        <br />
        <div class="btn-wrap">
          <a
            href="/explore"
            class="btn-fill style-1"
          >
            Explore Programs
            <i class="fas fa-long-arrow-alt-right" />
          </a>
        </div>
      </div>
    </div>
    <div
      class="swiper-slide"
      style="background-image: url(/images/media/slide/iec.png)"
    >
      <div class="container banner-text text-center">
        <h1 style="color:white;">
          <strong>RCN Theological Seminary - Adullam</strong>
        </h1>
        <h4 class="" style="color:white;">
          Adullam is designed with a learning environment that has an intense
          atmosphere of Heaven, accompanied with Spiritual impartations.
        </h4>
        <br />
        <br />
        <br />
        <div class="btn-wrap">
          <a
            href="/explore"
            class="btn-fill style-1"
          >
            Explore Programs
            <i class="fas fa-long-arrow-alt-right" />
          </a>
        </div>
      </div>
    </div> -->
  </div>
  <div class="swiper-pagination" />
</div>
