import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Page2 from "./views/nav3/Page2.vue"
import Page3 from "./views/nav3/Page3.vue"
import Page4 from './views/nav3/Page4.vue'
import App from './views/Application.vue'
import Projects from './views/Projects'
import Techs from './views/Techs'
import Variable from './views/Variable'
import Programes from './views/Programes'
import Logs from './views/Logs'
import Realtime from './views/Realtime'

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
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-bar-chart',
        leaf: true,
        children: [
            {
                path: '/app',
                component: App,
                children: [
                    { path: '/app/techs', component: Techs },
                    { path: '/app/variable', component: Variable },
                    { path: '/app/projects', component: Projects },
                    { path: '/app/programes', component: Programes },
                    { path: '/app/logs', component: Logs },
                    { path: '/app/realtime', component: Realtime },
                ]
            },
            {
                path: '/page2',
                component: Page2,
                children: []
            },
            {
                path: '/page3',
                component: Page3,
                children: []
            },
            {
                path: '/page4',
                component: Page4,
                children: []
            }
        ]
    }
];

export default routes;
