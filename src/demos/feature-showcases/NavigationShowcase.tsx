import { Paper, Typography } from "../../components/core"

export function NavigationShowcase() {
  return (
    <>
      <section id="navigation">
        <Paper>
          <div className="mb-8">
            <Typography variant="h2" className="mb-4">
              Navigation Components
            </Typography>
            <Typography variant="body" className="text-stone-600 mb-4">
              Navigation components for organizing and moving through your
              application with Dav/Devs Paper styling.
            </Typography>
          </div>

          {/* Floating Navbar Example */}
          <div className="mb-8">
            <Typography variant="h3" className="mb-4">
              Floating Navbar
            </Typography>
            <Typography variant="body" className="text-stone-600 mb-4">
              A floating navigation bar that can be positioned anywhere on the
              screen with smooth scrolling and automatic highlighting.
            </Typography>
            <Typography variant="body" className="mb-4">
              ✅ Automatic scroll-based highlighting
              <br />
              ✅ Smooth scrolling to sections
              <br />
              ✅ Configurable positioning (corners)
              <br />
              ✅ Responsive design with backdrop blur
              <br />
              ✅ Paper theme styling
              <br />✅ Full accessibility support
            </Typography>

            {/* The floating navbar is rendered at the app level */}
            <div className="p-4 bg-stone-100 rounded-lg">
              <Typography variant="body" className="text-stone-600">
                The floating navbar is currently active in the top-right corner
                of this page. Scroll through the sections to see the automatic
                highlighting in action.
              </Typography>
            </div>
          </div>

          {/* Future Navigation Components */}
          <div className="space-y-6">
            <Typography variant="h3" className="mb-4">
              Coming Soon
            </Typography>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 border border-stone-200 rounded-lg">
                <Typography variant="h4" className="mb-2">
                  Breadcrumbs
                </Typography>
                <Typography variant="body" className="text-stone-600 text-sm">
                  Navigation trail showing current location
                </Typography>
              </div>

              <div className="p-4 border border-stone-200 rounded-lg">
                <Typography variant="h4" className="mb-2">
                  Sidebar
                </Typography>
                <Typography variant="body" className="text-stone-600 text-sm">
                  Collapsible side navigation drawer
                </Typography>
              </div>

              <div className="p-4 border border-stone-200 rounded-lg">
                <Typography variant="h4" className="mb-2">
                  Tabs
                </Typography>
                <Typography variant="body" className="text-stone-600 text-sm">
                  Content switching interface
                </Typography>
              </div>

              <div className="p-4 border border-stone-200 rounded-lg">
                <Typography variant="h4" className="mb-2">
                  Pagination
                </Typography>
                <Typography variant="body" className="text-stone-600 text-sm">
                  Page navigation controls
                </Typography>
              </div>

              <div className="p-4 border border-stone-200 rounded-lg">
                <Typography variant="h4" className="mb-2">
                  Stepper
                </Typography>
                <Typography variant="body" className="text-stone-600 text-sm">
                  Multi-step process indicator
                </Typography>
              </div>

              <div className="p-4 border border-stone-200 rounded-lg">
                <Typography variant="h4" className="mb-2">
                  Command Palette
                </Typography>
                <Typography variant="body" className="text-stone-600 text-sm">
                  Keyboard-driven navigation
                </Typography>
              </div>
            </div>
          </div>
        </Paper>
      </section>
    </>
  )
}
