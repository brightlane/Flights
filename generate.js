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

function generateSlug(title) {
  return title.toLowerCase().replace(/ /g, "-");
}

function generateArticle(topic) {
  const slug = generateSlug(topic);

  return `---
title: "${topic}"
slug: "${slug}"
date: ${new Date().toISOString()}
---

# ${topic}

## Introduction
Travel prices change often, but smart planning can help you save significantly.

## Key Travel Strategy
- Compare multiple booking dates  
- Check nearby airports  
- Monitor price changes before booking  

## Internal Travel Guides
Explore more:
- [More travel deals](../posts)
- [Budget travel tips](../posts)

## Recommended Tool
${affiliateLink}

## Conclusion
Planning ahead is the easiest way to reduce travel costs.
`;
}

const topic = pickTopic();
const fileName = `post-${Date.now()}.md`;

if (!fs.existsSync("./posts")) {
  fs.mkdirSync("./posts");
}

fs.writeFileSync(`./posts/${fileName}`, generateArticle(topic));

console.log("Generated:", fileName);
