---
title: "The Tyranny of the Quantifiable"
date: 2022-03-01T22:17:00-05:00
description: "The map is not the territory."
tags: []
---

> We make our decisions based on data and metrics, and focus our efforts on what delivers business value.

Have you heard this one before? It's a pretty sensible philosophy. Software development is a field with a wealth of measurable things, so we should make these measurements the basis of our planning.

Here are some examples of this thinking:


1. Our website is instrumented with analytics, we have tools to tell how many users click to buy our product, and how many give up after each step of the process. We can devise experiments that provide variations of our site to different users, and keep the ones that maximize the metrics we measure, like buying a product, or signing up for a new feature.
2. We know we have a lot of tech debt, and need to figure out what to work on first. We can pick some metrics that seem like useful proxies, like time spent running CI/CD pipelines due to flaky tests, or areas where actual work always exceeds that which is estimated. We can, again, pick the work that maximizes the metric we chose, and see if the tech debt we cleaned up 'fixed' that number.
3. We're looking to add a new feature to our product, and have a few ideas. Some are audacious and out there, some are banal and trite, most are somewhere in between. To figure out where to focus our time, we spend some time talking to prospective users of the feature, and make our decisions based on what they'd want or use, and we'll likely pick something that is the right balance of familiar and new.


Sounds pretty reasonable, right? I think so. These are all variations on the same idea. How do we allocate our most limited resource, _time_, in a way that maximises our returns? Or at least minimizes our losses, which is less exciting but still safe.

This philosophy is not flawless though. It presumes a few fragile ideas:


- What is important can be measured.
- We've selected the right things to measure from an immense number of measurable things.
- Improving those metrics will lead to global or long term improvements, and not converge on some local maxima that's really an evolutionary dead end.


I contrived the examples earlier to sound perfectly reasonable, but it's not hard to find or construct counter examples:

1. Chasing A/B optimizations can result in a disjointed or even hostile user experience. Look to the panoply of streaming video applications--most are optimized around getting you watching more, but many have somehow forgotten how to make a usable video player. [Jon Siracusa wrote about this a bunch, and offers some notes on a Hulu experiment gone 'awry'](https://hypercritical.co/2022/02/17/streaming-app-sentiments)
2. Sensible, time-boxed fixes or improvements to fix tech debt are sometimes just interest payments instead of meaningful payments towards the principal. Cutting loose from the financial metaphor, there's always a risk that it's just a band-aid, keeping a broken system just above the line where it spirals out. Sometimes a core system needs a re-write, or maybe a developer has a gut feeling about something that's difficult to work in. Those short-term-expensive changes are sometimes where we ought to be focusing.

3. The iPhone provides the quintessential contemporary counterexample--it was released in a world of BlackBerries, T9 keyboards, and feature phones. Companies like BlackBerry were surely competent, and were delivering a product that their users very much wanted--but compared to the iPhone they were delivering winning enhancements on a losing idea.

Now, let's be clear--these are counterexamples, not proofs. My argument is not that we chuck metrics and data out the window, but rather that we carve out space for the tenuous and ambiguous and recognize measurements, metrics, and 'data-driven' approaches for what they are: abstractions over an unclear domain.

> "A map _is not_ the territory it represents, but, if correct, it has a _similar structure_ to the territory, which accounts for its usefulness." -- Alfred Korzybski

The way we measure and even think about our projects and products is only ever a map, never the territory. The metrics we select, the measurements we make, and the value we deliver are useful, but never completely represent reality. We treat the map as the territory at our own peril.

Awareness of the problem, of course, is only a part of the solution. There is no generalizable solution or "simple trick", but the clearest tool I can advocate for is dedicating some amount of time to open ended, unquantifiable problems. Further, in my experience, you can't chase leaky abstractions with more abstractions like story points--commit concretions like time, days, or dollars. Make it regular too--twice a year is better than once a year, and once a week is better than once a month.

Some examples of this I've heard of:

- Google's famous "20% time," where developers were expected to spend 20% of their time on what they think will benefit Google.
- Hackathons. Earnest (my current/former employer) just started launching a new product that I prototyped at a hackathon.
- "Hack days," where some time is dedicated each week to anything a developer wants to work on.

Best of all, taking these leaps of faith on unquantifiable or unjustifiable projects might eventually help us choose better metrics or measurement--some experimentation or exploration without pressure to deliver value can converge back on a data-driven strategy.

Returning to the "the map is not the territory" metaphor, it turns out that exploring the territory means we make a better map. Who would have thought?
