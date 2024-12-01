import html from "../books.html"
export async function onRequest(context,env,ctx) {
    let result
    try {
        const {DATABASE} = env;
        const stmt = DATABASE.prepare("SELECT * FROM books");
        let {result} = await stmt.all();
        /*result = db*/
    } catch(error){
        result = error;
    }
    
    return new Response(result,{
        status:200,
    })
  }
