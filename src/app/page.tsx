import Hero from '@/components/sections/Hero'
import Ecosistema from '@/components/sections/Ecosistema'
import Portfolio from '@/components/sections/Portfolio'
import CTABlock from '@/components/sections/CTABlock'
import Separator from '@/components/ui/Separator'

export default function Home() {
  return (
    <main>
      <Hero />
      <Separator quote="La excelencia no es un acto, es el resultado de un ecosistema diseñado para la precisión." />
      <Ecosistema />
      <Separator quote="Detrás de cada activo, hay un rastro de datos que garantiza su integridad global." />
      <Portfolio />
      <CTABlock />
    </main>
  )
}
