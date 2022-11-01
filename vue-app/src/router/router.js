import { createRouter, createWebHistory } from 'vue-router'
import tokens from "@/pages/tokens";
import addToken from "@/pages/addToken";
import deleteToken from "@/pages/deleteToken";
import mainPage from "@/pages/mainPage";

const routes = [
  {
    path: '/', component: mainPage
  }
  ,{
    path: '/tokens', component: tokens
  },
  {
    path: '/add-tokens', component: addToken
  },
  {
    path: '/token/:id/delete', component: deleteToken
  }
]

const router = createRouter({
  routes
})

export default router
