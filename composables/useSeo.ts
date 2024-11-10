import { useSeoMeta } from '#imports'

export function useSeo({
    title = 'Default Title',
    ogTitle = 'Default OG Title',
    description = 'This is the default description, let me tell you all about it.',
    ogDescription = 'This is my amazing site, let me tell you all about it.',
    ogImage = 'https://example.com/image.png',
} = {}) {
    useSeoMeta({
        title,
        ogTitle,
        description,
        ogDescription,
        ogImage,
        twitterCard: 'summary_large_image',
        mobileWebAppCapable: 'yes',
    })
}
