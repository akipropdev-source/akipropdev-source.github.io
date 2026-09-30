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

The included GitHub Actions workflow deploys the static site when changes are pushed to `main`. To enable it:

1. Open the repository's **Settings → Pages** on GitHub.
2. Set the build and deployment source to **GitHub Actions**.
3. Push a commit to `main`, or run **Deploy portfolio to GitHub Pages** from the **Actions** tab.

After a successful workflow run, the site is published at <https://akipropdev-source.github.io/>.
