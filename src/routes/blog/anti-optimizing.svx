---
title: 'Anti-Optimizing'
date: '2020-10-27T00:00:00Z'
category: 'Infrastructure'
description: 'Building the worst algorithm to test scaling'
tags:
  - 'algorithms'
  - 'sorting'
  - 'scaling'
---

I've been getting into infrastructure and architecture, and I've been meaning to do a small autoscaling exercise on my Pi cluster. This
should be a pretty simple prospect. Get a simple express server dockerized, and just pummel it with request, right?

Well... turns out even a vanilla express server is pretty fast. A bajillion requests to a `/ping` endpoint is going to bring it to its knees, but
it might be a pain to make all those requests fast enough.

This means we need to write a bad service--some containerized application that will consume resources, and hold on to them. Kubernetes lets us
limit and scale deployments based on CPU and memory, so those are two prime candidates.

For CPU it's trivial to just `while(true)` forever, and for memory we can just create big arrays indefinitely. That lacks a certain _je nais se quoi_ though.
It doesn't feel artful. I wanted to build something that felt a tiny bit interesting. A sort of 'awful taste but great execution' sort of deal.

## Optimizing in the wrong direction.

Sorting algorithims are a textbook case for optimizing and understanding computational complexity. A pretty good sorting algorithm will be in the area of `O(n log n)`. A bad one is `O(n^2)`.
Fortunately, it gets worse. Bogosort is a transcendentally bad `O(n!)`.

Bogosort is simple:

1. Check to see if your list of elements is in order. If so, return, you're done.
2. Shuffle the list, and return to step 1.

That's it. For a list of a single item, it's trivially done. For a few items, it takes a handful of operations.
To shuffle an array of 10 items it regularly takes nearly a hundred thousand operations to complete. An array of 13 took 5 minutes and 1510579136 shuffles to sort.
Notably, if your shuffle is truly random, you're never actually any closer to an ordered array than you were before.

Code for this can be found in a repository [here.](https://github.com/jelkand/bogosort-x/blob/master/src/index.ts)

After a short trial it's pretty clear that running this on any meaningful array will quickly take us to whatever CPU limits we have.

![CPU stats sorting a 12 element array](/images/node-stats.png)

## Where do we go from here?

Getting this into a useful state is pretty straightforward--build a small web service to expose this algorithim as an endpoint. I'm calling it Bogosort as a Service or `baas` for short.

Like any self-respecting software engineer, I also externalized the easily reusable sorting algorithm and published it to npm as `bogosort-x`. There was already a bogosort, but it wasn't in typescript.
Types feel like lipstick on a pig when you're dealing with code this bad, but here we are, with types and unit tests and currying and custom comparators and everything.

If you hate performance, you're welcome to use it too.
