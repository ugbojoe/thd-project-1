# Project 1 Starter Repo using SASS and Gulp

## Introduction

This is a GitHub starter repo for Project 1 using Gulp, SASS, and THD's UX StyleGuide.

You can fork this repository and then clone your fork to begin work on your project. Once you have the repository cloned you will need to install the npm and bower dependencies and use `gulp` to run the project via a simple HTTP server (`connect`). `gulp` is configured to run your project in developer mode or build your project for a production deployment. In developer mode `gulp` will watch your filesystem for changes and run any needed preprocessors (SASS).

## How To Use

### Step 1 - Fork This Repository

Use GitHub to fork this repository. You can then go into the forked repository's _settings_ and change the name to whatever you want.

### Step 2 - Clone The Fork

Use the _terminal_ to clone your new forked repository to your local computer.

```bash
git clone <url-to-my-project-1>.  # clone your fork of this repo
cd <my-project-1>                 # cd into the new project folder
```

### Step 3 - Install the Project Dependencies

Use `yarn` (or `npm install`) to install the NodeJS dependencies for building and managing the project.
Use `bower` to install the bower dependencies (currently just jQuery).

```bash
yarn                              # a better version of `npm install`
bower install                     # installs jQuery and any other bower dependencies
```

### Step 4 - Test it out and get to work

```bash
atom .               # use `atom` to load the project into the Atom editor
open index.html.     # load the page into the default browser
```

Each time you edit a file in atom, save it and reload the browser page to see the results.



### Deploying to GitHub Pages

You can host a _live_ deployment of your project via gh-pages. Here are the steps to setup your repo for gh-pages:

#### Step 1

Remove the `dist` directory from the project’s `.gitignore` file (it’s ignored by default by Yeoman).

#### Step 2

Make sure git knows about your subtree (the subfolder with your site).

```bash
git add dist && git commit -m "Initial dist subtree commit"
```

#### Step 3

Use subtree push to send it to the `gh-pages` branch on GitHub.

```bash
git subtree push --prefix dist origin gh-pages
```
