# ====================================================
# BASE IMAGE WITH NPM
# ====================================================
FROM node:22.16.0-alpine AS base

# ====================================================
# BUILDER STAGE
# ====================================================
FROM base AS builder
WORKDIR /vol/app

# Copy package manifest to leverage Docker layer caching
COPY package*.json ./

# Install all dependencies (including devDependencies)
RUN npm ci

# Copy application source code
COPY . .

# Generate Prisma client (required to use @prisma/client)
# This must be done before build if Prisma is used in the app
RUN npx prisma generate

# Build the application
RUN npm run build

# ====================================================
# RUNTIME DEPENDENCIES STAGE
# ====================================================
FROM base AS runtime-deps
WORKDIR /vol/app

# Copy package manifest
COPY package*.json ./

# Install only production dependencies and skip postinstall scripts
RUN npm ci --omit=dev --ignore-scripts

# ====================================================
# FINAL PRODUCTION IMAGE
# ====================================================
FROM node:22.16.0-alpine AS production
WORKDIR /vol/app

# Install curl for container health check
RUN apk add --no-cache curl

# Copy compiled application and runtime dependencies
COPY --from=builder /vol/app/dist ./dist
COPY --from=builder /vol/app/node_modules/.prisma /vol/app/node_modules/.prisma
COPY --from=runtime-deps /vol/app/node_modules ./node_modules

# Environment variable and exposed port
ARG API_PORT
ENV API_PORT=${API_PORT}
EXPOSE ${API_PORT}

# Health check to verify service availability
HEALTHCHECK --interval=60s --timeout=10s --start-period=10s --retries=3 \
  CMD curl -f http://localhost:${API_PORT}/api/v1/health || exit 1

# Start the application
CMD ["node", "dist/main.js"]