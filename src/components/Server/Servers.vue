<template>
  <v-list>
    <v-list-item-group>
      <app-server v-for="server in servers" :server="server" :key="server.id"></app-server>
    </v-list-item-group>
  </v-list>
</template>

<script>
import AppServer from "./Server";

export default {
  data: () => {
    return {
      servers: [
        { id: 1, status: "Normal" },
        { id: 2, status: "Critical" },
        { id: 3, status: "Unknown" },
        { id: 4, status: "Normal" }
      ]
    };
  },
  components: {
    AppServer
  }
};
</script>

<style>
</style>
