'use client'
import { useState } from 'react'

interface FAQItem { q: string; a: string }

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <div key={i} className={`faq-item${open === i ? ' open' : ''}`}>
          <button
            className="faq-question"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span>{item.q}</span>
            <span className="faq-chevron">▼</span>
          </button>
          <div className="faq-answer">
            <div className="faq-answer-inner">{item.a}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
