import fs from 'node:fs';
import { SWAGGER_PATH } from '../constants/index.js';
import swaggerUI from 'swagger-ui-express';
import createHttpError from 'http-errors';

export const swaggerDocs = () => {
  try {
    const swaggerDoc = JSON.parse(fs.readFileSync(SWAGGER_PATH, 'utf8'));
    return [...swaggerUI.serve, swaggerUI.setup(swaggerDoc)];
  } catch (err) {
    console.error('Error loading Swagger docs:', err);
    return (req, res, next) =>
      next(createHttpError(500, "Can't load swagger docs"));
  }
};
