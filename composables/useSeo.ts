import { useSeoMeta } from '#imports'

// NB: It's important to change the default value of every metadata here.
export function useSeo({
    title = 'Default Title',
    description = 'This is the default description, let me tell you all about it.',
    ogTitle = 'Default Title',
    ogDescription = 'This is the default description, let me tell you all about it.',
    ogImageUrl = 'https://example.com/image.png',
    twitterTitle = 'Default Title',
    twitterDescription = 'This is the default description, let me tell you all about it.',
    twitterImage = 'https://example.com/image.png',
} = {}) {
    useSeoMeta({
        title,
        description,
        ogTitle,
        ogDescription,
        ogImageUrl,
        twitterTitle,
        twitterCard: 'summary_large_image',
        twitterDescription,
        twitterImage,
        mobileWebAppCapable: 'yes',
    })
}
