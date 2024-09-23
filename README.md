# Payload Monolith Test

## Setup

- Duplicate `.env.example` and rename it to `.env`
- Install [Docker](https://docs.docker.com/get-started/get-docker/)
- Run Composer. This will spin up the containers and install npm modules
```
docker-compose up
```
- Open [http://localhost:3000](http://localhost:3000) to open the app in your browser

That's it! Changes made in `./src` will be reflected in your app. Follow the on-screen instructions to login and create your first admin user.

### Seed

To seed the database with a few pages, posts, and projects you can run `yarn seed`. This template also comes with a `GET /api/seed` endpoint you can use to seed the database from the admin panel.

The seed script will also create two users for demonstration purposes only:
1. Demo Author
    - Email: `demo-author@payloadcms.com`
    - Password: `password`
    - Role: `admin`
2. Demo User
    - Email: `demo-user@payloadcms.com`
    - Password: `password`
    - Role: `user`

> NOTICE: seeding the database is destructive because it drops your current database to populate a fresh one from the seed template. Only run this command if you are starting a new project or can afford to lose your current data.

## Production

To run Payload in production, you need to build and serve the Admin panel. To do so, follow these steps:

1. Invoke the `payload build` script by running `yarn build` or `npm run build` in your project root. This creates a `./build` directory with a production-ready admin bundle.
1. Finally run `yarn serve` or `npm run serve` to run Node in production and serve Payload from the `./build` directory.
1. When you're ready to go live, see [Deployment](#deployment) for more details.

### Deployment

Before deploying your app, you need to:

1. Ensure your app builds and serves in production. See [Production](#production) for more details.

The easiest way to deploy your project is to use [Payload Cloud](https://payloadcms.com/new/import), a one-click hosting solution to deploy production-ready instances of your Payload apps directly from your GitHub repo. You can also deploy your app manually, check out the [deployment documentation](https://payloadcms.com/docs/production/deployment) for full details.
