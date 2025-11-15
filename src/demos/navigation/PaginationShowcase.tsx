import React, { useState } from "react"
import { Pagination } from "../../components/navigation/Pagination"
import { Paper } from "../../components/core/Paper"
import { Typography } from "../../components/core/Typography"
import type { PaginationVariant, PaginationFormat } from "../../components/navigation/Pagination"
import type { ColorVariant } from "../../utils/color"

const PaginationVariantDemo: React.FC<{
  variant: PaginationVariant
  color: ColorVariant
  title: string
  totalPages?: number
}> = ({ variant, color, title, totalPages = 10 }) => {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <div className="space-y-4">
      <Typography variant="h4" color="stone">{title}</Typography>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        variant={variant}
        color={color}
        onPageChange={setCurrentPage}
        showPageInfo={true}
      />
    </div>
  )
}

const PaginationFormatDemo: React.FC<{
  format: PaginationFormat
  title: string
  description: string
  totalPages?: number
}> = ({ format, title, description, totalPages = 7 }) => {
  const [currentPage, setCurrentPage] = useState(Math.ceil(totalPages / 2))

  return (
    <div className="space-y-4">
      <div>
        <Typography variant="h4" color="stone">{title}</Typography>
        <Typography variant="bodySmall" color="muted">{description}</Typography>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        format={format}
        variant="outline"
        color="primary"
        onPageChange={setCurrentPage}
        showPageInfo={true}
      />
      <Typography variant="caption" color="muted">
        Current page: {currentPage} of {totalPages}
      </Typography>
    </div>
  )
}

