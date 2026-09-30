import type { Metadata } from 'next'
import { ServicePageLayout } from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'What is Bail? | Bail Bonds Explained | Godfather\'s Bail Bonds',
  description:
    'What is bail and how does it work in Texas? Understand the difference between bail and a bail bond, how amounts are set, and how to get someone out of jail fast in Houston.',
  alternates: { canonical: '/what-is-bail/' },
  openGraph: { url: '/what-is-bail/' },
}

export default function WhatIsBail() {
  return (
    <ServicePageLayout
      page={null}
      slug="what-is-bail"
      breadcrumb="What is Bail?"
    />
  )
}
