import html from "../books.html"
export  async function onRequest(context) {
    let db = context.env.chilchem-db;
    let stmt = db.prepare("SELECT * FROM books");
    let result = await stmt.all();
    return new Response(result,{
        headers:{
            "content-type":"text"
        }
    })
  }
  
