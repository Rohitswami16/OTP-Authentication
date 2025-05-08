# OTP-Based Email Login System

## 📌 Project Overview
This project implements an **OTP-based login system** using **React.js**, replacing traditional password authentication.  
It enhances security and user convenience by generating a **one-time password (OTP)** and validating user input within a time limit.

---

## 🎯 Objectives
1. **Authentication**: OTP-based login for enhanced security.
2. **Design Consistency**: UI adheres strictly to the provided design specifications.
3. **Development**:
   - Generates a **random OTP** and displays it via an **alert**.
   - OTP is **valid for 30 seconds**.
   - If the user enters the correct OTP within the time limit, they are redirected to the **dashboard**.
   - Incorrect or expired OTPs will prompt the user to request a **new OTP**.
   - OTP data is managed using **local storage** or a **data.json** file.
4. **Deployment**: Hosted on **Netlify**.

---

## 🛠 Tech Stack
- **Frontend**: React.js
- **Libraries**:
  - 📧 `emailjs-com` → Send OTP via email
  - 📊 `chart.js` → Visual representation in the dashboard
- **Hosting**: Netlify

---

## 🚀 Features
✔ **OTP generation and validation**  
✔ **Email OTP delivery using EmailJS**  
✔ **Auto-expiry of OTP after 30 seconds**  
✔ **Responsive UI following design specifications**  
✔ **Deployed for easy access**  

---
