<template>
    <div class="nav-outer">
        <nav>

            <div class="nav-top">
            <img alt="MCF logo" src="@/assets/images/mcf.svg">
            <button class="mobile-menu"
                :class="[menuOpen ? 'open' : false]"
                @click="menuOpen = !menuOpen"
            >A</button>
            </div>

            <div class="nav-links-outer" :class="[menuOpen ? 'open' : false]">
            <div class="nav-links">
                <a href="/who-we-are">Who we are</a>
                <a href="/what-we-do">What we do</a>
                <a href="/our-stories">Our stories</a>
                <a href="/get-involved">Get involved</a>
            </div>
            </div>

        </nav>
    </div>
</template>

<style lang="scss" scoped>
.nav-outer {
  z-index: 999;
  background-color: $c-oxford;
  box-shadow: 0 20px 64px rgba(0,0,0,.3);
  nav {
    height: 100%;
    max-width: $l-page-width;
    padding: 16px $l-padding;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: $l-breakpoint-1c) {
      flex-direction: column;
      align-items: flex-start;
      padding: 0px;
    }

    .nav-top {
      display: flex;
      flex-shrink: 1;
      justify-content: space-between;
      img {
        height: 4em;
      }

      .mobile-menu {
        display: none;
        font-family: "Anicons Regular";
        font-size: 2.4em;
        color: $c-text-on-dark;
        align-items: center;

        font-variation-settings: "TIME" 1;
        transition: font-variation-settings 0.4s ease;

        &.open {
          font-variation-settings: "TIME" 100;
        }
      }

      @media screen and (max-width: $l-breakpoint-1c) {
        padding: $l-padding;
        width: 100%;
        box-shadow: 0 20px 64px rgba(0,0,0,.3);
        .mobile-menu {
          display: flex;
        }
      }
    }
    .nav-links-outer {
      width: 100%;
      @media screen and (max-width: $l-breakpoint-1c) {
        max-height: 0px;
        opacity: 0;
        transition: max-height 0.7s ease-in-out, opacity 0.4s ease-in-out;
        &.open {
          max-height: 100vh;
          opacity: 1;
          transition: max-height 0.8s ease-in-out, opacity 0.4s ease-in-out;
        }
      }
      .nav-links {
        display: flex;
        flex-grow: 1;
        justify-content: space-around;
        @media screen and (max-width: $l-breakpoint-1c) {
          flex-direction: column;
          padding: $l-padding;
          gap: $l-padding;
          width: 100%;
        }
        a {
          font-size: 1.2em;
          //padding: 1em $l-padding;
          font-weight: bold;
          text-transform: lowercase;
          color: $c-text-on-dark;
        }
      }
    }
  }
}
</style>

<script>
export default {
    name: 'Navigation',
    data() {
        return {
            menuOpen: false,
        };
    },
};
</script>
