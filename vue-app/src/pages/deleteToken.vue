<template>
  <div class="delete">
    <template v-if="done">
      <h2 class="delete__title">Вы точно хотите удалить данный токен:</h2>
      <div class="delete__token"><span class="delete__token-text">Токен: </span>{{ $store.state.module.Token }}</div>
      <div class="delete__url"><span class="delete__url-text">URL: </span>{{ $store.state.module.URL }}</div>
    </template>
    <template v-else>
      <h1 class="delete__done">Токен удален!</h1>
      <h4 class="delete__done-subtitle">*переход к полному списку токенов через 3 секунды</h4>
    </template>
    <div class="delete__buttons">
      <button class="delete__buttons-delete" @click="remove">Удалить</button>
      <button class="delete__buttons-cancel" @click="$router.push(`/tokens`)">Отмена</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router/router";

export default {
  name: "deleteToken",

  data() {
    return {
      deleteByID: this.$store.state.module.id,
      done: true
    }
  },

  methods: {
    remove() {
      this.done = false
      console.log(this.deleteByID)
      axios
          .delete(`https://vuekez.herokuapp.com/tokens/${this.deleteByID}`)
      setTimeout(() => {
        router.push('/tokens')
      }, 3000)

    }
  }
}
</script>

<style scoped lang="scss">
.delete {
  &__token{
    font-size: 18px;
    margin-top: 10px;
  }
  &__token-text{
    font-weight: bolder;
  }
  &__url{
    font-size: 18px;
    margin-bottom: 10px;
  }
  &__url-text{
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