# Profile API

This project is a simple REST API built using Node.js and Express. The API serves user profile data and includes filtering capabilities based on query parameters.

## Features

- **List all profiles:** Fetch a list of user profiles with their details.
- **Filter profiles:** Filter profiles based on specific attributes such as `name`, `favColor`, and `Nationality`.

## Getting Started

### Prerequisites

- Node.js installed on your system.

### Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```bash
    cd profile-api
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

### Running the Server

1. Start the server:
    ```bash
    node index.js
    ```
2. The server will run on port `3001` by default or on the port specified in `process.env.PORT`.

## Endpoints

### 1. Get All Profiles

- **Endpoint:** `/`
- **Method:** `GET`
- **Description:** Returns a JSON array of all user profiles.

### 2. Filter Profiles

- **Endpoint:** `/profile`
- **Method:** `GET`
- **Description:** Filters profiles based on query parameters.
- **Query Parameters:**
    - `name` (optional) - Filter by name.
    - `favColor` (optional) - Filter by favorite color.
    - `Nationality` (optional) - Filter by nationality.

- **Example Requests:**

    - Fetch all profiles:
      ```(http://localhost:3001/)

    
    - Filter by name:
      ```http://localhost:3001/profile?name=Linda
