# Monsters Rolodex

A modern React application that displays a searchable directory of "monsters" with dynamically generated robot avatars. Built as a learning project to demonstrate React fundamentals including hooks, component architecture, and API integration.

## Features

### Real-Time Search

- Instant filtering of monsters as you type
- Case-insensitive search functionality
- Searches through monster names dynamically

### Dynamic Avatar Generation

- Unique robot avatars for each monster using the [Robohash API](https://robohash.org/)
- Avatars are generated based on user IDs for consistency
- Cute monster-themed robot designs

### Responsive Grid Layout

- 4-column grid layout for optimal viewing
- Cards span 85% of the viewport width
- Clean, organized card-based interface

### Interactive UI Elements

- Smooth hover animations on cards (1.05x scale effect)
- Professional card design with rounded corners
- Elegant teal/cyan color scheme (`#0ccac4`)
- Custom "Bigelow Rules" font for the title

### Component-Based Architecture

- Modular, reusable React components
- Clean separation of concerns
- Props-based data flow between components

## Technologies Used

- **React 19.2.0** - Modern React with hooks
- **Vite 7** - Fast build tool and development server
- **JSONPlaceholder API** - Mock user data source (`/users` endpoint)
- **Robohash API** - Dynamic robot avatar generation
- **CSS3** - Custom styling with flexbox, grid, and transitions

## Project Structure

```text
monsters-rolodex/
├── src/
│   ├── Components/
│   │   ├── card/
│   │   │   ├── card.component.jsx      # Individual monster card
│   │   │   └── card.styles.css         # Card hover effects & styling
│   │   ├── card-list/
│   │   │   ├── card-list.component.jsx # 4-column grid container
│   │   │   └── card-list.styles.css    # Grid layout styles
│   │   └── searchbox/
│   │       ├── searchbox.component.jsx # Search input component
│   │       └── search-box.styles.css   # Input styling
│   ├── App.jsx                         # Root component, state & API logic
│   ├── App.css                         # Global layout & title styles
│   └── main.jsx                        # React entry point
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Navigate to the project directory:

   ```bash
   cd project-folder/monsters-rolodex
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser at `http://localhost:5173`

## How It Works

1. **Data Fetching**: On mount, the app fetches 10 user records from `https://jsonplaceholder.typicode.com/users`
2. **State Management**: `useState` manages both the full monsters list and the filtered results separately
3. **Search Filtering**: As the user types, `.filter()` compares the search string against each monster name
4. **Avatar Display**: Each card requests an avatar from Robohash using the monster's unique user ID
5. **Card Rendering**: `CardList` maps over the filtered array and renders a `Card` for each monster

## React Concepts Demonstrated

- **Functional Components** - All components use modern arrow function syntax
- **React Hooks**:
  - `useState` - Two separate state slices: full list and filtered list
  - `useEffect` - API call fires once on mount with an empty dependency array
- **Props** - Data flows down: App → CardList → Card; handlers flow as props to SearchBox
- **Event Handling** - `onChange` on the search input triggers live re-filtering
- **Array Methods** - `.map()` for rendering, `.filter()` for search
- **Component Composition** - Complex UI built from three focused, single-responsibility components

## Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

---

Built as part of a React learning journey.
