import html from "../books.html"
export async function onRequest(context) {
    /*let db = context.env.chilchem-db;
    let stmt = db.prepare("SELECT * FROM books WHERE name=?").bind("化学中的多面体");
    let result = await stmt.all();*/
    let result = "success?"
    return new Response(result,{
        status:200,
    })
  }
  
