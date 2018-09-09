import { createApp } from './app'
import admin from './components/admin/index.vue'
import adminFail from './components/admin/adminFail.vue'
const isDev = process.env.NODE_ENV !== 'production'

export default context => {
  let test;
  if(context.autCookies.admin){
    test = { 
      path: '/admin', 
      component: admin
    }
  }else{
    test = {
      path: '/admin', 
      component: adminFail
    };
  }
  
  return new Promise((resolve, reject) => {
    const s = isDev && Date.now()
    const { app, router, store } = createApp()

    


    const { url } = context
    const { fullPath } = router.resolve(url).route

    if (fullPath !== url) {
      return reject({ url: fullPath })
    }
    router.push(url)

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      if (!matchedComponents.length) {
        return reject({ code: 404 })
      }
      Promise.all(matchedComponents.map(({ asyncData }) => asyncData && asyncData({
        store,
        route: router
      }))).then(() => {
        isDev && console.log(`data pre-fetch: ${Date.now() - s}ms`)
        context.state = store.state

        if(context.autCookies){
          store.state.mail = context.autCookies.mail
          store.state.idUser = context.autCookies.id
          store.state.admin = context.autCookies.admin
          
          //надо проверить есть ли админские куки если да то входим как админ если нет то предлогаем авторизоваться как админ
          //if(context.autCookies.admin && !context.autCookies.adminCookies) router.push('/isAdmin');
          //if(context.autCookies.admin && context.autCookies.adminCookies) router.push('/admin')
        }

        resolve(app)
      }).catch(reject)
    }, reject)
  })
}
