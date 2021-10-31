import { env } from 'process'
import { join } from 'path'
import {
  ApolloGateway,
  GraphQLDataSource,
  RemoteGraphQLDataSource,
  ServiceEndpointDefinition,
} from '@apollo/gateway'
import { ApolloServer } from 'apollo-server-lambda'
import { print } from 'graphql'
import schemaAst from 'schema-gateway'

const gateway = new ApolloGateway({
  buildService(definition: ServiceEndpointDefinition): GraphQLDataSource {
    const { name } = definition

    return new RemoteGraphQLDataSource({
      url: env.IS_OFFLINE
        ? join('http://localhost:4000', name)
        : join(env.APIGATEWAY_URL as string, name),
    })
  },

  supergraphSdl: print(schemaAst),
})

const server = new ApolloServer({
  gateway,
})

export default server.createHandler()
