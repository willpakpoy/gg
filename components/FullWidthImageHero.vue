<template>
  <div class="full-width-hero">
    <div class="image" :style="{'background-image': `url(${image})`}"/>
      <div class="hero-content-inner">
        <slot/>
    </div>
  </div>
</template>

<script>
export default {
    name: 'FullWidthHero',
    props: [
        'image',
    ],
};
</script>

<style scoped lang="scss">
.full-width-hero {
  display: flex;
  position: relative;

  .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: brightness(0.5);
    z-index: -1;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

    .hero-content-inner {
      max-width: $l-page-width;
      width: 100%;
      padding: calc(2vw + 24px) $l-padding;
      margin-left: auto;
      margin-right: auto;
      color: #fff;
      position: relative;

      h1 {
        font-size: calc(2vw + 24px)
      }
    }
}
</style>
