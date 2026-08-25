import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const dist = new URL("../dist/", import.meta.url).pathname;
const required = [
  "index.html",
  "case-studies/production-readiness/index.html",
  "case-studies/eks-upgrade/index.html",
  "case-studies/rcagpt/index.html",
  "akhila-nair-resume.pdf",
  "akhila-nair.jpg",
  "sitemap-index.xml"
];

const failures = [];

for (const path of required) {
  if (!existsSync(join(dist, path))) failures.push(`Missing ${path}`);
}

for (const path of required.filter((item) => item.endsWith(".html"))) {
  const html = readFileSync(join(dist, path), "utf8");
  if (!html.includes("<h1")) failures.push(`${path} has no h1`);
  if (!html.includes('href="#main"')) failures.push(`${path} has no skip link`);
  if (!html.includes('application/ld+json')) failures.push(`${path} has no structured data`);
  if (/href="\/case-studies\/[^"]+"[^>]*>Read case study/.test(html) && !html.includes("case-studies/")) {
    failures.push(`${path} case links look malformed`);
  }
}

const jsFiles = readdirSync(join(dist, "_astro")).filter((file) => file.endsWith(".js"));
if (jsFiles.length > 8) failures.push(`Unexpectedly high JS file count: ${jsFiles.length}`);

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("Smoke checks passed");
