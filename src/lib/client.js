import sanityClient from '@sanity/client'

export const Client = sanityClient(
    {
        projectId:'hb758s0i',
        dataset:'production',
        apiVersion:'2023-01-08',
        useCdn: true,
        token: 'skkkTJYME4xtyHmK5XKX6kEvExy6m9NEiKl0pjpcyQdHQwt7pzE1Y4YY70Ej05yvPdElWKL2quPNBlWwrEYbu7E6V75ATGcAkrDic2DFiE66oxucSHlI17NmqSUqcQLe4vMWkue1u3ftVJhBlStVUhp6svKDPF9KCLCbOiJlj4oGlGOCa1p4'
    }
) 