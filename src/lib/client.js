import sanityClient from '@sanity/client'

export const Client = sanityClient(
    {
        projectId:'hb758s0i',
        dataset:'production',
        apiVersion:'2023-01-08',
        useCdn: true,
    }
) 