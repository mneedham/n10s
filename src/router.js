import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './routes/Home'
import Config from './routes/Config'
import Import from './routes/Import'
import Preview from './routes/Preview'
import Delete from './routes/Delete'
import Export from './routes/Export'
import Mapping from './routes/Mapping'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        { name: 'config',  path: '/config', component: Config, },
        { name: 'import',  path: '/import', component: Import, },
        { name: 'preview',  path: '/preview', component: Preview, },
        { name: 'delete',  path: '/delete', component: Delete, },
        { name: 'export',  path: '/export', component: Export, },
        { name: 'mapping',  path: '/mapping', component: Mapping, },

        // Redirect to Home
        { name: 'home', path: '/', component: Home, },
        { path: '*', redirect: '/', },
    ]
})