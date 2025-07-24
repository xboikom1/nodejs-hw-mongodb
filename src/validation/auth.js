import Joi from 'joi';

export const registerUserSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Username should be a string',
    'string.min': 'Username should have at least {#limit} characters',
    'string.max': 'Username should have at most {#limit} characters',
    'any.required': 'Username is required',
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'Email must be a valid email address',
    'string.base': 'Email should be a string',
    'string.empty': 'Email cannot be empty',
    'any.unique': 'Email must be unique',
    'any.required': 'Email is required',
  }),
  password: Joi.string().required().messages({
    'string.base': 'Password should be a string',
    'string.empty': 'Password cannot be empty',
    'any.required': 'Password is required',
  }),
});

export const loginUserSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.base': 'Email should be a string',
    'string.email': 'Email must be a valid email address',
    'string.empty': 'Email cannot be empty',
    'any.required': 'Email is required',
  }),
  password: Joi.string().required().messages({
    'string.base': 'Password should be a string',
    'string.empty': 'Password cannot be empty',
    'any.required': 'Password is required',
  }),
});

export const sendResetEmailSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'any.required': 'Email is required',
    'string.base': 'Email should be a string',
    'string.email': 'Email must be a valid email address',
    'string.empty': 'Email cannot be empty',
  }),
});
