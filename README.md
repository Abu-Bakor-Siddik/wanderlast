# Wanderlast

Wanderlast is a full-stack travel destination booking platform. Users can browse featured destinations, view details, book trips, and manage their bookings — all behind a secure authentication layer.

This is the **client (frontend)** app, built with Next.js. It works together with the [wanderlast-server](https://github.com/Abu-Bakor-Siddik/wanderlast-server) backend API.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, HeroUI, Tailwind CSS 4
- **Auth:** Better Auth with MongoDB adapter
- **Database:** MongoDB
- **Notifications:** React Hot Toast
- **Icons:** React Icons, Gravity UI Icons

## Features

- Browse featured and full destination listings
- View detailed destination pages
- Add new destinations
- Book trips and manage bookings from `/my-bookings`
- Email/password authentication with signup and login
- Protected routes via middleware (`src/proxy.js`) that redirect unauthenticated users
- Toast notifications for user feedback

## Project Structure

```
src/
├── app/
│   ├── add-destination/   # Add a new destination
│   ├── api/auth/           # Better Auth API routes
│   ├── destinations/       # Destination listing & detail pages
│   ├── login/               # Login page
│   ├── my-bookings/         # User's bookings (protected)
│   └── signup/               # Signup page
├── components/             # Reusable UI components
├── lib/
│   ├── auth.js              # Better Auth server config
│   └── auth-client.js        # Better Auth client config
└── proxy.js                 # Middleware for route protection
```

## Environment Variables

Create a `.env.local` file in the project root:

```env
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_better_auth_secret
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_SERVER_URL=http://localhost:5000
```

- `MONGODB_URI` — MongoDB connection string
- `BETTER_AUTH_SECRET` — Secret key used by Better Auth
- `BETTER_AUTH_URL` — Base URL of this app (used by Better Auth)
- `NEXT_PUBLIC_SERVER_URL` — URL of the [wanderlast-server](https://github.com/Abu-Bakor-Siddik/wanderlast-server) backend API

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abu-Bakor-Siddik/wanderlast.git
   cd wanderlast
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file as described above.

4. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the app.

## Deployment

This app is designed to be deployed on **Vercel**. Make sure to configure the environment variables in your Vercel project settings, and ensure `NEXT_PUBLIC_SERVER_URL` points to your deployed backend.

## Related Repositories

- Backend API: [wanderlast-server](https://github.com/Abu-Bakor-Siddik/wanderlast-server)

## License

This project is currently unlicensed. Add a license of your choice if you plan to open source it.
