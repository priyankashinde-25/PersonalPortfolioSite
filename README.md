# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, Express.js, and TypeScript featuring smooth animations, dark/light theme toggle, and a functional contact form.

## Features

- 🎨 Modern, clean design with smooth animations
- 🌓 Dark/Light theme toggle
- 📱 Fully responsive layout
- ⚡ Fast performance with Vite
- 📧 Working contact form with backend API
- 🎯 Smooth scrolling navigation
- 💼 Professional sections: Hero, About, Skills, Experience, Projects, Contact

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Express.js, TypeScript
- **Build Tool**: Vite
- **UI Components**: Shadcn/ui, Radix UI
- **Styling**: Tailwind CSS with custom animations
- **Icons**: Lucide React
- **State Management**: TanStack Query
- **Routing**: Wouter

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager
- VS Code (recommended)

### Installation Steps

1. **Clone or download the project**
   ```bash
   # If you have the zip file, extract it to your desired location
   # Or clone if you have a git repository
   git clone <repository-url>
   cd PersonalPortfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**

   **For Windows users:**
   ```cmd
   # Option 1: Use the provided batch file
   start.bat
   
   # Option 2: Set environment variable manually
   set NODE_ENV=development && npm run dev
   
   # Option 3: Use PowerShell
   $env:NODE_ENV="development"; npm run dev
   ```

   **For Mac/Linux users:**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5000`
   - The application should now be running!

### Windows-Specific Setup

If you're on Windows and encounter the error `'NODE_ENV' is not recognized`, use one of these solutions:

1. **Easiest Method**: Double-click the `start.bat` file in the project folder
2. **Command Prompt**: Run `set NODE_ENV=development && npm run dev`
3. **PowerShell**: Run `$env:NODE_ENV="development"; npm run dev`
4. **Install cross-env globally**: `npm install -g cross-env` then modify the scripts in package.json

## VS Code Setup

### Recommended Extensions

Install these VS Code extensions for the best development experience:

1. **Essential Extensions**:
   - ES7+ React/Redux/React-Native snippets
   - TypeScript Importer
   - Auto Rename Tag
   - Bracket Pair Colorizer
   - Prettier - Code formatter
   - ESLint

2. **Tailwind CSS Extensions**:
   - Tailwind CSS IntelliSense
   - PostCSS Language Support

3. **Additional Helpful Extensions**:
   - GitLens
   - Live Server
   - Material Icon Theme
   - Thunder Client (for API testing)

### VS Code Settings

Create a `.vscode/settings.json` file in your project root:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "emmet.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  },
  "tailwindCSS.experimental.classRegex": [
    ["cn\\(([^)]*)\\)", "'([^']*)'"],
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ]
}
```

### Opening in VS Code

1. **Open VS Code**
2. **Open the project folder**:
   - `File` → `Open Folder`
   - Select the `PersonalPortfolio` folder
   - Or use the command line: `code .` (from inside the project directory)

3. **Install recommended extensions** when prompted

## Project Structure

```
PersonalPortfolio/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── ui/        # Shadcn/ui components
│   │   │   ├── About.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Skills.tsx
│   │   │   └── ThemeProvider.tsx
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions and types
│   │   ├── pages/         # Page components
│   │   ├── App.tsx        # Main App component
│   │   ├── main.tsx       # Application entry point
│   │   └── index.css      # Global styles
│   └── index.html         # HTML template
├── server/                # Backend Express.js application
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   ├── storage.ts        # Data storage layer
│   └── vite.ts           # Vite integration
├── shared/               # Shared types and schemas
│   └── schema.ts         # Database schemas and types
├── package.json          # Dependencies and scripts
├── vite.config.ts        # Vite configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── README.md             # This file
```

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run type-check
```

## Customization

### Personalizing Content

1. **Update personal information** in:
   - `client/src/components/Hero.tsx` - Name, title, description
   - `client/src/components/About.tsx` - Bio, stats, resume link
   - `client/src/components/Navigation.tsx` - Name in navbar
   - `client/src/components/Footer.tsx` - Name and social links

2. **Update skills** in `client/src/components/Skills.tsx`:
   - Modify the `technicalSkills` array with your skills and percentages
   - Update the `tools` array with your preferred tools

3. **Add your work experience** in `client/src/components/Experience.tsx`:
   - Update the `experiences` array with your actual work history

4. **Update projects** in `client/src/components/Projects.tsx`:
   - Replace sample projects with your actual projects
   - Add real images, links, and descriptions

5. **Update contact information** in `client/src/components/Contact.tsx`:
   - Change email, phone, and location
   - Update social media links

### Styling Customization

1. **Colors**: Modify `client/src/index.css` to change the color scheme
2. **Fonts**: Update the font imports and Tailwind configuration
3. **Animations**: Customize animations in the CSS file or component files

## Contact Form

The contact form is fully functional and includes:
- Form validation
- Error handling
- Success notifications
- Backend API integration
- Data storage in memory (can be upgraded to a database)

## Deployment

The application is ready for deployment to platforms like:
- Vercel
- Netlify
- Heroku
- Railway
- Or any other hosting service that supports Node.js

## Support

If you encounter any issues:
1. Make sure you have Node.js 18+ installed
2. Clear node_modules and reinstall: `rm -rf node_modules && npm install`
3. Check that all dependencies are properly installed
4. Ensure port 5000 is not being used by another application

## License

This project is open source and available under the MIT License.