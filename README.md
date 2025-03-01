# Tour Management API & Web Application

A full-stack application built with Node.js, Express, and MongoDB, featuring a REST API for tour management and a server-rendered website with secure payments and authentication.

## Key Features

### Core Technologies

- **Node.js Fundamentals**: Event loop, streams, core modules, NPM
- **Express Framework**: Routing, middleware, MVC architecture
- **REST API**: Filtering, sorting, pagination, aliasing
- **MongoDB/Mongoose**:
  - CRUD operations
  - Geospatial queries & aggregation pipeline
  - Advanced data modeling (relationships embedding)
- **Pug Templates**: Server-side HTML rendering

### Security & Payments

- **JWT Authentication**: Signup/login, password reset, user roles
- **Security Practices**: Rate limiting, data sanitization, encryption
- **Stripe Integration**: Credit card payments

### Advanced Features

- File/image uploads
- Email services (Mailtrap + SendGrid)
- Error handling workflows
- **Deployment**: Heroku configuration

## API Highlights

| Endpoint                     | Method | Description           |
| ---------------------------- | ------ | --------------------- |
| `/api/v1/tours`              | GET    | Get filtered tours    |
| `/api/v1/tours/tours-within` | GET    | Geospatial queries    |
| `/api/v1/users/signup`       | POST   | User registration     |
| `/api/v1/bookings`           | POST   | Create Stripe payment |
