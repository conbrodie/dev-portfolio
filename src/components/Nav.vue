<template>
  <div class="nav-container" :class="{ scrolled: pageScrolled }">
    <div class="nav-bar">
      <router-link to="/">
        <div class="logo">
          <svg viewBox="0 0 31 61" xmlns="http://www.w3.org/2000/svg">
            <path
              class="logo-icon stop-loader"
              d="M31,0C14.4,0,1,13.4,1,30s13.4,30,30,30V0z"
            ></path>
          </svg>
        </div>
      </router-link>
      <div class="menu-wrapper">
        <div
          class="hamburger p-0 ten"
          @click="hamburgerActive = !hamburgerActive"
          :class="{ activated: hamburgerActive }"
        >
          <span></span>
          <span></span>
        </div>
        <div class="nav-menu" :class="{ activated: hamburgerActive }">
          <div class="section">
            <div>
              <a href="#" class="shadow-underline fs-5" @click="goTo('work')"
                >Work</a
              >
            </div>
            <div>
              <a
                href="#"
                class="shadow-underline fs-5"
                @click="goTo('experience')"
                >Experience</a
              >
            </div>
            <div>
              <a href="#" class="shadow-underline fs-5">Resume</a>
            </div>
          </div>
          <div class="section">
            <h5 class="fw-light ts-6">Say Hey</h5>
            <div>
              <a
                href="mailto:hey@connorbrodie.dev"
                class="shadow-underline fs-5"
                >hey@connorbrodie.dev</a
              >
            </div>
          </div>
          <div class="section">
            <div class="d-flex externals-row">
              <a href="https://www.github.com/conbrodie" target="_blank">
                <font-awesome-icon
                  class="svg-btn-lg svg-btn-light"
                  :icon="['fab', 'github-square']"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/connor-brodie-2a9a45231/"
                target="_blank"
              >
                <font-awesome-icon
                  class="svg-btn-lg svg-btn-light"
                  :icon="['fab', 'linkedin']"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from "tiny-emitter/instance";

export default {
  data: function () {
    return {
      hamburgerActive: false,
      pageScrolled: false,
      scrollValue: 0,
    };
  },
  methods: {
    onScroll(e) {
      this.scrollValue = e.target.documentElement.scrollTop;
    },
    goTo(refName) {
      emitter.emit("element", refName);
      this.hamburgerActive = false;
    },
  },
  watch: {
    scrollValue(value) {
      if (value > 0) {
        this.pageScrolled = true;
      } else {
        this.pageScrolled = false;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll, true);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll, true);
  },
};
</script>
