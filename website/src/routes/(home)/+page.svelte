<script>
  import Call2action from "./call2action.svelte";
  import Category from "./category.svelte";
  import Events from "./events.svelte";
  import Feature from "./feature.svelte";
  import Hero from "./hero.svelte";
  import Testimonial from "./testimonial.svelte";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="main-banner-wrap-style-4">
  <Hero />
</section>
<section class="category-wrap-style-3">
  <Category />
</section>
<section class="feature-wrap-style-2 motion-effects-wrap">
  <Feature />
</section>
<section class="team-wrap-style-1">
  <Events />
</section>
<section class="testimonial-wrap-style-4">
  <Testimonial />
</section>
<section
  class="call-to-action-wrap-style-3 box-layout wow animated fadeInUp"
  data-wow-duration="1s"
  data-wow-delay="0.3s"
>
  <Call2action />
</section>
