This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Development (with auto-refresh)

Run the dev server so the browser **updates automatically** when you save files:

```bash
npm run dev
```

Then open **[http://localhost:3002](http://localhost:3002)** in your browser.

- **Fast Refresh** is on: edits to `app/page.tsx`, components, and `globals.css` will update the browser without a full reload.
- Keep the terminal running while you work.
- If the page spins or doesn’t load, stop the server (Ctrl+C), run `npm run dev` again from your system terminal, and wait for “Ready” before opening the URL.

### Production (no auto-refresh)

To run the built site locally (no live reload):

```bash
npm run build
npm run start
```

Open [http://localhost:3002](http://localhost:3002). Restart and rebuild after making changes.

### Refresh not showing updates?

- **Using `npm run start`?** That server serves a **fixed build**. After you change code you must run `npm run build` then restart the server (Ctrl+C, then `npm run start` again). Or run `npm run refresh` once to rebuild and start.
- **Using `npm run dev`?** Save the file and wait a second; the browser should update automatically. If it doesn’t, do a hard refresh (Cmd+Shift+R or Ctrl+Shift+R).
- The app sends `Cache-Control: no-cache` for the homepage so the browser doesn’t keep serving an old copy after you rebuild.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
