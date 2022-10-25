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
          <button class="token__url-button" v-on:click="test(index, item)" @click="$router.push(`token/${$store.state.module.id}/delete`)">Удалить</button>
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
    margin: 5px;
  }

  &__url{

  }

  &__url-title {
    margin-bottom: 24px;

  }

  &__url-list {
    margin: 2.5px;
  }

  &__url-button{
    margin-left: 15px;
  }
}

</style>