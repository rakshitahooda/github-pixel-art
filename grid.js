const WEEKS = 52;
const DAYS = 7;

const heart = [
  "01100110",
  "11111111",
  "11111111",
  "01111110",
  "00111100",
  "00011000",
  "00000000"
];

const canvas = Array.from(
  { length: DAYS },
  () => Array(WEEKS).fill(0)
);

const startWeek = 22;

for (let day = 0; day < DAYS; day++) {
  for (let col = 0; col < heart[day].length; col++) {
    canvas[day][startWeek + col] = Number(heart[day][col]);
  }
}

console.log("\n52-WEEK PIXEL ART PREVIEW\n");

for (let day = 0; day < DAYS; day++) {
  console.log(
    canvas[day]
      .map(value => value ? "🟪" : "⬛")
      .join("")
  );
}

console.log("\n52 weeks x 7 days");
console.log("Preview only: no commits were created.");