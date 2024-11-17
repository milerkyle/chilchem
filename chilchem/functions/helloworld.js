import html from "../books.html"
let page = String(html)
export function onRequest(context) {
    return new Response(page,{
        headers:{
            "content-type":"text-html"
        }
    })
  }
  
