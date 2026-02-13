# Simple Social Media Application

A React web application built with Vite that demonstrates a simple social media platform with posts, comments, and likes functionality.

## Features

- **Post Management**
  - View all posts in a feed
  - Create new posts
  - View post details
  - Like posts
  - Delete posts

- **Comments**
  - View comments on posts
  - Create comments on posts
  - Delete comments
  - Update comments

- **User Management**
  - Set and change username
  - All posts and comments are attributed to the current username

- **API Status Monitoring**
  - Visual indicator when backend API is unavailable
  - Automatic health check every 5 seconds
  - Graceful fallback UI when offline

## Project Structure

```
src/
├── components/
│   ├── APIStatusIndicator.jsx    # Shows API availability status
│   ├── CommentList.jsx            # Displays comments for a post
│   ├── CreateCommentModal.jsx     # Modal to add new comment
│   ├── CreatePostModal.jsx        # Modal to create new post
│   ├── PostDetail.jsx             # Detailed view of a single post
│   ├── PostList.jsx               # Feed of all posts
│   └── UsernameModal.jsx          # Modal for username input
├── context/
│   └── UsernameContext.jsx        # React context for managing current username
├── services/
│   └── api.js                     # API client service
├── App.jsx                        # Main application component
├── App.css                        # Component styles (Tailwind)
├── index.css                      # Global styles with Tailwind
└── main.jsx                       # Application entry point
```

## Requirements

- Node.js 16+
- npm or yarn
- Backend API running at `http://localhost:8000`

## Installation

```bash
cd SimpleSocialMediaApplication
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Building

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## API Integration

The application connects to a backend API at `http://localhost:8000/api` with the following endpoints:

### Posts
- `GET /posts` - List all posts
- `POST /posts` - Create a new post
- `GET /posts/{postId}` - Get a specific post
- `PATCH /posts/{postId}` - Update a post
- `DELETE /posts/{postId}` - Delete a post

### Comments
- `GET /posts/{postId}/comments` - List comments for a post
- `POST /posts/{postId}/comments` - Create a comment
- `GET /posts/{postId}/comments/{commentId}` - Get a specific comment
- `PATCH /posts/{postId}/comments/{commentId}` - Update a comment
- `DELETE /posts/{postId}/comments/{commentId}` - Delete a comment

### Likes
- `POST /posts/{postId}/likes` - Like a post
- `DELETE /posts/{postId}/likes` - Unlike a post

## Styling

This project uses **Tailwind CSS** for styling. All component styles are defined using Tailwind utility classes.

### Configuration Files
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration with Tailwind and autoprefixer

## Technologies Used

- **React 19** - UI framework
- **Vite** - Frontend build tool
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript (ES6+)** - Programming language

## User Workflow

1. **Initial Setup**: Enter a username when the app loads
2. **Browse Posts**: View all posts in the main feed
3. **View Details**: Click on a post to see full details and comments
4. **Create Post**: Click "Create Post" button to open the post creation modal
5. **Comment**: Add comments to posts from the post detail view
6. **Change Username**: Click "Change Username" to update your username

## Error Handling

- Network errors are displayed with retry options
- API unavailability is clearly indicated with a prominent notification
- Form validation prevents invalid submissions
- Confirmation dialogs appear before deleting content

## License

MIT

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
