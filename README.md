# ⚛️ React Starter Pack with Vite

A modern, lightweight React starter template powered by Vite for lightning-fast development. Built with the latest React 19, Tailwind CSS 4, and essential UI libraries to kickstart your next project.

---

## ✨ Features

- ⚡ **Vite** - Next-generation frontend tooling with blazing fast HMR
- ⚛️ **React 19** - Latest React with improved performance and features
- 🎨 **Tailwind CSS 4** - Utility-first CSS framework with native CSS configuration
- 🌊 **Flowbite React** - Beautiful component library built on Tailwind
- 🎯 **React Router 7** - Declarative routing for React applications
- 🔔 **Sonner** - Elegant toast notifications
- 📦 **Modern Package Manager Support** - Works with npm, yarn, pnpm, and Bun

---

## 🛠️ Tech Stack

| Technology | Version |
|------------|---------|
| React | ^19.1.1 |
| React DOM | ^19.1.1 |
| Vite | Latest |
| Tailwind CSS | ^4.1.14 |
| @tailwindcss/vite | ^4.1.14 |
| Flowbite | ^3.1.2 |
| Flowbite React | ^0.12.9 |
| React Router | ^7.9.3 |
| React Icons | ^5.5.0 |
| Sonner | ^2.0.7 |

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have one of the following package managers installed:

- **Node.js** (v18 or higher) with npm
- **Yarn** (v1.22 or higher)
- **pnpm** (v8 or higher)
- **Bun** (v1.0 or higher) - *Recommended for fastest performance*

#### Install Bun (Recommended)

```bash
curl -fsSL https://bun.sh/install | bash
```

After installation, restart your terminal or run:

```bash
source ~/.bashrc  # or ~/.zshrc for zsh users
```

---

### 📦 Installation

#### Step 1: Clone the Repository

```bash
git clone https://github.com/ismailjosim/basic-react-starter-package.git
```

#### Step 2: Navigate to Project Directory

```bash
cd basic-react-starter-package
```

#### Step 3: Install Dependencies

Choose your preferred package manager:

**Using Bun (Fastest):**

```bash
bun install
```

**Using npm:**

```bash
npm install
```

**Using Yarn:**

```bash
yarn install
```

**Using pnpm:**

```bash
pnpm install
```

---

### 🎯 Running the Development Server

Start the development server with hot module replacement:

**Using Bun:**

```bash
bun run dev
```

**Using npm:**

```bash
npm run dev
```

**Using Yarn:**

```bash
yarn dev
```

**Using pnpm:**

```bash
pnpm dev
```

The application will be available at `http://localhost:5173` (default Vite port).

---

## 📁 Project Structure

```
basic-react-starter-package/
├── .flowbite-react/     # Flowbite React configuration
├── node_modules/        # Project dependencies
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, fonts, and other static assets
│   ├── components/      # Reusable React components
│   ├── configs/         # Configuration files
│   ├── contexts/        # React Context providers
│   ├── layout/          # Layout components
│   ├── pages/           # Page components
│   ├── providers/       # Custom providers
│   ├── routes/          # Routing configuration
│   ├── utils/           # Utility functions and helpers
│   ├── App.jsx          # Root component
│   ├── index.css        # Global styles with Tailwind directives
│   └── main.jsx         # Application entry point
├── .gitignore           # Git ignore file
├── bun.lock             # Bun lock file
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML entry point
├── package.json         # Project dependencies and scripts
├── README.md            # Project documentation
└── vite.config.js       # Vite configuration
```

---

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `dev` | Start development server with HMR |
| `build` | Build production-ready optimized bundle |
| `preview` | Preview production build locally |
| `lint` | Run ESLint to check code quality |

---

## 🎨 Customization

### Tailwind CSS 4 Configuration

This project uses **Tailwind CSS v4** which introduces a new configuration approach using native CSS. Instead of a JavaScript config file, Tailwind 4 uses CSS-based configuration in your stylesheets.

Customize your design system in `src/index.css`:

```css
@import "tailwindcss";

/* Custom theme configuration */
@theme {
  --color-primary: #3b82f6;
  --color-secondary: #8b5cf6;
  /* Add your custom design tokens here */
}
```

### Flowbite Components

This starter includes Flowbite React components. Import and use them in your components:

```jsx
import { Button, Card } from 'flowbite-react';

function MyComponent() {
  return (
    <Card>
      <Button>Click me</Button>
    </Card>
  );
}
```

### Project Organization

- **`components/`** - Reusable UI components
- **`pages/`** - Page-level components
- **`layout/`** - Layout wrappers and templates
- **`contexts/`** - React Context for state management
- **`providers/`** - Custom provider components
- **`routes/`** - React Router configuration
- **`configs/`** - Application configuration files
- **`utils/`** - Helper functions and utilities
- **`assets/`** - Static files (images, fonts, etc.)

---

## 📚 Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/)
- [Flowbite React Documentation](https://flowbite-react.com/)
- [React Router Documentation](https://reactrouter.com/)
- [Bun Documentation](https://bun.sh/docs)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Ismail Josim**

- GitHub: [@ismailjosim](https://github.com/ismailjosim)

---

## ⭐ Show Your Support

If this starter pack helped you, please give it a ⭐️!

---

**Happy Coding! 🚀**
