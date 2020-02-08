<template>
    <v-list-item @click="serverSelected">
        Server #{{ server.id }}
    </v-list-item>
</template>

<script>
import {serverBus} from '../../main';
export default {
    name: 'AppServer',
    props: ['server'],
    methods: {
        serverSelected() {
            serverBus.$emit('serverSelected', this.server);
        }
    }
}
</script>
