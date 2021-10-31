import type { Resolvers } from 'schema-inventory'
import { delivery } from './data'

const resolvers: Resolvers = {
  Product: {
    delivery(product) {
      return delivery.find(({ id }) => id === product.id)!
    },
  },
}

export default resolvers
