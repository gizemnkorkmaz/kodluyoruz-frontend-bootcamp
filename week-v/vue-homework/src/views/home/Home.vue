<template>
  <div class="random-cats">
    <h1 class="random-cats__title">Feeling Depressed?</h1>
    <div v-if="showCat" class="random-cats__image-container">
      <img v-bind:src="catImageUrl" alt="Cat Image" class="cat-image" />
    </div>
    <button @click="showCats" class="random-cats__button">
      <span v-if="!showCat">See some cats</span>
      <span v-if="showCat">Give me more!</span>
    </button>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import axios from "axios";

export default {
  setup() {
    let showCat = ref(false);
    let catImageUrl = ref("");
    return {
      catImageUrl,
      showCat,
    };
  },
  methods: {
    async showCats() {
      const API = "https://api.thecatapi.com/v1/images/search";
      let randomCat = await axios.get(API).then((response) => {
        return response.data[0].url;
      });
      this.showCat = true;
      this.catImageUrl = randomCat;
    },
  },
};
</script>

<style lang="scss">
.random-cats {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.cat-image {
  width: 300px;
  height: 300px;
  margin: 10px;
}
button {
  width: 400px;
  height: 60px;
  text-align: center;
  background-color: $menu-link;
  border-color: $menu-link;
  color: $white;
  margin: 20px;
  padding: 20px;
  font-size: 18px;
  cursor: pointer;
}
</style>
