<template>
  <h2 class="token__title" @click="mainPageLink">Vue_UchiPro_Test</h2>
  <div class="token">
    <div class="token__tokens">
      <h3 class="token__token-title">Токены</h3>
      <div class="token__tokens-list" v-for="(item, index) in $store.getters.getArray" :key="index._id">{{ item.token }}</div>
    </div>
    <div class="token__url">
      <h3 class="token__url-title">URL</h3>
      <div class="token__url-list" v-for="(item, index) in $store.getters.getArray" :key="index._id">
        {{ item.url }}
          <div class="token__url-button" v-on:click="test(index, item)" @click="$router.push(`token/${$store.state.module.Token}/delete`)"><img class="token__cancel" src="../assets/trash.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";
import router from "@/router/router";

export default {
  name: "tokens",
  data() {
    return {
      items: this.$store.state.module.URL,
      item: false
    }
  },

  mounted() {
   this.$store.dispatch("fetchArray")
  },

  methods: {
    test(index, item) {
      this.$store.getters.getArray.splice(index, 1)
      this.$store.commit('addUrlID', item)
    },
    mainPageLink() {
      router.push('/')
    }
  }
}
</script>

<style scoped lang="scss">

.token {
  background: white;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  padding: 10px;
  width: max-content;
  margin: 0 auto;

  &__title{
    padding: 5px;
  }

  &__title:hover{
    cursor: pointer;
  }

  &__tokens-list {
    margin: 11px;
  }

  &__url{

  }

  &__url-title {
    margin-bottom: 20px;

  }

  &__url-list {
    display: flex;
    justify-content: flex-end;
    margin: 6px;
  }

  &__url-button{
    flex-direction: column;
    justify-content: flex-end;
    margin-left: 12px;
  }

  &__cancel {
    width: 19px;
  }

  &__cancel:hover {
    cursor: pointer;
    width: 19px;
  }
}

</style>