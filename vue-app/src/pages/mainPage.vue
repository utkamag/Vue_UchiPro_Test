<template>
  <div class="container">
    <div class="main">
      <h2 class="main__title" @click="mainPageLink">Vue_UchiPro_Test</h2>
      <div class="main__paths">
        <div class="main__path-token" @click="tokensLink">Все токены</div>
        <div class="main__path-add" @click="tokenLinkAdd">Добавить токен</div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router/router";

export default {
  name: "mainPage",
  methods: {
    tokensLink() {
      router.push('/tokens')
    },
    tokenLinkAdd() {
      router.push('/add-tokens')
    },
    mainPageLink() {
      router.push('/')
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  margin-top: 220px;
  background: #F3F3F2;
}
.main {
  &__title {
    padding: 20px;
    color: #2c3e50;
  }
  &__title:hover {
    cursor: pointer;
  }
  &__paths {
    display: flex;
    justify-content: center;
  }
  &__path-token{
    margin: 10px;
    padding: 12px;
    background: white;
    border-radius: 15px;
    transition: linear 0.2s;
  }
  &__path-add{
    margin: 10px;
    padding: 12px;
    background: white;
    border-radius: 15px;
    transition: linear 0.2s;
  }
  &__path-delete{
    margin: 10px;
    padding: 12px;
    background: white;
    border-radius: 15px;
    transition: linear 0.2s;
  }
  &__path-token:hover{
    background: darkgray;
    cursor: pointer;
  }
  &__path-add:hover{
    background: darkgray;
    cursor: pointer;
  }
  &__path-delete:hover{
    background: darkgray;
    cursor: pointer;
  }
}

</style>