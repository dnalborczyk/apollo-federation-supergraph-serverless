import type { Resolvers } from 'schema-users'
import { users } from './data'

const resolvers: Resolvers = {
  Query: {
    getUser(_, args) {
      return users.find(({ email }) => email === args.email)!
    },
  },

  User: {
    __resolveReference(user) {
      return users.find(({ email }) => email === user.email)!
    },
  },
}

export default resolvers
