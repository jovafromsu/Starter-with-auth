Starter-with-auth
Next.js/Node.js starter with Login system and roles.

**Example for config.js file 
**
```bash
const DB_URI = process.env.NODE_ENV === "production"
  ? "mongodb+srv://STRING...."
  : "mongodb://localhost:27017/DB_NAME....";

const API =
process.env.NODE_ENV === "production"
  ? "https://xxx.vercel.app/api"
  : "http://localhost:3000/api";

const NEXTAUTH_SECRET = "ADD_SECRET...";
const NEXTAUTH_URL =
process.env.NODE_ENV === "production"
  ? "https://xxx.vercel.app"
  : "http://localhost:3000";

const GOOGLE_CLIENT_ID="ADD_ID...";
const GOOGLE_CLIENT_SECRET="ADD_SECRET...";

module.exports = {
DB_URI,
API,
NEXTAUTH_SECRET,
NEXTAUTH_URL,
GOOGLE_CLIENT_ID,
GOOGLE_CLIENT_SECRET,
};

```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
