<template>
  <main>
    <full-width-image-hero :image="require(`@/assets/images/pexels/gg-home-tiles-what-we-do.jpeg`)">
      <h1>what we do</h1>
    </full-width-image-hero>

    <left-right-stacking-hero
        :image="require(`@/assets/images/pexels/gg-what-we-do-schools.jpeg`)"
        alt="Classroom"
    >
      <h1>Classroom workshops</h1>
      <p>
        Our team run workshops with school aged children
        to foster their creative thinking and teamwork skills.
      </p>
    </left-right-stacking-hero>

    <left-right-stacking-hero
        :image="require(`@/assets/images/pexels/gg-what-we-do-elderly-drawing.jpeg`)"
        alt="Drawing"
    >
      <h1>Fundamental drawing skills classes</h1>
      <p>
        We offer fundamental drawing skills classes to elderly
        people one-on-one to develop their technical skills, or in a group
        to develop their social skills.
      </p>
    </left-right-stacking-hero>

  </main>
</template>

<script>
export default {
    name: 'what-we-do',
};
</script>
