# 🦸‍♂️ React-Marvel Explorer

This project was originally planned as a superhero application using **Marvel** characters, but due to resource limitations, it now uses the **Rick and Morty** API. The application includes a secure login system validated with **Google reCAPTCHA** and a character explorer where you can click on a table row to view detailed information about each character from the official **Rick and Morty** API.

## 🚀 Features

* **Secure Authentication:** Login validated with Google reCAPTCHA.  
* **Rick and Morty API Integration:** Character explorer where clicking on a table row opens a detail view.  
* **Modern Tooling:** Built on **Vite** for ultra-fast development.  
* **Responsive Design:** Interface adapted for all devices.

---

## 🛠️ Environment Configuration

For the validation system (reCAPTCHA) to work correctly, you need to configure the Google access keys.

1.  Create a `.env` file in the root of the project.
2.  Add your site key using the following format:

```env
VITE_SITE_KEY=your_google_recaptcha_site_key_here
