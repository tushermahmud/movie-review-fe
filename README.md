````markdown
# Movie Listing App

This project is a movie listing application built using Next.js, Tailwind CSS, shadcn, and react-hook-form. The application includes features for viewing movie details, adding comments, marking movies as favorites, and an admin view for adding/removing movies.

## Features

- **Home Page**: Displays all movies as thumbnails. Users can click on a thumbnail to view movie details.
- **Movie Detail Page**: Shows detailed information about the movie, including a comment section.
- **Comment System**: Users can add comments to movies.
- **Favorites**: Users can mark movies as favorites and view them on a separate tab.
- **Admin View**: Admins can add and remove movies and comments.

## Demo Video

Go to [Demo Video](https://1drv.ms/v/s!AmnyZ6A8HpjagYJmGuHBzsy89ZJrYw?e=vFdvwV) to see the project.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/movie-listing-app.git
   cd movie-listing-app
   ```
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Components

### AddMovieForm Component

The `AddMovieForm` component is a form for adding movies, including fields for name, description, running time, thumbnail URL, rating, and duration. It uses `react-hook-form` for validation and displays a dialog using `shadcn`.

### CommentSection Component

The `CommentSection` component displays comments for a movie and includes a form for adding new comments. It uses `react-hook-form` for validation and displays comments in a card layout.

## Dependencies

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn](https://shadcn.dev/)
- [react-hook-form](https://react-hook-form.com/)

```

This `README.md` file includes an overview of the project, features, a link to the demo video, installation instructions, a description of key components, and the file structure. Adjust the repository URL and any other specifics as needed for your project.
```
