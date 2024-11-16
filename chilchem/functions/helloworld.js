import html from "../books.html"
export function onRequest(context) {
    return new Response(html)
  }
  
