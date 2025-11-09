import React from "react"
import { CodeSnippet } from "../../components/data-display"
import type { ColorVariant } from "../../utils/colors"

// Real code from the project - cn utility function
const jsCode = `import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`

// Real code from the project - Button component excerpt
const tsCode = `import { Loader2 } from "lucide-react"
import { forwardRef } from "react"
import type { ButtonProps } from "./types"
import { cn } from "../../../utils/cn.js"
import { getColorClassesWithLuminance } from "../../../utils/colors"

const sizeClasses = {
  xs: \`px-2 py-1 \${containerResponsiveUI.button.sm} gap-1\`,
  sm: \`px-3 py-1.5 \${containerResponsiveUI.button.sm} gap-1.5\`,
  md: \`px-4 py-2 \${containerResponsiveUI.button.md} gap-2\`,
  lg: \`px-6 py-2.5 \${containerResponsiveUI.button.lg} gap-2\`,
  xl: \`px-8 py-3 \${containerResponsiveUI.button.lg} gap-2.5\`,
}`

// Real HTML from the project - index.html excerpt
const htmlCode = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`

// Real CSS from the project - App.css excerpt
const cssCode = `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');

:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}`

// Real JSON from the project - package.json excerpt
const jsonCode = `{
  "name": "davdevs-paper-design-system",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.1.14",
    "clsx": "^2.1.1",
    "lucide-react": "^0.545.0",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "tailwind-merge": "^3.3.1"
  }
}`

// Example deployment script that could be loaded from a file
const bashCode = `#!/bin/bash

# Build and deploy Paper Design System
echo "Starting build process..."

# Install dependencies
npm install

# Run type checking
npm run type-check

# Build the project
npm run build

if [ $? -eq 0 ]; then
  echo "Build successful! Ready for deployment."
  
  # Deploy to staging
  rsync -avz ./dist/ staging@server:/var/www/paper-ds/
  
  echo "Deployment to staging completed!"
else
  echo "Build failed! Check the logs."
  exit 1
