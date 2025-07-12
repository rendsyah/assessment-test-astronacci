import dotenv from "dotenv";
dotenv.config();

export const API_CONFIG = {
  // API CONFIG
  API_NAME: process.env.API_NAME,
  API_PORT: Number(process.env.API_PORT) || 5000,

  // OAUTH GOOGLE CONFIG
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID as string,
  GOOGLE_OAUTH_URL: process.env.GOOGLE_OAUTH_URL as string,

  // OAUTH FACEBOOK CONFIG
  FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID as string,
  FACEBOOK_CLIENT_SECRET: process.env.FACEBOOK_CLIENT_SECRET as string,
  FACEBOOK_REDIRECT_URL: process.env.FACEBOOK_REDIRECT_URL as string,
  FACEBOOK_OAUTH_URL: process.env.FACEBOOK_OAUTH_URL as string,

  // JWT CONFIG
  JWT_SECRET: process.env.JWT_SECRET as string,
};
