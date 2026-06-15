import { ServicePageLayout } from '@/components/ServicePageLayout'
import { getPage } from '@/lib/wordpress'

export default async function Faq() {
  const page = await getPage('faq')
  return (
    <ServicePageLayout
      page={page}
      slug="faq"
      breadcrumb="FAQ"
    />
  )
}
