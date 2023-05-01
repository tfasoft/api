import directoryTree from "directory-tree";
import fs from "fs";

const rec = (dir) => {
  return dir.map((item, index) => {
    if (item.hasOwnProperty("children")) {
      return { ...item, children: rec(item.children) };
    } else {
      const data = fs.readFileSync(item.path, "utf8");
      const title = data.split("\n")[0].replace(/^#\s*/, "");

      return { title, ...item };
    }
  });
};

export const TREE = async (req, res) => {
  const tree = directoryTree("/var/www/docs");

  const filters = [".git", "intro.md", "README.md", ".gitattributes"];

  const data = rec(
    tree.children.filter((child) => filters.map((file) => child.name !== file))
  );

  res.status(200).send(data);
};
