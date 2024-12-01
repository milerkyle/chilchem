import html from "../books.html"
export function(){
        async fetch(request,env){
                let result
                try {
                    const stmt =context.DATABASE.prepare("SELECT * FROM books");
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
