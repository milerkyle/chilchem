import html from "../books.html"
export async function onRequest(context) {
    const url = new URL(request.url);
    const stmt = context.env.DATABASE.prepare("SELECT * FROM books");
    const results = await stmt.raw();

    return new Response(results,{
        status:200,
    })
  }
