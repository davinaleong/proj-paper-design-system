import { Prose } from "../../components/utilities/Prose"
import { Paper } from "../../components/core/Paper"
import { Typography } from "../../components/core/Typography"

export function ProseShowcase() {
  return (
    <div className="space-y-8">
      <Typography variant="h2" className="border-b border-stone-200 pb-4">
        Prose Styles Showcase
      </Typography>
      
      <div className="grid gap-8">
        {/* Default Prose */}
        <Paper className="p-8">
          <Typography variant="h3" className="mb-6">
            Default Prose (Base Size)
          </Typography>
          <Prose>
            <h1>Paper Theme Prose Styles</h1>
            <p>This is a demonstration of the <strong>Dav/Devs Paper Design System</strong> prose styles, designed for markdown and generated content.</p>
            
            <h2>Typography Hierarchy</h2>
            <p>The typography follows our Paper theme aesthetic with:</p>
            
            <ul>
              <li><strong>Headings</strong>: Playfair Display (serif elegance)</li>
              <li><strong>Body text</strong>: Montserrat (clean readability)</li>
              <li><strong>Code</strong>: Source Code Pro (technical precision)</li>
            </ul>
            
            <h3>Features</h3>
            <ol>
              <li>Container-responsive font sizing</li>
              <li>Paper theme color palette</li>
              <li>Accessible contrast ratios</li>
              <li>Dark mode support</li>
            </ol>
            
            <h4>Code Examples</h4>
            <p>Here's some inline <code>code</code> and a code block:</p>
            
            <pre><code>{`function createProseStyles() {
  return {
    fontFamily: 'Montserrat',
    fontSize: 'responsive',
    lineHeight: 'relaxed'
  }
}`}</code></pre>
            
            <h5>Links and Content</h5>
            <ul>
              <li><strong>Unordered lists</strong> with proper spacing</li>
              <li><em>Italic text</em> for emphasis</li>
              <li><code>Inline code</code> with proper styling</li>
              <li><a href="#">Links</a> with paper theme colors</li>
            </ul>
            
            <h6>Tables</h6>
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Status</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Typography</td>
                  <td>✅ Complete</td>
                  <td>Playfair + Montserrat</td>
                </tr>
                <tr>
                  <td>Colors</td>
                  <td>✅ Complete</td>
                  <td>Paper theme palette</td>
                </tr>
                <tr>
                  <td>Responsive</td>
                  <td>✅ Complete</td>
                  <td>Container queries</td>
                </tr>
              </tbody>
            </table>
            
            <hr />
            
            <blockquote>
              <strong>Blockquotes</strong> are styled with the Paper theme aesthetic, featuring subtle borders and background colors that complement the off-white base.
            </blockquote>
            
            <h2>Special Elements</h2>
            <p>Here are some special text treatments:</p>
            
            <ul>
              <li><strong>Bold text</strong> for emphasis</li>
              <li><em>Italic text</em> for style</li>
              <li><del>Strikethrough</del> for corrections</li>
              <li><mark>Highlighted text</mark> for important notes</li>
              <li><kbd>Ctrl</kbd> + <kbd>C</kbd> for keyboard shortcuts</li>
              <li>H<sub>2</sub>O and E=mc<sup>2</sup> for scientific notation</li>
            </ul>
            
            <p>The Paper theme prose styles provide a warm, sophisticated reading experience while maintaining excellent readability and accessibility standards.</p>
          </Prose>
        </Paper>

        {/* Article Type */}
        <Paper className="p-8">
          <Typography variant="h3" className="mb-6">
            Article Content Type (Large)
          </Typography>
          <Prose contentType="article">
            <h1>Article Title</h1>
            <p className="lead">This is a lead paragraph that introduces the article with larger, more prominent text styling.</p>
            <p>Regular paragraph text follows with the appropriate spacing and typography for comfortable reading. This demonstrates how the article content type optimizes typography for long-form reading.</p>
            <h2>Article Section</h2>
            <p>Sections within articles maintain proper hierarchy and spacing for excellent readability.</p>
            <ul>
              <li>Article lists are properly spaced</li>
              <li>Typography is optimized for reading</li>
              <li>Colors follow the Paper theme</li>
            </ul>
          </Prose>
        </Paper>

        {/* Documentation Type */}
        <Paper className="p-8">
          <Typography variant="h3" className="mb-6">
            Documentation Content Type
          </Typography>
          <Prose contentType="documentation">
            <h1>API Documentation</h1>
            <p>This content type is optimized for technical documentation with balanced typography.</p>
            <h2>Usage</h2>
            <pre><code>import {`{ Prose }`} from '@davdevs/paper'</code></pre>
            <h3>Props</h3>
            <table>
              <thead>
                <tr>
                  <th>Prop</th>
                  <th>Type</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>size</code></td>
                  <td>ProseSize</td>
                  <td>Size variant for typography</td>
                </tr>
                <tr>
                  <td><code>contentType</code></td>
                  <td>ProseContentType</td>
                  <td>Preset styling for content type</td>
                </tr>
              </tbody>
            </table>
          </Prose>
        </Paper>

        {/* Elegant Variant */}
        <Paper className="p-8">
          <Typography variant="h3" className="mb-6">
            Elegant Variant
          </Typography>
          <Prose variant="elegant">
            <h1>Premium Content</h1>
            <p>The elegant variant provides larger, more luxurious typography perfect for premium content, landing pages, and featured articles.</p>
            <blockquote>
              "Typography is the craft of endowing human language with a durable visual form."
            </blockquote>
            <p>This variant emphasizes readability and visual impact through generous spacing and larger font sizes.</p>
          </Prose>
        </Paper>

        {/* Compact Variant */}
        <Paper className="p-8">
          <Typography variant="h3" className="mb-6">
            Compact Variant
          </Typography>
          <Prose variant="compact">
            <h1>Dense Content Layout</h1>
            <p>The compact variant reduces spacing for information-dense layouts while maintaining readability.</p>
            <h2>Benefits</h2>
            <ul>
              <li>Reduced vertical spacing</li>
              <li>More content per screen</li>
              <li>Still maintains readability</li>
            </ul>
            <h3>Use Cases</h3>
            <p>Perfect for dashboards, admin interfaces, and content-heavy applications.</p>
          </Prose>
        </Paper>

        {/* Code Variant */}
        <Paper className="p-8">
          <Typography variant="h3" className="mb-6">
            Code Variant
          </Typography>
          <Prose variant="code">
            <h1>Code Documentation</h1>
            <p>This variant is optimized for code-heavy content with enhanced syntax highlighting.</p>
            <h2>Example</h2>
            <pre><code>{`function createComponent() {
  return (
    <Prose variant="code">
      <h1>Code Content</h1>
      <p>Optimized for technical content</p>
    </Prose>
  )
}`}</code></pre>
            <p>Code blocks and inline code receive special treatment for better readability.</p>
          </Prose>
        </Paper>
      </div>
    </div>
  )
}