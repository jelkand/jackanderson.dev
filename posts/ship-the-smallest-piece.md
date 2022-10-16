---
title: 'Ship the Smallest Piece'
date: '2021-12-27T00:00:00.001Z'
description: 'Delivering the minimum value as a strategy.'
tags:
  - process
  - software-engineering
---

I've been spending a lot of time thinking about how to ship code lately.
I've had a lot of lessons over the last year on this. Some of those lessons were easy.
Some of them were learned the hard way--by getting it wrong at first.

I've reached a point where I'm able to distill out a few distinct lessons from what I've learned:

1. Ship the smallest useful piece.
2. Ship everything to someone.
3. Optimize for iteration.

Each of these is enough to justify a post of its own, so today I'll just focus on the first point. I'll link to subsequent posts above as I release them.

# Ship the smallest useful piece

To explain this, I could rephrase it or throw the thesaurus at it: The smallest meaningful unit of work. The smallest cohesive piece. The minimum viable feature.

What you want to ship is something that:

1. Is functional and useful to _someone_.
2. Is distilled down to _just_ that useful functionality.
3. Depends on nothing that isn't already shipped.

**Why?**

On functionality and usefulness:

- Software without someone to use it is rudderless. "If you build it, they will come" does not apply here. What you build _must_ solve _someone's_ problem. It can be yours!
  It could be a function nestled deep in the bowls of some system, so long as it will be called somewhere. Building a piece of software that is unused is, at best, nothing. At worst,
  it's an active burden to maintain and account for.
- It has to work. Shipping small stuff doesn't mean shipping it broken. It _might_ mean building something without a companion experience, or leaving loose threads
  with which we can add features later, but what we do ship must do its job.

2 and 3 both relate to 'smallness'. Small pieces are less risky.

- From a purely code perspective: They are easier to review and understand. They are easier to test because they're well scoped.
  They are easy to deploy because they change less. They are easier to roll back because, you guessed it, they changed less.
- You are betting less that you built the right thing. One of the biggest risks in software is building something that is not useful (see above), and sometimes you
  don't know what someone wants until you put it in front of them. Shipping something small means you can actually observe it in the wild sooner.
- Most of us are developing software on somewhat fixed schedules. Sure, a lot of those schedules are flexible or have wiggle room, but if we cannot find a way to build small pieces on
  relatively constrained timeframes, we risk trying to build everything and ending up with an unfinishable morass.
- Momentum matters in shipping software. If you are shipping often, that will become your norm.

## How?

I've found it's usually more intuitive to figure out what's useful. Problems present themselves every day. It's a lot harder to figure out the minimal useful thing.

### Make your deliverables a directed acyclic graph.

Ok, let's start at the beginning: what's a directed acyclic graph? Well, a graph is a collection of `nodes`, and `edges` that connect them.
In a _directed_ graph, each `edge` only goes one way. In a directed _acyclic_ graph, you cannot follow edges in such a way that you make a loop or cycle.
Put another way, from any node on the graph, you can't follow edges in such a way that you return to your starting point.

Anyone who has looked at a feature request, a new UI, a major refactor, or even a new project will be familiar with this phenomenon.
You can easily identify various independent parts, but part X relies on part Y being done, and part Y relies on part Z being done, and part Z somehow relies on X.
Your feature or project is now a cyclic graph of dependencies.

Taking these pieces at face value, to ship _any_ of them, you have to ship _all_ of them. This is a Bad Thing™, for all the reasons mentioned earlier. (The ambitious reader can likely list even more.)

What's the solution? You have to dissect your parts even further. Perhaps X is really only dependent on part Y-1. Perhaps Y-1 does not depend on Z. We now have a clear candidate for a small, useful unit.
Build it, and ship it. It can go live in production, and someone can start building X, comforted by the knowledge that the house didn't burn down when their dependency was delivered.

I've presented this as an engineering strategy, but it goes beyond just that too. Can we design entire features this way? Can our roadmap look like this? Imagine we're building
an application that can take payments via ACH--many users would like to save a bank account to save time when making their payments, but saving bank accounts takes a lot of work
and a lot of compliance risk. Can we ship a Make a Payment page without Bank Account management? Or could we find some minimum viable bank account management that would suffice?

Better still, can our loose threads tell us what we actually need? Can our users pull the loose threads to tell us what is important to them?

## Systems that _can_ ship small pieces.

For this to work, you have to have a system that is capable of shipping these small pieces. Depending on how you look at it, that may be a side-effect or a prerequisite of this approach.
My personal view is that this approach is a forcing function for a healthier pipeline.

This is a bit of a backwards justification, but consider a system that _cannot_ ship small changes. Most developers have worked on one.
It happens for any number of reasons--elaborate release processes, manual testing, administrative overhead of pointing and tracking user stories, anything.

These systems have 'taxes' on shipping. For every piece you ship, you have to pay this tax. This can quickly mean that any small change incurs a tax greater than
its actual development requirements. The natural solution is to bucket items together to pay the tax on many at once. Ship everything together, test it once instead of every time, etc.
Sure, you save on shipping tax but you inevitably couple changes together and slide towards a world where everything is dependent on everything.
I'll admit this works for some people, but it never sits right with me.

It seems much better to bias towards small pieces, and strive to reduce the taxes on shipping them. Require developers to write their own tests.
Have clean rollbacks so bad changes can be pulled out as quickly as they can be deployed. Ship everything as soon as it's ready. I could go on, and will in future posts.
The bottom line is that small changes must be viable.

Consider this unfortunately true story: A website I work on has had a ticket requesting a single word change in a headline for _months_.
Because it has to be prioritized somewhere, it must be scheduled for a later sprint. It has to be story pointed, and fully regression tested, and deployed.
Because of all of this overhead, a change that can be completed in about three seconds comes with so much tax that it is sitting and languishing.

Do you want to live in this system? I don't. The same taxes prevent meaningful refactors, they prevent ad-hoc bugfixes that developers notice before users,
they prevent shipping just about anything that wasn't planned three months ago. Make small changes possible.

## Wrap-up

Viewing projects or efforts as sums of small pieces, and endeavoring to make those pieces as small as possible means that we can ultimately deliver more _useful_ software,
faster, with fewer dead ends and less 'blobs' of work.

This ties in closely with the idea of 'shipping everything to someone,' and builds towards the greater idea of optimizing your process around iteration. I'm excited to write about those ideas,
hopefully this post suffices to lay a foundation for those thoughts.
