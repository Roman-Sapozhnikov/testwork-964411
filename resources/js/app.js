/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router'

window.Vue.use(VueRouter);

import CountriesIndex from './components/countries/CountriesIndex.vue';
import CountriesCreate from './components/countries/CountriesCreate.vue';
import CountriesEdit from './components/countries/CountriesEdit.vue';


const routes = [
    {
        path: '/',
        name: 'countries',
        component: CountriesIndex
    },
    {
        path: '/admin/countries/create',
        component: CountriesCreate,
        name: 'createCountry'
    },
    {
        path: '/admin/countries/edit/:id',
        component: CountriesEdit,
        name: 'editCountry'
    }
]

const router = new VueRouter({ routes })

const app = new Vue({
    el: '#app',
    router,
    components: {
        CountriesIndex
    }
})
