<template>
  <v-app>
    <v-app-bar app>
      <app-header></app-header>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <v-btn class="mb-5" v-customOn:click="clicked">Click Me</v-btn>
        <v-divider></v-divider>
        <div
          class="buttomGreen"
          v-customOn:mouseenter="mouseEnter"
          v-customOn:mouseleave="mouseLeave"
        ></div>
      </v-container>
    </v-content>
    <v-footer>
      <app-footer></app-footer>
    </v-footer>
  </v-app>
</template>

<script>
import AppHeader from "./components/Shared/Header";
import AppFooter from "./components/Shared/Footer";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
  directives: {
    customOn: {
      bind(el, binding) {
        const type = binding.arg;
        const fn = binding.value;
        el.addEventListener(type, fn);
      }
    }
  },
  methods: {
    clicked() {
      alert('I was clicked');
    },
    mouseEnter() {
      alert('Mouse entered!');
    },
    mouseLeave() {
      alert('Mouse Leave!')
    }
  }
};
</script>

<style scoped>
  .buttomGreen {
    width: 100px;
    height: 100px;
    background-color: lightgreen;
  }
</style>