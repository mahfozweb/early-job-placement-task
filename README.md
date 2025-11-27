# 🌱 Organic Agriculture Shop

Pure, chemical-free farm products grown naturally with care.
Healthy food for you, better sustainability for our environment.

## Table of Contents

- [About the Project](#about-the-project)
- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Dependencies](#dependencies)
- [Installation️ & Setup](#installation--setup)
- [Folder Structure](#folder-structure)

- [License](#license)
- [Contact](#contact)

---

# 📖 About the Project

This project is a modern agriculture-focused platform where customers can easily buy daily crop products directly from local farmers. Farmers can publish and sell their fresh produce, receive weather updates, access soil nutrient insights, and detect pests using AI-powered tools.

The platform also promotes smart irrigation practices, delivers daily agriculture tips, and provides the latest farming-related news—creating a complete digital ecosystem for both farmers and consumers.

# 📖 Project Overview :

## 🎯 Objective

The primary objective of this project is to build a trusted digital marketplace where farmers can easily sell their fresh crops, and customers can conveniently buy daily agricultural products at fair prices. Alongside the buying–selling system, the platform also supports farmers with helpful tools like weather updates, soil insights, and modern farming tips to improve productivity

## 👥 Target Audience

- Local Farmers who want to sell their crops directly to customers without middlemen.

- General Customers looking to buy fresh, organic, and fair-priced agricultural products.

- New & Small-Scale Farmers who need farming tips, weather updates, soil insights, and modern agricultural guidance.

- Agri-Businesses & Retailers seeking reliable sources of crops and agricultural goods
- Agriculture Enthusiasts interested in news, trends, and smart-farming technologies.

## 📊 Key Metrics

- Number of Active Farmers using the platform to sell crops.

- Daily Active Users (DAU) buying, browsing, and engaging with the app.

- Total Crop Listings published on the marketplace.

- Monthly Transactions (total orders placed and completed).

- Customer Satisfaction Rating based on reviews and feedback.

- Average Delivery Time for purchased crops.

- Repeat Purchase Rate showing customer loyalty.

- Engagement Metrics for farming tips, weather updates, and AI pest detection features.

## 🚀 Deployment

- The project is deployed on Vercel: [Click here to view](https://early-job-placement-task.vercel.app/)

## ✨ Key Features

1. **Browse Crops & Vegetables**  
   Explore a wide range of crops and vegetables listed by farmers and users.

   Filter results by category, price, and availability.

   Real-time stock information ensures accurate browsing.

2. **Upload & Sell Crops**  
   Users can upload their own crops with details:

Name, category, price, quantity

Care level, description, and images

Manage uploaded items anytime through the dashboard.

3. **Seller Admin Control**  
   Each uploader is the admin of their own products.

Approve or decline buyer requests.

Inventory auto-updates when requests are accepted.

4. **Request & Purchase Crops**  
   Buyers can send purchase requests to sellers.

Sellers can accept or reject requests.

Quantity reduces automatically upon approval.

Users can track all request statuses in real time.

5. **Secure Authentication**  
   Firebase Authentication for login, registration, and logout.

Password reset support for smooth account management.

Role-based data access for improved security. 6. **Agriculture News & Daily Tips**  
Latest agricultural updates from trusted sources.

Daily farming tips to improve productivity.

Learn best practices to increase crop quality. 7. **User Dashboard**  
Manage uploaded crops, profile, and incoming/outgoing requests.

Edit or delete crop listings easily.

Track accepted, declined, or pending requests.

8. **Admin Dashboard (Future Enhancement)**  
   View and moderate all user uploads.

Manage user accounts and platform-wide activities.

Analytics and reporting features.

9. **Responsive & Modern Design**  
   Fully responsive UI built with Tailwind CSS and DaisyUI.  
   Optimized for desktop, tablet, and mobile devices.  
   Smooth and intuitive navigation for a seamless user experience.

10. **Deployment & Scalability**  
    Fully deployed on Vercel for fast global access.

Backend designed to scale with increased users and data.

Continuous improvements and feature updates planned.

## 🛠️ Tech Stack

### 🎨 Frontend

<div align="left">

| Technology       | Icon                                                                                                |
| ---------------- | --------------------------------------------------------------------------------------------------- |
| **HTML5**        | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="40"/> |
| **CSS3**         | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="40"/>   |
| **Tailwind CSS** | <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" width="40"/>          |
| **Next.js**      | <img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" alt="Next.js Logo" width="40"/>        |

</div>

---

### 🧩 Backend

<div align="left">

| Technology     | Icon                                                                                                                                                              |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Node.js**    | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="40"/>                                                             |
| **Express.js** | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="40" style="background:white; padding:5px; border-radius:6px;"/> |

</div>

---

### 🗄️ Database

<div align="left">

| Technology  | Icon                                                                                                    |
| ----------- | ------------------------------------------------------------------------------------------------------- |
| **MongoDB** | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width="40"/> |

</div>

---

### 🔐 Authentication

<div align="left">

| Technology        | Icon                                                                                 |
| ----------------- | ------------------------------------------------------------------------------------ |
| **Firebase Auth** | <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" width="40"/> |

---

### 🚀 Deployment

<div align="left">

| Platform   | Icon                                                                             |
| ---------- | -------------------------------------------------------------------------------- |
| **Vercel** | <img src="https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg" width="40"/> |

</div>

# 📦 Dependencies

### 🖥️ Frontend (Client)

- **Next.js** – Frontend library for building UI
<!-- - **React Router DOM** – Client-side routing -->
- **Tailwind CSS** – Utility-first CSS framework for styling
- **DaisyUI** – Component library for Tailwind
- **Firebase** – Authentication & cloud services
- **React Hot Toast** – Notifications
- **UseEffect / Fetch API** – For HTTP requests

### 🗄️ Backend (Server)

- **Node.js** – JavaScript runtime
- **Express.js** – Backend framework for building APIs
- **MongoDB Atlas** – Cloud database service

### ⚡ Dev Tools

- **VS Code** – Code editor
- **Postman** – API testing
- **Git & GitHub** – Version control and repository management
- **Vercel** – Deployment platform for frontend
- **MongoDB Atlas** – Deployment platform for database

# 🚀 Installation / Local Setup

Follow the steps below to run **KrishiLink** locally.

---

## 📥 🖥️ FRONTEND SETUP

```bash
git clone https://github.com/mahfozweb/assignment-krishi-client.git
cd krishilink
npm install
# Create Environment File
# This file will store your backend API URL and Firebase config
VITE_apiKey=yourApiKey
VITE_authDomain=yourAuthDomain
VITE_projectId=yourProjectId
VITE_storageBucket=yourStorageBucket
VITE_messagingSenderId=yourMessagingSenderId
VITE_appId=yourAppId

VITE_SERVER_URL=http://localhost:4000
# Run Frontend
npm run dev

```

# 🗄️ BACKEND SETUP

```bash
# Open a New Terminal & Navigate to Server Folder
cd ../server
# Install Dependencies
npm install
# Create Backend .env File
PORT=4000
MONGO_URL=yourMongoDBURL
JWT_SECRET=yourSecretKey
# Start Backend Server
npm start


```

# 🎉 All Setup Done!

## Your project is now running locally with:

- Frontend: http://localhost:5173

- Backend: http://localhost:4000

---

# 📜 License

This project is **licensed under the MIT License** – one of the most permissive open-source licenses.  
You are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of this project, under the following conditions:

- You **must include the original copyright notice** and this permission notice in all copies or substantial portions of the project.
- The software is provided **“as is”**, without warranty of any kind, express or implied.
- The authors are **not responsible for any damages or liabilities** arising from the use of this project.

For more details, see the [LICENSE.txt](LICENSE.txt) file included in this repository.

---

## 📫 Contact

- **🌐 Project Live Link:** [KrishiLink Live Site](http://young-romahfoz123d.surge.sh/)
- **✉️ Email:** [mahfoz81000@gmail.com](mailto:mahfoz81000@gmail.com)
