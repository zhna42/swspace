const graphql = require('graphql');
const date = require("../type/date.js")
const user = new graphql.GraphQLObjectType({
  name: 'user',
  description: 'This represents a Person',
  fields: () => {
    return {
      id: { 
        type: graphql.GraphQLInt,
        resolve (res) {
          return res.id;
        } 
      },
      mail: { 
        type: graphql.GraphQLString,
        resolve (res) {
          return res.mail;
        } 
      },
      password: { 
        type: graphql.GraphQLString,
        resolve (res) {
          return "privat info";
        } 
      },
      admin: { 
        type: graphql.GraphQLBoolean,
        resolve (res) {
          return res.admin;
        } 
      },
      key: { 
        type: graphql.GraphQLString,
        resolve (res) {
          return "privat info";
        } 
      },
      cookies: { 
        type: graphql.GraphQLString,
        resolve (res) {
          return res.cookies;
        } 
      },
      update: {
        type: graphql.GraphQLBoolean,
        resolve (res) {
          return res.update;
        } 
      },
      dateCookies: {
        type: date,
        resolve (res) {
          return res.dateCookies;
        } 
      }
    };
  }
});

module.exports = user;