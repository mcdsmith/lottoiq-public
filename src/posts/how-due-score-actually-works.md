---
layout: post.njk
title: "How Due Score Actually Works"
publishDate: "2026-09-24"
category: "Strategy Guides"
image: /images/posts/how-due-score-actually-works.jpg
imageAlt: "How Due Score actually works"
excerpt: "Every number on LottoIQ has a Due Score from 0 to 100, combining four historical signals into one ranked number. Here's exactly how it's calculated."
honestPart: >
  Due Score is a ranking of historical patterns, not a prediction. Every lottery draw is independent, so a number with a score of 95 does not have better odds in the next draw than a number with a score of 12. The score simply gives players a clear and consistent way to compare numbers using past draw data instead of relying only on a hunch.
---

*Tags: due score, algorithm, methodology*

Every number on a LottoIQ game page has a Due Score from 0 to 100. The score brings four types of historical information together so players can quickly compare numbers. A higher Due Score does not mean a number has better odds of appearing in the next draw. It only means the number ranks highly across the four signals explained below.

## Four Signals, One Score

Due Score combines four historical signals. Each signal is worth up to 25 points, for a maximum total of 100. You can see the full breakdown for every number, so you always know why it received its score. The four signals are frequency, trend, overdue/recency, and cluster affinity.

## 1. Decay-Weighted Frequency (up to 25 points)

Frequency measures how "hot" a number has been in the selected dataset. Recent appearances count more than older ones.

- Each draw is given a weight based on how recent it is.
- The most recent draw receives the most weight. Older draws gradually receive less.
- A number earns credit each time it appears, based on the weight of that draw.
- The results are then compared across all numbers. The lowest result receives 0 points and the highest receives 25 points.

This helps recent activity stand out without completely ignoring older results.

### Why the weighting changes by dataset

LottoIQ changes how quickly older draws lose influence depending on the amount of history you selected:

- **Last 30 draws:** Recent results receive much more weight.
- **Last 90 draws:** Recent results receive moderately more weight.
- **All-time:** Older results keep more influence because the dataset covers a much longer period.

This keeps the calculation balanced for each selected time window.

## 2. Trend (up to 25 points)

Trend compares a number's activity in the newer half of the selected draws with its activity in the older half. If activity increased by more than 20%, the number is tagged Rising and receives 25 points. If activity decreased by more than 20%, it is tagged Cooling and receives 0 points. Anything in between is tagged Stable and receives 12 points.

## 3. Overdue / Recency (up to 25 points)

Overdue/Recency measures how many draws have passed since a number last appeared. A number that appeared in the most recent draw receives fewer points. A number that has been absent longer receives more points, up to 25. The same approach is used in LottoIQ's Overdue Numbers feature.

## 4. Cluster Affinity (up to 25 points)

Cluster Affinity measures how often a number has recently appeared in the same draws as the current 10 hottest numbers. Recent draws count more than older draws. Numbers that regularly appear alongside the Hot 10 receive more points, while numbers that rarely appear with them receive fewer points. A number does not receive extra credit simply for being part of the Hot 10 itself.

## Decay by Dataset

| Dataset | How quickly older draws lose influence |
| --- | --- |
| Last 30 draws | Fast — recent draws matter most |
| Last 90 draws | Moderate — recent draws matter more |
| All-time | Slow — older draws keep more influence |

## How the Final Score Is Calculated

Due Score = frequency points + trend points + overdue/recency points + cluster affinity points. The maximum score is 100 and the minimum is 0. Every number is ranked from highest to lowest on the Due Score leaderboard.

## The Minimum Data Rule

Due Score requires at least 20 draws in the selected dataset. When fewer than 20 draws are available, LottoIQ does not display a score because there is not enough history for a meaningful comparison.
