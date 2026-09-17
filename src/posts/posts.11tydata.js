// Applies to every template in src/posts/.
//
// Each post's frontmatter now sets `publishDate` (a plain YYYY-MM-DD string)
// instead of `date` directly. This file computes the *real* publish moment
// from it — 5:00 PM Eastern on that day — correctly handling the EST/EDT
// switch (Luxon's "America/New_York" zone knows when DST applies, so a
// November post gets UTC-5 and a July post gets UTC-4 automatically).
//
// That computed `date` is then used everywhere else (sorting, the
// isoDate/readableDate filters, and the collection filter in .eleventy.js),
// so no other template needed to change.
//
// permalink stays the same idea as before: if the computed publish moment
// hasn't arrived yet, Eleventy writes no page at all for this post.
const { DateTime } = require("luxon");

module.exports = {
  eleventyComputed: {
    date: (data) => {
      if (data.publishDate) {
        return DateTime.fromISO(data.publishDate, { zone: "America/New_York" })
          .set({ hour: 17, minute: 0, second: 0, millisecond: 0 })
          .toJSDate();
      }
      return data.date;
    },
    permalink: (data) => {
      if (data.date && new Date(data.date) > new Date()) {
        return false;
      }
      return data.permalink;
    },
  },
};
