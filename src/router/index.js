import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/Dashboard.vue'),
            meta: {
                auth: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/Login.vue'),
            meta: {
                auth: false
            }
        },
        {
            path: '/photo-detail/:id',
            name: 'photo-detail',
            component: () => import('../views/PhotoDetail.vue'),
            meta: {
                auth: true
            }
        },
        {
            path: '/album/:album',
            name: 'album',
            component: () => import('../views/Album.vue'),
            meta: {
                auth: true
            }
        }

    ]
})

router.beforeEach((to, from, next) => {
        if (to.name !== 'login' && !localStorage.getItem('authenticated')) next({ name: 'login' })
        else if (to.name === 'login' && localStorage.getItem('authenticated')) next({ name: 'home' })
        else next()
})


export default router