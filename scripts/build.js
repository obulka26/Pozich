const fs = require("fs");
const path = require("path");

const buildDir = path.join(__dirname, "..", "build");
if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir, { recursive: true });
}

// "Збираємо" артефакт — копіюємо src + package.json
fs.cpSync(path.join(__dirname, "..", "src"), path.join(buildDir, "src"), { recursive: true });
fs.copyFileSync(
  path.join(__dirname, "..", "package.json"),
  path.join(buildDir, "package.json")
);

console.log("Build completed → ./build");
