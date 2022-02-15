<template>
  <navbar></navbar>
  <router-view></router-view>
  <footer class="bg-darker">
    <div class="container">
      <div class="section-header">
        <h1 class="text-light fw-heavy">Lets Talk.</h1>
        <a
          href="mailto:hey@connorbrodie.dev"
          class="shadow-underline-dark fs-5 text-light"
          >hey@connorbrodie.dev</a
        >
      </div>
      <div class="content">
        <div class="footer-icon-row externals-row">
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
        <div class="footer-nav">
          <div>
            <a href="#" class="shadow-underline-dark fs-6 text-light">Work</a>
          </div>
          <div>
            <a href="#" class="shadow-underline-dark fs-6 text-light"
              >Experience</a
            >
          </div>
          <div>
            <a href="#" class="shadow-underline-dark fs-6 text-light">Resume</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import navbar from "./components/Nav.vue";

export default {
  name: "App",
  components: { navbar },
};
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
