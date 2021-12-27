


# Website Structure
- [x] Structure of website, search bar, header, footer
- [ ] Render Lyrics on /search endpoint reflecting API return/cache hit
- [ ] Aesthetic fixes to homepage, i.e. spacing, colors, fonts, etc

# Genius API
- [x] Connect search button press and Genius API auth query
- [ ] Return from OAuth2, get redirect uri for actual query
- [ ] User session should now be able to freely query any artist

# Markov Chain
- [x] Object structure for Markov Chain
- [ ] Test chain on text files/in program lyrics

# Other features
- [ ] Recommend artists based on current user input
- [ ] Short blurb on what app does below search bar

# What's (immediately) next
- Figure out how to pass auth2.0 received token back into API call


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

