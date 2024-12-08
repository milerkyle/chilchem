import html from "../books.html"
export async function onRequest(context) {
    let results
    try {
        const stmt = context.env.DATABASE.prepare("SELECT * FROM books");
        const {results} = await stmt.all();
        results = String(results)
    } catch(error){
        results = error;
    }
    
    return new Response(results,{
        status:200,
    })
  }
