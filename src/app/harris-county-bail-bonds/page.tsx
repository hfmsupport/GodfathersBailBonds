import type { Metadata } from 'next'
import { ServicePageLayout } from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Harris County Bail Bonds | Fast 24/7 Licensed Bondsman',
  description:
    'Fast, affordable bail bond service in Harris County, TX. Licensed bondsman serving Harris County Jail around the clock. Call 713-224-3600 for immediate help.',
  alternates: { canonical: '/harris-county-bail-bonds/' },
  openGraph: { url: '/harris-county-bail-bonds/' },
}

export default function HarrisCountyBailBonds() {
  return (
    <ServicePageLayout
      page={null}
      slug="harris-county-bail-bonds"
      breadcrumb="Harris County Bail Bonds"
    />
  )
}
