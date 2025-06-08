# Windows Setup Guide

## Quick Start for Windows Users

### Method 1: Using the Batch File (Recommended)
1. Open the project folder in File Explorer
2. Double-click `start.bat`
3. The development server will start automatically
4. Open your browser and go to `http://localhost:5000`

### Method 2: Command Prompt
1. Open Command Prompt in the project folder
2. Run: `set NODE_ENV=development && npm run dev`
3. Open your browser and go to `http://localhost:5000`

### Method 3: PowerShell
1. Open PowerShell in the project folder
2. Run: `$env:NODE_ENV="development"; npm run dev`
3. Open your browser and go to `http://localhost:5000`

## VS Code Setup on Windows

### Opening the Project
1. Install VS Code from https://code.visualstudio.com/
2. Open VS Code
3. Click "File" → "Open Folder"
4. Select the PersonalPortfolio folder
5. Install recommended extensions when prompted

### Running from VS Code Terminal
1. Open Terminal in VS Code (Ctrl + `)
2. Choose your preferred terminal:
   - **Command Prompt**: `set NODE_ENV=development && npm run dev`
   - **PowerShell**: `$env:NODE_ENV="development"; npm run dev`
   - **Git Bash**: `NODE_ENV=development npm run dev`

### Recommended VS Code Extensions for Windows
- ES7+ React/Redux/React-Native snippets
- TypeScript Importer
- Tailwind CSS IntelliSense
- Prettier - Code formatter
- Auto Rename Tag
- GitLens
- Thunder Client (for API testing)

## Troubleshooting Windows Issues

### "NODE_ENV is not recognized" Error
This error occurs because Windows Command Prompt doesn't recognize Unix-style environment variables. Use one of the solutions above.

### Port 5000 Already in Use
If you get a port error:
1. Check if another application is using port 5000
2. Kill the process using: `netstat -ano | findstr :5000`
3. Then: `taskkill /PID <process_id> /F`

### Permission Errors
Run Command Prompt or PowerShell as Administrator if you encounter permission issues.

### Path Issues
Make sure you're in the correct directory. Use `dir` (Command Prompt) or `ls` (PowerShell/Git Bash) to check current directory contents.

## Development Workflow on Windows

1. Make changes to your code in VS Code
2. The development server will automatically reload
3. Refresh your browser to see changes
4. Use Ctrl+C in the terminal to stop the server

## Building for Production

When ready to build for production:
```cmd
set NODE_ENV=production && npm run build
```

Or use PowerShell:
```powershell
$env:NODE_ENV="production"; npm run build
```