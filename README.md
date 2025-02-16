# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


# OTP-Based Email Login System

## Project Overview
This project implements an OTP-based login system using React.js, replacing traditional password authentication. The system enhances security and user convenience by generating a one-time password (OTP) and validating user input within a time limit.

## Objectives
Authentication: OTP-based login for enhanced security.
Design Consistency: UI adheres strictly to the provided design specifications.

## Development:
Generates a random OTP and displays it via an alert.
OTP is valid for 30 seconds.
If the user enters the correct OTP within the time limit, they are redirected to the dashboard.
Incorrect or expired OTPs will prompt the user to request a new OTP.
OTP data is managed using local storage or a data.json file.
Deployment: Hosted on Netlify or Vercel.

## Tech Stack
Frontend: React.js

Libraries:
  emailjs-com → Send OTP via email
  chart.js → Visual representation in the dashboard
Storage: Local storage / data.json
Hosting: Netlify / Vercel

## Features
✔ OTP generation and validation
✔ Email OTP delivery using EmailJS
✔ Auto-expiry of OTP after 30 seconds
✔ Responsive UI following design specifications
✔ Deployed for easy access
