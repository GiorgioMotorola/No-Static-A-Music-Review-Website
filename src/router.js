import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './components/HomeView.vue';
import AlbumView from './components/AlbumView.vue';
import AlbumDetail from './components/AlbumDetail.vue';
import GenreView from './components/GenreView.vue';
import GenreAlbums from './components/GenreAlbums.vue';
import SeasonView from './components/SeasonView.vue';
import SeasonAlbums from './components/SeasonAlbums.vue';
import puremoodAlbums from './components/puremoodAlbums.vue';
import puremoodView from './components/puremoodView.vue';
import nsrcView from './components/nsrcView.vue';
import nsrcDetail from './components/nsrcDetail.vue';

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
  { path: '/albums/seasons', component: SeasonView },
  {
    path: '/albums/seasons/:season',
    name: 'SeasonAlbums',
    component: SeasonAlbums,
    props: true,
  },
  { path: '/albums/puremoods', component: puremoodView },
  {
    path: '/albums/puremoods/:puremood',
    name: 'puremoodAlbums',
    component: puremoodAlbums,
    props: true,
  },
  { path: '/nsrc', component: nsrcView },
  {
    path: '/nsrc/:id',
    name: 'nsrcDetail',
    component: nsrcDetail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
