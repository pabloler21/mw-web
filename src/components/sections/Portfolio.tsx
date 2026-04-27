'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionWrapper from '@/components/layout/SectionWrapper'
import LeadModal from '@/components/ui/LeadModal'
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
      {/* Product image */}
      <div className="relative h-44 bg-surface-elevated border-b border-surface-elevated group-hover:border-accent/20 transition-colors duration-300 overflow-hidden">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.label}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          />
        ) : (
          <div className="h-full flex items-center justify-center">
            <span className="font-body text-xs uppercase tracking-widest text-text-secondary opacity-40">
              Imagen próximamente
            </span>
          </div>
        )}
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
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<string | undefined>(undefined)

  const handleConsult = (productId: string) => {
    setSelectedProduct(productId)
    setModalOpen(true)
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

      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        productId={selectedProduct}
      />

    </SectionWrapper>
  )
}
