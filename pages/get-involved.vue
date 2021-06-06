<template>
  <main>
    <full-width-image-hero
        :image="require(`@/assets/images/pexels/gg-home-tiles-get-involved.jpeg`)"
    >
      <h1>get involved</h1>
    </full-width-image-hero>
    <text-block>
      <p>We would love for you to get involved in our work.</p>
      <p>You can contact us using the form below.</p>
      <hr>
      <h1 class="contact-us">Contact Us</h1>
    </text-block>
    <form name="contact" method="POST" netlify data-netlify="true">
      <label><h2>Name</h2><input type="text" name="name"/></label>
      <label><h2>Email</h2><input type="email" name="email"/></label>
      <label><h2>Message</h2><textarea rows="5" name="message"/></label>
      <input type="submit">
    </form>
  </main>
</template>

<script>
export default {
    name: 'get-involved',
};
</script>

<style scoped lang="scss">
h1.contact-us {
  margin-bottom: 0px;
}
form {
  max-width: $l-page-width;
  padding: $l-padding;
  margin-left: auto;
  margin-right: auto;
  input[type="submit"] {
    -webkit-appearance: button;
    padding: 1em;
    font-size: 1.4em;
    border: 2px solid #dddddd;
    border-radius: 0;
    font-family: inherit;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    margin-top: $l-padding;
    &:hover {
      background-color: transparent;
      transition: 0.2s ease-in-out;
    }
  }
  label {
    h2 {
      font-weight: lighter;
    }
    input, textarea {
      width: 100%;
      font-size: 1.4em;
      padding: 0.5em;
      border: 2px solid #dddddd;
      border-radius: 0;
      font-family: inherit;
    }

    textarea {
      font-size: 1.1em;
    }
  }
}
</style>
