<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>

## BE Test Astronacci

BE Test Astronacci API serves as a foundational template for building backend APIs. It provides a standardized and scalable structure to accelerate development and ensure best practices in API design and implementation.

---

## Tech Stack

- Node.js (>= v22.0.0)

- PostgreSQL (Database)

- Docker & Docker Compose (Containerization)

- Swagger (API Documentation)

---

## Configuration

The api uses environment variables for configuration. Before running, copy .env.example to .env and set the required values:

```bash
.env
```

`.env` example:

```dotenv
# API CONFIG
API_NAME=be-test-astronacci
API_PORT=5000

# DATABASE CONFIG
DATABASE_URL=postgresql://user:password@127.0.0.1:5432/db_test_astronacci

# OAUTH GOOGLE CONFIG
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_OAUTH_URL=https://oauth2.googleapis.com

# OAUTH FACEBOOK CONFIG
FACEBOOK_APP_ID=your_facebook_app_id
FACEBOOK_OAUTH_URL=https://graph.facebook.com/me

# JWT CONFIG
JWT_SECRET=secret
```

---

## Development

### Setup

Make sure you have **Node.js** installed.

Install dependencies:

```bash
npm install
```

### Start the App

Run the app in development mode:

```bash
npm run dev
```

---

## Database Migration

### Migrate a New Migration

```bash
npm run migration:migrate
```

### Generate Migrations

```bash
npm run migration:generate
```

### Reset the Last Migration

```bash
npm run migration:reset
```

> Ensure your database is up and accessible before running migration commands.

---

## Seeding the Database

Seed the database with initial data:

```bash
npm run seed:run
```

> Make sure the database is running before seeding.

---

## Deployment

### Deployment Branches

- `main`

### Deploy to Production

```bash
make deploy
```

---

## API Documentation

Swagger documentation is available at:

```
http://localhost:5000/api/docs
```

You can use this UI to explore and test API endpoints.

---

## Support

NestJS is an MIT-licensed open source project. Support is always appreciated!

Learn more: [https://docs.nestjs.com/support](https://docs.nestjs.com/support)

---

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

---

## License

NestJS is [MIT licensed](LICENSE).
