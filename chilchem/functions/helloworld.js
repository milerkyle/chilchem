import html from "../books.html"
export async function onRequest(context) {
    const url = new URL(request.url);
    const content = String(url.search);
    const stmt = context.env.DATABASE.prepare("SELECT * FROM books");
    const results = await stmt.raw();

    return new Response(content,{
        status:200,
    })
  }
