import React from 'react'
import { MessageSquare } from 'lucide-react'

interface CorkboardReceiptProps {
  caseId: string
  formData: any
  onSendAnother: () => void
}

const CorkboardReceipt: React.FC<CorkboardReceiptProps> = ({ 
  caseId, 
  formData, 
  onSendAnother 
}) => {
  const firstName = formData.name.split(' ')[0]

  return (
    <div className="cork rounded-lg p-8 relative">
      {/* Cork Pin */}
      <div className="cork-pin"></div>
      
      {/* Pinned Card */}
      <div className="paper-card index-lines rounded-lg p-6 shadow-lg bg-white/95 backdrop-blur-sm">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-zinc-900 mb-2">
              Case File Pinned
            </h3>
            <div className="space-y-2 text-sm">
              <div>
                <span className="font-medium text-zinc-600">Case ID:</span>
                <span className="ml-2 font-mono text-zinc-900">{caseId}</span>
              </div>
              <div>
                <span className="font-medium text-zinc-600">Filed by:</span>
                <span className="ml-2 text-zinc-900">{firstName}</span>
              </div>
              <div>
                <span className="font-medium text-zinc-600">Email:</span>
                <span className="ml-2 text-zinc-900">{formData.email}</span>
              </div>
              {formData.type && (
                <div>
                  <span className="font-medium text-zinc-600">Classification:</span>
                  <span className="ml-2 text-zinc-900">{formData.type}</span>
                </div>
              )}
              {formData.subject && (
                <div>
                  <span className="font-medium text-zinc-600">Subject:</span>
                  <span className="ml-2 text-zinc-900">{formData.subject}</span>
                </div>
              )}
              <div>
                <span className="font-medium text-zinc-600">Message:</span>
                <p className="mt-1 text-zinc-900 text-sm leading-relaxed">
                  {formData.message.length > 100 
                    ? `${formData.message.substring(0, 100)}...` 
                    : formData.message
                  }
                </p>
              </div>
              <div>
                <span className="font-medium text-zinc-600">Date:</span>
                <span className="ml-2 text-zinc-900">
                  {new Date().toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
              </div>
            </div>
          </div>

          {/* Send Another Button */}
          <div className="pt-4">
            <button
              onClick={onSendAnother}
              className="w-full bg-zinc-900 text-white py-3 px-4 rounded-lg font-medium hover:bg-zinc-800 focus-ring transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Send another message
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CorkboardReceipt