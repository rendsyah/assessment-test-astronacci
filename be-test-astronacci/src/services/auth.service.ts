import axios from "axios";
import { PrismaClient } from "@prisma/client";

import { API_CONFIG } from "../config";
import { LoginDto, LoginOAuthDto, RegisterDto } from "../types";
import { compare, ErrorException, generateToken, hash } from "../utils";

const prisma = new PrismaClient();

export const authService = {
  register: async (dto: RegisterDto) => {
    const getExistsUser = await prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (getExistsUser) {
      throw new ErrorException("Email already exists", 400);
    }

    const hashed = await hash(dto.password);

    const insertUser = await prisma.user.create({
      data: {
        name: dto.name,
        email: dto.email,
        password: hashed,
        membership: dto.membership,
        provider: "manual",
      },
    });

    return {
      id: insertUser.id,
      name: insertUser.name,
      email: insertUser.email,
      membership: insertUser.membership,
    };
  },
  login: async (dto: LoginDto) => {
    const getUser = await prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (!getUser) {
      throw new ErrorException("Email or password is incorrect", 400);
    }

    if (getUser.password) {
      const isPasswordValid = await compare(dto.password, getUser.password);

      if (!isPasswordValid) {
        throw new ErrorException("Email or password is incorrect", 400);
      }
    }

    const token = generateToken({
      id: getUser.id,
      email: getUser.email,
      name: getUser.name,
      membership: getUser.membership,
    });

    return {
      access_token: token,
    };
  },
  loginWithGoogle: async (dto: LoginOAuthDto) => {
    const URL = `${API_CONFIG.GOOGLE_OAUTH_URL}/tokeninfo?id_token=${dto.token}`;
    const response = await axios.get(URL);

    if (response.data.aud !== API_CONFIG.GOOGLE_CLIENT_ID) {
      throw new ErrorException("Unauthorized", 401);
    }

    let getUser = await prisma.user.findUnique({
      where: {
        email: response.data.email,
      },
    });

    if (!getUser) {
      getUser = await prisma.user.create({
        data: {
          name: response.data.name,
          email: response.data.email,
          membership: "A",
          provider: "google",
        },
      });
    }

    const token = generateToken({
      id: getUser.id,
      email: response.data.email,
      name: response.data.name,
      membership: getUser.membership,
    });

    return {
      access_token: token,
      redirect_to: "/home",
    };
  },
  loginWithFacebook: async (dto: LoginOAuthDto) => {
    const getToken = await axios.get(
      `${API_CONFIG.FACEBOOK_OAUTH_URL}/v17.0/oauth/access_token`,
      {
        params: {
          client_id: API_CONFIG.FACEBOOK_APP_ID,
          client_secret: API_CONFIG.FACEBOOK_CLIENT_SECRET,
          redirect_uri: API_CONFIG.FACEBOOK_REDIRECT_URL,
          code: dto.token,
        },
      }
    );

    const fbOauthToken = getToken.data.access_token;

    const getMe = await axios.get(`${API_CONFIG.FACEBOOK_OAUTH_URL}/me`, {
      params: {
        access_token: fbOauthToken,
        fields: "id,name,email",
      },
    });

    if (!getMe.data.id) {
      throw new ErrorException("Unauthorized", 401);
    }

    let getUser = await prisma.user.findUnique({
      where: {
        email: getMe.data.id,
      },
    });

    if (!getUser) {
      getUser = await prisma.user.create({
        data: {
          name: getMe.data.name,
          email: getMe.data.id,
          membership: "B",
          provider: "facebook",
        },
      });
    }

    const token = generateToken({
      id: getUser.id,
      email: getMe.data.id,
      name: getMe.data.name,
      membership: getUser.membership,
    });

    return {
      access_token: token,
      redirect_to: "/home",
    };
  },
};
