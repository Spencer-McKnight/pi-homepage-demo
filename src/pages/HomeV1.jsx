// Strategy 1: Steve-Led Authority
import VideoHero from '../components/v1/VideoHero'
import CredentialsBanner from '../components/v1/CredentialsBanner'
import FeaturedContent from '../components/v1/FeaturedContent'
import TestimonialCarousel from '../components/v1/TestimonialCarousel'
import BookShowcase from '../components/v1/BookShowcase'
import PersonalCTA from '../components/v1/PersonalCTA'

export default function HomeV1() {
  return (
    <>
      <VideoHero />
      <CredentialsBanner />
      <FeaturedContent />
      <TestimonialCarousel />
      <BookShowcase />
      <PersonalCTA />
    </>
  )
}
