import React, { useState } from 'react'
import { Copy, Check, Mail, Phone, ExternalLink } from 'lucide-react'

interface CopyBlockProps {
  label: string
  value: string
  href?: string
  type?: 'email' | 'phone' | 'link'
}

const CopyBlock: React.FC<CopyBlockProps> = ({ label, value, href, type }) => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const getIcon = () => {
    switch (type) {
      case 'email':
        return <Mail className="w-4 h-4" />
      case 'phone':
        return <Phone className="w-4 h-4" />
      default:
        return <ExternalLink className="w-4 h-4" />
    }
  }

  return (
    <div className="group relative">
      <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
        {label}
      </div>
      <div className="flex items-center justify-between">
        {href ? (
          <a
            href={href}
            target={type === 'link' ? '_blank' : undefined}
            rel={type === 'link' ? 'noopener noreferrer' : undefined}
            className="text-base text-gray-700 leading-relaxed font-bold hover:text-gray-900 transition-colors inline-flex items-center gap-2"
          >
            {value}
            {type === 'link' && <ExternalLink className="w-4 h-4" />}
          </a>
        ) : (
          <span className="text-base text-gray-700 leading-relaxed font-bold">{value}</span>
        )}
        <button
          onClick={copyToClipboard}
          className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-zinc-100 rounded focus-ring"
          aria-label={`Copy ${value} to clipboard`}
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-600" />
          ) : (
            <Copy className="w-4 h-4 text-zinc-400" />
          )}
        </button>
      </div>
    </div>
  )
}

const CopyBlockSection: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl lg:text-5xl font-bold text-black leading-tight font-serif">
        Contact me
      </h1>
      <div className="contact-intro-text text-base text-gray-700 leading-relaxed">
        File your inquiry for design, research, and interactive systems collaboration. Contact me via email, LinkedIn, or send me a message using the contact form to the right.
      </div>
      <CopyBlock
        label="FILE: EMAIL"
        value="jamera.bradley@gmail.com"
        href="mailto:jamera.bradley@gmail.com"
        type="email"
      />
      <CopyBlock
        label="FILE: LINKEDIN"
        value="https://www.linkedin.com/in/jamerabradley/"
        href="https://www.linkedin.com/in/jamerabradley/"
        type="link"
      />
    </div>
  )
}

export default CopyBlockSection