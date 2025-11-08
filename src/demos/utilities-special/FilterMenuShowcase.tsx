import React, { useState } from "react"
import { Paper, Typography } from "../../components/core"
import { FilterMenu } from "../../components/forms"
import type { FilterMenuState, FilterGroup, SortOption } from "../../components/forms/FilterMenu/types"
import { Package, Tag, Calendar, TrendingUp, Star, Clock, Zap } from "lucide-react"

const sampleFilterGroups: FilterGroup[] = [
  {
    id: "category",
    label: "Category",
    multiple: true,
    options: [
      { id: "electronics", label: "Electronics", icon: Zap, count: 42 },
      { id: "clothing", label: "Clothing", icon: Package, count: 28 },
      { id: "books", label: "Books", icon: Package, count: 15 },
      { id: "home", label: "Home & Garden", icon: Package, count: 33 }
    ]
  },
  {
    id: "tags",
    label: "Tags",
    multiple: true,
    collapsible: true,
    options: [
      { id: "sale", label: "On Sale", icon: Tag, count: 23 },
      { id: "new", label: "New Arrival", icon: Star, count: 18 },
      { id: "featured", label: "Featured", icon: TrendingUp, count: 12 },
      { id: "limited", label: "Limited Edition", icon: Clock, count: 5 }
    ]
  },
  {
    id: "status",
    label: "Status",
    multiple: false,
    options: [
      { id: "available", label: "Available", count: 89 },
      { id: "out-of-stock", label: "Out of Stock", count: 14 },
      { id: "pre-order", label: "Pre-order", count: 7 }
    ]
  }
]

const sampleSortOptions: SortOption[] = [
  { id: "name-asc", label: "Name", direction: "asc", description: "A to Z" },
  { id: "name-desc", label: "Name", direction: "desc", description: "Z to A" },
  { id: "price-asc", label: "Price", direction: "asc", description: "Low to High" },
  { id: "price-desc", label: "Price", direction: "desc", description: "High to Low" },
  { id: "date-desc", label: "Newest", direction: "desc", icon: Calendar },
  { id: "date-asc", label: "Oldest", direction: "asc", icon: Calendar },
  { id: "popularity", label: "Most Popular", icon: TrendingUp },
  { id: "rating", label: "Highest Rated", icon: Star }
]

export const FilterMenuShowcase: React.FC = () => {
  const [filterState, setFilterState] = useState<FilterMenuState>({
    filters: {},
    sort: undefined,
    search: ""
  })

  const handleFiltersChange = (filters: Record<string, string[]>) => {
    setFilterState(prev => ({ ...prev, filters }))
  }

  const handleSortChange = (sort: string) => {
    setFilterState(prev => ({ ...prev, sort }))
  }

  const handleSearchChange = (search: string) => {
    setFilterState(prev => ({ ...prev, search }))
  }

  const handleClear = () => {
    setFilterState({ filters: {}, sort: undefined, search: "" })
  }

  return (
    <Paper className="p-6 my-8">
      <Typography variant="h3" className="mb-6 text-stone-800">
        FilterMenu Component
      </Typography>

      <div className="space-y-8">
        {/* Basic Filter Menu */}
        <div>
          <Typography variant="h5" className="mb-4 text-stone-700">
            Basic Filter Menu
          </Typography>
          <div className="flex items-center gap-4">
            <FilterMenu
              filterGroups={sampleFilterGroups}
              sortOptions={sampleSortOptions}
              state={filterState}
              onFiltersChange={handleFiltersChange}
              onSortChange={handleSortChange}
              onSearchChange={handleSearchChange}
              onClear={handleClear}
            />
            
            <div className="text-sm text-stone-600">
              Active filters: {Object.values(filterState.filters).flat().length}
              {filterState.sort && ` | Sort: ${filterState.sort}`}
            </div>
          </div>
        </div>

        {/* With Search */}
        <div>
          <Typography variant="h5" className="mb-4 text-stone-700">
            With Search
          </Typography>
          <FilterMenu
            filterGroups={sampleFilterGroups}
            sortOptions={sampleSortOptions}
            searchable={true}
            searchPlaceholder="Search filters and options..."
            showCounts={true}
            triggerText="Search & Filter"
          />
        </div>

        {/* Different Variants */}
        <div>
          <Typography variant="h5" className="mb-4 text-stone-700">
            Variants & Colors
          </Typography>
          <div className="flex flex-wrap items-center gap-4">
            <FilterMenu
              filterGroups={sampleFilterGroups.slice(0, 2)}
              variant="solid"
              color="primary"
              triggerText="Solid Primary"
              size="sm"
            />
            
            <FilterMenu
              filterGroups={sampleFilterGroups.slice(0, 2)}
              variant="outline"
              color="success"
              triggerText="Outline Success"
              size="md"
            />
            
            <FilterMenu
              filterGroups={sampleFilterGroups.slice(0, 2)}
              variant="ghost"
              color="warning"
              triggerText="Ghost Warning"
              size="lg"
            />
          </div>
        </div>

        {/* With Apply/Cancel Buttons */}
        <div>
          <Typography variant="h5" className="mb-4 text-stone-700">
            With Apply/Cancel Buttons
          </Typography>
          <FilterMenu
            filterGroups={sampleFilterGroups}
            sortOptions={sampleSortOptions}
            showApplyButtons={true}
            showClearAll={true}
            triggerText="Advanced Filter"
            variant="outline"
            color="secondary"
          />
        </div>

        {/* Sort Only */}
        <div>
          <Typography variant="h5" className="mb-4 text-stone-700">
            Sort Only
          </Typography>
          <FilterMenu
            sortOptions={sampleSortOptions}
            triggerText="Sort Products"
            triggerIcon={TrendingUp}
            variant="ghost"
            showActiveCount={false}
          />
        </div>

        {/* Current State Display */}
        <div>
          <Typography variant="h5" className="mb-4 text-stone-700">
            Current Filter State
          </Typography>
          <div className="bg-stone-50 dark:bg-stone-800 p-4 rounded-lg">
            <pre className="text-sm text-stone-700 dark:text-stone-300 overflow-auto">
              {JSON.stringify(filterState, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </Paper>
  )
}