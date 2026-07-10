import React from 'react'

interface CaseStampsProps {
  selectedType?: string
  onChange: (type: string) => void
}

const CaseStamps: React.FC<CaseStampsProps> = ({ selectedType, onChange }) => {
  const stampTypes = [
    'Collaboration',
    'Speaking', 
    'Recruiting',
    'Mentorship',
    'Other'
  ]

  return (
    <div className="mb-6">
      <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">
        CLASSIFICATION
      </div>
      <div 
        role="radiogroup" 
        aria-label="Case classification"
        className="flex flex-wrap gap-2"
      >
        {stampTypes.map((type) => (
          <button
            key={type}
            type="button"
            role="radio"
            aria-checked={selectedType === type}
            onClick={() => onChange(type)}
            className={`
              rubber-stamp
              px-3 py-2 text-sm
              min-h-[44px]
              rounded-md
              focus-ring
              ${selectedType === type 
                ? 'bg-zinc-100 border-zinc-400' 
                : 'bg-white border-zinc-300 hover:bg-zinc-50'
              }
            `}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CaseStamps