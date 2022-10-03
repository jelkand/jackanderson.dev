---
title: workingtitle.live is... live
date: '2020-09-03T13:23:23.817Z'
description: 'A slightly more involved static site.'
---

# [Working Title](https://workingtitle.live)

I've been doing a podcast with some college friends for some time now. The core conceit is that we review and rank the top-voted english-language movies on IMDb. A small problem--movies move around on this list a lot. We froze the list in November 2019,
but now nobody but us can reference our list. We needed some kind of reference where we can share the entire list and our re-rankings of the list. A natural fit for a website!

## Gatsby, round 2

I put Gatsby through its paces again, and here are some general notes:

- Integration with a CMS like Contentful is where Gatsby really starts to shine. I'm able to configure content, and Gatsby bakes it in at build time.
- `gatsby-plugin-graphql-codegen` is a bit of a pain. As mentioned in my [last post](/building-the-blog) typing GraphQL responses is an enormous opportunity, but there are two problems here:
  - It runs on every build, which is too expensive. The schema should rarely change, it's better to run this ad-hoc. Perhaps better to run the underlying tooling (`graphql-codegen`) independent of Gatsby.
  - It blew up entirely when parsing Contentful's API. Not sure why, I didn't take the time to debug and just ended up writing my own types. 🤷‍♂️

Netlify continued to be very easy to work with. In this case, where I bought a domain specifically for this project, Netlify managed all of the configuration, SSL, etc with only a few clicks.

For content I used Contentful, which is not perfect but has saved my butt professionally on at least one occassion. Their free tier includes GraphQL now, which makes them pretty compelling. Ultimately my expenses for this entire site were about `$`3 for a domain name, which is excellent.

I continued with `theme-ui` and brought in a little more firepower with `rebass`, a complementary library. I've been pretty satisfied with those. More on that in another post, maybe.

## Designing is not easy

Lesson 1: At some point I just need to learn Figma and prototype things, rather than just hacking my way through CSS/HTML until I'm satisfied with the designs, or tired of fiddling.

Our podcast's logo was a riff on IMDb's icon. Poor choice--IMDb's icon uses a terrible font, terrible colors. I spent some time trying to style the website in the same theme, but it kept feeling like a powerpoint from 2008. Eventually I ditched that
and just used the goldenrod color, some complementing neutral colors, and a nice font (**not** Impact).

Some of the info we wanted to display is well suited to a table, but tables are difficult to make work on small screens. I'm still not entirely satisfied with this solution, but I didn't want to spend a week just styling tables. In true Agile fashion,
I just shipped it, and I'll improve it and ship again later.

## `react-table`

[React Table](https://react-table.tanstack.com/) is great. I've used a number of tables that work pretty well (Material-UI, etc. etc.) and rolled my own, and none have quite done what `react-table` did.

React Table is 'headless', so it provides no styling, it just injects props into components you provide, and maintains table state with React hooks. In my opinion, the perfect way to get the difficult parts of a table done without marrying yourself to
the styles of Material-UI or Ant Design or whatever. I would 100% bring this in at my work, where we have a strongly opinionated design system.

## Lingering to-dos

This feels fairly complete right now. I'd like to add dedicated pages for each podcast episode, and perhaps a feedback form, but those are on the other side of what feels like a natural break in features.

At some point, I'll also restyle the tables and really take the time to make this site responsive (it's adequate now, not great).
