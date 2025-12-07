# SaaS Boilerplate

A simple boilerplate for easy SaaS setup with modern web technologies.

## Tech Stack

- **[Nuxt](https://nuxt.com/)** - The Intuitive Vue Framework
- **[Better Auth](https://www.better-auth.com/)** - Authentication solution for TypeScript
- **[Nuxt UI](https://ui.nuxt.com/)** - Fully styled and customizable UI components
- **[Prisma](https://www.prisma.io/)** - Next-generation ORM for Node.js and TypeScript
- **[PostgreSQL](https://www.postgresql.org/)** - Advanced open source relational database

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher)
- pnpm, npm, or yarn
- PostgreSQL database

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd <your-project-name>
```

### 2. Install dependencies

```bash
pnpm install
# or
npm install
# or
yarn install
```

### 3. Set up environment variables

Create a `.env` file in the root directory:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
BETTER_AUTH_SECRET="your-secret-key"
BETTER_AUTH_URL="http://localhost:3000"
```

### 4. Set up the database

```bash
# Generate Prisma Client
pnpm prisma generate

# Run database migrations
pnpm prisma migrate dev
```

### 5. Start the development server

```bash
pnpm dev
```

Your application will be available at `http://localhost:3000`

## Project Structure

```
├── app/
│   ├── pages/						# Application pages
│   ├── components/				# Vue components
│   ├── composables/			# Vue composables
├── prisma/
│   ├── schema.prisma    	# Database schema
│   └── migrations/       # Database migrations
├── server/
│   ├── api/              # API routes
│   └── utils/            # Server utilities
└── public/               # Static assets
```

## Database Management

### Create a migration

```bash
pnpm prisma migrate dev --name your_migration_name
```

### Open Prisma Studio

```bash
pnpm prisma studio
```

### Reset the database

```bash
pnpm prisma migrate reset
```

## Authentication

This boilerplate uses Better Auth for authentication. The configuration can be found in the server utilities. Customize the authentication strategy according to your needs.

## Building for Production

```bash
# Build the application
pnpm build

# Preview the production build
pnpm preview
```

## Deployment

This application can be deployed on various platforms:

- **Vercel** - Recommended for Nuxt applications
- **Netlify** - Great alternative with similar features
- **Railway** - Includes PostgreSQL database hosting
- **Render** - Full-stack hosting with database support

Make sure to set up your environment variables on your chosen platform.

## License

MIT

