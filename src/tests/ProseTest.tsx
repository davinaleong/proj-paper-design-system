import { Prose } from "../components/utilities/Prose"

export function ProseTest() {
  return (
    <div className="p-8">
      <h1>Prose Test</h1>
      <Prose>
        <h1>Test Heading 1</h1>
        <p>This is a test paragraph to verify that the prose styles are working correctly.</p>
        
        <h2>Test Heading 2</h2>
        <p>Another paragraph with <strong>bold text</strong> and <em>italic text</em>.</p>
        
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
        
        <blockquote>
          This is a test blockquote to verify styling.
        </blockquote>
        
        <pre><code>console.log("Hello, world!")</code></pre>
      </Prose>
    </div>
  )
}