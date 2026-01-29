// Strategy 2: Course-Forward Sales
import ValuePropHero from '../components/v2/ValuePropHero'
import SocialProof from '../components/v2/SocialProof'
import FeaturedCourses from '../components/v2/FeaturedCourses'
import ProblemSolution from '../components/v2/ProblemSolution'
import ComparisonTable from '../components/v2/ComparisonTable'
import FAQAccordion from '../components/v2/FAQAccordion'
import UrgencyCTA from '../components/v2/UrgencyCTA'

export default function HomeV2() {
  return (
    <>
      <ValuePropHero />
      <SocialProof />
      <ProblemSolution />
      <FeaturedCourses />
      <ComparisonTable />
      <FAQAccordion />
      <UrgencyCTA />
    </>
  )
}
