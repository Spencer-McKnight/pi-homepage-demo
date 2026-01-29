import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const FAQS = [
  {
    question: 'Is property investing still worth it in the current market?',
    answer: 'Property has been one of the most reliable wealth-building strategies in Australia for decades. While markets fluctuate, long-term investors who follow sound principles continue to build wealth. Our courses teach you how to identify opportunities in any market condition and make data-driven decisions.',
  },
  {
    question: 'How much money do I need to start investing in property?',
    answer: 'Many people think you need hundreds of thousands to start. While having a deposit helps, there are creative strategies for getting started with less. Our training covers various entry strategies, including joint ventures, vendor finance, and maximising your borrowing capacity.',
  },
  {
    question: 'I\'m a complete beginner. Will I understand the courses?',
    answer: 'Absolutely. Our courses are designed to take you from zero knowledge to confident investor. We start with fundamentals and progressively build your skills. Plus, you have access to our community forum where you can ask questions anytime.',
  },
  {
    question: 'What\'s the difference between free membership and the paid courses?',
    answer: 'Free membership gives you forum access, basic calculator tools, and our newsletter. Paid courses provide structured, in-depth education with video modules, templates, live Q&As, and direct support. Think of membership as ongoing community access, and courses as intensive skill-building programs.',
  },
  {
    question: 'How is PropertyInvesting.com different from other education providers?',
    answer: 'We\'ve been operating for over 20 years with a community of 161,000+ members. Our founder Steve McKnight has personally acquired 130+ properties. We focus on practical, proven strategies—not hype or get-rich-quick schemes. Our students\' success stories speak for themselves.',
  },
  {
    question: 'Do you offer refunds on courses?',
    answer: 'Yes, we offer a 30-day money-back guarantee on all our courses. If you\'re not satisfied with the content or don\'t feel it\'s right for you, simply contact us within 30 days for a full refund. We want you to invest with confidence.',
  },
]

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-pi-blue/10 rounded-xl mb-4">
            <HelpCircle size={24} className="text-pi-blue" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown 
                  size={20} 
                  className={`text-gray-400 shrink-0 transition-transform ${
                    openIndex === i ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 pt-0">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 mb-3">Still have questions?</p>
          <a href="#" className="text-pi-blue font-medium hover:underline">
            Contact our support team →
          </a>
        </div>
      </div>
    </section>
  )
}
