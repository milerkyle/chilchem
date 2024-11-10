import index from "../index.html";
export default{
  async fetch(request,env,ctx){
    return new Response(index,{
      headers:{
        "content-type":"text/html",
      },
    });
  },
};
