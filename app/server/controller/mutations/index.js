const graphql = require('graphql');

const reg = require("./reg.js"); //
const autCookies = require("./autCookies.js");
const Mutations = new graphql.GraphQLObjectType({
  name: 'Mutations',
  description: 'Functions to set stuff',
  fields () {
    return {
      reg: reg,
      autCookies: autCookies
    };
  }
});

module.exports = Mutations;
