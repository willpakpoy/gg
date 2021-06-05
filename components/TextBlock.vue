<template>
  <div class="paragraph">
    <slot/>
  </div>
</template>

<script>
export default {
    name: 'TextBlock.vue',
};
</script>

<style scoped lang="scss">
.paragraph {
  max-width: $l-page-width;
  padding: $l-padding;
  margin-left: auto;
  margin-right: auto;
  p {
    font-size: 2em;
  }
}
</style>
