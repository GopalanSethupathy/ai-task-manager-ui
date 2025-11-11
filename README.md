# AI Task Manager - Frontend

A modern React-based frontend application for managing tasks with AI capabilities. This is the user interface component that connects to a backend API service.

## Features

- **User Authentication**: Login and registration functionality
- **Task Management**: Create, view, update, and delete tasks
- **Task Filtering**: Filter tasks by status, priority, and more
- **Modern UI**: Built with Material-UI (MUI) for a polished user experience
- **State Management**: Redux Toolkit for efficient state management
- **Routing**: React Router for seamless navigation

## Tech Stack

- **React 19**: Modern React with latest features
- **Material-UI (MUI)**: Component library for UI
- **Redux Toolkit**: State management
- **React Router**: Client-side routing
- **Axios**: HTTP client for API requests
- **date-fns**: Date manipulation utilities

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Backend API server running (see configuration below)

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the root directory:
   ```
   REACT_APP_API_URL=http://localhost:8000/api
   ```
   
   For production, update this to your deployed backend URL.

## Available Scripts

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Project Structure

```
src/
  ├── components/       # Reusable UI components
  │   ├── layout/      # Layout components
  │   └── tasks/       # Task-related components
  ├── config/          # Configuration files
  ├── features/        # Feature-based Redux slices
  │   ├── auth/        # Authentication state
  │   └── tasks/       # Tasks state
  ├── pages/           # Page components
  ├── services/        # API service layers
  └── store/           # Redux store configuration
```

## Backend API Integration

This frontend application requires a backend API server to function. The API endpoint is configured via the `REACT_APP_API_URL` environment variable.

Make sure your backend server is running and accessible at the configured URL before starting the frontend application.

## Learn More

- [React Documentation](https://reactjs.org/)
- [Material-UI Documentation](https://mui.com/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [React Router Documentation](https://reactrouter.com/)

## Deployment

See the [Create React App deployment documentation](https://facebook.github.io/create-react-app/docs/deployment) for more information on deploying this application.
