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

        const stmt = context.env.DATABASE.prepare("SELECT * FROM books");
        const results = await stmt.raw();
        const result = String(results);
        console.log(results);
        console.log(result);
        
        const res = JSON.stringify(results);

        return new Response(result,{
                status:200,
                headers:{
                        "content-type":"text;charset: Unicode ",
                        "Access-Control-Allow-Origin":"*",
                        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                        "Access-Control-Allow-Credentials": "true",                  
                        "X-Content-Type-Options": "no-sniff",
                        /*"charset":"Unicode",*/
                }
        })

    
  }

