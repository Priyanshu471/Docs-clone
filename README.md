# Google Docs Clone

This is a web application that serves as a clone of Google Docs. It is built using React.js and Tailwind CSS, and it includes features such as user authentication (login and logout) using Firebase as the database.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies](#technologies)

## Installation

To install and run this application locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies by running the command: `yarn add`.
4. Create a Firebase project and enable the Authentication service.
5. Set up a Firestore database in your Firebase project.
6. Enable the Firestore database in test mode.
7. Add you projects config to config.js
8. Start the development server by running the command: `yarn start`.

## Usage

Once the application is running, you can access it by navigating to `http://localhost:3000` in your web browser. You will be presented with a login screen where you can either sign in with an existing account or create a new one.

After logging in, you will be redirected to the document manger page. Here, you can create,delete you previous documents, The application provides features similar to Google Docs, including text formatting.

To log out, simply click on the user image or close the browser tab/window.

## Features

- User authentication (login and logout)
- Text formatting (e.g., bold, italics, underline)
- Autosave functionality
- User-friendly interface inspired by Google Docs

## Technologies

This application is built using the following technologies:

- React.js: A JavaScript library for building user interfaces.
- Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.
- Firebase: A cloud-based platform for building web and mobile applications, including authentication and real-time database capabilities.

