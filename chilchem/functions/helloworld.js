import html from "../books.html"
export async function onRequest(context) {

        const stmt = context.env.DATABASE.prepare("SELECT * FROM books");
        const results = await stmt.raw();
/*
        return Response.json(results);
        */
        const res = JSON(results);

        return new Response(res,{
                status:200,
                headers:{
                        "Access-Control-Allow-Origin":"*"
                }
        })

    
  }
