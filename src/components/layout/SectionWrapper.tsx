interface SectionWrapperProps {
  id?: string
  children: React.ReactNode
  className?: string
}

export default function SectionWrapper({ id, children, className = '' }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-16 max-w-content mx-auto px-6 py-section ${className}`}
    >
      {children}
    </section>
  )
}
