
const weeks = 20;
const days = 7;

// 1 = filled square, 0 = empty square
const heart = [
  "01100110",
  "11111111",
  "11111111",
  "11111111",
  "01111110",
  "00111100",
  "00011000"
];

console.log("\nGITHUB PIXEL ART PREVIEW\n");

// Render a heart-shaped pixel design
for (const row of heart) {
  console.log(
    [...row]
      .map(pixel => pixel === "1" ? "🟪" : "⬛")
      .join("")
  );
}

console.log("\nCalendar dimensions:", weeks, "weeks ×", days, "days");
console.log("Preview only: no commits were created.");

