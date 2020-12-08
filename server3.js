import { graphql, buildSchema } from 'graphql';
import express from 'express';
const { graphqlHTTP } = require('express-graphql');;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let schema = buildSchema(`
 type Query {
 number: [Int]
 }
`);
let root = {
 number: () => {
    return [ 2, 5, 7, 8, 9, getRandomInt(2)];
 },
};
let app = express();
app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    })
);
app.listen(4003);
console.log('http://localhost:4003/graphql');