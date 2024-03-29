import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import emitter from "tiny-emitter/instance";
import VueTippy from "vue-tippy";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret, faStar } from "@fortawesome/free-solid-svg-icons";
import { faExternalLinkSquare } from "@fortawesome/pro-regular-svg-icons";
import InlineSvg from "vue-inline-svg";

import {
  faGithubSquare,
  faJsSquare,
  faVuejs,
  faNode,
  faCss3Alt,
  faSketch,
  faLinkedin,
  faReact,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faUserSecret,
  faStar,
  faExternalLinkSquare,
  faGithubSquare,
  faJsSquare,
  faVuejs,
  faNode,
  faCss3Alt,
  faSketch,
  faLinkedin,
  faReact,
  faDocker
);

const app = createApp(App);

app.config.globalProperties.emitter = emitter;
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("inline-svg", InlineSvg);
app.use(router);
app.use(VueTippy);
app.mount("#app");
