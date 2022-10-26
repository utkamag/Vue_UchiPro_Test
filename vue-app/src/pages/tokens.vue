<template>
  <div class="token">
    <div class="token__tokens">
      <h3 class="token__token-title">Токены</h3>
      <div class="token__tokens-list" v-for="(item, index) in $store.getters.getArray" :key="index._id">{{ item.token }}</div>
    </div>
    <div class="token__url">
      <h3 class="token__url-title">URL</h3>
      <div class="token__url-list" v-for="(item, index) in $store.getters.getArray" :key="index._id">
        {{ item.url }}
          <div class="token__url-button" v-on:click="test(index, item)" @click="$router.push(`token/${$store.state.module.Token}/delete`)"><img class="token__cancel" src="../assets/cancel.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "tokens",
  data() {
    return {
      items: this.$store.state.module.URL
    }
  },

  mounted() {
   this.$store.dispatch("fetchArray")

  },

  methods: {
    test(index, item) {
      this.$store.getters.getArray.splice(index, 1)
      this.$store.commit('addUrlID', item)
    }
  }
}
</script>

<style scoped lang="scss">

.token {
  display: flex;
  justify-content: center;

  &__tokens {
    margin: 10px;
  }

  &__tokens-list {
    margin: 11px;
  }

  &__url{

  }

  &__url-title {
    margin-bottom: 26.5px;

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
    width: 20px;
  }

  &__cancel:hover {
    cursor: pointer;
    width: 20px;
  }
}

</style>