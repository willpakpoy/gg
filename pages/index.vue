<template>
<main>
  <full-width-image-hero :image="require(`@/assets/images/pexels/gg-home-sunrise.jpeg`)" >
    <h1>welcome to<br>the gilbert & gerald foundation</h1>
    <h2>igniting creativity through continuous learning</h2>
  </full-width-image-hero>

  <div class="home-grid">

    <clickable-block-hero
    linkTo="/who-we-are"
    :image="require(`@/assets/images/pexels/gg-home-tiles-who-we-are.jpeg`)"
    >
      <h1>who we are</h1>
    </clickable-block-hero>

    <clickable-block-hero
    linkTo="/what-we-do"
    :image="require(`@/assets/images/pexels/gg-home-tiles-what-we-do.jpeg`)"
    >
      <h1>what we do</h1>
    </clickable-block-hero>

    <clickable-block-hero
    linkTo="/our-stories"
    :image="require(`@/assets/images/pexels/gg-home-tiles-our-stories.jpeg`)"
    >
      <h1>our stories</h1>
    </clickable-block-hero>

    <clickable-block-hero
    linkTo="/get-involved"
    :image="require(`@/assets/images/pexels/gg-home-tiles-get-involved.jpeg`)"
    >
      <h1>get involved</h1>
    </clickable-block-hero>

  </div>
</main>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.home-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 40vh);
  gap: 1em;
}
</style>
