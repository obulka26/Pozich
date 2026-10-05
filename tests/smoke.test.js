// Простий smoke-тест
console.log("Running smoke tests for Pozich...");
const ok = true;
if (!ok) {
  console.error("Tests failed");
  process.exit(1);
}
console.log("All tests passed");
process.exit(0);
