import html from "../books.html"
export function onRequest(context) {
  const res = JSON.stringify("Hello,world!");
  return new Response(res,{
    headers:{
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Credentials": "true",

    }
  })
}
/*export async function onRequest(context) {

        const stmt = context.env.DATABASE.prepare("SELECT * FROM books");
        const results = await stmt.raw();
        const result = String(results);

        return Response.json(results);
        
        const res = JSON(results);

        return new Response("helloworld",{
                status:200,
                headers:{
                        "content-type":"text",
                        /*"Access-Control-Allow-Origin":"*",
                        
                        "X-Content-Type-Options": "no-sniff",
                }
        })

    
  }
*/
