import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './components/HomeView.vue';
import AlbumView from './components/AlbumView.vue';
import AlbumDetail from './components/AlbumDetail.vue';
import GenreView from './components/GenreView.vue';
import GenreAlbums from './components/GenreAlbums.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/albums', component: AlbumView },
  {
    path: '/:id',
    name: 'AlbumDetail',
    component: AlbumDetail,
    props: true,
  },
  { path: '/albums/genres', component: GenreView },
  {
    path: '/albums/genres/:genre',
    name: 'GenreAlbums',
    component: GenreAlbums,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
