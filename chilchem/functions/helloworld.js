import html from "../books.html"
export async function onRequest(context) {
    let result
    try {
        const db = context.env.chilchem;
        const stmt = db.prepare("SELECT * FROM books WHERE name=?").bind("化学中的多面体");
        result = await stmt.all();
    } catch(error){
        result = error.name
    }
    
    return new Response(result,{
        status:200,
    })
  }
  
