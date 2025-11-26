# Publishing Guide for vue-flip-clock

This guide explains how to publish the package to npm and deploy the demo to GitHub Pages.

## Prerequisites

1. **npm Account**: Create an account at [npmjs.com](https://www.npmjs.com)
2. **GitHub Repository**: Push your code to GitHub
3. **npm Access Token**: Create an automation token at [npmjs.com/settings/tokens](https://www.npmjs.com/settings/~/tokens)

## Setup Steps

### 1. Update Package Information

Edit `package.json` and update:
- Replace `"author": "Your Name"` with your name
- Replace all instances of `xiaxiangfeng` in URLs with your GitHub username
- Verify the version number

### 2. Configure GitHub Secrets

Add your npm token to GitHub repository secrets:

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `NPM_TOKEN`
5. Value: Your npm automation token
6. Click **Add secret**

### 3. Enable GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Source: **GitHub Actions**
3. Save

## Publishing to npm

### Method 1: Automatic (Recommended)

1. Update version in `package.json`:
   ```bash
   npm version patch  # or minor, or major
   ```

2. Update `CHANGELOG.md` with changes

3. Commit changes:
   ```bash
   git add .
   git commit -m "chore: release v1.0.0"
   ```

4. Create and push a version tag:
   ```bash
   git tag v1.0.0
   git push origin main --tags
   ```

5. The GitHub Action will automatically:
   - Build the library
   - Publish to npm
   - Create a GitHub release

### Method 2: Manual

1. Build the library:
   ```bash
   npm run build
   ```

2. Login to npm:
   ```bash
   npm login
   ```

3. Publish:
   ```bash
   npm publish --access public
   ```

## Deploying Demo to GitHub Pages

The demo is automatically deployed when you push to the `main` branch.

To manually trigger deployment:
1. Go to **Actions** tab in GitHub
2. Select **Deploy Demo to GitHub Pages** workflow
3. Click **Run workflow**

Your demo will be available at: `https://xiaxiangfeng.github.io/vue-flip-clock/`

## Version Update Checklist

Before releasing a new version:

- [ ] Update version in `package.json`
- [ ] Update `CHANGELOG.md` with changes
- [ ] Test build: `npm run build`
- [ ] Test demo: `npm run build:demo`
- [ ] Test locally: `npm run dev`
- [ ] Commit all changes
- [ ] Create and push version tag
- [ ] Verify npm publish succeeded
- [ ] Verify GitHub release created
- [ ] Test installed package in a separate project

## Testing Package Locally

Before publishing, test the package:

1. Create a package file:
   ```bash
   npm pack
   ```

2. In another project, install the local package:
   ```bash
   npm install /path/to/vue-flip-clock-1.0.0.tgz
   ```

3. Test importing and using the component

## Troubleshooting

### npm publish fails

- Verify you're logged in: `npm whoami`
- Check package name isn't taken: Search on [npmjs.com](https://www.npmjs.com)
- Ensure version hasn't been published before

### GitHub Actions fail

- Check secrets are properly configured
- Verify workflow YAML syntax
- Check build logs in Actions tab

### Demo doesn't deploy

- Ensure GitHub Pages is enabled
- Check the base path in `vite.config.js` matches your repository name
- Verify workflow permissions in repository settings

## Post-Publication

After successful publication:

1. Announce on social media, if desired
2. Update README badges
3. Consider submitting to:
   - [awesome-vue](https://github.com/vuejs/awesome-vue)
   - [Made with Vue.js](https://madewithvuejs.com/)

---

**First Time Publishing?**

Replace placeholders in:
- `package.json`: author, repository URLs
- `README.md`: demo URLs, GitHub username
- `LICENSE`: your name and year
- `CHANGELOG.md`: GitHub repository URLs
