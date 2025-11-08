import { useState } from "react"
import { SearchBar } from "../../components/forms"
import { Typography } from "../../components/core"
import { Paper } from "../../components/core"
import { Filter, Settings, Calendar } from "lucide-react"

export function SearchBarShowcase() {
  const [searchValue, setSearchValue] = useState("")
  const [flexibleValue, setFlexibleValue] = useState("")
  const [topbarValue, setTopbarValue] = useState("")

  const handleSearch = (value: string) => {
    console.log("Search:", value)
  }

  const handleClear = () => {
    setSearchValue("")
  }

  return (
    <div className="space-y-8">
      <div>
        <Typography variant="h2" className="mb-2">
          Search Bar
        </Typography>
        <Typography variant="body" color="muted">
          Search input component with type=search, customizable width variants, and compatibility with flex/grid layouts.
        </Typography>
      </div>

      {/* Basic Examples */}
      <Paper className="p-6">
        <Typography variant="h3" className="mb-4">Basic Search Bars</Typography>
        <div className="space-y-6">
          <div>
            <Typography variant="h5" className="mb-2">Default Search Bar</Typography>
            <SearchBar
              placeholder="Search for anything..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onSearch={handleSearch}
              onClear={handleClear}
            />
          </div>

          <div>
            <Typography variant="h5" className="mb-2">With Label</Typography>
            <SearchBar
              label="Global Search"
              placeholder="Type to search..."
              helperText="Press Enter to search or use the clear button"
            />
          </div>

          <div>
            <Typography variant="h5" className="mb-2">With Custom Icon</Typography>
            <SearchBar
              placeholder="Filter results..."
              leftIcon={Filter}
              rightIcon={Settings}
              hideSearchIcon={false}
            />
          </div>
        </div>
      </Paper>

      {/* Width Variants */}
      <Paper className="p-6">
        <Typography variant="h3" className="mb-4">Width Variants</Typography>
        <div className="space-y-6">
          <div>
            <Typography variant="h5" className="mb-2">Fixed Width (min-width: 16rem)</Typography>
            <Typography variant="body" color="muted" className="mb-3">
              Recommended for topbars and constrained spaces
            </Typography>
            <div className="flex justify-start">
              <SearchBar
                width="fixed"
                placeholder="Fixed width search..."
              />
            </div>
          </div>

          <div>
            <Typography variant="h5" className="mb-2">Flexible Width (spans parent)</Typography>
            <Typography variant="body" color="muted" className="mb-3">
              Adapts to parent container width
            </Typography>
            <SearchBar
              width="flexible"
              placeholder="Flexible width search..."
              value={flexibleValue}
              onChange={(e) => setFlexibleValue(e.target.value)}
            />
          </div>
        </div>
      </Paper>

      {/* Size Variants */}
      <Paper className="p-6">
        <Typography variant="h3" className="mb-4">Size Variants</Typography>
        <div className="space-y-4">
          <div>
            <Typography variant="h5" className="mb-2">Small</Typography>
            <SearchBar
              size="sm"
              placeholder="Small search bar"
              width="fixed"
            />
          </div>

          <div>
            <Typography variant="h5" className="mb-2">Medium (Default)</Typography>
            <SearchBar
              size="md"
              placeholder="Medium search bar"
              width="fixed"
            />
          </div>

          <div>
            <Typography variant="h5" className="mb-2">Large</Typography>
            <SearchBar
              size="lg"
              placeholder="Large search bar"
              width="fixed"
            />
          </div>
        </div>
      </Paper>

      {/* Style Variants */}
      <Paper className="p-6">
        <Typography variant="h3" className="mb-4">Style Variants</Typography>
        <div className="space-y-4">
          <div>
            <Typography variant="h5" className="mb-2">Default</Typography>
            <SearchBar
              variant="default"
              placeholder="Default variant"
              width="fixed"
            />
          </div>

          <div>
            <Typography variant="h5" className="mb-2">Filled</Typography>
            <SearchBar
              variant="filled"
              placeholder="Filled variant"
              width="fixed"
            />
          </div>

          <div>
            <Typography variant="h5" className="mb-2">Outlined</Typography>
            <SearchBar
              variant="outlined"
              placeholder="Outlined variant"
              width="fixed"
            />
          </div>
        </div>
      </Paper>

      {/* Topbar Example */}
      <Paper className="p-6">
        <Typography variant="h3" className="mb-4">Topbar Integration</Typography>
        <Typography variant="body" color="muted" className="mb-4">
          Demonstration of Search Bar in typical navigation/topbar layouts
        </Typography>
        
        {/* Mock Topbar */}
        <div className="bg-white border border-stone-200 rounded-lg p-4 mb-4">
          {/* Flexbox Topbar */}
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-4">
              <Typography variant="h5">App Name</Typography>
              <SearchBar
                width="fixed"
                size="sm"
                placeholder="Search..."
                value={topbarValue}
                onChange={(e) => setTopbarValue(e.target.value)}
                showClearButton={false}
              />
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-stone-100 rounded">
                <Calendar className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-stone-100 rounded">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Grid Topbar */}
          <div className="grid grid-cols-12 items-center gap-4">
            <div className="col-span-2">
              <Typography variant="h5">Dashboard</Typography>
            </div>
            <div className="col-span-6">
              <SearchBar
                width="flexible"
                size="sm"
                placeholder="Search dashboard..."
              />
            </div>
            <div className="col-span-4 flex justify-end gap-2">
              <button className="p-2 hover:bg-stone-100 rounded">
                <Filter className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-stone-100 rounded">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </Paper>

      {/* States */}
      <Paper className="p-6">
        <Typography variant="h3" className="mb-4">States</Typography>
        <div className="space-y-4">
          <div>
            <Typography variant="h5" className="mb-2">Disabled</Typography>
            <SearchBar
              placeholder="Disabled search bar"
              disabled
              width="fixed"
            />
          </div>

          <div>
            <Typography variant="h5" className="mb-2">Readonly</Typography>
            <SearchBar
              placeholder="Read-only search bar"
              value="Read-only value"
              readonly
              width="fixed"
            />
          </div>

          <div>
            <Typography variant="h5" className="mb-2">Error State</Typography>
            <SearchBar
              placeholder="Search with error"
              error
              errorMessage="Please enter a valid search term"
              width="fixed"
            />
          </div>
        </div>
      </Paper>

      {/* Layout Compatibility */}
      <Paper className="p-6">
        <Typography variant="h3" className="mb-4">Layout Compatibility</Typography>
        
        <div className="space-y-6">
          <div>
            <Typography variant="h5" className="mb-2">Flexbox Layout</Typography>
            <div className="flex gap-4 items-center">
              <Typography variant="body">Filter:</Typography>
              <SearchBar
                width="fixed"
                size="sm"
                placeholder="Quick filter..."
              />
              <button className="px-4 py-2 bg-blue-500 text-white rounded-sm hover:bg-blue-600">
                Apply
              </button>
            </div>
          </div>

          <div>
            <Typography variant="h5" className="mb-2">Grid Layout</Typography>
            <div className="grid grid-cols-4 gap-4 items-end">
              <div>
                <Typography variant="small" className="block mb-1">Name</Typography>
                <SearchBar
                  width="flexible"
                  size="sm"
                  placeholder="Name..."
                />
              </div>
              <div>
                <Typography variant="small" className="block mb-1">Category</Typography>
                <SearchBar
                  width="flexible"
                  size="sm"
                  placeholder="Category..."
                />
              </div>
              <div>
                <Typography variant="small" className="block mb-1">Status</Typography>
                <SearchBar
                  width="flexible"
                  size="sm"
                  placeholder="Status..."
                />
              </div>
              <div>
                <button className="px-4 py-2 bg-green-500 text-white rounded-sm hover:bg-green-600 w-full">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  )
}