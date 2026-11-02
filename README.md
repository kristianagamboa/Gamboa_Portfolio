# Kristiana Gamboa | Personal Portfolio

A responsive portfolio for Kristiana Chryselle Gamboa, a third-year BSIT student at Bulacan State University. Built with plain HTML, CSS, and JavaScript, with no build step, so it deploys to GitHub Pages as is.

**Sections:** Home, About, Skills, Projects (PlanIT, Code Blocks, Keax Drift), Education, Contact.
**Live site:** `https://kristianagamboa.github.io/portfolio/` (works after you deploy with the repository name `portfolio`).

## Structure
```
portfolio/
├── index.html
├── css/style.css
├── js/script.js
├── assets/images/ (profile.jpg, planit.jpg, codeblocks.jpg, keaxdrift.jpg)
├── README.md
└── .gitignore
```

## Run locally
Double-click `index.html`, or in VS Code use the Live Server extension.

## Upload with Git
1. On github.com, click **New repository**, name it `portfolio`, keep it Public, and leave "Add README / .gitignore" unchecked (this project already has them).
2. In a terminal inside the project folder:
```
git init                 # start tracking this folder
git add .                # stage all files
git commit -m "Initial portfolio commit"
git branch -M main       # name the branch main
git remote add origin https://github.com/kristianagamboa/portfolio.git
git push -u origin main  # upload to GitHub
```
Authentication: GitHub no longer accepts account passwords in the terminal. When prompted, sign in through the browser window, or use a personal access token as the password.

## Upload with GitHub Desktop
1. Install GitHub Desktop and sign in.
2. File > Add local repository, choose this folder (accept "create a repository" if asked).
3. Write a summary, click **Commit to main**, then **Publish repository** (uncheck "Keep this code private").
4. For later changes, edit files, commit, then click **Push origin**.

## Publish with GitHub Pages
Repository > Settings > Pages > Source: **Deploy from a branch** > Branch: `main`, folder `/ (root)` > Save. After a minute or two the link appears at the top of that page.

## Update the site
- **Text, contact info, skills:** edit `index.html`.
- **Replace the photo:** overwrite `assets/images/profile.jpg` (same name), or change the `src` in `index.html`.
- **Project screenshots:** save the image in `assets/images/`, then replace the `<div class="shot">` in the project card with `<img src="assets/images/yourfile.png" alt="Describe the screenshot">` (a comment in the file shows where).
- **Add a project:** copy one `<article class="card">` block and edit it.
- **Publish changes:** `git add .`, `git commit -m "Update portfolio"`, `git push` (or commit and push in GitHub Desktop). The live site refreshes in a minute or two.

## Troubleshooting
- **"git is not recognized":** install Git from git-scm.com, then reopen the terminal.
- **"remote origin already exists":** run `git remote set-url origin YOUR_URL`.
- **Push rejected:** the repo has files you don't have. Run `git pull origin main --allow-unrelated-histories`, then push again.
- **404 on the live site:** confirm Pages is set to `main` and `/ (root)`, and that `index.html` is at the top level of the repo.
- **Missing CSS or images online:** file names are case-sensitive on GitHub Pages. Match `profile.jpg` exactly.
- **Changes not showing:** wait two minutes, then hard refresh with Ctrl+Shift+R.

## To finish manually
PlanIT's technologies and backend work (highlighted in yellow) and both project screenshots are placeholders. Add a Formspree or similar service if you later want a contact form.
