---
title: "NomadCode 코드챌린지 #1"
date: "2021-05-24"
image: "/images/4444.jpg"
description: "Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page."
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

This is a normal paragraph:

    This is a code block.

<pre>
<code>
    public class BootSpringBootApplication {
    public static void main(String[] args) {
    System.out.println("Hello, Honeymon");
    }
    }
</code>
</pre>

end code block.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page.  
You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