export const PaginationShowcase: React.FC = () => {
  const [basicCurrentPage, setBasicCurrentPage] = useState(3)
  const [advancedCurrentPage, setAdvancedCurrentPage] = useState(15)
  const [controlledPage, setControlledPage] = useState(1)

  return (
    <div className="space-y-12 p-6">
      <div>
        <Typography variant="h1" color="stone" className="mb-2">
          Pagination Component Showcase
        </Typography>
        <Typography variant="body" color="stone" className="mb-8">
          Navigate through multi-page content with various formats and styles following Paper design principles.
        </Typography>
      </div>

      {/* Basic Pagination */}
      <section className="space-y-6">
        <Typography variant="h2" color="stone">Basic Pagination</Typography>
        <Paper className="p-6">
          <div className="space-y-6">
            <Typography variant="body" color="stone" className="mb-4">
              Standard pagination with numeric pages and ellipsis for large page counts.
            </Typography>
            <Pagination
              currentPage={basicCurrentPage}
              totalPages={20}
              variant="outline"
              color="primary"
              onPageChange={setBasicCurrentPage}
              showPageInfo={true}
              siblingCount={2}
            />
          </div>
        </Paper>
      </section>

      {/* Pagination Formats */}
      <section className="space-y-6">
        <Typography variant="h2" color="stone">Pagination Formats</Typography>
        <div className="grid grid-cols-1 gap-6">
          <Paper className="p-6">
            <PaginationFormatDemo
              format="prev-next"
              title="Previous / Next"
              description="Simple navigation with only previous and next buttons"
              totalPages={5}
            />
          </Paper>

          <Paper className="p-6">
            <PaginationFormatDemo
              format="first-last"
              title="First / Previous / Current / Next / Last"
              description="Full navigation with first, previous, current, next, and last buttons"
              totalPages={8}
            />
          </Paper>

          <Paper className="p-6">
            <PaginationFormatDemo
              format="numbers"
              title="Numeric Pagination"
              description="Traditional pagination with page numbers (1 ... 3, 4, 5 ... 7)"
              totalPages={15}
            />
          </Paper>

          <Paper className="p-6">
            <PaginationFormatDemo
              format="letters"
              title="Letter Pagination"
              description="Alphabetic pagination with letters (a ... c, d, e ... g)"
              totalPages={12}
            />
          </Paper>

          <Paper className="p-6">
            <PaginationFormatDemo
              format="roman"
              title="Roman Numeral Pagination"
              description="Roman numeral pagination (i ... iii, iv, v ... vii)"
              totalPages={10}
            />
          </Paper>
        </div>
      </section>

      {/* Pagination Variants */}
      <section className="space-y-6">
        <Typography variant="h2" color="stone">Pagination Variants</Typography>
        <div className="grid grid-cols-1 gap-6">
          <Paper className="p-6">
            <PaginationVariantDemo
              variant="solid"
              color="primary"
              title="Solid Variant"
            />
          </Paper>

          <Paper className="p-6">
            <PaginationVariantDemo
              variant="outline"
              color="secondary"
              title="Outline Variant"
            />
          </Paper>

          <Paper className="p-6">
            <PaginationVariantDemo
              variant="ghost"
              color="success"
              title="Ghost Variant"
            />
          </Paper>

          <Paper className="p-6">
            <PaginationVariantDemo
              variant="link"
              color="info"
              title="Link Variant"
            />
          </Paper>

          <Paper className="p-6">
            <PaginationVariantDemo
              variant="plain"
              color="stone"
              title="Plain Variant"
            />
          </Paper>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="space-y-6">
        <Typography variant="h2" color="stone">Advanced Features</Typography>
        
        {/* Large Dataset */}
        <Paper className="p-6">
          <div className="space-y-4">
            <Typography variant="h4" color="stone">Large Dataset Pagination</Typography>
            <Typography variant="body" color="stone" className="mb-4">
              Handling large page counts with smart ellipsis placement and boundary controls.
              The pagination becomes horizontally scrollable on smaller screens.
            </Typography>
            <Pagination
              currentPage={advancedCurrentPage}
              totalPages={100}
              variant="outline"
              color="primary"
              onPageChange={setAdvancedCurrentPage}
              showPageInfo={true}
              siblingCount={1}
              showBoundaries={true}
            />
          </div>
        </Paper>

        {/* Horizontal Scrolling Demo */}
        <Paper className="p-6">
          <div className="space-y-4">
            <Typography variant="h4" color="stone">Horizontal Scrolling Pagination</Typography>
            <Typography variant="body" color="stone" className="mb-4">
              When pagination has many pages, it becomes horizontally scrollable to maintain usability on smaller screens.
              Try scrolling horizontally in the constrained containers below.
            </Typography>
            
            {/* Narrow Container Test */}
            <div className="max-w-xs mx-auto border-2 border-dashed border-primary-300 p-4 rounded-lg bg-primary-50/30">
              <Typography variant="bodySmall" color="muted" className="mb-3 text-center">
                Very Narrow Container (320px) - Scroll Required →
              </Typography>
              <Pagination
                currentPage={50}
                totalPages={200}
                variant="outline"
                color="primary"
                onPageChange={() => {}}
                showPageInfo={true}
                siblingCount={2}
                showBoundaries={true}
              />
            </div>

            {/* Medium Container Test */}
            <div className="max-w-md mx-auto border-2 border-dashed border-secondary-300 p-4 rounded-lg bg-secondary-50/30">
              <Typography variant="bodySmall" color="muted" className="mb-3 text-center">
                Medium Container (448px) - May Need Scroll →
              </Typography>
              <Pagination
                currentPage={25}
                totalPages={100}
                variant="ghost"
                color="secondary"
                onPageChange={() => {}}
                showPageInfo={true}
                siblingCount={3}
                showBoundaries={true}
              />
            </div>

            {/* Many Pages Test */}
            <div className="max-w-lg mx-auto border-2 border-dashed border-success-300 p-4 rounded-lg bg-success-50/30">
              <Typography variant="bodySmall" color="muted" className="mb-3 text-center">
                Large Container (512px) with Many Pages - Scroll Horizontally →
              </Typography>
              <Pagination
                currentPage={500}
                totalPages={1000}
                variant="solid"
                color="success"
                size="sm"
                onPageChange={() => {}}
                showPageInfo={true}
                siblingCount={4}
                showBoundaries={true}
              />
            </div>
          </div>
        </Paper>

        {/* Controlled Pagination */}
        <Paper className="p-6">
          <div className="space-y-4">
            <Typography variant="h4" color="stone">Controlled Pagination</Typography>
            <div className="flex items-center gap-4 mb-4">
              <Typography variant="body" color="stone">
                External Controls: 
              </Typography>
              <button
                onClick={() => setControlledPage(1)}
                className="px-3 py-1 bg-primary-500 text-white rounded text-sm hover:bg-primary-600"
              >
                Go to First
              </button>
              <button
                onClick={() => setControlledPage(Math.ceil(15 / 2))}
                className="px-3 py-1 bg-secondary-500 text-white rounded text-sm hover:bg-secondary-600"
              >
                Go to Middle
              </button>
              <button
                onClick={() => setControlledPage(15)}
                className="px-3 py-1 bg-success-500 text-white rounded text-sm hover:bg-success-600"
              >
                Go to Last
              </button>
            </div>
            <Pagination
              currentPage={controlledPage}
              totalPages={15}
              variant="ghost"
              color="primary"
              onPageChange={setControlledPage}
              showPageInfo={true}
            />
          </div>
        </Paper>

        {/* Different Sizes */}
        <Paper className="p-6">
          <div className="space-y-6">
            <Typography variant="h4" color="stone">Pagination Sizes</Typography>
            
            <div className="space-y-4">
              <Typography variant="bodySmall" color="muted">Small Size</Typography>
              <Pagination
                currentPage={3}
                totalPages={8}
                variant="outline"
                color="primary"
                size="sm"
                onPageChange={() => {}}
              />
            </div>

            <div className="space-y-4">
              <Typography variant="bodySmall" color="muted">Medium Size (Default)</Typography>
              <Pagination
                currentPage={3}
                totalPages={8}
                variant="outline"
                color="primary"
                size="md"
                onPageChange={() => {}}
              />
            </div>

            <div className="space-y-4">
              <Typography variant="bodySmall" color="muted">Large Size</Typography>
              <Pagination
                currentPage={3}
                totalPages={8}
                variant="outline"
                color="primary"
                size="lg"
                onPageChange={() => {}}
              />
            </div>
          </div>
        </Paper>

        {/* Disabled State */}
        <Paper className="p-6">
          <div className="space-y-4">
            <Typography variant="h4" color="stone">Disabled State</Typography>
            <Typography variant="body" color="stone" className="mb-4">
              Pagination can be disabled for loading states or when navigation is not available.
            </Typography>
            <Pagination
              currentPage={5}
              totalPages={10}
              variant="outline"
              color="primary"
              disabled={true}
              onPageChange={() => {}}
              showPageInfo={true}
            />
          </div>
        </Paper>
      </section>

      {/* Color Variations */}
      <section className="space-y-6">
        <Typography variant="h2" color="stone">Color Variations</Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(["primary", "secondary", "success", "warning", "danger", "info"] as ColorVariant[]).map((color) => (
            <Paper key={color} className="p-6">
              <Typography variant="h4" color="stone" className="mb-4 capitalize">
                {color} Color
              </Typography>
              <Pagination
                currentPage={3}
                totalPages={7}
                variant="solid"
                color={color}
                onPageChange={() => {}}
              />
            </Paper>
          ))}
        </div>
      </section>

      {/* Custom Labels */}
      <section className="space-y-6">
        <Typography variant="h2" color="stone">Custom Labels</Typography>
        <Paper className="p-6">
          <div className="space-y-4">
            <Typography variant="h4" color="stone">Internationalization Support</Typography>
            <Typography variant="body" color="stone" className="mb-4">
              Pagination supports custom labels for internationalization.
            </Typography>
            <Pagination
              currentPage={2}
              totalPages={5}
              format="first-last"
              variant="outline"
              color="primary"
              labels={{
                first: "Premier",
                previous: "Précédent",
                next: "Suivant",
                last: "Dernier",
                page: "Page"
              }}
              onPageChange={() => {}}
              showPageInfo={true}
            />
          </div>
        </Paper>
      </section>

      {/* Edge Cases */}
      <section className="space-y-6">
        <Typography variant="h2" color="stone">Edge Cases & Responsive Behavior</Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Paper className="p-6">
            <Typography variant="h4" color="stone" className="mb-4">Single Page</Typography>
            <Typography variant="body" color="stone" className="mb-4">
              Pagination is hidden when there's only one page.
            </Typography>
            <div className="min-h-[60px] flex items-center justify-center border-2 border-dashed border-stone-200 rounded">
              <Pagination
                currentPage={1}
                totalPages={1}
                variant="outline"
                color="primary"
                onPageChange={() => {}}
              />
              <Typography variant="bodySmall" color="muted">
                (Hidden - only 1 page)
              </Typography>
            </div>
          </Paper>

          <Paper className="p-6">
            <Typography variant="h4" color="stone" className="mb-4">Two Pages</Typography>
            <Typography variant="body" color="stone" className="mb-4">
              Minimal pagination for small datasets.
            </Typography>
            <Pagination
              currentPage={1}
              totalPages={2}
              variant="outline"
              color="primary"
              onPageChange={() => {}}
            />
          </Paper>

          <Paper className="p-6 md:col-span-2">
            <Typography variant="h4" color="stone" className="mb-4">Mobile Responsive Scrolling</Typography>
            <Typography variant="body" color="stone" className="mb-4">
              On mobile devices or narrow containers, pagination becomes horizontally scrollable.
            </Typography>
            <div className="max-w-xs mx-auto border-2 border-dashed border-stone-300 p-2 rounded-lg">
              <Typography variant="bodySmall" color="muted" className="mb-2 text-center">
                Mobile Width Simulation (320px)
              </Typography>
              <Pagination
                currentPage={15}
                totalPages={50}
                variant="ghost"
                color="primary"
                size="sm"
                onPageChange={() => {}}
                siblingCount={2}
              />
            </div>
          </Paper>
        </div>
      </section>
    </div>
  )
}