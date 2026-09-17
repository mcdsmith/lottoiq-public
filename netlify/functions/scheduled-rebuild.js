// Scheduled Netlify Function — runs once a day and triggers a fresh site
// rebuild by POSTing to a Netlify Build Hook. This is what makes scheduled
// posts actually "publish themselves": each rebuild re-evaluates every
// post's date, so a post whose date has now arrived gets written for the
// first time, with no manual action needed.
//
// SETUP REQUIRED (one-time, in the Netlify dashboard — this can't be done
// from a repo file):
//   1. Site settings → Build & deploy → Build hooks → Add build hook.
//      Name it something like "Scheduled rebuild", pick the branch you
//      deploy from, and save. Copy the URL it gives you.
//   2. Site settings → Environment variables → Add a variable named
//      NETLIFY_BUILD_HOOK_URL with that URL as the value.
//   3. Deploy this repo once (the schedule below is registered from
//      netlify.toml at deploy time, not from this file alone).
//
// After that, Netlify calls this function automatically once a day —
// nothing to run or remember locally.

const { schedule } = require("@netlify/functions");

const handler = async function () {
  const buildHookUrl = process.env.NETLIFY_BUILD_HOOK_URL;

  if (!buildHookUrl) {
    console.error("NETLIFY_BUILD_HOOK_URL is not set — see setup notes at the top of this file.");
    return {
      statusCode: 500,
      body: "Missing NETLIFY_BUILD_HOOK_URL environment variable.",
    };
  }

  const res = await fetch(buildHookUrl, { method: "POST" });

  console.log(`Scheduled rebuild triggered — build hook responded with status ${res.status}`);

  return {
    statusCode: 200,
    body: JSON.stringify({ triggered: true, buildHookStatus: res.status }),
  };
};

// Runs once a day. Netlify's cron scheduling is UTC-based.
module.exports.handler = schedule("@daily", handler);
