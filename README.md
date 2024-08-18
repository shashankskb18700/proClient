# MERN Stack Application with Authentication and Product Management

## Overview

This project is a MERN stack application designed to handle user authentication and product management. It includes functionalities for user registration, login, logout, and basic product management. The application is built using MongoDB, Express.js, React, and Node.js (MERN). Authentication is implemented using JSON Web Tokens (JWT), and tokens are securely stored in HttpOnly cookies.

## Features

### Authentication System

- **User Registration**: Users can register with their email and password.
- **Login**: Registered users can log in with their credentials.
- **Logout**: Users can log out, which invalidates their session.

### Product Management

- **Fetch Products**: The application fetches and displays a list of products from the DummyJSON Product API on the home page.
- **Create Product**: Users can create a new product (currently, only a success message is shown).
- **Delete Product**: Users can delete an existing product from the list.

### Extras (Not Implemented)

- **Sorting & Filtering**: Sorting and filtering of fetched products.
- **Forgot Password**: Functionality to reset a forgotten password.
- **State Management**: Using Redux to manage user state and display the logged-in user’s details.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Styling**: (Optional) Tailwind CSS

## Installation

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v12 or later)
- [MongoDB](https://www.mongodb.com/)

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/shashankskb18700/proServer.git
   cd proServer
   ```

2. **npm install**
3. **Environment Variables**
   Create a .env file in the root directory and add the following variables:
   MONGODB_URI=mongodb://127.0.0.1:27017/guestara
   JWT_SECRET=your_jwt_secret

# Running the Application

## Backend

To start the backend server:

````bash
npm start
```


## Frontend

The frontend is hosted separately. You can view the live application at:
[https://crown-db-50da8.web.app/](https://crown-db-50da8.web.app/)

## Deployment

The application is deployed on Firebase. You can access it here:
[https://crown-db-50da8.web.app/](https://crown-db-50da8.web.app/)


### Documentation

For detailed information on the API endpoints and functionalities, refer to the inline comments in the codebase.

## License

This project is open-source and available under the [MIT License](LICENSE).
````
