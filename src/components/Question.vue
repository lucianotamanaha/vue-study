<template>
    <v-card>
        <v-list-item two-line>
      <v-list-item-content>
        <div class="overline mb-4">Question</div>
        <v-list-item-title class="headline mb-1">{{ question }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-card-actions>
      <v-btn color="primary" @click="onAnswer(btnData[0].correct)">{{ btnData[0].answer }}</v-btn>
      <v-btn color="primary" @click="onAnswer(btnData[1].correct)">{{ btnData[1].answer }}</v-btn>
      <v-btn color="primary" @click="onAnswer(btnData[2].correct)">{{ btnData[2].answer }}</v-btn>
      <v-btn color="primary" @click="onAnswer(btnData[3].correct)">{{ btnData[3].answer }}</v-btn>
    </v-card-actions>
    </v-card>
</template>

<script>
    const MODE_ADDITION = 1;
    const MODE_SUBSTRACTION = 2;
    export default {
        data() {
            return {
                question: 'Ooops, an error ocurred :/',
                btnData: [
                    {correct: true, answer: 0},
                    {correct: false, answer: 0},
                    {correct: false, answer: 0},
                    {correct: false, answer: 0},
                ]
            }
        },
        methods: {
            generateQuestion() {
                const firstNumber = this.generateRandomNumber(1, 100);
                const secondNumber = this.generateRandomNumber(1, 100);
                const modeNumber = this.generateRandomNumber(1, 2);

                let correctAnswer = 0;

                switch (modeNumber) {
                    case MODE_ADDITION:
                        correctAnswer = firstNumber + secondNumber;
                        this.question = `What's ${firstNumber} + ${secondNumber}?`;
                        break;
                    case MODE_SUBSTRACTION:
                        correctAnswer = firstNumber - secondNumber;
                        this.question = `What's ${firstNumber} - ${secondNumber}?`;
                        break;
                    default:
                        correctAnswer = 0;
                        this.question = 'Ooops, an error ocurred :/';        
                }

                this.btnData[0].answer = this.generateRandomNumber(correctAnswer - 10, correctAnswer + 10, correctAnswer);
                this.btnData[0].correct = false;
                this.btnData[1].answer = this.generateRandomNumber(correctAnswer - 10, correctAnswer + 10, correctAnswer);
                this.btnData[1].correct = false;
                this.btnData[2].answer = this.generateRandomNumber(correctAnswer - 10, correctAnswer + 10, correctAnswer);
                this.btnData[2].correct = false;
                this.btnData[3].answer = this.generateRandomNumber(correctAnswer - 10, correctAnswer + 10, correctAnswer);
                this.btnData[3].correct = false;

                const correctButton = this.generateRandomNumber(0, 3);
                this.btnData[correctButton].correct = true;
                this.btnData[correctButton].answer = correctAnswer;
            },
            generateRandomNumber(min, max, except) {
                const rndNumber = Math.round(Math.random() * (max - min)) + min;
                if (rndNumber == except) {
                    return this.generateRandomNumber(min, max, except);
                }
                return rndNumber;
            },
            onAnswer(isCorrect) {
                this.$emit('answered', isCorrect);
            }
        },
        created() {
            this.generateQuestion();
        }
    }
</script>