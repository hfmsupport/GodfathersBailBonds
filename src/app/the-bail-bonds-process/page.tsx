import { ServicePageLayout } from '@/components/ServicePageLayout'
import { getPage } from '@/lib/wordpress'

export default async function TheBailBondsProcess() {
  const page = await getPage('the-bail-bonds-process')
  return (
    <ServicePageLayout
      page={page}
      slug="the-bail-bonds-process"
      breadcrumb="The Bail Bonds Process"
    />
  )
}
