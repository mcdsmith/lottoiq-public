const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // The hand-built marketing pages live at the repo root and are copied
  // through to the build untouched, so ONE build produces the whole site:
  //   /  /about/  /how-it-works/  /responsible-gambling/  /privacy-policy/
  //   /terms-of-use/  (static)   and   /blog/...  (generated from src/).
  eleventyConfig.addPassthroughCopy({
    "index.html": "index.html",
    "about": "about",
    "how-it-works": "how-it-works",
    "responsible-gambling": "responsible-gambling",
    "privacy-policy": "privacy-policy",
    "terms-of-use": "terms-of-use",
    "css": "css",
    "images": "images",
    "src/images/posts": "images/posts",
  });

  // Human-readable date filter, e.g. "September 3, 2026"
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("LLLL d, yyyy");
  });

  // ISO date filter for <time datetime="...">
  eleventyConfig.addFilter("isoDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toISODate();
  });

  // All blog posts, newest first — excludes anything dated in the future,
  // so a scheduled post doesn't appear on the index before its publish date.
  eleventyConfig.addCollection("posts", (collectionApi) => {
    const now = new Date();
    return collectionApi
      .getFilteredByGlob("src/posts/*.md")
      .filter((post) => post.data.date <= now)
      .sort((a, b) => b.data.date - a.data.date);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
