import type { Resolvers } from 'schema-users'
import data from './data'

const resolvers: Resolvers = {
  Query: {
    getUser(_, args) {
      const user = data.users.find(({ email }) => email === args.email)

      if (user) {
        return user
      }

      throw new Error('Could not find user.')
    },
  },

  User: {
    // eslint-disable-next-line no-underscore-dangle
    __resolveReference(_user) {
      const user = data.users.find(({ email }) => email === _user.email)

      if (user) {
        return user
      }

      throw new Error('Could not find user.')
    },
  },
}

export default resolvers
