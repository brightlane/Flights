const fs = require("fs");

const baseUrl = "https://brightlane.github.io/Flights";

const postsDir = "./posts";

if (!fs.existsSync(postsDir)) {
  console.log("No posts folder found.");
  fs.mkdirSync(postsDir);
}

const files = fs.readdirSync(postsDir);

let urls = files.map(file => {
  return `
  <url>
    <loc>${baseUrl}/posts/${file}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>`;
}).join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <url>
    <loc>${baseUrl}/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

${urls}

</urlset>`;

fs.writeFileSync("sitemap.xml", sitemap);

console.log("Sitemap generated with", files.length, "posts");
