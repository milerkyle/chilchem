import book from "../book.html";
export default{
  async fetch(request,env,ctx){
    const url = new Url(request.url);
    if (url.pathname === "/book?q="){
      const data = " I am a response!";
      return Response.json(data);
    }
    
    return new Response(book,{
      headers:{
        "content-type":"text/html",
      },
    });
    
  },
};
