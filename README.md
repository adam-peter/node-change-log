# Change Log API

Welcome to the Change Log API, a RESTful API built with Node.js and Express. This API allows users to manage products and updates, providing a comprehensive solution for tracking changes over time.

## Features

- **Node.js and Express:** The API is written in Node.js, using the Express framework for building robust and scalable web applications.

- **Prisma ORM:** Prisma is utilized to communicate seamlessly with a PostgreSQL database, ensuring efficient data storage and retrieval.

- **Custom User Authentication:** The API implements custom user authentication mechanisms. User passwords are encrypted using bcrypt, and JSON Web Tokens (JWTs) are employed for secure user authentication.

- **Testing with Jest:** Unit testing is performed using Jest, and integration testing is carried out using Jest in combination with Supertest.

- **Custom Error Handling:** The API features custom error handling for both synchronous and asynchronous errors, ensuring a robust and reliable user experience.

## API Endpoints

### Test

- **Endpoint:** `/`
- **Method:** `GET`
- **Description:** Test command to check the API's functionality.


### User

- **Endpoint:** `/user`
- **Method:** `POST`
- **Body Parameters:** 
  - `username` (required): The username of the new user.
  - `password` (required): The password for the new user.
- **Description:** Create a new user.


- **Endpoint:** `/signin`
- **Method:** `POST`
- **Body Parameters:** 
  - `username` (required): The username of the user.
  - `password` (required): The password of the user.
- **Response:** JWT token upon successful authentication.
- **Description:** Sign in a user.

### Product

- **Endpoint:** `/api/product`
- **Method:** `GET`
- **Response:** All product objects stored for the user.
- **Description:** Retrieve all products.


- **Endpoint:** `/api/product/:id`
- **Method:** `GET`
- **Response:** Details of the product with the specified ID (must belong to the user).
- **Description:** Retrieve a specific product.


- **Endpoint:** `/api/product/:id`
- **Method:** `PUT`
- **Body Parameters:** 
  - `name` (required): The updated name of the product.
- **Response:** Updated product details.
- **Description:** Update a specific product.


- **Endpoint:** `/api/product`
- **Method:** `POST`
- **Body Parameters:** 
  - `name` (required): The name of the new product.
- **Response:** Created product details.
- **Description:** Create a new product.


- **Endpoint:** `/api/product/:id`
- **Method:** `DELETE`
- **Response:** Success message.
- **Description:** Delete a specific product (must belong to the user).

### Update

- **Endpoint:** `/api/update`
- **Method:** `GET`
- **Response:** All updates created by the user.
- **Description:** Retrieve all updates.


- **Endpoint:** `/api/update/:id`
- **Method:** `GET`
- **Response:** Details of the update with the specified ID (must belong to the user).
- **Description:** Retrieve a specific update.


- **Endpoint:** `/api/update/:id`
- **Method:** `PUT`
- **Body Parameters:** 
  - `title` (optional): The updated title of the update.
  - `body` (optional): The updated body of the update.
  - `version` (optional): The updated version of the update.
  - `asset` (optional): The updated asset of the update.
  - `status` (optional): The updated status of the update.
- **Response:** Updated update details.
- **Description:** Update a specific update.


- **Endpoint:** `/api/update`
- **Method:** `POST`
- **Body Parameters:** 
  - `title` (required): The title of the new update.
  - `body` (required): The body of the new update.
  - `productId` (required): The ID of the product associated with the update.
  - `version` (optional): The version of the update.
  - `asset` (optional): The asset of the update.
  - `status` (optional): The status of the update.
- **Response:** Created update details.
- **Description:** Create a new update for a product.


- **Endpoint:** `/api/update/:id`
- **Method:** `DELETE`
- **Response:** Success message.
- **Description:** Delete a specific update (must belong to the user).

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone git@github.com:adam-peter/node-change-log.git
   ```

2. **Install Dependencies:**
   ```bash
   cd node-change-log
   npm install
   ```

   - If you encounter any errors during installation, consider changing your Node.js version to v20.3.1. You can use a version manager like NVM for this.

     ```bash
     nvm use v20.3.1
     ```

3. **Run the Application:**
   ```bash
   npm run dev
   ```

4. **Access the API:**
   - Use your preferred API client such as Postman, Thunderclient, or any other client of your choice.

## Try it Out!

The API is hosted on Render. Feel free to explore its functionality and try it out using the provided [Change Log API](https://node-change-log.onrender.com/) endpoint. If you encounter any issues or have feedback, don't hesitate to reach out (petrzela.adam@protonmail.com). Enjoy!