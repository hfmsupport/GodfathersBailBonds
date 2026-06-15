import { ServicePageLayout } from '@/components/ServicePageLayout'
import { getPage } from '@/lib/wordpress'

export default async function TypesOfBonds() {
  const page = await getPage('types-of-bonds')
  return (
    <ServicePageLayout
      page={page}
      slug="types-of-bonds"
      breadcrumb="Types of Bail Bonds"
    />
  )
}
