import html from "../books.html"
export async function onRequest(context) {
    let result
    try {
        const db = context.env.chilchem;
        const stmt = db.prepare("SELECT * FROM books");
        /*let {result} = await stmt.all();*/
        result = "hello world?"
    } catch(error){
        result = error;
    }
    
    return new Response(result,{
        status:200,
    })
  }
  
