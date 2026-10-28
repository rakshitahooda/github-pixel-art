const pattern = [
  "01100110",
  "11111111",
  "11111111",
  "01111110",
  "00111100",
  "00011000",
  "00000000"
];

console.log("\nMy Pixel Art\n");

for (const row of pattern) {
  console.log(
    [...row].map(pixel => pixel === "1" ? "🟪" : "⬛").join("")
  );
}