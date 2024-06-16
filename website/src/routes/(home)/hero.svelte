<script>
  import { isMobile } from "$lib/store";

  // $: console.log({ $isMobile });
</script>


<div class="swiper-container banner-figure">
  <div class="swiper-wrapper">
    {#if $isMobile}
      <div class="swiper-slide" style="background-image: url(/images/media/slide/iec.jpg)" />
    {:else}
      <div class="swiper-slide" style="background-image: url(/images/media/slide/iec.jpg)" />
    {/if}

    <!-- <div class="swiper-slide" style="background-image: url(/images/media/slide/3.png)" /> -->
    <div class="swiper-slide" style="background-image: url(/images/media/slide/4.png)" />
    <!-- <div class="swiper-slide" style="background-image: url(/images/media/slide/5.png)" /> -->
  </div>
  <div class="swiper-pagination" />
</div>


<div class="swiper-container banner-text">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <div class="container text-center">
        <h1 class="" style="color:white;">
          <strong>RCN Theological Seminary - Adullam</strong>
        </h1>
        <h4 style="color:white;">
          Adullam is designed with a learning environment that has an intense atmosphere of Heaven,
          accompanied with Spiritual impartations.
        </h4>
        <br /><br /><br />
        <!-- <div class="btn-wrap">
          <a href="https://portal.adullam.ng" class="btn-fill style-1">
            Enroll Now
            <i class="fas fa-long-arrow-alt-right" />
          </a>
        </div> -->
      </div>
    </div>
    <div class="swiper-slide">
      <div class="container text-center">
        <h1 class="" style="color:white;">
          <strong>RCN Theological Seminary - Adullam.</strong>
        </h1>
        <p style="color:white;">
          <strong>
            Adullam is designed with a learning environment that has an intense atmosphere of
            Heaven, accompanied with Spiritual impartations.
          </strong>
        </p>
        <br /><br /> <br />
        <div class="btn-wrap">
          <a href="https://portal.adullam.ng" class="btn-fill style-1"
            >Enroll Now<i class="fas fa-long-arrow-alt-right" /></a
          >
        </div>
      </div>
    </div>
    <div class="swiper-slide">
      <div class="container text-center">
        <h1 class="" style="color:white;">
          <strong>RCN Theological Seminary - Adullam.</strong>
        </h1>
        <p style="color:white;">
          <strong>
            Adullam is designed with a learning environment that has an intense atmosphere of
            Heaven, accompanied with Spiritual impartations.
          </strong>
        </p>
        <br /><br /> <br />
        <div class="btn-wrap">
          <a href="https://portal.adullam.ng" class="btn-fill style-1">
            Enroll Now
            <i class="fas fa-long-arrow-alt-right" />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
