import { notFound } from 'next/navigation'
import { getPostBySlug } from '@/lib/wordpress'
import { BlogPostLayout } from '@/components/BlogPostLayout'

export const dynamicParams = false

const POST_SLUGS = [
  "how-to-choose-the-right-bail-bond-agent-in-texas",
  "what-is-the-court-bonds-definition-and-how-do-court-bonds-work",
  "personal-recognizance-bonds-in-texas",
  "what-to-expect-during-a-bail-hearing-in-harris-county-texas",
  "understanding-texas-bail-reform-laws-what-changed-in-2026-and-how-it-affects-you",
  "dwi-bail-bonds-in-houston-what-to-expect-after-a-drunk-driving-arrest-in-texas",
  "understanding-bail-bond-costs-in-houston-what-youll-actually-pay-in-2026",
  "if-you-miss-court-after-posting-bail-in-texas",
  "emergency-bail-bonds-in-houston-what-to-do-when-you-need-help-fast",
  "what-challenges-do-immigrants-face-after-arrest-can-undocumented-immigrants-get-a-green-card-in-texas",
  "immigration-bond-requirements-in-texas-what-you-need-to-know-dallas-houston-corpus-christi",
  "release-without-bail-in-houston-tx-what-it-means-who-qualifies-how-judges-decide",
  "how-do-bail-bondsmen-make-money-in-texas-dallas-houston-austin",
  "bail-revocation-rules-explained-when-can-bail-be-revoked-and-why-in-houston-tx",
  "bail-bond-refund-policy-in-texas-do-you-get-bail-money-back",
  "serious-charge-bail-bonds-in-texas-how-felony-bail-works-and-what-to-expect",
  "who-sets-bail-amounts-in-texas-understanding-bail-factors-charges-and-judge-discretion",
  "are-all-bail-bond-types-available-in-every-texas-county",
  "do-you-have-to-go-to-court-after-using-a-bail-bond-what-families-need-to-know",
  "you-need-a-houston-bail-bond-right-now-what-happens-when-you-call-after-hours",
  "you-are-facing-an-arrest-in-harris-county-how-fast-can-a-bail-bond-agent-help",
  "what-exactly-is-bail-simple-explanation-for-families-facing-an-emergency-jail-situation",
  "what-documents-do-you-need-for-bail-a-quick-checklist-before-you-call-a-bondsman",
  "which-houston-bail-bond-company-should-you-trust-5-key-things-to-check-before-hiring",
  "do-you-really-need-a-bail-bondsman-in-harris-county-7-signs-you-shouldnt-go-alone",
  "how-fast-can-you-get-out-of-jail-with-a-bail-bond-in-houston",
  "where-can-you-find-24-hour-bail-bond-services-in-houston-when-you-need-them-most",
  "what-is-a-surety-bond-in-texas-and-how-does-it-work-in-bail-cases",
  "how-does-the-harris-county-bail-bonds-process-work-from-start-to-finish",
  "modern-bail-systems-in-texas-leveraging-technology-for-faster-emergency-bail",
  "fast-bail-help-in-houston-how-to-secure-a-quick-release-with-emergency-bail-bonds",
  "understanding-bail-for-probation-violations-rights-and-next-steps",
  "harris-county-bond-information-how-local-bail-agents-help-you-get-a-quick-jail-release",
  "everything-you-need-to-know-about-texas-bail-bond-laws-and-professional-bail-services",
  "harris-county-bail-bonds-houston-fast-affordable-and-available-24-7",
  "godfather-bail-bonding-trusted-bail-services-in-texas-why-to-choose-us",
  "can-you-post-bail-anytime-a-complete-guide-to-harris-county-bail",
  "from-booking-to-bail-how-harris-county-jails-process-works-and-when-to-call-a-bondsman",
  "what-happens-from-arrest-to-jail-release-understanding-bail-bond-services-in-houston",
  "which-type-of-bail-bond-is-right-for-you-a-quick-guide-for-texas-defendants",
  "what-is-the-importance-of-a-bond-in-court-types-process-legal-insight",
  "whats-the-difference-between-cash-bail-and-a-bail-bond",
  "how-long-does-it-take-to-get-someone-out-of-jail-after-posting-bail",
  "do-you-get-bail-money-back-if-the-charges-are-dropped",
  "can-i-bail-someone-out-on-a-weekend-or-holiday",
  "cash-bond-101-requirements-pros-and-cons",
  "how-appeals-bonds-work",
  "bail-bonds-houston-tx-guide",
  "surety-bonds-houston-texas-what-they-are-why-you-need-one-and-how-to-qualify",
  "cash-bonds",
  "houston-bail-bonds-what-to-expect-and-how-to-choose-the-best-provider",
  "24-hour-bail-bonds",
  "bail-vs-bond-difference",
  "bail-bondsmen-work",
  "bail-bonding-company-in-houston",
  "surety-bond-process",
  "how-does-an-immigration-bond-work",
  "how-to-get-a-quick-bail-release-a-step-by-step-guide",
  "how-to-choose-a-trustworthy-and-affordable-bail-bondsman",
  "24-hour-bail-bonds-in-harris-county-what-you-need-to-know",
  "how-a-bail-bondsman-can-help-you-get-out-of-jail-quickly",
  "what-is-a-bail-bond-and-how-do-they-work",
  "the-benefits-of-choosing-a-professional-bail-bond-company",
  "explaining-the-bail-bond-process-in-houston-texas",
  "how-to-choose-different-types-of-bonds",
  "understanding-bail-vs-bond-securing-your-release",
  "bail-bonds-harris-county-a-complete-guide-to-the-process",
  "when-to-call-in-the-professionals-with-a-trusted-bail-bonds-agent",
  "advantages-and-disadvantages-of-surety-bonds",
  "understanding-the-types-of-bonds-godfathers-handles-24-7",
  "understanding-the-importance-of-the-bail-bonds-process"
]

export async function generateStaticParams() {
  return POST_SLUGS.map((slug) => ({ slug }))
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  if (!POST_SLUGS.includes(slug)) {
    notFound()
  }

  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return <BlogPostLayout post={post} />
}
