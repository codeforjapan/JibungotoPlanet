<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" md="8">
      <step-question :questions="questions"></step-question>
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
    }
  },
}
</script>
