"use strict";

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::speciality.speciality",
  ({ strapi }) => ({
    async findOneBySlug(ctx) {
      const { slug } = ctx.params;
      console.log("slug: ", slug);

      const sanitizedQuery = await this.sanitizeQuery(ctx);

      // Perform whatever custom actions are needed
      const result = await strapi
        .service("api::speciality.speciality")
        .findOneBySlug(slug, {
          populate: sanitizedQuery.populate,
        });

      const sanitizedResults = await this.sanitizeOutput(result, ctx);

      return this.transformResponse(sanitizedResults);
    },
  })
);
