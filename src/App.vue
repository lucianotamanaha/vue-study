<template>
  <v-app>
    <v-app-bar app>
      <app-header></app-header>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <p>{{ firstText | reverse }}</p>
        <p>{{ secondText | calculateLength }}</p>
        <p>{{ reversed }}</p>
        <p>{{ lengthAware }}</p>
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
import { lengthAwareMixin } from "./lengthAwareMixin"

export default {
  mixins: [lengthAwareMixin],
  name: "App",
  data: () => {
    return {
      firstText: 'My name reverse',
      secondText: 'Luciano'
    }
  },
  filters: {
    reverse(value) {
      return value.split("").reverse().join("");
    }
  },
  components: {
    AppHeader,
    AppFooter,
  },
  computed: {
    reversed() {
      return this.firstText.split("").reverse().join("");
    }
  }
};
</script>

<style scoped>

</style>