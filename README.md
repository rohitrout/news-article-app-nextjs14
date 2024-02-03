### Articles-App Next-14
#### Intro
This webApp is a content-driven platform built using Next.js, focused on delivering fast, SEO-friendly, and scalable solutions for managing articles. It includes features such as viewing, searching, and filtering articles fetched from the News API, along with user authentication.

#### Features
- Used Server Actions for API Call.
- 

**Article Listing Page (/articles):**
Displays a list of articles fetched from the News API.
Used Dynamic routing feature of Nextjs.
Used Server Actions for API Call.
Each article includes the title, description, source, and publication date.

**Article Details Page (/articles/[id]):**
Creates a dynamic route to display the full content of a specific article based on its ID from the News API.

**Search Functionality:**
Includes a search bar on the /articles page allowing users to search for articles by keyword.
Implements Server side Searching and filtering using params for a smooth and efficient search experience.
Utilizes *debouncing* technique for efficient search input handling.
Uses Server Side Search and filter
.
**Authentication - Login and Signup:**
Implements a login page (/login) and a signup page (/signup).
Utilizes *NextAuth* authentication where existing user data is stored securely in MongoDB and fetched respectively.
Allows users to log in with their username and password, and creates new accounts with unique credentials.

**Protected Routes:**
Secures the /articles page as a protected route.
Users can only access the /articles page if they are authenticated.
Redirects users to the login page if they attempt to access /articles without logging in.

####  Technologies Used
Next.js
React
News API
Node.js
Tailwind
NextAuth
JavaScript

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.