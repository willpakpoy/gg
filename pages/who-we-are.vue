<template>
  <main>
  <full-width-image-hero :image="require(`@/assets/images/pexels/gg-home-tiles-who-we-are.jpeg`)">
    <h1>Who we are</h1>
  </full-width-image-hero>

  <text-block>
    <p>The Gilbert & Gerald Foundation is a group of passionate educators who work
      with all varieties of people to engage, connect with, and inspire them.</p>
    <p>We aim to accomplish this by teaching them about the values of creativity,
      and how they can express themselves in a creative way.</p>
    <h1 class="our-people">Our People</h1>
  </text-block>

    <div class="people">
      <person
        name="Phoebe McAdam"
        :image="require(`@/assets/images/thispersondoesnotexist/person-1.jpeg`)"
        job="Founder, CEO, Educator"
      />

      <person
          name="Tyson Joyce"
          :image="require(`@/assets/images/thispersondoesnotexist/person-2.jpeg`)"
          job="Educator"
      />

      <person
          name="Mia Davies"
          :image="require(`@/assets/images/thispersondoesnotexist/person-3.jpeg`)"
          job="Educator"
      />
    </div>
  </main>
</template>

<script>
export default {
    name: 'who-we-are.vue',
};
</script>

<style scoped lang="scss">
.people {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: $l-page-width;
  padding: $l-padding;
  margin-left: auto;
  margin-right: auto;
  gap: $l-padding;

  @media screen and (max-width: $l-breakpoint-1c) {
    grid-template-columns: 100%;
    grid-template-rows: repeat(3, 1fr)
  }
}

h1.our-people {
  margin-bottom: 0px;
}
</style>
