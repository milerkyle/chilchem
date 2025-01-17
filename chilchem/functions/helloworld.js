import html from "../books.html"
/*export function onRequest(context) {
  const res = JSON.stringify("Hello,world!");
  return new Response(res,{
    headers:{
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Credentials": "true",

    }
  })
}
*/
export async function onRequest(context) {
  
        const url = new URL(context.request.url);
        const content = url.search;

        const stmt = context.env.DATABASE.prepare("SELECT * FROM books");
        let results = await stmt.raw();
        results = [
                        [
                            900485,
                            "化学中的多面体",
                            "周公度",
                            "北京大学出版社",
                            "2009.6",
                            null,
                            0
                        ],
                        [
                            323042,
                            "基础有机化学：第4版，下册",
                            "邢其毅等",
                            "北京大学出版社",
                            "2017.1",
                            null,
                            0
                        ]
                    ]
        
        const blob = Blob([JSON.stringify(results)],
                         {
                           type: "application/json",
                         })

        let response = new Response(blob,{
                status:200,
                statusText:ok,
                headers:{
                        "Content-Type":"application/json; charset=utf-8",
                        "Access-Control-Allow-Origin":"*",
                        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                        /*"Access-Control-Allow-Credentials": "true", */                 
                        "X-Content-Type-Options": "nosniff",
                },
                
        });
        return response
  }

