import html from "../books.html"
export async fetch(request,context){
        let result
        try {
            const stmt =context.env.chilchem.prepare("SELECT * FROM books");
            let {result} = await stmt.all();
            /*result = db*/
        } catch(error){
            result = error;
        }
    }
    
    
    return new Response(result,{
        status:200,
    })
  }
  
