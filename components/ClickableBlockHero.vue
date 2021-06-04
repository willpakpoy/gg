<template>
  <div class="clickable-block-hero" @click="clicked()">
    <div class="image" :style="{'background-image': `url(${image})`}"/>
    <div class="content-inner">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ClickableBlockHero',
    props: [
        'image',
        'linkTo',
    ],
    methods: {
        clicked() {
            this.$router.push(this.linkTo);
        },
    },
};
</script>

<style lang="scss" scoped>
.clickable-block-hero {
  display: flex;
  position: relative;

  .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .content-inner {
    opacity: 0;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    transition: 0.2s ease-in-out;
  }

  &:hover {
    .content-inner {
      transition: 0.2s ease-in-out;
      backdrop-filter: brightness(0.2) blur(4px);
      opacity: 1;
      cursor: pointer;
    }
  }
}
</style>
