const graphql = require('graphql');

const userSchema = require("../schema/user.js")
const mail = require("../type/mail.js")
const password = require("../type/password.js")

module.exports = {
  type: userSchema,
  args: {
    mail: {type: mail},
    password: {type: password},
  },
  resolve (source, args, context) {
    return  args;
  }
}