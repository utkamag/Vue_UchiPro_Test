<template>
  <div class="add">
    <template v-if="done">
      <h2>Вы хотите добавить:</h2>
      <div class="add__token"><span class="add__token-text">Токен: </span>{{ randomToken }}</div>
      <div class="add__url"><span class="add__url-text">URL: </span>https://www.example.com/{{ randomURL }}</div>
    </template>
    <template v-else>
      <h1 class="add__done">Токен добавлен!</h1>
      <h4 class="add__done-subtitle">*переход к полному списку токенов через 3 секунды</h4>
    </template>
    <div class="add__buttons">
      <button class="add__buttons-delete" @click="add">Добавить</button>
      <button class="add__buttons-cancel" @click="$router.push(`/tokens`)">Отмена</button>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import cryptoRandomString from "crypto-random-string";
import router from "@/router/router";

export default {
  name: "addToken",
  data() {
    return {
      randomToken: "",
      randomURL: "",
      done: true
    }
  },
  // Генерируем рандомные данные для токена и url
  mounted() {
    this.randomToken = cryptoRandomString({length: 60, type: 'alphanumeric'})
    this.randomURL = cryptoRandomString({length: 10, type: 'alphanumeric'})

  },
  methods: {

    add() {
      this.done = false
      axios
          .post('https://vuekez.herokuapp.com//tokens', {
            token: this.randomToken,
            url: `https://www.example.com/${this.randomURL}`
          })
      setTimeout(() => {
        router.push("/tokens")
      }, 3000)

    }
  }
}
</script>

<style scoped lang="scss">
.add {
  &__token {
    font-size: 18px;
    margin-top: 10px;
  }

  &__token-text {
    font-weight: bolder;
  }

  &__url {
    font-size: 18px;
    margin-bottom: 10px;
  }

  &__url-text {
    font-weight: bolder;
  }

  &__done {
    color: green;
  }

  &__buttons-delete {
    margin: 5px;
  }

  &__buttons-cancel {

  }
}
</style>