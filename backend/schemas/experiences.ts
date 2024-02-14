import { defineField, defineType } from 'sanity'

export const experiences = defineType({
    name:'experiences',
    title:'Experiences',
    type: 'document',
    fields:[
        defineField({
            name:'year',
            title:'Year',
            type:'string'
        }),
        defineField({
            name: 'role',
            title: 'Role',
            type: 'string'
        }),
    	defineField({
            name: 'company',
            title: 'Company',
            type: 'string',
        }),
        defineField({
            name: 'desc1',
            title: 'Desc1',
            type:'text',
            rows: 3,
        }),
        defineField({
            name: 'desc2',
            title: 'Desc2',
            type:'text',
            rows: 3,
        }),
        defineField({
            name: 'desc3',
            title: 'Desc3',
            type:'text',
            rows: 3,
        }),
    ]
})