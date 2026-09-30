import type { Metadata } from 'next'
import { ServicePageLayout } from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Houston Bail Bonds | 24/7 Licensed Bondsman | 713-224-3600',
  description:
    'Trusted Houston bail bond services from a licensed Texas bondsman. Fast release from the Harris County Jail — available 24/7. Call 713-224-3600 for immediate assistance.',
  alternates: { canonical: '/houston-bail-bonds/' },
  openGraph: { url: '/houston-bail-bonds/' },
}

export default function HoustonBailBonds() {
  return (
    <ServicePageLayout
      page={null}
      slug="houston-bail-bonds"
      breadcrumb="Houston Bail Bonds"
    />
  )
}
