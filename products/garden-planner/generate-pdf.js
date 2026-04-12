const puppeteer = require("puppeteer");
const path = require("path");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const filePath = path.resolve(__dirname, "index.html");
  await page.goto(`file://${filePath}`, { waitUntil: "networkidle0" });

  await page.pdf({
    path: path.resolve(
      process.env.HOME,
      "Downloads",
      "0mn1-Garden-Planner-2026.pdf"
    ),
    format: "Letter",
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  await browser.close();
  console.log("PDF saved to ~/Downloads/0mn1-Garden-Planner-2026.pdf");
})();
