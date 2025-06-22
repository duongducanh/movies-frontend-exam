# 🎬 Elotus Frontend Exam - Movie Explorer App

Demo: https://elotus-frontend-demo-lucci.web.app/

A modern React TypeScript application for exploring and searching movies using The Movie Database (TMDB) API (https://developers.themoviedb.org/3).

## ✨ Features

- 🎭 **Browse Movies**: View lists of now playing and top rated movies
- 🔍 **Search Functionality**: Search movies by name
- 📱 **Responsive Design**: Optimized for all devices
- 🎯 **View Modes**: Switch between Grid and List view
- 🎨 **Modern UI**: Beautiful interface with hover effects and animations
- ♿ **Accessibility**: Keyboard navigation and screen reader support
- 🎪 **Movie Details**: View detailed information for each movie
- 🔗 **URL State Management**: State preserved in URL parameters
- 🔔 **Toast Notifications**: Notification system with success, error, info states
- 📄 **Load More**: Pagination with load more button for seamless browsing
- 🔝 **Scroll to Top**: Fixed button appears on scroll for easy navigation

## 🛠️ Tech Stack

- **Frontend**: React 19.1.0 + TypeScript
- **Styling**: SCSS with CSS Variables
- **Routing**: React Router DOM 7.6.2
- **HTTP Client**: Axios 1.10.0
- **Build Tool**: Create React App
- **Code Quality**: ESLint + Prettier

## 📋 System Requirements

- Node.js 16.x or higher
- npm or yarn

## 🚀 Installation and Setup

### 1. Clone repository

```bash
git clone https://github.com/duongducanh/movies-frontend-exam.git
cd movies-frontend-exam
```

### 2. Install dependencies

```bash
# Using npm
npm install

# Or using yarn
yarn install
```

### 3. Run the application

```bash
# Development mode
npm start
# or
yarn start
```

The application will run at `http://localhost:3000`

### 4. Build for production

```bash
npm run build
# or
yarn build
```

## 📁 Project Structure

```
src/
├── api/                 # API configuration and calls
├── assets/             # Static assets (images, icons)
├── components/         # Reusable components
│   ├── Header/
│   ├── MovieCard/
│   ├── SearchBar/
│   ├── MovieList/
│   └── ...
├── contexts/           # React contexts
├── hooks/              # Custom hooks
├── pages/              # Page components
│   ├── HomePage/
│   └── MovieDetailsPage/
├── styles/             # Global styles and variables
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

## 🎯 Key Features

### Home Page

- **Tabs Navigation**: Now Playing / Top Rated
- **View Toggle**: Grid view / List view
- **URL State**: State preserved in URL parameters
- **Load More Pagination**: Fetch additional movies with button click
- **Smart Loading**: Initial skeleton loading, button loading for subsequent pages

### Movie Cards

- **Hover Effects**: Yellow overlay on hover
- **Keyboard Navigation**: Tab navigation support
- **Responsive Images**: Auto-optimized sizing
- **Skeleton Loading**: Beautiful loading states

### Search

- **Real-time Search**: Instant search functionality
- **Search Results**: Display results with highlighting
- **No Results State**: Good UX when no results found

### Toast Notifications

- **Multiple Types**: Success, Error, Info with distinct colors
- **Auto Dismiss**: Automatically disappear after 5 seconds
- **Manual Close**: Can be closed manually with X button
- **Portal Rendering**: Render outside DOM tree, always on top layer
- **Smooth Animations**: Smooth slide-in/slide-out effects
- **Accessibility**: Focus management and keyboard navigation

### Load More Functionality

- **Pagination Support**: TMDB API pagination integration
- **Append Loading**: New movies added to existing list
- **Loading States**: Separate loading for initial load vs load more
- **Smart Button**: Automatically hides when no more pages available
- **Error Handling**: Toast notifications for failed requests
- **Smooth UX**: No page refresh, seamless content addition

## 🎨 Styling Architecture

- **SCSS Modules**: Component-scoped styles
- **CSS Variables**: Consistent design tokens
- **Responsive Design**: Mobile-first approach

## ⚡ Performance

- **Lazy Loading**: Images and components
- **Code Splitting**: Route-based splitting
- **Optimized Bundles**: Tree shaking and minification
- **Caching**: HTTP caching for API calls
- **Efficient Pagination**: Load more instead of infinite scroll for better performance
- **Smooth Animations**: CSS transitions and transforms for better UX

## 🧪 Available Scripts

```bash
# Development
npm start              # Run dev server
npm run build          # Build production
npm test               # Run tests

# Code Quality
npm run lint           # Check linting
npm run lint:fix       # Auto fix linting issues
npm run format         # Format code with Prettier
```

## 🔧 Configuration

### API Configuration

The project uses TMDB API with credentials configured directly in `src/constants/index.ts`:

```typescript
export const API_ACCESS_TOKEN = 'your_tmdb_access_token';
export const API_BASE_URL = 'https://api.themoviedb.org/3';
```

**Note**: Currently API token is hardcoded in source code. For better security, consider using environment variables for production.

## 📝 Code Style

- **TypeScript**: Strict mode enabled
- **ESLint**: Airbnb config with custom rules
- **Prettier**: Consistent code formatting
- **Conventional Commits**: Commit message standards

## 📚 Learning Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TMDB API Documentation](https://developer.themoviedb.org/docs)

## 📄 License

This project is for educational purposes as part of Frontend Examination.
