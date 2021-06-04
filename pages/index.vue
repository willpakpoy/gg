<template>
<main>
  <full-width-image-hero :image="require(`@/assets/images/pexels/mcf-home-sunrise.jpg`)" >
    <h1>Welcome to<br>The Mim Chapman Foundation</h1>
    <h2>Igniting creativity through continuous learning</h2>
  </full-width-image-hero>

  <div class="home-grid">

    <clickable-block-hero
    linkTo="/who-we-are"
    :image="require(`@/assets/images/pexels/mcf-home-tiles-who-we-are.jpeg`)"
    >
      <h1>who we are</h1>
    </clickable-block-hero>

    <clickable-block-hero
    linkTo="/what-we-do"
    :image="require(`@/assets/images/pexels/mcf-home-tiles-what-we-do.jpeg`)"
    >
      <h1>what we do</h1>
    </clickable-block-hero>

    <clickable-block-hero
    linkTo="/our-stories"
    :image="require(`@/assets/images/pexels/mcf-home-tiles-our-stories.jpeg`)"
    >
      <h1>our stories</h1>
    </clickable-block-hero>

    <clickable-block-hero
    linkTo="/get-involved"
    :image="require(`@/assets/images/pexels/mcf-home-tiles-get-involved.jpeg`)"
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
}
</style>
