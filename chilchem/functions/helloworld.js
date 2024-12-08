import html from "../books.html"
export async function onRequest(context) {
    let result
    try {
        const stmt = context.env.DATABASE.prepare("SELECT * FROM books");
        let {result} = await stmt.all();
        result = string(result)
    } catch(error){
        result = error;
    }
    
    return new Response(result,{
        status:200,
    })
  }
