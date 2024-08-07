export const inlineBorder = `
/* Border width */
.border { border-width: 1px; }
.border-0 { border-width: 0; }
.border-2 { border-width: 2px; }
.border-4 { border-width: 4px; }
.border-8 { border-width: 8px; }

/* Border width per side */
.border-t { border-top-width: 1px; }
.border-r { border-right-width: 1px; }
.border-b { border-bottom-width: 1px; }
.border-l { border-left-width: 1px; }
.border-t-0 { border-top-width: 0; }
.border-r-0 { border-right-width: 0; }
.border-b-0 { border-bottom-width: 0; }
.border-l-0 { border-left-width: 0; }
.border-t-2 { border-top-width: 2px; }
.border-r-2 { border-right-width: 2px; }
.border-b-2 { border-bottom-width: 2px; }
.border-l-2 { border-left-width: 2px; }
.border-t-4 { border-top-width: 4px; }
.border-r-4 { border-right-width: 4px; }
.border-b-4 { border-bottom-width: 4px; }
.border-l-4 { border-left-width: 4px; }
.border-t-8 { border-top-width: 8px; }
.border-r-8 { border-right-width: 8px; }
.border-b-8 { border-bottom-width: 8px; }
.border-l-8 { border-left-width: 8px; }

/* Border colors */
.border-transparent { border-color: transparent; }
.border-black { border-color: #000000; }
.border-white { border-color: #ffffff; }
.border-gray-50 { border-color: #f9fafb; }
.border-gray-100 { border-color: #f3f4f6; }
.border-gray-200 { border-color: #e5e7eb; }
.border-gray-300 { border-color: #d1d5db; }
.border-gray-400 { border-color: #9ca3af; }
.border-gray-500 { border-color: #6b7280; }
.border-gray-600 { border-color: #4b5563; }
.border-gray-700 { border-color: #374151; }
.border-gray-800 { border-color: #1f2937; }
.border-gray-900 { border-color: #111827; }

.border-red-50 { border-color: #fef2f2; }
.border-red-100 { border-color: #fee2e2; }
.border-red-200 { border-color: #fecaca; }
.border-red-300 { border-color: #fca5a5; }
.border-red-400 { border-color: #f87171; }
.border-red-500 { border-color: #ef4444; }
.border-red-600 { border-color: #dc2626; }
.border-red-700 { border-color: #b91c1c; }
.border-red-800 { border-color: #991b1b; }
.border-red-900 { border-color: #7f1d1d; }

.border-yellow-50 { border-color: #fffbeb; }
.border-yellow-100 { border-color: #fef3c7; }
.border-yellow-200 { border-color: #fde68a; }
.border-yellow-300 { border-color: #fcd34d; }
.border-yellow-400 { border-color: #fbbf24; }
.border-yellow-500 { border-color: #f59e0b; }
.border-yellow-600 { border-color: #d97706; }
.border-yellow-700 { border-color: #b45309; }
.border-yellow-800 { border-color: #92400e; }
.border-yellow-900 { border-color: #78350f; }

.border-green-50 { border-color: #f0fdf4; }
.border-green-100 { border-color: #dcfce7; }
.border-green-200 { border-color: #bbf7d0; }
.border-green-300 { border-color: #86efac; }
.border-green-400 { border-color: #4ade80; }
.border-green-500 { border-color: #22c55e; }
.border-green-600 { border-color: #16a34a; }
.border-green-700 { border-color: #15803d; }
.border-green-800 { border-color: #166534; }
.border-green-900 { border-color: #14532d; }

.border-blue-50 { border-color: #eff6ff; }
.border-blue-100 { border-color: #dbeafe; }
.border-blue-200 { border-color: #bfdbfe; }
.border-blue-300 { border-color: #93c5fd; }
.border-blue-400 { border-color: #60a5fa; }
.border-blue-500 { border-color: #3b82f6; }
.border-blue-600 { border-color: #2563eb; }
.border-blue-700 { border-color: #1d4ed8; }
.border-blue-800 { border-color: #1e40af; }
.border-blue-900 { border-color: #1e3a8a; }

.border-indigo-50 { border-color: #eef2ff; }
.border-indigo-100 { border-color: #e0e7ff; }
.border-indigo-200 { border-color: #c7d2fe; }
.border-indigo-300 { border-color: #a5b4fc; }
.border-indigo-400 { border-color: #818cf8; }
.border-indigo-500 { border-color: #6366f1; }
.border-indigo-600 { border-color: #4f46e5; }
.border-indigo-700 { border-color: #4338ca; }
.border-indigo-800 { border-color: #3730a3; }
.border-indigo-900 { border-color: #312e81; }

.border-purple-50 { border-color: #f5f3ff; }
.border-purple-100 { border-color: #ede9fe; }
.border-purple-200 { border-color: #ddd6fe; }
.border-purple-300 { border-color: #c4b5fd; }
.border-purple-400 { border-color: #a78bfa; }
.border-purple-500 { border-color: #8b5cf6; }
.border-purple-600 { border-color: #7c3aed; }
.border-purple-700 { border-color: #6d28d9; }
.border-purple-800 { border-color: #5b21b6; }
.border-purple-900 { border-color: #4c1d95; }

.border-pink-50 { border-color: #fdf2f8; }
.border-pink-100 { border-color: #fce7f3; }
.border-pink-200 { border-color: #fbcfe8; }
.border-pink-300 { border-color: #f9a8d4; }
.border-pink-400 { border-color: #f472b6; }
.border-pink-500 { border-color: #ec4899; }
.border-pink-600 { border-color: #db2777; }
.border-pink-700 { border-color: #be185d; }
.border-pink-800 { border-color: #9d174d; }
.border-pink-900 { border-color: #831843; }

.border-neutral-50 { border-color: #fafafa; }
.border-neutral-100 { border-color: #f4f4f5; }
.border-neutral-200 { border-color: #e4e4e7; }
.border-neutral-300 { border-color: #d1d5db; }
.border-neutral-400 { border-color: #9ca3af; }
.border-neutral-500 { border-color: #6b7280; }
.border-neutral-600 { border-color: #4b5563; }
.border-neutral-700 { border-color: #374151; }
.border-neutral-800 { border-color: #1f2937; }
.border-neutral-900 { border-color: #111827; }


/* Border radius */
.rounded-none { border-radius: 0; }
.rounded-sm { border-radius: 0.125rem; }
.rounded { border-radius: 0.25rem; }
.rounded-md { border-radius: 0.375rem; }
.rounded-lg { border-radius: 0.5rem; }
.rounded-xl { border-radius: 0.75rem; }
.rounded-2xl { border-radius: 1rem; }
.rounded-3xl { border-radius: 1.5rem; }
.rounded-full { border-radius: 9999px; }

/* Border radius for individual corners */
.rounded-t-none { border-top-left-radius: 0; border-top-right-radius: 0; }
.rounded-r-none { border-top-right-radius: 0; border-bottom-right-radius: 0; }
.rounded-b-none { border-bottom-right-radius: 0; border-bottom-left-radius: 0; }
.rounded-l-none { border-top-left-radius: 0; border-bottom-left-radius: 0; }
.rounded-t-sm { border-top-left-radius: 0.125rem; border-top-right-radius: 0.125rem; }
.rounded-r-sm { border-top-right-radius: 0.125rem; border-bottom-right-radius: 0.125rem; }
.rounded-b-sm { border-bottom-right-radius: 0.125rem; border-bottom-left-radius: 0.125rem; }
.rounded-l-sm { border-top-left-radius: 0.125rem; border-bottom-left-radius: 0.125rem; }
.rounded-t { border-top-left-radius: 0.25rem; border-top-right-radius: 0.25rem; }
.rounded-r { border-top-right-radius: 0.25rem; border-bottom-right-radius: 0.25rem; }
.rounded-b { border-bottom-right-radius: 0.25rem; border-bottom-left-radius: 0.25rem; }
.rounded-l { border-top-left-radius: 0.25rem; border-bottom-left-radius: 0.25rem; }
.rounded-t-md { border-top-left-radius: 0.375rem; border-top-right-radius: 0.375rem; }
.rounded-r-md { border-top-right-radius: 0.375rem; border-bottom-right-radius: 0.375rem; }
.rounded-b-md { border-bottom-right-radius: 0.375rem; border-bottom-left-radius: 0.375rem; }
.rounded-l-md { border-top-left-radius: 0.375rem; border-bottom-left-radius: 0.375rem; }
.rounded-t-lg { border-top-left-radius: 0.5rem; border-top-right-radius: 0.5rem; }
.rounded-r-lg { border-top-right-radius: 0.5rem; border-bottom-right-radius: 0.5rem; }
.rounded-b-lg { border-bottom-right-radius: 0.5rem; border-bottom-left-radius: 0.5rem; }
.rounded-l-lg { border-top-left-radius: 0.5rem; border-bottom-left-radius: 0.5rem; }
.rounded-t-xl { border-top-left-radius: 0.75rem; border-top-right-radius: 0.75rem; }
.rounded-r-xl { border-top-right-radius: 0.75rem; border-bottom-right-radius: 0.75rem; }
.rounded-b-xl { border-bottom-right-radius: 0.75rem; border-bottom-left-radius: 0.75rem; }
.rounded-l-xl { border-top-left-radius: 0.75rem; border-bottom-left-radius: 0.75rem; }
.rounded-t-2xl { border-top-left-radius: 1rem; border-top-right-radius: 1rem; }
.rounded-r-2xl { border-top-right-radius: 1rem; border-bottom-right-radius: 1rem; }
.rounded-b-2xl { border-bottom-right-radius: 1rem; border-bottom-left-radius: 1rem; }
.rounded-l-2xl { border-top-left-radius: 1rem; border-bottom-left-radius: 1rem; }
.rounded-t-3xl { border-top-left-radius: 1.5rem; border-top-right-radius: 1.5rem; }
.rounded-r-3xl { border-top-right-radius: 1.5rem; border-bottom-right-radius: 1.5rem; }
.rounded-b-3xl { border-bottom-right-radius: 1.5rem; border-bottom-left-radius: 1.5rem; }
.rounded-l-3xl { border-top-left-radius: 1.5rem; border-bottom-left-radius: 1.5rem; }
.rounded-t-full { border-top-left-radius: 9999px; border-top-right-radius: 9999px; }
.rounded-r-full { border-top-right-radius: 9999px; border-bottom-right-radius: 9999px; }
.rounded-b-full { border-bottom-right-radius: 9999px; border-bottom-left-radius: 9999px; }
.rounded-l-full { border-top-left-radius: 9999px; border-bottom-left-radius: 9999px; }

`;
