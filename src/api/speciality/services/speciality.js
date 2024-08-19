"use strict";

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService(
  "api::speciality.speciality",
  ({ strapi }) => ({
    async findOneBySlug(slug, { populate }) {
      return strapi.db.query("api::speciality.speciality").findOne({
        where: {
          slug: slug,
        },
        populate,
      });
    },
  })
);
