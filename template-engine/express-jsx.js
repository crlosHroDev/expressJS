const fs=require('fs')

function getKeysFromOptions(options){ //Esto es para quitar las opciones extras que le inyecta el object express
    const {settings,_locals,...objectKeys}=options
    return Object.keys(objectKeys) //El Object.keys es nativo del objeto de JS.Me devuelve un array con los keys y me permite iterarlos y trabajar con ellos 
}
function getRenderedContent(content,options){
    const keys=getKeysFromOptions(options) 
    let contentString=content.toString()

    for(let key of keys){ //buscar en el contenido de mi template en esos keys y reemplazelo por mi contenido
        contentString=contentString.replace(
            new RegExp(`\{${key}\}`,"gi"), //Esto es que reemplace todo los que esta entre `` por key de manera global 
            options[key]
        )
    }

    return contentString
}

function expressJsx(filePath,options,callback){
    fs.readFile(filePath,function(err,content){
        if(err){
            return callback(err)
        }

        const rendered=getRenderedContent(content,options)

        return callback(null,rendered)
    })
}

module.exports=expressJsx;