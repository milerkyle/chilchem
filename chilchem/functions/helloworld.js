import html from "../books.html"
/*export function onRequest(context) {
  const res = JSON.stringify("Hello,world!");
  return new Response(res,{
    headers:{
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Credentials": "true",

    }
  })
}
*/
export async function onRequest(context) {
  
        const url = new URL(context.request.url);
        const content = url.search;

        const stmt = context.env.DATABASE.prepare("SELECT * FROM books");
        const results = await stmt.raw();
        
        const res = JSON.stringify(results);


        return new Response(res,{
                status:200,
                headers:{
                        "Content-Type":"application/json",
                        "Access-Control-Allow-Origin":"*",
                        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                        "Access-Control-Allow-Credentials": "true",                  
                        "X-Content-Type-Options": "no-sniff",
                        /*"charset":"Unicode",*/
                }
        })

    
  }

