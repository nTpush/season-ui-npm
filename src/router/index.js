import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routerConfig from './router.config'

const router = new VueRouter({
    routes: routerConfig,
    scrollBehavior(to, from, savePosition) {
        if(savePosition) {
            return savePosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    }
})

export default router