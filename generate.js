const fs = require("fs");

const affiliateLink =
  "https://convert.ctypy.com/aff_c?offer_id=29465&aff_id=21885";

const topics = [
  "Cheap Flights from USA to Europe",
  "Best Time to Book International Flights",
  "How to Find Last Minute Flight Deals",
  "Budget Travel Tips for 2026",
  "Skyscanner Flight Hacks",
  "How to Save Money on Airline Tickets",
  "Best Cities for Cheap Travel in Europe"
];

function pickTopic() {
  return topics[Math.floor(Math.random() * topics.length)];
}

function generateArticle(topic) {
  return `---
title: "${topic}"
date: ${new Date().toISOString()}
---

# ${topic}

## Introduction
Travel prices change constantly, and smart planning saves money.

## Tips
- Use flexible dates  
- Compare airports  
- Track price drops  

## Recommended Tool
${affiliateLink}

## Conclusion
Better planning = cheaper travel.
`;
}

const topic = pickTopic();
const fileName = `post-${Date.now()}.md`;

const folder = "./posts";
if (!fs.existsSync(folder)) {
  fs.mkdirSync(folder);
}

fs.writeFileSync(`${folder}/${fileName}`, generateArticle(topic));

console.log("Generated:", fileName);
