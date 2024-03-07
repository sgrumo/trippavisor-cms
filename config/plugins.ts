module.exports = {
  register({ strapi }) {
    strapi
      .plugin("documentation")
      .service("override")
      .excludeFromGeneration("festival");
  }
}


