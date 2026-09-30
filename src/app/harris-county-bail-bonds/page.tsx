import type { Metadata } from 'next'
import { ServicePageLayout } from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Harris County Bail Bonds | Fast 24/7 Licensed Bondsman',
  description:
    'Fast, affordable bail bond service in Harris County, TX. Licensed bondsman serving Harris County Jail around the clock. Call 713-224-3600 for immediate help.',
  alternates: { canonical: '/harris-county-bail-bonds/' },
  openGraph: { url: '/harris-county-bail-bonds/' },
}

const pageContent = `
<p>If you or a loved one is arrested in Harris County, don't wait. Call Godfather's Bail Bonds anytime, 24/7, to begin the release process and get home fast.</p>

<h2>Why Choose Godfather's Bail Bonds in Harris County?</h2>
<ul>
<li>Open 24/7/365 — day or night</li>
<li>Local experts in Harris County jail &amp; court procedures</li>
<li>Only 10% premium — payment plans available</li>
<li>Collateral options accepted — real estate, vehicles, jewelry, etc.</li>
<li>We handle all case types: drug charges, domestic violence, DUI, and white-collar crimes</li>
<li>Full confidentiality and respect — we never judge</li>
</ul>

<h2>How the Bail Bond Process Works</h2>
<ul>
<li>You're arrested and booked</li>
<li>The court sets a bail amount</li>
<li>Call us immediately — we'll explain your options</li>
<li>Pay a 10% non-refundable fee</li>
<li>We post bail and arrange release within hours</li>
<li>We keep you informed of all court dates</li>
</ul>

<h2>Payment &amp; Collateral Made Easy</h2>
<p>We accept:</p>
<ul>
<li>Debit and major credit cards</li>
<li>Cash or payment plans</li>
<li>Collateral (homes, cars, valuables)</li>
</ul>
<p>We work with your situation to make bail affordable and fast.</p>

<h2>Frequently Asked Questions</h2>
<p>We work with Harris County Jail and all surrounding precincts.</p>
<p>Usually within 1 to 3 hours, depending on jail processing.</p>
<p>Yes, we guarantee complete privacy and professionalism.</p>

<h2>Why Choose Us?</h2>
<p><strong>Flexibility:</strong> We provide bonds for most crimes, including drug, domestic violence, white collar, and DUI.</p>
<p><strong>Locations:</strong> We service bail bonds in the Houston and Montgomery county area.</p>
<p><strong>Assistance:</strong> Payment plans and financing is available.</p>
<p><strong>Fast service:</strong> We're open 24 hours a day, 7 days a week.</p>
<p>We don't mess around when it comes to getting your loved one home safe from jail. That is why we are dedicated to keeping our office open 24 hours a day, 7 days a week, and 365 days out of the year. In fact, our office hasn't closed in 30 years! We're open on weekends and holidays to better serve you in your time of need.</p>
`

export default function HarrisCountyBailBonds() {
  return (
    <ServicePageLayout
      page={{ content: { rendered: pageContent } }}
      slug="harris-county-bail-bonds"
      breadcrumb="Harris County Bail Bonds"
    />
  )
}
