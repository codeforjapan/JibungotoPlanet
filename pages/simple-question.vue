<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" md="8">
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
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "SimpleQuestion",
  data() {
    return {
      questions: [
        {
          title: "1つ目の質問",
          question:
            "あなたの世帯で使用している電気は再生可能エネルギー100%ですか?",
          image:
            "https://1.bp.blogspot.com/-xH65NGISSFw/X4aVnYsjc6I/AAAAAAABbxY/_tvg64PdkfwuBsbkpGnjv_ZJIuRrO3N_QCNcBGAsYHQ/s1600/mark_lifeline_denki.png",
          afterText:
            "2020年度の日本国内の年間発電電力量に占める自然エネルギーの割合は21%に達した",
        },
        {
          title: "2つ目の質問です",
          question: "質問2",
          image:
            "https://1.bp.blogspot.com/-xH65NGISSFw/X4aVnYsjc6I/AAAAAAABbxY/_tvg64PdkfwuBsbkpGnjv_ZJIuRrO3N_QCNcBGAsYHQ/s1600/mark_lifeline_denki.png",
          afterText:
            "2020年度の日本国内の年間発電電力量に占める自然エネルギーの割合は21%に達した",
        },
        {
          title: "3つ目の質問です",
          question: "質問3",
          image:
            "https://1.bp.blogspot.com/-xH65NGISSFw/X4aVnYsjc6I/AAAAAAABbxY/_tvg64PdkfwuBsbkpGnjv_ZJIuRrO3N_QCNcBGAsYHQ/s1600/mark_lifeline_denki.png",
          afterText:
            "2020年度の日本国内の年間発電電力量に占める自然エネルギーの割合は21%に達した",
        },
      ],
      questionNumber: 0,
      questionText: "",
      questionImage: "",
      questionAfterText: "",
      current: 0,
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.questionText = this.questions[this.questionNumber].question
      this.questionImage = this.questions[this.questionNumber].question
      this.questionAfterText = this.questions[this.questionNumber].question
    },
    nextQuestion() {
      this.current++
      if (this.current > this.questions.length - 1) {
        this.$router.push("problem-presentation")
      }
    },
    beforeQuestion() {},
  },
}
</script>
