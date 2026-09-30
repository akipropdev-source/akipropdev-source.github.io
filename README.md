# Amon Kiprop — Portfolio

A personal portfolio website showcasing Amon Kiprop's services, skills, education, experience, and contact information.

## Features

- Responsive single-page layout with navigation to each section
- Animated introduction and scroll-reveal effects
- Contact links for email, phone, and WhatsApp
- Contact form powered by EmailJS
- Downloadable CV

## Built with

- HTML
- CSS
- JavaScript
- [EmailJS](https://www.emailjs.com/) for contact-form email delivery
- [Font Awesome](https://fontawesome.com/) for icons

## Run locally

No build tools or dependencies are required. Clone the repository and open `index.html` in a browser. For a local web server, you can use the VS Code Live Server extension.

## Contact form setup

The form uses EmailJS. The EmailJS public key, service ID, and template ID are configured at the top of `script.js`. To use your own EmailJS account, replace those values with the ones from your EmailJS dashboard.

The email template should use these variables:

| Variable | Form value |
| --- | --- |
| `{{from_name}}` | Sender's name |
| `{{from_email}}` | Sender's email address |
| `{{phone}}` | Sender's phone number |
| `{{subject}}` | Message subject |
| `{{message}}` | Message text |

The EmailJS template's **To Email** setting should point to the inbox where you want to receive messages. Never put private credentials or access tokens in client-side code.

## Deploy with GitHub Pages

This repository is configured as a static website and requires no build step:

1. Open the repository's **Settings → Pages** on GitHub.
2. Set the deployment source to the `main` branch and the repository root (`/`).
3. Save the settings and wait for GitHub Pages to publish the site.

After deployment, changes pushed to `main` will be published by GitHub Pages.
