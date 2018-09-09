const graphql = require('graphql');

const s = (value) => {
  if(value != ""){
    return value;
  }
  throw new Error('Err: пустая строка');
}

const pL = (ast) => {
  if(ast.value != ""){
    return ast.value;
  }
  throw new Error('Err: пустая строка');
}

const password = new graphql.GraphQLScalarType({
  name: 'password',
  serialize: s,
  parseValue: s,
  parseLiteral: pL
})

module.exports = password;