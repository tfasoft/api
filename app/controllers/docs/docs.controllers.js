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

  const data = rec(
    tree.children.filter(
      (child) => child.name !== ".git" && child.name !== "intro.md"
    )
  );

  res.status(200).send(data);
};
