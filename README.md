# Employee Management System

A simple CRUD application for managing employee records, built with React and Vite. This project allows users to view, add, and manage employee details.

# Live Preview

`https://ems-sable.vercel.app/`

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the Repository**

   First, clone the repository to your local machine using Git:

   ```bash
   git clone https://github.com/prajwal018/EMS.git
   ```

2. **Navigate to Project Directory**

   Change to the project directory:

   ```bash
   cd EMS
   ```

3. **Install Dependencies**

   Install the required dependencies using npm or yarn:

   ```bash
   npm install
   # or
   yarn install
   ```

## Configuration

1. **Environment Variables**

   Due to security practice, .env file is shared as zip file
   Extract the .zip file to generate a .env file with config for app.

   It should have content:

   ```env
   VITE_BASE_URL=[Cosmocloud BaseUrl for Api endpoints]
   VITE_PROJECT_ID= [Cosmocloud Project Id for your Project]
   VITE_ENVIRONMENT_ID= [Cosmocloud Environment Id for your Project]
   ```

   Here is and demonstration to getting started with Cosmocloud `https://tutorials.cosmocloud.io/building-a-todo-app`

2. **Check Vite Configuration**

   Ensure the Vite configuration file (`vite.config.js`) is properly set up to handle environment variables. There’s no additional configuration required for most basic setups.

## Running the Project

1. **Start the Development Server**

   Run the development server using npm or yarn:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   This will start the development server and the application will be available at `http://localhost:{port}` (or another port if configured differently).

2. **Access the Application**

   Open your web browser and navigate to `http://localhost:{port}` to view the application.

## Project Structure

- **`src/`**: Source code for the application.

  - **`components/`**: React components.
  - **`services/`**: API services and data fetching.
  - **`App.jsx`**: Main application component.
  - **`index.jsx`**: Entry point of the application.

- **`.env`**: Environment variables file.

- **`vite.config.js`**: Vite configuration file.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push to your forked repository.
4. Create a pull request with a description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
