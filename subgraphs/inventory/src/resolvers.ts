import type { Resolvers } from 'schema-inventory'
import data from './data'

const resolvers: Resolvers = {
  Product: {
    delivery(product) {
      const delivery = data.deliveries.find(({ id }) => id === product.id)

      if (delivery) {
        return delivery
      }

      throw new Error('Delivery not found.')
    },
  },
}

export default resolvers
