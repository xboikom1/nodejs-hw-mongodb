import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Name should be a string',
    'string.min': 'Name should have at least {#limit} characters',
    'string.max': 'Name should have at most {#limit} characters',
    'string.empty': 'Name cannot be empty',
    'any.required': 'Name is required',
  }),
  phoneNumber: Joi.string().required().messages({
    'string.base': 'Phone number should be a string',
    'string.empty': 'Phone number cannot be empty',
    'any.required': 'Phone number is required',
  }),
  email: Joi.string().email().allow('').messages({
    'string.email': 'Email must be a valid email address',
    'string.base': 'Email should be a string',
  }),
  isFavourite: Joi.boolean().default(false).messages({
    'boolean.base': 'isFavourite should be a boolean',
  }),
  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .default('personal')
    .messages({
      'string.base': 'Contact type should be a string',
      'any.only': 'Contact type must be one of work, home, or personal',
    }),
  photo: Joi.string().uri().messages({
    'string.uri': 'Photo must be a valid URI',
    'string.base': 'Photo should be a string',
    'string.empty': 'Photo cannot be empty',
  }),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    'string.base': 'Name should be a string',
    'string.min': 'Name should have at least {#limit} characters',
    'string.max': 'Name should have at most {#limit} characters',
    'string.empty': 'Name cannot be empty',
  }),
  phoneNumber: Joi.string().messages({
    'string.base': 'Phone number should be a string',
    'string.empty': 'Phone number cannot be empty',
  }),
  email: Joi.string().email().allow('').messages({
    'string.email': 'Email must be a valid email address',
    'string.base': 'Email should be a string',
  }),
  isFavourite: Joi.boolean().default(false).messages({
    'boolean.base': 'isFavourite should be a boolean',
  }),
  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .default('personal')
    .messages({
      'string.base': 'Contact type should be a string',
      'any.only': 'Contact type must be one of work, home, or personal',
    }),
  photo: Joi.string().uri().messages({
    'string.uri': 'Photo must be a valid URI',
    'string.base': 'Photo should be a string',
    'string.empty': 'Photo cannot be empty',
  }),
});
