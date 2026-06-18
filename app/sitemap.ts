import type { MetadataRoute } from "next";

const BASE = "https://summithomeremodeling.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { url: BASE, priority: 1.0, changeFrequency: "monthly" as const, lastModified: new Date("2026-06-18") },
    { url: `${BASE}/services`, priority: 0.9, changeFrequency: "monthly" as const, lastModified: new Date("2026-06-18") },
    { url: `${BASE}/gallery`, priority: 0.8, changeFrequency: "monthly" as const, lastModified: new Date("2026-06-18") },
    { url: `${BASE}/process`, priority: 0.8, changeFrequency: "yearly" as const, lastModified: new Date("2026-01-01") },
    { url: `${BASE}/about`, priority: 0.7, changeFrequency: "yearly" as const, lastModified: new Date("2026-01-01") },
    { url: `${BASE}/contact`, priority: 0.9, changeFrequency: "yearly" as const, lastModified: new Date("2026-01-01") },
    { url: `${BASE}/service-areas`, priority: 0.8, changeFrequency: "monthly" as const, lastModified: new Date("2026-06-18") },
  ];

  const servicePages = [
    "kitchen-remodeling",
    "bathroom-remodeling",
    "home-additions",
    "basement-finishing",
  ].map((slug) => ({
    url: `${BASE}/services/${slug}`,
    priority: 0.9,
    changeFrequency: "monthly" as const,
    lastModified: now,
  }));

  const serviceAreaPages = [
    "rogers",
    "bentonville",
    "lowell",
    "cave-springs",
    "springdale",
    "fayetteville",
  ].map((city) => ({
    url: `${BASE}/service-areas/${city}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
    lastModified: now,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...serviceAreaPages,
  ];
}
