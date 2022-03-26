<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-img
          contain
          height="300"
          src="https://2.bp.blogspot.com/--b31kg4vCF0/WsiR8_wwOXI/AAAAAAABLJk/NGKgFdPJpHgsnjb2fYo7f-uqTUEBmZdJQCLcBGAs/s450/ondanka_animal_kuma_penguin.png"
        ></v-img>
        <v-card-title class="mt-10 py-10 text-center">
          地球の現状について
        </v-card-title>
        <v-card-text> とてもとても大変です </v-card-text>
        <v-card-actions>
          <v-row>
            <v-col class="d-flex justify-center">
              <v-btn
                color="primary"
                large
                @click="$router.push('select-category')"
              >
                次へ
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ProblemPresentation",
}
</script>
