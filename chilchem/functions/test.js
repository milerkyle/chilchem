import book from "../books.html";
export default{
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
    return new Response(book,{
      headers:{
        "content-type":"text/html",
      },
    });
    
  },
};
