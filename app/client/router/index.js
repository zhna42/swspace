import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import reg from '../components/reg.vue' //страница с дэфолтной галлерейе
import aut from '../components/aut.vue' 
import index from '../components/index.vue' 
import isAdmin from '../components/isAdmin.vue' 

import user from '../components/user.vue' 
  import base from '../components/user/base.vue' 
  import completedtasks from '../components/user/completedtasks.vue' 
  import newbase from '../components/user/newbase.vue' 
  import newtask from '../components/user/newtask.vue' 
  import task from '../components/user/task.vue' 

import admin from '../components/admin/index.vue'

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { 
        path: '/', 
        component: index
      },
      { 
        path: '/aut', 
        component: aut
      },
      { 
        path: '/reg', 
        component: reg
      },
      { 
        path: '/isAdmin', 
        component: isAdmin
      },
      { 
        path: '/admin', 
        component: admin
      },
      { 
        path: '/user', 
        component: user,
        children: [
          {
            path: '/base', 
            component: base
          },
          {
            path: '/completedtasks', 
            component: completedtasks
          },
          {
            path: '/newbase', 
            component: newbase
          },
          {
            path: '/newtask', 
            component: newtask
          },
          {
            path: '/task', 
            component: task
          },
        ]
      }
    ]
  })
}