const graphql = require('graphql');
const crypto = require('crypto');

const userSchema = require("../schema/user.js")
const mail = require("../type/mail.js")
const password = require("../type/password.js")


const db = require("../../model/index")

module.exports = {
  type: userSchema,
  args: {
    mail: {type: new graphql.GraphQLNonNull(mail)},
    password: { type: new graphql.GraphQLNonNull(password)}
  },
  resolve (source, args, context) {
    return db.models.user.findAll({
      where: {
        mail: args.mail
      }
    }).then(result => {
      if(result.length != 0){
        throw new Error("Майл занят");
      }else{
        return db.models.user.create({
          mail: args.mail,
          password: crypto.createHash('sha256').update(args.password).digest('base64'), 
          cookies: crypto.createHash('sha256').update(args.mail + Date.now()).digest('base64'),
          dateCookies: new Date(Date.now() + 1000*60*60*24*7),
          admin: false,
          key: "we232fd"
        }).then(res => {
          context.res.cookie('aut', res.dataValues.cookies, {expires: new Date(Date.now() + 1000*60*60*24*7), httpOnly: false});
          return res;
        })
      }
    }) 
  }
}