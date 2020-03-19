<template>
    <v-alert type="success">
      <h1>That's Correct!</h1>
      <v-btn color="primary" @click="onNextQuestion">Next Question</v-btn>
    </v-alert>
</template>

<script>
export default {
    methods: {
        onNextQuestion() {
            this.$emit('confirmed');
        }
    }
}
</script>