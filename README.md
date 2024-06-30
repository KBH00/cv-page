# Next.js GitHub Pages

Deploy Next.js to GitHub Pages with GitHub Actions. [View the deployed app](https://gregrickaby.github.io/nextjs-github-pages/) 🚀

Now with Next.js App Router support! If you need Pages Router support [click here](https://github.com/gregrickaby/nextjs-github-pages/releases/tag/pages_dir).

> ⚠️ Heads up! GitHub Pages _does not_ support serverless or edge functions. This means dynamic functionality will be disabled. See all the [unsupported features](https://nextjs.org/docs/app/building-your-application/deploying/static-exports#unsupported-features).

---

## Configure Next.js

### Next.js Config

First, you need to configure Next.js to [deploy static exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports). This is required for GitHub Pages to work.

1. Open the `next.config.mjs` file
2. Add the following:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Enable static exports for the App Router.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: "export",

  /**
   * Set base path. This is the slug of your GitHub repository.
   *
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
   */
  basePath: "/nextjs-github-pages",

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

3. Save the `next.config.mjs`

4. Finally, place a `.nojekyll` file in the `/public` directory to disable GitHub Pages from trying to create a [Jekyll](https://github.blog/2009-12-29-bypassing-jekyll-on-github-pages/) website.

```treeview
.
├── app/
├── public/
│   └── .nojekyll
├── next.config.js
```

Perfect! This is all you need to configure Next.js to deploy on GitHub Pages.

### Add base path to `page.tsx`

Next, you will need to add the base path to images in `page.tsx` file. This is required for the images to appear on GitHub Pages.

1. Open `app/page.tsx`
2. Find the `Image` components
3. Add `/nextjs-github-pages/` (or the slug of your GitHub repository) to the `src` prop:

```tsx[class="line-numbers"]
   <Image
     src="/nextjs-github-pages/vercel.svg"
     alt="Vercel Logo"
     className={styles.vercelLogo}
     width={100}
     height={24}
     priority
   />
```

4. Save the `page.tsx` file

Learn more by reading the official documentation [for basePath and images](https://nextjs.org/docs/app/api-reference/next-config-js/basePath#images).

---

## Configure GitHub Repository

Next you need to configure Github for automated deployments via GitHub Actions.

### Enable GitHub Pages

The following settings use the [Github Action Deploy Pages](https://github.com/actions/deploy-pages) to deploy. I prefer this workflow because you don't need to generate SSH keys or use a personal access token.

1. Go to your repository's **Settings** tab
2. Click "Pages" in the sidebar
3. Under "Build and Deployment", select "GitHub Actions" as the source:

![screenshot of github pages settings](https://github.com/gregrickaby/nextjs-github-pages/assets/200280/a5f757c3-f515-4ca2-aadf-d2979c2c3bf5)

### Setup GitHub Action

This is where the magic happens! This [workflow file](https://github.com/gregrickaby/nextjs-github-pages/blob/main/.github/workflows/deploy.yml) will automatically build and deploy the app when you push to the `main` branch.

1. Create `.github/workflows/deploy.yml` file
2. Paste the contents of <https://github.com/gregrickaby/nextjs-github-pages/blob/main/.github/workflows/deploy.yml>
3. Save the `deploy.yml` file

### Push to GitHub

Now that everything is configured, you can commit your code and push to GitHub. This will trigger the GitHub Action workflow and deploy your app to GitHub Pages.

```bash
git add . && git commit -m "Initial commit" && git push
```

You should see your site deployed to GitHub Pages in a few minutes. 🚀

---

## Wrap up

Thanks for reading and I hope this helps. If you noticed someting wrong, please [file an issue](https://github.com/gregrickaby/nextjs-github-pages/issues). Good luck! 🍻

---

```
KBH00.github.io
├─ .eslintrc.json
├─ .git
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  └─ main
│  │     └─ remotes
│  │        └─ origin
│  │           └─ HEAD
│  ├─ objects
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-dd516201ca4fae476e04299c2865d77a7ea4e875.idx
│  │     ├─ pack-dd516201ca4fae476e04299c2865d77a7ea4e875.pack
│  │     └─ pack-dd516201ca4fae476e04299c2865d77a7ea4e875.rev
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     └─ HEAD
│     └─ tags
├─ .github
│  ├─ dependabot.yml
│  ├─ FUNDING.yml
│  ├─ PULL_REQUEST_TEMPLATE.md
│  └─ workflows
│     └─ deploy.yml
├─ .gitignore
├─ app
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ page.tsx
├─ components
│  ├─ component
│  │  └─ component.tsx
│  └─ ui
│     ├─ badge.tsx
│     ├─ button.tsx
│     └─ card.tsx
├─ components.json
├─ lib
│  └─ utils.ts
├─ LICENSE
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ .nojekyll
│  ├─ next.svg
│  ├─ placeholder.svg
│  └─ vercel.svg
├─ README.md
├─ tailwind.config.ts
└─ tsconfig.json

```