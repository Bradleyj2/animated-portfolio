import React from 'react'
import { Download, MessageSquare } from 'lucide-react'
import { downloadReceipt } from '../../lib/archive/utils'

interface DrawerSuccessProps {
  caseId: string
  formData: any
  onSendAnother: () => void
  onPinToCorkboard: () => void
}

const DrawerSuccess: React.FC<DrawerSuccessProps> = ({ 
  caseId, 
  formData, 
  onSendAnother, 
  onPinToCorkboard 
}) => {
  const handleDownloadReceipt = () => {
    downloadReceipt(caseId, formData)
  }

  const firstName = formData.name.split(' ')[0]

  return (
    <div className="anim-drawer">
      <div className="paper-card index-lines rounded-lg p-6 shadow-lg relative overflow-hidden">
        {/* RECEIVED Stamp */}
        <div className="anim-stamp absolute top-4 right-4 z-10">
          <div className="text-2xl font-black tracking-wider text-green-400 border-2 border-green-400 rounded px-4 py-1 rotate-[-4deg] bg-white">
            RECEIVED
          </div>
        </div>

        {/* Case Summary */}
        <div className="space-y-4 pr-20">
          <div>
            <h3 className="text-lg font-semibold text-zinc-900 mb-2">
              Case File Submitted
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
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              onClick={onSendAnother}
              className="flex-1 bg-zinc-900 text-white py-3 px-4 rounded-lg font-medium hover:bg-zinc-800 focus-ring transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Send another message
            </button>
            <button
              onClick={handleDownloadReceipt}
              className="flex-1 bg-white text-zinc-900 border border-zinc-300 py-3 px-4 rounded-lg font-medium hover:bg-zinc-50 focus-ring transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download receipt
            </button>
          </div>

          {/* Corkboard Link */}
          <div className="pt-2">
            <button
              onClick={onPinToCorkboard}
              className="text-sm text-zinc-600 hover:text-zinc-900 underline focus-ring rounded"
            >
              Pin to corkboard
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DrawerSuccess