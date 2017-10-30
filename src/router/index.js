import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import Main from '@/pages/main'
import Preview from '@/pages/preview'

Vue.use(Router)

export default new Router({
    routes:[
        {path: '/',name: 'login', component: Login},
        {path: '/main',name: 'main', component: Main},
        {path: '/preview',name: 'preview', component: Preview}
    ]
})
