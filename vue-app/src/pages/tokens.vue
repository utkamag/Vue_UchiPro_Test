<template>
  <div class="token">
    <div class="token__tokens">
      <h3 class="token__token-title">Токены</h3>
      <div class="token__tokens-list" v-for="item in $store.getters.getArray">{{ item.token }}</div>
    </div>
    <div class="token__url">
      <h3 class="token__url-title">URL</h3>
      <div class="token__url-list" v-for="item in items">
        {{ item.url }}
        <button class="token__url-button">Удалить</button>
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
      items: ""
    }
  },

  mounted() {
   this.$store.dispatch("fetchArray")
  },

  methods: {

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
  }

  &__url-button{
    margin-left: 15px;
  }
}

</style>