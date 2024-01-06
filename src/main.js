import "./style.css";
import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  BiSunFill,
  BiMoonFill,
  BiSearch,
  MdLocationon,
  HiSolidLink,
} from "oh-vue-icons/icons";

addIcons(BiSunFill, BiMoonFill, BiSearch, MdLocationon, HiSolidLink);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(store);
app.mount("#app");
