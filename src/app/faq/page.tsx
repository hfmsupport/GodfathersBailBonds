import type { Metadata } from 'next'
import { ServicePageLayout } from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Bail Bond FAQ | Common Questions Answered',
  description:
    'Answers to the most common bail bond questions in Houston and Harris County. How does bail work? How long does release take? What does it cost? We explain it all.',
  alternates: { canonical: '/faq/' },
  openGraph: { url: '/faq/' },
}

export default function Faq() {
  return (
    <ServicePageLayout
      page={null}
      slug="faq"
      breadcrumb="FAQ"
    />
  )
}
