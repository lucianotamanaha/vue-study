<template>
  <v-app>
    <v-app-bar app>
      <app-header></app-header>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <v-row>
          <v-col>
            <v-btn color="blue" class="mr-2" @click="selectComponent = 'Blue'">Load Blue Template</v-btn>
            <v-btn color="green" class="mr-2" @click="selectComponent = 'Green'">Load Green Template</v-btn>
            <v-btn color="red" @click="selectComponent = 'Red'">Load Red Template</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <component :is="selectComponent">
              <p>This is the Content</p>
            </component>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer>
      <app-footer></app-footer>
    </v-footer>
  </v-app>
</template>

<script>
import AppHeader from "./components/Shared/Header"
import AppFooter from "./components/Shared/Footer"
import Blue from "./components/Blue"
import Green from "./components/Green"
import Red from "./components/Red"

export default {
  name: "App",

  components: {
    AppHeader,
    AppFooter,
    Blue,
    Green,
    Red,
  },

  data: () => {
    return {
      selectComponent: 'Blue'
    }
  }
};
</script>
