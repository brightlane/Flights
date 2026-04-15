const fs = require("fs");

const affiliateLink =
  "https://convert.ctypy.com/aff_c?offer_id=29465&aff_id=21885";

// Travel topics (rotate randomly)
const topics = [
  "Cheap Flights from USA to Europe",
  "Best Time to Book International Flights",
  "How to Find Last Minute Flight Deals",
  "Budget Travel Tips for 2026",
  "Skyscanner Flight Booking Hacks",
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
Travel planning is one of the easiest ways to reduce flight costs if done correctly.

## Key Tips
- Use flexible dates  
- Compare nearby airports  
- Track price changes before booking  

## Recommended Travel Tool
Compare flights here:
${affiliateLink}

## Conclusion
Smart travelers always compare before booking.
`;
}

// Create posts folder if missing
const folder = "./posts";
if (!fs.existsSync(folder)) {
  fs.mkdirSync(folder);
}

// Generate file
const topic = pickTopic();
const fileName = `post-${Date.now()}.md`;

fs.writeFileSync(`${folder}/${fileName}`, generateArticle(topic));

console.log("Generated:", fileName);
