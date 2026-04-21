interface SeparatorProps {
  quote: string
}

export default function Separator({ quote }: SeparatorProps) {
  return (
    <div className="max-w-content mx-auto px-6 py-16 flex items-center gap-6">
      <div className="flex-1 h-px bg-surface-elevated" />
      <p className="font-body text-sm italic text-text-secondary text-center max-w-md leading-relaxed">
        <span className="font-display text-accent text-xl not-italic mr-1">&ldquo;</span>
        {quote}
        <span className="font-display text-accent text-xl not-italic ml-1">&rdquo;</span>
      </p>
      <div className="flex-1 h-px bg-surface-elevated" />
    </div>
  )
}
