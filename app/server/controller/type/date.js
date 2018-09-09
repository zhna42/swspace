const graphql = require('graphql');

const s = (value) => {
    return value;
}

const pL = (ast) => {
    return ast.value;
}

const mail = new graphql.GraphQLScalarType({
  name: 'date',
  serialize: s,
  parseValue: s,
  parseLiteral: pL
})

module.exports = mail;