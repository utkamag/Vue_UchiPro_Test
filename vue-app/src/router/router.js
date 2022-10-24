import { createRouter, createWebHistory } from 'vue-router'
import tokens from "@/pages/tokens";
import addToken from "@/pages/addToken";

const routes = [
  {
    path: '/tokens', component: tokens
  },
  {
    path: '/add-tokens', component: addToken
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
