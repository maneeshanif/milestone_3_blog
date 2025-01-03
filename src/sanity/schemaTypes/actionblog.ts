import { defineType , defineField } from "sanity";

const actionblog = defineType({
    name: "actionblog",
    title: "Action Blog",
    type: "document",   
    fields: [
        defineField({
            "name" : "blogImage", 
            "title" : "blog image" ,
             "type" : "image" 
         
}),
        defineField({
            "name" : "blogTitle", 
            "title" : "blog title" ,
             "type" : "string"
}),
        defineField({
            "name" : "time", 
            "title" : "blog time" ,
             "type" : "number"
}),
        defineField({
            "name" : "blogShortParagraph", 
            "title" : "blog short paragraph" ,
             "type" : "string"
})
,
        defineField({
            "name" : "blogParagraph", 
            "title" : "blog paragraph" ,
             "type" : "string"
}),
        defineField({
            "name" : "blogRead", 
            "title" : "blog read" ,
             "type" : "string"
})
      
    ],
    });

  export default actionblog;  