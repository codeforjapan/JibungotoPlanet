<template>
  <v-stepper v-model="current">
    <v-stepper-items>
      <v-stepper-content
        v-for="(question, index) in questions"
        :key="index"
        :step="index"
      >
        <v-card>
          <v-img contain height="300" :src="question.image"></v-img>
          <v-card-title class="mt-10 py-10 text-center">
            {{ question.question }}
          </v-card-title>
          <v-card-actions class="mt-10 pb-10">
            <v-row>
              <v-col class="d-flex justify-center">
                <v-btn color="primary" large @click="nextQuestion">
                  はい
                </v-btn>
              </v-col>
              <v-col class="d-flex justify-center">
                <v-btn color="error" large @click="nextQuestion">
                  いいえ
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
export default {
  name: "StepQuestion",
  props: {
    questions: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      current: 0,
    }
  },
  methods: {
    nextQuestion() {
      this.current++
      if (this.current > this.questions.length - 1) {
        this.$router.push("problem-presentation")
      }
    },
  },
}
</script>

<style scoped></style>
