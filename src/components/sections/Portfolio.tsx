'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/layout/SectionWrapper'
import { PRODUCTS } from '@/lib/constants'

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] as const },
  }),
}

interface ProductCardProps {
  product: typeof PRODUCTS[number]
  index: number
  onConsult: (productId: string) => void
}

function ProductCard({ product, index, onConsult }: ProductCardProps) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group bg-surface-secondary border border-surface-elevated hover:border-accent/40 rounded-sm flex flex-col overflow-hidden transition-colors duration-300"
    >
      {/* Image placeholder */}
      <div className="h-44 bg-surface-elevated flex items-center justify-center border-b border-surface-elevated group-hover:border-accent/20 transition-colors duration-300">
        {/* PLACEHOLDER — reemplazar con <Image> del producto */}
        <span className="font-body text-xs uppercase tracking-widest text-text-secondary opacity-40">
          Imagen
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-6 flex-1">
        <p className="font-display text-base font-bold text-accent leading-snug">
          {product.label}
        </p>
        <p className="font-body text-sm text-text-secondary leading-relaxed flex-1">
          {product.description}
        </p>
        <button
          onClick={() => onConsult(product.id)}
          className="mt-2 w-full px-4 py-2.5 border border-surface-elevated text-text-secondary font-body text-xs uppercase tracking-widest hover:border-accent hover:text-accent transition-colors duration-200 rounded-sm text-center"
        >
          Consultar Ficha Técnica y Disponibilidad
        </button>
      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  // PLACEHOLDER — cuando LEAD-1 esté implementado, abrir el modal con el producto pre-seleccionado
  const handleConsult = (productId: string) => {
    console.log('Consultar producto:', productId)
  }

  return (
    <SectionWrapper id="portfolio">

      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-body text-xs uppercase tracking-[0.3em] text-accent mb-3">Portfolio</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary">
          Lo que exportamos al mundo
        </h2>
      </motion.div>

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRODUCTS.map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            index={i}
            onConsult={handleConsult}
          />
        ))}
      </div>

    </SectionWrapper>
  )
}
