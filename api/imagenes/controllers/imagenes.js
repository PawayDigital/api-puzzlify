"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  me: async (ctx) => {
    const user = ctx.state.user;
    let imagenes = await strapi.services.imagenes.find({
      user: user.id,
    });
    ctx.send(imagenes);
  },
};
