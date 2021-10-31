import { buildSubgraphSchema } from '@apollo/subgraph'
import { ApolloServer } from 'apollo-server-lambda'
import schemaAst from 'schema-users'
import resolvers from './resolvers'

const server = new ApolloServer({
  schema: buildSubgraphSchema({
    resolvers,
    typeDefs: schemaAst,
  }),
})

export default server.createHandler()
