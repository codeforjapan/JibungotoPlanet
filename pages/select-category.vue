<template>
  <v-row justify="center" align="center">
    <v-col
      v-for="(category, index) in categories"
      :key="index"
      cols="12"
      sm="8"
      md="7"
    >
      <v-card @click="$router.push(category.link)">
        <v-img contain height="200" :src="category.image">
          <v-card-title class="">
            <p class="ml-3">{{ category.title }}</p>
          </v-card-title>
        </v-img>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "SelectCategory",
  data() {
    return {
      categories: [
        {
          title: "住居",
          image:
            "https://1.bp.blogspot.com/-RE_LtIhPBps/VCOJt4M6ZEI/AAAAAAAAm1k/WGvtkInZP9s/s400/house_reform.png",
          link: "residence-question",
        },
        {
          title: "移動",
          image:
            "https://4.bp.blogspot.com/-QKuFF7gBB2c/VY4Wb8-K00I/AAAAAAAAup8/IqPvwhcRda8/s400/car_character3_wagon.png",
          link: "movement-question",
        },
        {
          title: "食",
          image:
            "https://4.bp.blogspot.com/-1DNUcK_cJa0/Wov1gLBYboI/AAAAAAABKcY/uL25NYML1442eF_p8d1KiBsgSRIqZfDggCLcBGAs/s400/syokuji_woman2.png",
          link: "food-question",
        },
        {
          title: "その他",
          image:
            "https://4.bp.blogspot.com/-DYdrm6npJ7c/WerLIv7CN6I/AAAAAAABHtA/SDn9vy3lG9UYpQz1Hp6-QY1gIcZ9SjHFACLcBGAs/s450/shopping_supermarket_family_boy.png",
          link: "other-question",
        },
      ],
    }
  },
}
</script>
