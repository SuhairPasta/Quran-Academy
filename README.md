# Noor Quran Academy

Noor Quran Academy is a modern, responsive web application for an online Quran learning platform built with React, Vite, Tailwind CSS (v4), and shadcn/ui.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

## Getting Started

Follow these steps to get the project up and running on your local machine.

### 1. Clone the repository or download the source code
Navigate to the directory where you want the project to live and clone/download the files.

### 2. Install dependencies
Open your terminal, navigate to the project folder (`quranacademy`), and run the following command to install all required packages:

```bash
npm install
```

### 3. Run the development server
Once the installation is complete, start the Vite development server:

```bash
npm run dev
```

### 4. Open the app
After the server starts, it will provide a local URL (usually `http://localhost:5173/`). Open this URL in your browser to view the application.

## Troubleshooting

- **Styling isn't applying or you see a blank screen?**
  Vite heavily caches dependencies. If you run into visual glitches or missing styles after pulling new code, force clear the cache by running:
  ```bash
  npm run dev -- --force
  ```

- **Port in use?**
  If port `5173` is already being used by another application, Vite will automatically try the next available port (like `5174`). Check your terminal output for the correct URL.

## Technologies Used
- **Framework:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Routing:** [React Router](https://reactrouter.com/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
