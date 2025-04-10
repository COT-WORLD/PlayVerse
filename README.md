# **PlayVerse**

## **Unlock the World of Gaming**

PlayVerse is a React-based application that leverages **React Query** for efficient data fetching and caching, and **Context API** for centralized state management. The app is built with modern tools like **Vite**, **TypeScript**, and **Chakra UI** for a fast and scalable development experience.

## **Key Features**

- **React Query** for data fetching, caching, and state management.
- **Context API** for managing global state (`gameQuery`).
- **Chakra UI** for responsive and accessible UI components.
- **Axios** for making HTTP requests.
- **TypeScript** for type safety and better developer experience.
- **Game Grid**: A stunning, responsive grid showcasing a curated selection of games, complete with high-quality images and essential details.
- **Game Card**: Dive deeper into each game with detailed information, including platforms, critic scores, user ratings, and more.
- **Game Search**: Quickly find your next favorite game with our powerful search functionality, filtering by title, genre, or platform.
- **Game Filter**: Narrow down your options with our intuitive filtering system, allowing you to browse games by platform, genre, or rating.
- **Color Mode**: Personalize your experience with our sleek light and dark modes, ensuring the perfect ambiance for your gaming journey.

## **API Integration**

PlayVerse utilizes the Rawg.io API to fetch game data, providing users with accurate and up-to-date information. To use the API, you will need to obtain an API key from Rawg.io.

## **API Endpoint**

- **Base URL**: `https://api.rawg.io/api`
- **API Key**: Required for authentication. Obtain your API key from Rawg.io.

## **API Documentation**

For more information on the Rawg.io API, please refer to their official documentation: [https://rawg.io/apidocs](https://rawg.io/apidocs)

## **Technical Details**

- **Frontend**: Built with React, TypeScript, and Vite, ensuring a fast, scalable, and maintainable application.
- **UI Components**: Leveraging Chakra UI for a consistent, visually appealing design.
- **Icons**: Utilizing React Icons for a wide range of high-quality icons.
- **ESLint**: Enforcing code quality with TypeScript ESLint.

## **Getting Started**

1. Clone the repository: `git clone https://github.com/COT-WORLD/PlayVerse.git`
2. Install dependencies: `npm install` or `yarn install`
3. Create a new file named `.env` in the root directory and add your Rawg.io API base URL and API key: `VITE_RAWG_API_KEY=your-api-key` `VITE_RAWG_BASE_URL=your-base-url`
4. Start the development server: `npm run dev` or `yarn dev`
5. Open your browser and navigate to `http://localhost:3000`

## **License**

PlayVerse is licensed under the MIT License.

## **Acknowledgments**

We would like to extend our gratitude to:

- Rawg.io for providing a comprehensive API for game data.
- Chakra UI for providing a comprehensive UI component library.
- React Icons for offering a wide range of high-quality icons.
- TypeScript ESLint for helping us maintain code quality.
