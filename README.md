# The Detweilers Website

[Live Website](https://thedetweilers.com)

## About

I built this site to help promote my band and get gigs.
It was originally built using a web builder but this new version was made using React and Vite.
Aside from trying to help my band, I wanted to learn React and use this website in my portfolio.

## Features

- Responsive navigation
- Upcoming shows
- Booking/contact form
- Gallery
- Interactive band-member images
- Poster archive
- Responsive layouts

## Tech Stack

- React
- Vite
- React Router
- CSS
- Formspree
- GitHub Pages

## What I Learned

This project seemed like a good excuse to finally dive into React, which was exciting as I had relatively little React experience and had to learn the fundamentals of JSX and how a React application is structured. I started with most of my JSX in `App.jsx`, but eventually created a pages folder to separate my content and defined routes for those pages in `App.jsx` using React Router. I also created a reusable Header component for site-wide navigation. This led to learning dynamic navigation, the difference between `Link` and `NavLink`, as well as how to handle links from other pages back to specific sections of the homepage.

I then familiarized myself with React state by using it to control the hamburger menu and dropdown navigation on mobile. I also used state on the Gallery page to keep track of which content should be rendered based on user selection. I learned to use `.map()` to loop through arrays of image data and render them as React elements instead of writing out every image individually.

The images themselves were another learning curve. I learned more about the differences between PNG, JPG and WebP and went through the process of optimizing the site's images for the web. This included resizing large master images, converting photographs and posters to WebP where appropriate, and balancing image quality against file size.

The last major step was learning about deployment and DNS. I deployed the site through GitHub Pages and changed the DNS records for `thedetweilers.com` so the domain would point to the new site instead of the old GoDaddy website. I also added a CNAME file to the project so the custom domain is preserved when the site is deployed.

The best part of this project was being able to truly begin my front-end development journey by moving beyond simple HTML/CSS/JS static sites. I have been slowly improving my web development skills through projects, and when it came time to build on my band's success by replacing our existing website, it felt natural to take the next step and learn a front-end framework like React. 

## Running Locally

Clone the repository:

```bash
git clone git@github.com:evangwalker/detweilers-website.git
```

Navigate to repository folder

```bash
cd detweilers-website
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Deployment

When the project is deployed, Vite creates a production build in the `dist` folder. The contents of this folder are then published to GitHub Pages and served at the custom domain `thedetweilers.com`.

Save and commit changes:

```bash
git add .
git commit -m "commit message"
git push
```

Deploy site:

```bash
npm run deploy
```

## Future Development
- Drum Cam page
- Interactive beat maker
- Automated testing
- CI/CD
- Merch integration


## Author
Evan Walker