const express = require("express");
const cheerio = require("cheerio");
const axios = require("axios");

const app = express();
const url = "https://magiclifecom.netlify.app/";

axios(url)
  .then((res) => {
    const ar = [];
    const html = res.data;
    // console.log(html);
    const $ = cheerio.load(html);
    $("h1", html).each(() => {
      const text = $(this).find(".hero__text").text();
      // ar.push({ text });
      console.log(text);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(8000, () => {
  console.log("server running");
});
