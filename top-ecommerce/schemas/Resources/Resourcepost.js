export default{
    name: 'respost',
    title:'Resource Post',
    type:'document',
    fields: [
        {
            name: 'id',
            title:'Id',
            type:'number',
        },
        {
            name:'title',
            title: 'Title',
            type: 'reference',
            to:{type: 'resourcesgenerals'}

        },
        {
            name: 'title2',
            title: 'Title2',
            type: 'string',
          },
        {
            name:'link',
            title:'Link',
            type: 'url',
        },
        {
            name:'description',
            title:'Description',
            type:'string',
        }
    ]
}