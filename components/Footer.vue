<template>
  <div class="footer-outer">
    <footer>
      <div class="text-stack">
        <p>© gilbert&gerald foundation 2021</p>
        <p>👨‍💻 with ❤ by <a target="blank" href="https://willpakpoy.com">will pak poy</a></p>
      </div>
      <div class="socials">
        <a href="https://instagram.com/webdev/" target="_BLANK">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://twitter.com/webdev/" target="_BLANK">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://facebook.com/webdev/" target="_BLANK">
          <i class="fab fa-facebook"></i>
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
    name: 'Footer',
};
</script>

<style scoped lang="scss">
.footer-outer {
  width: 100%;
  background-color: $c-oxford;
  footer {
    max-width: $l-page-width;
    padding: $l-padding;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media screen and (max-width: $l-breakpoint-1c) {
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4em;
    }
    .text-stack {
      display: flex;
      flex-direction: column;
      gap: 1em;
      p {
        margin: 0px;
        color: $c-text-on-dark;
        a {
          color: inherit;
        }
      }
    }
    .socials {
      display: flex;
      align-items: center;
      gap: 1em;
      a {
        color: $c-text-on-dark;
        font-size: 2em;
      }
    }
  }

}
</style>
