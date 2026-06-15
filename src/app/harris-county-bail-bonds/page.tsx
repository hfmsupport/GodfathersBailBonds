import { ServicePageLayout } from '@/components/ServicePageLayout'
import { getPage } from '@/lib/wordpress'

export default async function HarrisCountyBailBonds() {
  const page = await getPage('harris-county-bail-bonds')
  return (
    <ServicePageLayout
      page={page}
      slug="harris-county-bail-bonds"
      breadcrumb="Harris County Bail Bonds"
    />
  )
}
