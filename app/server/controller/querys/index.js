const graphql = require('graphql');

const aut = require("../querys/aut.js")

const Query = new graphql.GraphQLObjectType({
  name: 'Query',
  description: 'Root query object',
  fields: () => {
    return {
      aut: aut
    };
  }
})

module.exports = Query;


