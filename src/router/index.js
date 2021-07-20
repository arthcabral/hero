import { createRouter, createWebHistory } from 'vue-router';
import nProgress from 'nprogress';

const routes = [
  {
    path: '/',
    name: 'Create New Hero',
    component: () => import('../components/create-hero/CreateHeroComponent.vue'),
  },
  {
    path: '/list-heroes',
    name: 'List All Heroes',
    component: () => import('../components/list-hero/ListHeroComponent.vue'),
  },
  {
    path: '/edit-hero/:id',
    name: 'Update Hero',
    component: () => import('../components/edit-hero/EditHeroComponent.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeResolve((to, from, next) => {
  //  Quando houver o carregamentoi de uma página inicial, então usar o Nprogress
  if (to.name) {
    nProgress.start();
  }
  next();
});

router.afterEach((to, from) => {
  //  Completa a animação da rota usando o progress bar
  nProgress.done();
});

export default router;
