import React from "react"
import { CodeSnippet } from "../../components/data-display"
import type { ColorVariant } from "../../utils/colors"

const jsCode = `function calculateFibonacci(n) {
  if (n <= 1) return n;
  return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
}

// Example usage
const result = calculateFibonacci(10);
console.log('Fibonacci of 10:', result);`

const tsCode = `interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const users: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com", isActive: true },
  { id: 2, name: "Jane Smith", email: "jane@example.com", isActive: false }
];

function getUserById(id: number): User | undefined {
  return users.find(user => user.id === id);
}`

const htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My App</title>
</head>
<body>
  <header class="header">
    <h1>Welcome to My App</h1>
    <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
    </nav>
  </header>
  <main>
    <p>This is the main content.</p>
  </main>
</body>
</html>`

const cssCode = `.button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  padding: 12px 24px;
  transition: all 0.3s ease;
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.button:active {
  transform: translateY(0);
}`

const jsonCode = `{
  "name": "my-awesome-app",
  "version": "1.0.0",
  "description": "An awesome application",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest",
    "build": "webpack --mode production"
  },
  "dependencies": {
    "express": "^4.18.2",
    "react": "^18.2.0",
    "lodash": "^4.17.21"
  },
  "devDependencies": {
    "jest": "^29.0.0",
    "nodemon": "^2.0.20"
  }
}`

const bashCode = `#!/bin/bash

# Deploy script
echo "Starting deployment..."

# Build the application
npm run build

# Run tests
npm test

if [ $? -eq 0 ]; then
  echo "Tests passed! Deploying..."
  
  # Deploy to production
  rsync -avz ./dist/ user@server:/var/www/html/
  
  echo "Deployment completed successfully!"
else
  echo "Tests failed! Deployment aborted."
  exit 1
fi`

// Example of loading code from a file (for demonstration)
const loadedCodeExample = `// This could be loaded from a file using fetch, fs, or import
import { readFileSync } from 'fs';

const loadCodeFromFile = (filePath: string): string => {
  try {
    return readFileSync(filePath, 'utf-8');
  } catch (error) {
    console.error('Failed to load file:', error);
    return '';
  }
};

// Usage with CodeSnippet component
const fileContent = loadCodeFromFile('./example.js');

// Method 1: Using children
<CodeSnippet language="javascript">
  {fileContent}
</CodeSnippet>

// Method 2: Using code prop  
<CodeSnippet language="javascript" code={fileContent} />`

export const CodeSnippetShowcase: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">CodeSnippet Component</h2>
        <p className="text-gray-600 mb-6">
          Display formatted code with syntax highlighting, copy functionality, and more.
        </p>
      </div>

      {/* Basic Examples */}
      <section className="space-y-6">
        <h3 className="text-xl font-semibold">Basic Examples</h3>
        
        <div className="grid gap-6">
          <div>
            <h4 className="text-lg font-medium mb-3">JavaScript Code</h4>
            <CodeSnippet language="javascript">
              {jsCode}
            </CodeSnippet>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">TypeScript with Filename</h4>
            <CodeSnippet 
              language="typescript" 
              filename="user.ts"
              showLineNumbers
            >
              {tsCode}
            </CodeSnippet>
          </div>
        </div>
      </section>

      {/* Different Languages */}
      <section className="space-y-6">
        <h3 className="text-xl font-semibold">Different Languages</h3>
        
        <div className="grid gap-6">
          <div>
            <h4 className="text-lg font-medium mb-3">HTML</h4>
            <CodeSnippet language="html" color="blue">
              {htmlCode}
            </CodeSnippet>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">CSS</h4>
            <CodeSnippet 
              language="css" 
              color="purple"
              filename="styles.css"
            >
              {cssCode}
            </CodeSnippet>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">JSON</h4>
            <CodeSnippet 
              language="json" 
              color="green"
              filename="package.json"
            >
              {jsonCode}
            </CodeSnippet>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Bash Script</h4>
            <CodeSnippet 
              language="bash" 
              color="orange"
              filename="deploy.sh"
              showLineNumbers
            >
              {bashCode}
            </CodeSnippet>
          </div>
        </div>
      </section>

      {/* Size Variants */}
      <section className="space-y-6">
        <h3 className="text-xl font-semibold">Size Variants</h3>
        
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
        <h3 className="text-xl font-semibold">Visual Variants</h3>
        
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
        <h3 className="text-xl font-semibold">Advanced Features</h3>
        
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
              language="javascript" 
              showLineNumbers
              alternateLines
              filename="alternating.js"
            >
              {`function processData(items) {\n  const result = [];\n  \n  for (let i = 0; i < items.length; i++) {\n    const item = items[i];\n    \n    if (item.isValid) {\n      result.push(transform(item));\n    } else {\n      console.warn('Invalid item:', item.id);\n    }\n  }\n  \n  return result.sort((a, b) => a.priority - b.priority);\n}`}
            </CodeSnippet>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Using Code Prop</h4>
            <CodeSnippet 
              language="javascript" 
              code={`// Using the code prop instead of children\nconst example = "This code is passed via the code prop";\nconsole.log(example);`}
              filename="code-prop-example.js"
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
        <h3 className="text-xl font-semibold">Color Variants</h3>
        
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