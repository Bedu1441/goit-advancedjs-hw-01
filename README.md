# goit-advancedjs-hw-01

Homework for the Advanced JavaScript course.

## Description

This project contains two tasks:

1. Image gallery created dynamically with JavaScript and SimpleLightbox.
2. Feedback form with data saved to localStorage.

## Technologies

- HTML
- CSS
- JavaScript
- Vite
- SimpleLightbox
- localStorage

## Task 1: Gallery

The gallery is created dynamically from an array of image objects.

Implemented features:

- gallery markup is generated dynamically in JavaScript;
- images are rendered from the `images` array;
- SimpleLightbox is installed and imported via npm;
- SimpleLightbox opens the large image in a modal window;
- image captions are taken from the `alt` attribute;
- captions are displayed at the bottom;
- caption delay is set to 250 ms;
- no custom click listeners are used for gallery items.

## Task 2: Feedback Form

The feedback form saves user input to localStorage.

Implemented features:

- form contains email field, message field, and submit button;
- form data is stored in the `formData` object;
- input data is saved to localStorage under the key `feedback-form-state`;
- saved data is restored after page reload;
- data is trimmed before saving;
- both fields are validated before submit;
- if a field is empty, the message `Fill please all fields` is shown;
- after successful submit, current form data is logged to the console;
- localStorage, form fields, and `formData` are cleared after successful submit.

## Project Structure

```text
goit-advancedjs-hw-01
├── src
│   ├── css
│   │   └── styles.css
│   ├── 1-gallery.html
│   ├── 1-gallery.js
│   ├── 2-form.html
│   ├── 2-form.js
│   ├── images.js
│   └── index.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
Installation
npm install
Run Locally
npm run dev
Build
npm run build
Repository

https://github.com/Bedu1441/goit-advancedjs-hw-01

Live Page

https://Bedu1441.github.io/goit-advancedjs-hw-01/
```
