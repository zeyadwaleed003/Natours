# Tour Booking API & Web Application

A full-stack tour booking system featuring a REST API and server-rendered web interface. Built with modern web development practices and enterprise-grade security.

## Features

### Core Functionality

- **REST API** with filtering, sorting, pagination, and aliasing
- **Geospatial queries** for tour location searches
- **MongoDB Aggregation Pipeline** for advanced analytics
- **CRUD Operations** with Mongoose ODM

### Security & Payments

- JWT Authentication System (User/Roles/Password Reset)
- Advanced Security: Rate limiting, XSS protection, CSRF tokens
- Stripe Integration for secure credit card processing
- Data Sanitization with express-mongo-sanitize and helmet

### Advanced Capabilities

- File/Image Uploads with Multer
- Email Services (Mailtrap & Brevo integration)
- Railway Deployment Configuration
- Server-Side Rendering with Pug Templates

## Technologies

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD) ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) ![Railway](https://img.shields.io/badge/Railway-131415?style=for-the-badge&logo=railway&logoColor=white) ![Pug](https://img.shields.io/badge/Pug-E3C29B?style=for-the-badge&logo=pug&logoColor=black) ![Axios](https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white)

## Installation

1. **Clone repository:**
   ```
   git clone https://github.com/zeyadwaleed003/Natours.git
   ```
2. **Initialize a Package.json File (if not already done):**
   ```
   npm init
   ```
3. **Install dependencies:**

   ```
   npm install
   ```

4. **Setting up env variables:**

   ```
   # Server Configuration
   NODE_ENV=development
   PORT=8000

   # Database Configuration
   DATABASE=<your_mongo_db_URL>
   DATABASE_PASSWORD=<your_mongo_db_password>

   # Authentication
   JWT_SECRET=<your_jwt_secret_key>
   JWT_EXPIRES_IN=<JWT_expiration_date>
   JWT_COOKIE_EXPIRES_IN=<JWT_cookie_expiration_date>

   # Email Services
   ## Mailtrap (Development)
   MAILTRAP_HOST=<sandbox.smtp.mailtrap.io>
   MAILTRAP_PORT=587
   MAILTRAP_USERNAME=<your_mailtrap_username>
   MAILTRAP_PASSWORD=<your_mailtrap_password>

   ## Brevo (Production)
   SENDINBLUE_HOST=<smtp-relay.brevo.com>
   SENDINBLUE_PORT=587
   SENDINBLUE_USERNAME=<your_brevo_username>
   SENDINBLUE_PASSWORD=<your_brevo_api_key>

   # Payments
   STRIPE_SECRET_KEY=<your_stripe_secret_key>
   STRIPE_WEBHOOK_SECRET=<your_stripe_webhook_secret>

   # General Settings
   EMAIL_FROM=<your_sender_email>
   ```
