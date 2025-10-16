import fs from "fs";
import path from "path";

export async function GET(req, { params }) {
  const { section } = params; // مثلاً header، tea، rice و غیره
  const filePath = path.join(process.cwd(), "db.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(fileData);

  // اگر اون بخش وجود نداشت، خطا برگردون
  if (!data[section]) {
    return Response.json({ error: "Section not found" }, { status: 404 });
  }

  // فقط همون بخش خاص از فایل رو بده
  return Response.json(data[section]);
}
