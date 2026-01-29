import Header from './components/Header'
import Hero from './components/Hero'
import ForumPreview from './components/ForumPreview'
import DealCalculator from './components/DealCalculator'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ForumPreview />
        <DealCalculator />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
