<template>
  <div class="delete">
    <h2 class="delete__title">Вы точно хотите удалить:</h2>
    <div class="delete__token">{{$store.state.module.Token}}</div>
    <div class="delete__url">{{$store.state.module.URL}}</div>
    <div class="delete__buttons">
      <button @click="remove">Удалить</button>
      <button @click="$router.push(`/tokens`)">Отмена</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "deleteToken",

  data() {
    return {
      deleteByID: this.$store.state.module.id
    }
  },

  methods: {
    remove() {
      console.log(this.deleteByID)
      axios
          .delete (`http://localhost:3000/tokens/${this.deleteByID}`)
    }
  }
}
</script>

<style scoped lang="scss">
  .delete {


  }

</style>