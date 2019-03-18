import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import HomePage from './views/HomePage'
import Echarts from './views/nav3/echarts.vue'
import Page1 from "./views/nav3/Page1.vue"
import Page2 from "./views/nav3/Page2.vue"
import Page3 from "./views/nav3/Page3.vue"
import Page4 from './views/nav3/Page4.vue'
import Page5 from './views/nav3/Page5.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-bar-chart',
        leaf: true, //只有一个节点
        children: [
            { path: '/page1', component: Page1, name: '' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa el-icon-message',
        leaf: true,
        children: [
            { path: '/page2', component: Page2, name: ''},
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-id-card-o',
        leaf: true,
        children: [
            { path: '/page3', component: Page3, name: '' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,
        children: [
            { path: '/page4', component: Page4, name: '' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,
        children: [
            { path: '/page5', component: Page5, name: '' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;
