<template>
  <div class="lr-stacking-outer-padding">
    <div class="left-right-stacking-element">
      <div class="image" :style="{'background-image': `url(${image})`}" />
      <div class="content">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'LeftRightStackingHero',
    props: ['image', 'alt'],
};
</script>

<style scoped lang="scss">
.lr-stacking-outer-padding {
  padding: $l-padding;
  max-width: $l-page-width;
  margin-left: auto;
  margin-right: auto;
  .left-right-stacking-element {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    min-height: 50vh;
    background-color: #dddddd;
    grid-auto-flow: dense;

    @media screen and (max-width: $l-breakpoint-1c) {
      display: flex;
      flex-direction: column;
      min-height: initial;
    }
    .image {
      height: 100%;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
        @media screen and (max-width: $l-breakpoint-1c) {
          min-height: 60vh;
          width: 100%;
        }
      }

    .content {
      padding: 2.4em;
      display: flex;
      flex-direction: column;
      justify-content: center;

      p {
        margin-top: 0px;
        font-size: 1.4em;
      }
      h1 {
        font-size: 2.4em;
      }
    }
  }
  &:nth-child(odd) .left-right-stacking-element {
    .image {
      grid-column: 2;
    }
    .content {
      grid-column: 1;
    }
  }

}
</style>
