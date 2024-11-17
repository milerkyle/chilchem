import html from "../books.html"
export function onRequest(context) {
    return new Response(html,{
        headers:{
            "content-type":"text/html;charset = utf-8"
        }
    })
  }
  
