---
layout: Default.tsx
tags:
  - project
title: hoyams
date: 2023-06-16T14:00:00.000Z
excerpt: the validation tool nobody asked for | hoyams = hold on you are missing something
---

# hoyams

the validation tool nobody asked for | hoyams = hold on you are missing something

- stack: deno, typescript
- repo: [github.com](https://github.com/adb-sh/hoyams)
- deno package: [deno.land](https://deno.land/x/hoyams)

## Concept

Rules are defined via a callback which retuns `true` or an error String. This is
so that you can define rules by using an or operator like this:

```javascript
new Rule((v) => typeof v === "string" || "is not a string");
```

or this:

```javascript
new Rule((v) =>
  typeof v === "string" && !!v.match(/^\w+@\w+\.\w+$/) ||
  "no valid email"
);
```

- If a executing a validation completes without an error an object with the same
  structure as the object given is returned.

- For creating powerful nested object rules there are some primites given:
  [How to use](https://deno.land/x/hoyams@v0.0.1#how-to-use)