fi`

// Real Vite config from the project
const viteConfigCode = `import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})`

// Real ESLint config from the project
const eslintConfigCode = `import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
])`

// Example of loading code from project files
const loadedCodeExample = `// Real implementation for loading code files
const loadProjectFile = async (filePath: string): Promise<string> => {
  try {
    // In a real app, this could fetch from your API
    const response = await fetch(\`/api/files\${filePath}\`);
    if (!response.ok) throw new Error('File not found');
    return await response.text();
  } catch (error) {
    console.error('Failed to load file:', error);
    return '// Error loading file';
  }
};

// Usage examples with actual project files
const utilsCode = await loadProjectFile('/src/utils/cn.ts');
const buttonCode = await loadProjectFile('/src/components/forms/Button/Button.tsx');
const configCode = await loadProjectFile('/vite.config.ts');

// Display loaded code
<CodeSnippet language="typescript" code={utilsCode} filename="cn.ts" />
<CodeSnippet language="tsx" code={buttonCode} filename="Button.tsx" />
<CodeSnippet language="typescript" code={configCode} filename="vite.config.ts" />`

export const CodeSnippetShowcase: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Code Snippet</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Display formatted code with syntax highlighting, copy functionality, and customizable styling.
        </p>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
          <h3 className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-2">Real Project Examples</h3>
          <p className="text-sm text-blue-700 dark:text-blue-300">
            The code examples below are actual files from this design system project, demonstrating how the CodeSnippet component can load and display real code files with proper syntax highlighting and formatting.
          </p>
        </div>
      </div>

      {/* Basic Examples */}
      <section className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Basic Examples</h3>
        
        <div className="grid gap-6">
          <div>
            <h4 className="text-lg font-medium mb-3">Utility Function</h4>
            <CodeSnippet language="typescript" filename="src/utils/cn.ts">
              {jsCode}
            </CodeSnippet>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">React Component</h4>
            <CodeSnippet 
              language="tsx" 
              filename="src/components/forms/Button/Button.tsx"
              showLineNumbers
            >
              {tsCode}
            </CodeSnippet>
          </div>
        </div>
      </section>

      {/* Different Languages */}
      <section className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Different Languages</h3>
        
        <div className="grid gap-6">
          <div>
            <h4 className="text-lg font-medium mb-3">HTML Document</h4>
            <CodeSnippet language="html" color="blue" filename="index.html">
              {htmlCode}
            </CodeSnippet>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">CSS Styles</h4>
            <CodeSnippet 
              language="css" 
              color="purple"
              filename="src/App.css"
            >
              {cssCode}
            </CodeSnippet>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Package Configuration</h4>
            <CodeSnippet 
              language="json" 
              color="green"
              filename="package.json"
            >
              {jsonCode}
            </CodeSnippet>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Deployment Script</h4>
            <CodeSnippet 
              language="bash" 
              color="orange"
              filename="scripts/deploy.sh"
              showLineNumbers
            >
              {bashCode}
            </CodeSnippet>
          </div>
        </div>
      </section>

      {/* Size Variants */}
      <section className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Size Variants</h3>
        
        <div className="grid gap-4">
          <div>
            <h4 className="text-lg font-medium mb-3">Extra Small</h4>
            <CodeSnippet size="xs" language="javascript">
              {`console.log("Hello, World!");`}
            </CodeSnippet>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Small</h4>
            <CodeSnippet size="sm" language="javascript">
              {`const greeting = "Hello, World!";\nconsole.log(greeting);`}
            </CodeSnippet>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Medium (Default)</h4>
            <CodeSnippet size="md" language="javascript">
              {`function greet(name) {\n  return \`Hello, \${name}!\`;\n}`}
            </CodeSnippet>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Large</h4>
            <CodeSnippet size="lg" language="javascript">
              {`const users = [\n  { name: "John", age: 30 },\n  { name: "Jane", age: 25 }\n];`}
            </CodeSnippet>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Extra Large</h4>
            <CodeSnippet size="xl" language="javascript">
              {`// Large code example\nconst config = { api: "https://api.example.com" };`}
            </CodeSnippet>
          </div>
        </div>
      </section>

      {/* Visual Variants */}
      <section className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Visual Variants</h3>
        
        <div className="grid gap-4">
          <div>
            <h4 className="text-lg font-medium mb-3">Solid</h4>
            <CodeSnippet variant="solid" color="blue" language="javascript">
              {`const message = "This is a solid variant";`}
            </CodeSnippet>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Soft (Default)</h4>
            <CodeSnippet variant="soft" color="green" language="javascript">
              {`const message = "This is a soft variant";`}
            </CodeSnippet>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Outline</h4>
            <CodeSnippet variant="outline" color="purple" language="javascript">
              {`const message = "This is an outline variant";`}
            </CodeSnippet>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Ghost</h4>
            <CodeSnippet variant="ghost" color="orange" language="javascript">
              {`const message = "This is a ghost variant";`}
            </CodeSnippet>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Advanced Features</h3>
        
        <div className="grid gap-6">
          <div>
            <h4 className="text-lg font-medium mb-3">Line Numbers + Highlighting</h4>
            <CodeSnippet 
              language="javascript" 
              showLineNumbers
              highlightLines={[2, 4]}
              filename="example.js"
            >
              {`function example() {\n  const important = "This line is highlighted";\n  console.log("Regular line");\n  const alsoImportant = "This is also highlighted";\n  return important;\n}`}
            </CodeSnippet>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Text Wrapping</h4>
            <CodeSnippet 
              language="javascript" 
              wrap
              filename="long-line.js"
            >
              {`const veryLongVariableName = "This is a very long line of code that would normally overflow and require horizontal scrolling, but with text wrapping enabled, it will wrap to the next line instead.";`}
            </CodeSnippet>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Max Height with Scroll</h4>
            <CodeSnippet 
              language="javascript" 
              maxHeight="200px"
              showLineNumbers
              filename="long-code.js"
            >
              {jsCode + "\n\n" + tsCode + "\n\n" + `// More code here...\nfor (let i = 0; i < 10; i++) {\n  console.log(\`Iteration \${i}\`);\n}`}
            </CodeSnippet>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">No Syntax Highlighting</h4>
            <CodeSnippet 
              language="javascript" 
              noSyntaxHighlight
              filename="plain-text.txt"
            >
              {`This is plain text without syntax highlighting.\nAll text will appear in the same color.\nUseful for configuration files or plain text content.`}
            </CodeSnippet>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Alternating Line Colors</h4>
            <CodeSnippet 
              language="tsx" 
              showLineNumbers
              alternateLines
              filename="src/components/forms/Button/Button.tsx"
            >
              {tsCode}
            </CodeSnippet>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Using Code Prop</h4>
            <CodeSnippet 
              language="typescript" 
              code={jsCode}
              filename="src/utils/cn.ts"
            />
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Vite Configuration</h4>
            <CodeSnippet 
              language="typescript" 
              code={viteConfigCode}
              filename="vite.config.ts"
              showLineNumbers
            />
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">ESLint Configuration</h4>
            <CodeSnippet 
              language="javascript" 
              code={eslintConfigCode}
              filename="eslint.config.js"
              showLineNumbers
            />
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">File Loading Pattern</h4>
            <CodeSnippet 
              language="typescript" 
              code={loadedCodeExample}
              filename="file-loading-example.ts"
              showLineNumbers
            />
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Custom Copy Button Text</h4>
            <CodeSnippet 
              language="javascript" 
              copyButtonText="Copy Code"
              copiedButtonText="Copied to Clipboard!"
              onCopy={(code: string) => console.log("Code copied:", code)}
            >
              {`console.log("Custom copy button text!");`}
            </CodeSnippet>
          </div>
        </div>
      </section>

      {/* Color Variants */}
      <section className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Color Variants</h3>
        
        <div className="grid gap-4">
          {[
            { color: "slate", name: "Slate (Default)" },
            { color: "blue", name: "Blue" },
            { color: "green", name: "Green" },
            { color: "purple", name: "Purple" },
            { color: "orange", name: "Orange" },
            { color: "red", name: "Red" }
          ].map(({ color, name }) => (
            <div key={color}>
              <h4 className="text-lg font-medium mb-3">{name}</h4>
              <CodeSnippet 
                color={color as ColorVariant} 
                language="javascript"
                filename={`${color}.js`}
              >
                {`const ${color}Theme = { primary: "${color}" };`}
              </CodeSnippet>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}