import type { Resolvers } from 'schema-products'
import data from './data'

const resolvers: Resolvers = {
  Query: {
    allProducts() {
      return data.products
    },

    product(_, args) {
      const product = data.products.find(({ id }) => id === args.id)

      if (product) {
        return product
      }

      throw new Error('Could not find product.')
    },
  },

  Product: {
    createdBy() {
      return {
        email: 'support@apollographql.com',
        totalProductsCreated: 1337,
      }
    },

    dimensions() {
      return {
        size: '1',
        weight: 1,
      }
    },

    variation(_product) {
      if (_product.variation) {
        return _product.variation
      }

      const product = data.products.find(({ id }) => id === _product.id)

      if (product) {
        return product.variation
      }

      throw new Error('Could not find product.')
    },

    // eslint-disable-next-line no-underscore-dangle
    __resolveReference(_product) {
      if ('id' in _product) {
        const product = data.products.find(({ id }) => id === _product.id)

        if (product) {
          return product
        }

        throw new Error('Could not find product.')
      }

      if ('package' in _product && 'sku' in _product) {
        const product = data.products.find(
          ({ package: pkg, sku }) =>
            pkg === _product.package && sku === _product.sku,
        )

        if (product) {
          return product
        }

        throw new Error('Could not find product.')
      }

      return {
        id: 'rover',
        package: '@apollo/rover',
        sku: _product.sku ?? null,
        variation: _product.variation,
      }
    },
  },
}

export default resolvers
