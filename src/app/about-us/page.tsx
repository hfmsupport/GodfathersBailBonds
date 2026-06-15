import { ServicePageLayout } from '@/components/ServicePageLayout'
import { getPage } from '@/lib/wordpress'

export default async function AboutUs() {
  const page = await getPage('about-us')
  return (
    <ServicePageLayout
      page={page}
      slug="about-us"
      breadcrumb="About Us"
    />
  )
}
