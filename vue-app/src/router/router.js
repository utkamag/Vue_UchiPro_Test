import { createRouter, createWebHistory } from 'vue-router'
import tokens from "@/pages/tokens";
import addToken from "@/pages/addToken";
import deleteToken from "@/pages/deleteToken";

const routes = [
  {
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
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
