<template>
  <v-app>
    <v-app-bar app>
      <app-header></app-header>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <transition name="flip" mode="out-in">
          <component :is="mode" @answered="answered($event)" @confirmed="mode = 'Question'"></component>
        </transition>
        <v-snackbar v-model="snackbar" multi-line>
          {{ error }}
          <v-btn color="red" text @click="snackbar = false">Close</v-btn>
        </v-snackbar>
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
import Question from "./components/Question";
import Answer from "./components/Answer";

export default {
  components: {
    AppHeader,
    AppFooter,
    Question,
    Answer
  },
  data() {
    return {
      mode: "Question",
      error: "Wrong, try again!",
      snackbar: false
    };
  },
  methods: {
    answered(isCorrect) {
      this.snackbar = false;
      if (isCorrect) {
        this.mode = "Answer";
      } else {
        this.mode = "Question";
        this.snackbar = true;
      }
    }
  }
};
</script>

<style scoped>
.flip-enter-active {
  animation: flip-in 0.5s ease-out forwards;
}

.flip-leave-active {
  animation: flip-out 0.5s ease-out forwards;
}

@keyframes flip-out {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(90deg);
  }
}

@keyframes flip-in {
  from {
    transform: rotateY(90deg);
  }
  to {
    transform: rotateY(0deg);
  }
}
</style>