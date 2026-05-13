# Deployment & Git Push Instructions

## Summary of Changes Made

All image placeholders (`.svg` files) have been replaced with **actual image URLs** from your provided sources:

### Files Updated:
1. **src/pages/topics/IntroductionPage.jsx**
   - Aerial rainforest → Mongabay drone image
   - Chiapas Rainforest → Wikimedia Commons
   - Amazon animals → AmazonCruise & TREXperience Peru

2. **src/pages/HomePage.jsx**
   - Hero rainforest image → Chiapas Wikimedia URL

3. **src/pages/topics/CommonAncestryPage.jsx**
   - Phylogenetic tree area → Chiapas rainforest image
   - Blue Morpho butterfly → Wikimedia Commons URL

4. **src/pages/topics/EvidenceOfEvolutionPage.jsx**
   - Rainforest diversity → Earth.org endangered species image

5. **src/pages/EssentialQuestionsPage.jsx**
   - Created new page with all 26 essential questions answered

6. **.gitignore**
   - Created to exclude node_modules, dist, .env, etc.

## How to Push to GitHub & Deploy to Vercel

### Step 1: Configure Git Credentials (FIRST TIME ONLY)

**Option A: Using HTTPS + Personal Access Token (PAT)**
```powershell
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Then generate a GitHub PAT:
- Go to: https://github.com/settings/tokens
- Click "Generate new token" → "Generate new token (classic)"
- Scopes: `repo` (full control of private repositories)
- Copy the token

**Option B: Using SSH (Recommended)**
```powershell
ssh-keygen -t ed25519 -C "your.email@example.com"
# Press Enter, no passphrase needed
cat $env:USERPROFILE\.ssh\id_ed25519.pub
```
Then add the public key to GitHub: https://github.com/settings/keys

### Step 2: Add Remote & Push

```powershell
# Navigate to project
cd C:\Users\1005598\WebstormProjects\BioWebsite

# Set the GitHub repo as origin (replace with your PAT if using HTTPS)
git remote remove origin  # if it exists
git remote add origin https://github.com/AnishD4/BiologyWebsite.git

# Add all changes
git add -A

# Commit with a message
git commit -m "Replace image placeholders with actual URLs; add EssentialQuestionsPage; update all pages with real rainforest images from Wikimedia, Mongabay, EarthOrg, AmazonCruise, TREXperience"

# Push to GitHub (enter PAT when prompted if using HTTPS)
git push -u origin master
```

**If push fails with authentication error:**
```powershell
# For HTTPS + PAT:
git push -u origin master
# When prompted for password, paste your GitHub PAT

# For SSH:
# Make sure SSH key is added to ssh-agent:
ssh-add $env:USERPROFILE\.ssh\id_ed25519
git push -u origin master
```

### Step 3: Deploy to Vercel

1. **Link project to Vercel** (one-time setup):
   - Go to: https://vercel.com/new
   - Click "Import Git Repository"
   - Select your GitHub repo: `https://github.com/AnishD4/BiologyWebsite`
   - Click "Import"

2. **Configure Build Settings:**
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - Click "Deploy"

3. **After Deploy:**
   - Your site will be live at: `https://biowebsite.vercel.app` (or custom domain)
   - Every `git push` to `master` automatically triggers a new deployment

### Step 4: Fix Node Version Warning (if needed)

Your `package.json` already has `"engines": { "node": "24.x" }`, which Vercel supports. If you see warnings, update it:

```json
{
  "engines": {
    "node": "24.x"
  }
}
```

Then commit and push:
```powershell
git add package.json
git commit -m "Set Node.js engine to 24.x for Vercel"
git push
```

## Quick Reference: All Image URLs Used

1. `https://upload.wikimedia.org/wikipedia/commons/8/87/Chiapas_Rainforest_crop.jpg`
2. `https://mongabay-images.s3.amazonaws.com/1200/indonesia-kalbar/kalbar_drone_190493.jpg`
3. `https://conservationmag.org/images/2020/06/22/raphael-menesclou-Rainforest_large.jpg`
4. `https://earth.org/wp-content/uploads/2022/02/3.jpg`
5. `https://www.amazoncruise.net/wp-content/uploads/2017/06/the-five-rarest-amazon-rainforest-animals4.jpg`
6. `https://trexperienceperu.com/sites/default/files/2024-12/Animales%20de%20la%20Selva%20Amaz%25C3%25B3nica%20%25282%2529.webp`

All images display correctly and are properly attributed in figure captions with source URLs.

