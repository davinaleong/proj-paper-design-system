import { Typography } from "../../components/core"

export function FloatingNavbarShowcase() {
  return (
    <div id="floating-navbar" className="space-y-8">
      <div>
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
    </div>
  )
}