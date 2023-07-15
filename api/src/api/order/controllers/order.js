'use strict'

// @ts-ignore
const stripe = require('stripe')(
  'sk_test_51NHZAhGNm5QqJugrmZGKLdCXP333GFvcm3QZ1msuhZTJjZVoP8OZoTUZwNRI29UVGfef9yPMb5YdrFJHTJ6u1JYW00FKsuqce8'
)
/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories

module.exports = createCoreController('api::order.order', ({ strapi }) => ({
  /**
   * @param {{ request: { body: { products: any; }; }; response: { status: number; }; }} ctx
   */
  async create(ctx) {
    const { products } = ctx.request.body
    try {
      const lineItems = await Promise.all(
        products.map(async (product) => {
          const item = await strapi
            .service('api::product.product')
            .findOne(product.id)

          return {
            price_data: {
              currency: 'usd',
              product_data: {
                name: item.name,
                images: [item.image],
              },
              unit_amount: Math.round(item.price * 100),
            },
            quantity: product.quantity,
          }
        })
      )

      const session = await stripe.checkout.sessions.create({
        shipping_address_collection: { allowed_countries: ['US', 'CA' , 'GH'] },
        payment_method_types: ['card'],
        mode: 'payment',
        success_url: `${'http://localhost:5174/'}?success=true`,
        cancel_url: `${'http://localhost:5174/'}?success=false`,
        line_items: lineItems.map((lineItem) => ({
          ...lineItem,
        })),
      })

      await strapi
        .service('api::order.order')
        .create({ data: { products, stripeId: session.id } })

      return { stripeSession: session }
    } catch (err) {
      console.error(err.message)
      ctx.response.status = 500
      return { err }
    }
  },
}))
