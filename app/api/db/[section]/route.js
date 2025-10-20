import data from "../../../../db.json";

export async function GET(req, { params }) {
  const { section } = params;

  if (!data[section]) {
    return Response.json({ error: "Section not found" }, { status: 404 });
  }

  return Response.json(data[section]);
}
