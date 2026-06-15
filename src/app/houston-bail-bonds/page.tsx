import { ServicePageLayout } from '@/components/ServicePageLayout'
import { getPage } from '@/lib/wordpress'

export default async function HoustonBailBonds() {
  const page = await getPage('houston-bail-bonds')
  return (
    <ServicePageLayout
      page={page}
      slug="houston-bail-bonds"
      breadcrumb="Houston Bail Bonds"
    />
  )
}
