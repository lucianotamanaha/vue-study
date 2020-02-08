<template>
  <v-app>
    <v-app-bar app>
      <app-header></app-header>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        
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

  data: () => ({
    //
  })
};
</script>
