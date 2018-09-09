const graphql = require('graphql');

const Query = require("./querys/index.js")
const Mutation = require("./mutations/index.js")

var schema = new graphql.GraphQLSchema({
  query: Query,
  mutation: Mutation
});

module.exports = schema;