import html from "../books.html";
export function onRequest(context){
  async fetch(request,env,ctx){
    /**
     * const url = new URL(request.url);
    console.log(url.pathname);
    console.log(url);
    if (url.pathname === ""){
      const data = " I am a response!";
      return Response.json(data);
    }
    **/
    retturn new Response(html,{
      status: 200 ,
      headers:{
        "content-type":"text/html",
      },
    });
    
  },
};
