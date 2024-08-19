
# College Nexus

**College Nexus** is a Next.js application designed to serve college students by providing centralized access to resources, news, and a networking community. The project currently focuses on front-end development, leveraging the Next.js app router and TypeScript for enhanced development experience and type safety.

## Features

- **Resources**: Organized academic materials, such as notes, question banks, and previous year questions (PYQs), available through a structured JSON file.
- **News**: Latest updates and news relevant to college life.
- **Network**: A platform for students to connect, collaborate, and share knowledge.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (with App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Data Storage**: JSON (static data stored in `public/sub.json`)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm) or [Yarn](https://yarnpkg.com/)
- [TypeScript](https://www.typescriptlang.org/) (optional, but recommended)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/himanshuraimau/college-nexus.git
   cd college-nexus
   ```

2. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Project

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### File Structure

- **`components/`**: Contains reusable UI components, like the `Navbar`.
- **`app/`**: Next.js pages managed by the App Router.
- **`public/sub.json`**: JSON file storing the resources data, organized by year and subject.
- **`app/global.css`**: Global styles and Tailwind CSS configurations.

### TypeScript

This project uses TypeScript for type safety and better developer experience. Ensure your IDE is configured to handle TypeScript, and check for any type errors during development by running:

```bash
npm run type-check
# or
yarn type-check
```

## Deployment

[College Nexus](https://collegenexus.tech)

## Contributing

Contributions are welcome! If you have suggestions for improvements, please feel free to submit a pull request or open an issue.
