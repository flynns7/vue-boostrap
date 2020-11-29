
const title = function(title){
    document.title = title
}

const metaDescription = function(metaDescription){
    document.querySelector('meta[name=description]').setAttribute('content',metaDescription)
}

const metaKeyword = function(metaKeyword){    
    document.querySelector('meta[name=keyword]').setAttribute('content',metaKeyword)
}

export{
    title,
    metaDescription,
    metaKeyword
}