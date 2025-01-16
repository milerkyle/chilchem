import html from "../test-papers.html";
export default{
  async fetch(request,env,ctx){
    const url = new URL(request.url);
    const content = url.search;
    console.log(content);
    return new Response(content);
    /*if (url.pathname === ""){
      const data = " I am a response!";
      return Response.json(data);
    }
  
    return new Response(html,{
      status: 200 ,
      headers:{
        "content-type":"text/html",
      },
    });
    */
    
  },
};
