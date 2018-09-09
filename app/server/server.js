const express = require('express')
const fs = require('fs');
const path = require('path');
const resolve = file => path.resolve(__dirname, file);
const { createBundleRenderer } = require('vue-server-renderer')

const isProd = process.env.NODE_ENV === 'production'
const templatePath = resolve('./view/index.html')
const template = fs.readFileSync(templatePath, 'utf-8');
const cookieParser = require('cookie-parser');

const app = express();

const {graphql} = require('graphql');
const graphqlHTTP = require('express-graphql');
const schema = require('./controller/graphql.js');

app.use(cookieParser());
app.use('/graphql', (req, res) => {
  return graphqlHTTP({
    schema: schema,
    graphiql: true,
    context: { req, res }
  })(req, res);
});



let renderer;
if(isProd){
  const serverBundle = require('./view/vue-ssr-server-bundle.json')
  const clientManifest = require('./view/vue-ssr-client-manifest.json')
  renderer = createBundleRenderer(serverBundle, {
    template,
    clientManifest
  })
}else{
  let readyPromise = require('../../webpack/setup-dev-server.js')
  readyPromise(
    app,
    templatePath,
    (serverBundle, {template,clientManifest}) => {
        renderer = createBundleRenderer(serverBundle, {template,clientManifest})
    }
  )
}


/*

 mail: resultFindAll[0].dataValues.mail,
              id: resultFindAll[0].dataValues.id,
              admin: resultFindAll[0].dataValues.admin,
              update :resultUpdate[0]
*/

app.get('*', (req, res) => {
  
  let context = { 
    url: req.url,
    autCookies: false 
  }

  graphql(schema, `mutation{autCookies{update, mail, id, admin, cookies, dateCookies}}`, {req, res}, {req, res}).then(params => {
    res.cookie('aut', params.data.autCookies.cookies, {expires: params.data.autCookies.dateCookies, httpOnly: false}); 
    return params.data.autCookies;
  }).then(autCookies => {
    context = { 
      url: req.url,
      autCookies: autCookies
    }
    renderer.renderToString(context, (err, html) => {
      res.end(html)
    }) 
  }).catch((error) => {
    renderer.renderToString(context, (err, html) => {
      res.end(html)
    }) 
  });
  
})

app.listen(3000)