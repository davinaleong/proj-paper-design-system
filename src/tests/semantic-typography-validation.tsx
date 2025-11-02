import React from 'react';
import { Typography } from '../components/core/Typography';
import { Paper } from '../components/core/Paper';
import { Section } from '../components/layout/Section';

/**
 * Visual validation component for semantic Typography elements
 * This component demonstrates all 16 semantic elements working correctly
 */
export const SemanticTypographyValidation: React.FC = () => {
  return (
    <Section className="py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <Typography variant="h1">Semantic Typography Elements Validation</Typography>
          <Typography variant="body" className="text-stone-600 mt-2">
            Comprehensive test of all 16 semantic HTML text elements
          </Typography>
        </div>

        {/* Text Emphasis */}
        <Paper className="p-6">
          <Typography variant="h3" className="mb-4">Text Emphasis</Typography>
          <div className="space-y-2">
            <div>
              <Typography variant="strong">Strong importance</Typography> - Bold text for importance
            </div>
            <div>
              <Typography variant="em">Emphasized text</Typography> - Italic text for emphasis
            </div>
            <div>
              <Typography variant="small">Fine print text</Typography> - Smaller text for disclaimers
            </div>
          </div>
        </Paper>

        {/* Technical Elements */}
        <Paper className="p-6">
          <Typography variant="h3" className="mb-4">Technical Elements</Typography>
          <div className="space-y-2">
            <div>
              Press <Typography variant="kbd">Ctrl+Alt+Del</Typography> to restart
            </div>
            <div>
              <Typography variant="del">This text has been deleted</Typography>
            </div>
            <div>
              <Typography variant="ins">This text has been inserted</Typography>
            </div>
            <div>
              H<Typography variant="sub">2</Typography>O and E=mc<Typography variant="sup">2</Typography>
            </div>
          </div>
        </Paper>

        {/* Semantic Elements */}
        <Paper className="p-6">
          <Typography variant="h3" className="mb-4">Semantic Elements</Typography>
          <div className="space-y-2">
            <div>
              <Typography variant="abbr" title="World Wide Web">WWW</Typography> - Abbreviation with tooltip
            </div>
            <div>
              According to <Typography variant="cite">The Design Manual</Typography>
            </div>
            <div>
              He said <Typography variant="q">Hello, world!</Typography>
            </div>
            <div>
              <Typography variant="dfn">Responsive Design</Typography> is a web design approach
            </div>
            <div>
              Output: <Typography variant="samp">Hello, World!</Typography>
            </div>
            <div>
              The <Typography variant="var">userName</Typography> variable stores the user's name
            </div>
          </div>
        </Paper>

        {/* Data Elements */}
        <Paper className="p-6">
          <Typography variant="h3" className="mb-4">Data Elements</Typography>
          <div className="space-y-2">
            <div>
              Published on{' '}
              <Typography variant="time" dateTime="2024-01-15T14:30:00">
                January 15, 2024, 2:30 PM
              </Typography>
            </div>
            <div>
              Sales target:{' '}
              <Typography variant="data" value="1500">
                One thousand five hundred units
              </Typography>
            </div>
          </div>
        </Paper>

        {/* Combined Usage */}
        <Paper className="p-6">
          <Typography variant="h3" className="mb-4">Combined Usage Example</Typography>
          <div className="space-y-3">
            <Typography variant="body">
              <Typography variant="strong">Important:</Typography>{' '}
              The <Typography variant="abbr" title="Application Programming Interface">API</Typography>{' '}
              endpoint <Typography variant="code">https://api.example.com</Typography> was{' '}
              <Typography variant="del">temporarily</Typography>{' '}
              <Typography variant="ins">permanently</Typography> updated on{' '}
              <Typography variant="time" dateTime="2024-01-15">January 15, 2024</Typography>.
            </Typography>
            
            <Typography variant="body">
              To use the new endpoint, run{' '}
              <Typography variant="kbd">npm install</Typography> and update the{' '}
              <Typography variant="var">apiUrl</Typography> variable in your configuration.
            </Typography>
            
            <Typography variant="small">
              <Typography variant="em">Note:</Typography> Legacy endpoints will be{' '}
              <Typography variant="strong">deprecated</Typography> in Q2 2024.
            </Typography>
          </div>
        </Paper>

        {/* Visual Style Test */}
        <Paper className="p-6">
          <Typography variant="h3" className="mb-4">Visual Style Verification</Typography>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Element</strong>: <Typography variant="strong">strong</Typography><br />
              <strong>Element</strong>: <Typography variant="em">em</Typography><br />
              <strong>Element</strong>: <Typography variant="small">small</Typography><br />
              <strong>Element</strong>: <Typography variant="kbd">kbd</Typography><br />
              <strong>Element</strong>: <Typography variant="del">del</Typography><br />
              <strong>Element</strong>: <Typography variant="ins">ins</Typography><br />
              <strong>Element</strong>: X<Typography variant="sub">sub</Typography><br />
              <strong>Element</strong>: X<Typography variant="sup">sup</Typography>
            </div>
            <div>
              <strong>Element</strong>: <Typography variant="abbr" title="Abbreviation">abbr</Typography><br />
              <strong>Element</strong>: <Typography variant="cite">cite</Typography><br />
              <strong>Element</strong>: <Typography variant="q">q</Typography><br />
              <strong>Element</strong>: <Typography variant="dfn">dfn</Typography><br />
              <strong>Element</strong>: <Typography variant="samp">samp</Typography><br />
              <strong>Element</strong>: <Typography variant="var">var</Typography><br />
              <strong>Element</strong>: <Typography variant="time" dateTime="2024-01-15">time</Typography><br />
              <strong>Element</strong>: <Typography variant="data" value="42">data</Typography>
            </div>
          </div>
        </Paper>
      </div>
    </Section>
  );
};

export default SemanticTypographyValidation;