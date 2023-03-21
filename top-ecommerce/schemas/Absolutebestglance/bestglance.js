export default {
    name:'bestglance',
    title:'Best Glance',
    type:'document',
    fields: [
        {
            name:'glancetype',
            title: 'Glance Type',
            type: 'reference',
            to:{type:'bestglancegenerals'}
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
        {
            name:'reviews',
            title:'Reviews',
            type:'string',
        },
        {
            name: 'fullreview',
            title: 'Full Review',
            type: 'url',
        },
        {
            name: 'features',
            title: 'Features',
            type:'number',
        },
        {
            name: 'easeofuse',
            title: 'Ease of Use',
            type:'number',
        },
        {
            name: 'pricing',
            title: 'Pricing',
            type:'number',
        },
        {
            name: 'templateanddesign',
            title: 'Template and Design',
            type:'number',
        },
        {
            name: 'inventory',
            title: 'Inventory',
            type:'number',
        },
        {
            name: 'seomarketing',
            title: 'SEO and Marketing',
            type:'number',
        },
        {
            name: 'payment',
            title: 'Payment',
            type:'number',
        },
        {
            name: 'security',
            title: 'Security',
            type:'number',
        },
        {
            name: 'customersupport',
            title: 'Customer Support',
            type:'number',
        },
        {
            name: 'website',
            title:'WebsiteLink',
            type:'url',
        }
    ]
}