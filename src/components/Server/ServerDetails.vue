<template>
    <div class="pa-5">
        <p v-if="!server">Please select a Server</p>
        <p v-else>Server #{{server.id}} selected, Status: {{server.status}}</p>
        <v-divider></v-divider>
        <v-btn class="mt-5" @click="resetStatus">Change to Normal</v-btn>
    </div>
</template>

<script>
import {serverBus} from '../../main'

export default {
    data: () => {
        return {
            server: null
        }
    },
    methods: {
        resetStatus() {
            this.server.status = 'Normal';
        }
    },
    created() {
        serverBus.$on('serverSelected', (server) =>{
            this.server = server;
        })
    }
}
</script>

<style>

</style>
