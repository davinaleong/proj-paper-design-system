import React from 'react';
import { Pagination } from '../components/navigation/Pagination';

/**
 * Test component to specifically verify horizontal scrolling behavior
 * This component creates scenarios that should definitely trigger horizontal scrolling
 */
export const PaginationScrollTest: React.FC = () => {
  return (
    <div className="p-4 space-y-8 bg-stone-50 min-h-screen">
      <h1 className="text-3xl font-bold text-stone-900 mb-8">Pagination Horizontal Scroll Tests</h1>
      
      {/* Test 1: Narrow container with many pages */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-stone-800">Test 1: Narrow Container (300px wide) with 50 pages</h2>
        <div style={{ width: '300px', border: '2px dashed #ef4444', padding: '8px' }}>
          <Pagination
            currentPage={25}
            totalPages={50}
            format="numbers"
            variant="solid"
            size="md"
          />
        </div>
      </div>

      {/* Test 2: Very narrow container with first-last format */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-stone-800">Test 2: Very Narrow Container (250px) with First/Last</h2>
        <div style={{ width: '250px', border: '2px dashed #ef4444', padding: '8px' }}>
          <Pagination
            currentPage={10}
            totalPages={20}
            format="first-last"
            variant="outline"
            size="md"
          />
        </div>
      </div>

      {/* Test 3: Letter format in narrow container */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-stone-800">Test 3: Letter Format in 280px Container</h2>
        <div style={{ width: '280px', border: '2px dashed #ef4444', padding: '8px' }}>
          <Pagination
            currentPage={10}
            totalPages={26}
            format="letters"
            variant="ghost"
            size="md"
          />
        </div>
      </div>

      {/* Test 4: Roman numerals in narrow container */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-stone-800">Test 4: Roman Numerals in 320px Container</h2>
        <div style={{ width: '320px', border: '2px dashed #ef4444', padding: '8px' }}>
          <Pagination
            currentPage={15}
            totalPages={30}
            format="roman"
            variant="link"
            size="md"
          />
        </div>
      </div>

      {/* Test 5: Normal width but many pages to force scroll */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-stone-800">Test 5: Normal Width but 100 Pages</h2>
        <div style={{ width: '600px', border: '2px dashed #ef4444', padding: '8px' }}>
          <Pagination
            currentPage={50}
            totalPages={100}
            format="numbers"
            variant="solid"
            size="lg"
          />
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
        <h2 className="text-lg font-semibold text-blue-900 mb-4">How to Test Horizontal Scrolling:</h2>
        <ol className="list-decimal list-inside space-y-2 text-blue-800">
          <li>Look for the red dashed containers above</li>
          <li>The pagination content should extend beyond the container width</li>
          <li>You should be able to scroll horizontally within each container using:</li>
          <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
            <li><strong>Mouse:</strong> Click and drag horizontally, or use mouse wheel while hovering</li>
            <li><strong>Trackpad:</strong> Two-finger swipe horizontally</li>
            <li><strong>Touch:</strong> Swipe horizontally on mobile devices</li>
            <li><strong>Keyboard:</strong> Tab to focus pagination, then use arrow keys</li>
          </ul>
          <li>The scrollbars should be hidden but scrolling should still work</li>
          <li>Content should smoothly scroll to reveal hidden pagination buttons</li>
        </ol>
      </div>
    </div>
  );
};

export default PaginationScrollTest;