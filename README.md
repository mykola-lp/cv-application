# Project: CV Application 

## Introduction

Congratulations, you have made it to the very first React project. In this project, you will be creating a small application where users can input their information and generate a CV/résumé. It’s a great project to get you started because it includes many of the basic concepts you’ve learned so far, without a huge overhead of complexity.

## Built With

- React
- Vite
- JavaScript

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Assignment

> **Double rendering.** While working on this project, you might notice some parts of the code executing twice (for example, duplicated console logs).
>
> This behavior is caused by `React.StrictMode` and is expected during development. It helps React detect potential issues and does not affect the production build.

1. Create a new React project.

2. Think about how to structure your application into components. Your application should include:

    - A section to add general information like name, email and phone number.

    - A section to add your educational experience (school name, title of study and date of study)

    - A section to add practical experience (company name, position title, main responsibilities of your jobs, date from and until when you worked for that company)

3. Be sure to include an edit and submit button for each section or for the whole CV. The submit button should submit your form and display the value of your input fields in HTML elements. The edit button should add back (display) the input fields, with the previously displayed information as values. In those input fields, you should be able to edit and resubmit the content. You’re going to make heavy use of state and props, so make sure you understood those concepts.

4. Create a **components** directory under your **src** directory and add your components.

5. Include a **styles** directory under your **src** directory for your CSS files. You’ll need to import these in the component files to use them.

6. Push the results and deploy them with any of the options mentioned below. At this point of the curriculum, it doesn’t matter which platform you choose as long as your project is live on the internet!

**Note**

This project is deployed using GitHub Pages with a GitHub Actions workflow (`deploy.yml`) that automates the build and deployment process.