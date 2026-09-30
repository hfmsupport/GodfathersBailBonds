import type { Metadata } from 'next'
import { ServicePageLayout } from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Types of Bail Bonds in Texas | Surety, Cash & More',
  description:
    'Learn about the different types of bail bonds in Texas: surety bonds, cash bonds, personal recognizance, and more. Godfather\'s Bail Bonds handles every type.',
  alternates: { canonical: '/types-of-bonds/' },
  openGraph: { url: '/types-of-bonds/' },
}

export default function TypesOfBonds() {
  return (
    <ServicePageLayout
      page={null}
      slug="types-of-bonds"
      breadcrumb="Types of Bail Bonds"
    />
  )
}
