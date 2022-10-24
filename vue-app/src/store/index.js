import { createStore } from 'vuex'
import mainModule from "@/store/mainModule";

export default createStore({
  modules: {
    module: mainModule
  }
})
