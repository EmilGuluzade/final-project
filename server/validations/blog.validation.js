const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const BlogSchemaValidation = Joi.object({
  title: Joi.string().min(3).required(),
  description: Joi.string().min(10).required(),
  src: Joi.string().uri(),
  likes: Joi.array().default([]),
  tagId: Joi.array()
});

module.exports = BlogSchemaValidation;
