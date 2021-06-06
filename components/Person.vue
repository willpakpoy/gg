<template>
  <div class="person">
    <img :alt="`${name}'s personal picture`" :src="image">
    <h2>{{name}}</h2>
    <h6>{{job}}</h6>
  </div>
</template>

<script>
export default {
    name: 'Person',
    props: ['image', 'name', 'job'],
};
</script>

<style scoped lang="scss">
.person {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #dddddd;
  padding: 1.4em;

  img {
    width: 100%;
    height: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    flex-shrink: 1;
  }

  h2, h6 {
    margin: 0em;
  }

  h2 {
     margin-top: 1em;
  }
}
</style>
