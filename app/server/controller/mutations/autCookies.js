const graphql = require('graphql');
const crypto = require('crypto');

const userSchema = require("../schema/user.js")


const db = require("../../model/index")

module.exports = {
  type: userSchema,
  resolve (source, args, context) {
    return db.models.user.findAll({
      where: {
        cookies: context.req.cookies.aut
      }
    }).then(resultFindAll => {
      if(resultFindAll.length == 0){
        throw new Error("Err: no cookies");
      }
      if(resultFindAll[0].dataValues.dateCookies >  new Date(Date.now())){
        let cookies = crypto.createHash('sha256').update(resultFindAll[0].dataValues.mail + Date.now()).digest('base64');
        var dateCookies = new Date(Date.now() + 1000*60*60*24*7);
        return db.models.user.update(
          {
            dateCookie: dateCookies,
            cookies: cookies
          },
          {
            where: {
              cookies: context.req.cookies.aut
            }
          }
        ).then(resultUpdate => {
          if(resultUpdate[0]){
            return {
              mail: resultFindAll[0].dataValues.mail,
              id: resultFindAll[0].dataValues.id,
              admin: resultFindAll[0].dataValues.admin,
              update :resultUpdate[0],
              dateCookies: dateCookies,
              cookies: cookies
            }
          }else{
            throw new Error("Не валидные куки");
          }
        })
      }else{
        throw new Error("Err: no cookies date");
      }
    })

/*
    return db.models.user.update(
      {
        dateCookie: new Date(Date.now() + 1000*60*60*24*7),
      },{
      where: {
        cookie: args.cookies
      }
    }).then(result => {
      if(result[0]){

      }else{
        throw new Error("Не валидные куки");
      }
    }).catch( error => {
      console.log("err: autCoockies.js file :(", error);
      throw new Error("err: autCoockies.js file :(" , error);
    });*/
  }
}