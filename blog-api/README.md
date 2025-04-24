# Blog API

A RESTful API for a blogging platform with user authentication and role-based permissions.

## Features

- User authentication with JWT
- Role-based access control (author, admin)
- CRUD operations for blogs and categories
- Protected routes with middleware
- MongoDB database

## Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `config/default.json` file with your configuration:
   ```json
   {
     "mongoURI": "your_mongodb_connection_string",
     "jwtSecret": "your_jwt_secret_key",
     "port": 5000
   }