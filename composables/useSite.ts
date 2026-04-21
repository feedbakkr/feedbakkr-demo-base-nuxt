import site from '~/content/site.json'

export type SiteContent = typeof site

/**
 * Returns the canonical site content shared across every feedbakkr-demo-base-* repo.
 * Backed by `content/site.json` — copy verbatim from the reference repo.
 */
export function useSite(): SiteContent {
	return site as SiteContent
}
