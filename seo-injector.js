(function () {
  const metaTags = [
    { name: "description", content: "Find the cheapest flights in 2026 using Skyscanner. Compare airlines and save money." },
    { name: "keywords", content: "cheap flights, skyscanner, flight deals, budget travel" },
    { name: "robots", content: "index, follow" },
    { property: "og:title", content: "Cheap Flights 2026 | Skyscanner Deals" },
    { property: "og:description", content: "Compare 1,000+ airlines and find cheap flights instantly." }
  ];

  metaTags.forEach(tag => {
    const meta = document.createElement("meta");

    if (tag.name) meta.name = tag.name;
    if (tag.property) meta.setAttribute("property", tag.property);

    meta.content = tag.content;
    document.head.appendChild(meta);
  });

  // Canonical auto-set
  const canonical = document.createElement("link");
  canonical.rel = "canonical";
  canonical.href = window.location.href.split("?")[0];
  document.head.appendChild(canonical);

})();
