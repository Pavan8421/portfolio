const siteUrl = "https://pavankumarvaranasi.com";

const routes = ["", "/projects", "/experience", "/hackathons", "/research"];

export default function sitemap() {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
