const { getAllPostIds } = require("../../lib/posts");

const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

export default async (req, res) => {
  try {
    const links = [];
    getAllPostIds().map((post) => {
      links.push({
        url: `/posts/${post.params.id}`,
        changefreq: "daily",
        priority: 0.9,
      });
    });

    const pages = ["/about", "/contact", "/portfolio", "/posts"];
    pages.map((url) => {
      links.push({
        url,
        changefreq: "daily",
        priority: 0.8,
      });
    });

    const stream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
    });

    res.writeHead(200, {
      "Content-Type": "application/xml",
    });

    const xmlString = await streamToPromise(
      Readable.from(links).pipe(stream)
    ).then((data) => data.toString());

    res.end(xmlString);
  } catch (e) {
    console.log(e);
    res.send(JSON.stringify(e));
  }
};
