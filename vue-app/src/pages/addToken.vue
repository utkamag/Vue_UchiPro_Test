<template>
  <h2>Вы хотите добавить:</h2>
  <div @click="test">Test</div>
</template>


<script>
import axios from "axios";
import VueCryptojs from "vue-cryptojs/src";

export default {
  name: "addToken",
  data() {
    return {
      random: ""
    }
  },
  methods: {
    test() {
      const encryptedText = VueCryptojs.MD5("Hello!")
      axios
          .post('http://localhost:3000/tokens', {
            token: encryptedText,
            url: 'Flintstone'
          })
    }
  }
}
</script>

<style scoped lang="scss">


</style>