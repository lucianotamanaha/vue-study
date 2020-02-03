<template>
<v-app>
  <v-app-bar app>
    <app-header></app-header>
  </v-app-bar>
  <v-content>
    <v-container fluid>
      <app-servers></app-servers>
      <app-server-details></app-server-details>
    </v-container>
  </v-content>
  <v-footer>
    <app-footer></app-footer>
  </v-footer>
</v-app>
</template>

<script>
import AppHeader from './components/Shared/Header'
import AppFooter from './components/Shared/Footer'
import AppServers from './components/Server/Servers'
import AppServerDetails from './components/Server/ServerDetails'

export default {
  name: 'App',

  components: {
    AppHeader,
    AppFooter,
    AppServers,
    AppServerDetails
  },

  data: () => ({
    //
  }),
};
</script>
