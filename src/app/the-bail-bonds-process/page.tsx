import type { Metadata } from 'next'
import { ServicePageLayout } from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'The Bail Bond Process Explained | Godfather\'s Bail Bonds Houston',
  description:
    'Step-by-step guide to the bail bond process in Houston and Harris County. From arrest to release — we walk you through exactly what to expect and what to do.',
  alternates: { canonical: '/the-bail-bonds-process/' },
  openGraph: { url: '/the-bail-bonds-process/' },
}

export default function TheBailBondsProcess() {
  return (
    <ServicePageLayout
      page={null}
      slug="the-bail-bonds-process"
      breadcrumb="The Bail Bonds Process"
    />
  )
}
