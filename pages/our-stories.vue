<template>
  <main>
    <full-width-image-hero
        :image="require(`@/assets/images/pexels/gg-home-tiles-our-stories.jpeg`)"
    >
      <h1>our stories</h1>
    </full-width-image-hero>

    <left-right-stacking-hero
        :image="require(`@/assets/images/pexels/gg-our-stories-gallery.jpeg`)"
        alt="Artworks"
    >
      <h1>Artworks project</h1>
      <p>
        We taught over 40 children how to express themselves
        through painting. Their artworks were exhibited at the
        National Portrait Gallery.
      </p>
    </left-right-stacking-hero>

    <left-right-stacking-hero
        :image="require(`@/assets/images/pexels/gg-our-stories-drums.jpeg`)"
        alt="Classroom"
    >
      <h1>84 year old drummer</h1>
      <p>
        We also taught an 84 year old man how to play the drums.
        Now he plays the drums in an ensemble made up of other over-80 musicians.
      </p>
    </left-right-stacking-hero>

  </main>
</template>

<script>
export default {
    name: 'our-stories.vue',
};
</script>

<style scoped>

</style>
