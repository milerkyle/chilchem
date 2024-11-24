import html from "../books.html"
export function onRequest(context) {
    let db = context.env.chilchem-db;
    let stmt = db.prepare("SELECT * FROM books");
    let result = stmt.all();
    return new Response(result,{
        headers:{
            "content-type":"text"
        }
    })
  }
  
