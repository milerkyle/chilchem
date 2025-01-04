import html from "../books.html"
export async function onRequest(context) {

        const stmt = context.env.DATABASE.prepare("SELECT * FROM books");
        const results = await stmt.raw();
/*
        return Response.json(results);
        */
        const res = JSON(results);

        return new Response(results,{
                status:200,
                headers:{
                        /*"Access-Control-Allow-Origin":"*",*/
                        
                        "X-Content-Type-Options": "no-sniff",
                }
        })

    
  }
