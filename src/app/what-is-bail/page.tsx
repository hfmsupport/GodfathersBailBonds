import { ServicePageLayout } from '@/components/ServicePageLayout'
import { getPage } from '@/lib/wordpress'

export default async function WhatIsBail() {
  const page = await getPage('what-is-bail')
  return (
    <ServicePageLayout
      page={page}
      slug="what-is-bail"
      breadcrumb="What is Bail?"
    />
  )
}
