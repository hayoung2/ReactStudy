const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const cheerio = require("cheerio");
const axios = require("axios");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json()); //이 데이터 형식으로 주고받음. 
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});
connection.connect();


app.get('/api/userPosting', (req, res) => {
  connection.query(
    "SELECT * FROM post", (
      err, rows, fields) => {
    res.send(rows);
  }
  )
});


const getDataHtml = async () => {
  try {
    return await axios.get("https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EB%82%A0%EC%94%A8&oquery=%EB%82%A0%EC%94%A8+%EB%AF%B8%EC%84%B8%EB%A8%BC%EC%A7%80&tqi=U8XD%2Fsp0JXVssMV1p20ssssst08-027465");
    // 해당 사이트 html 태그 가져오기
  } catch (error) {
    console.error(error);
  }
};


const getHtml = async () => {
  try {
    return await axios.get("http://ncov.mohw.go.kr/");
    // 해당 사이트 html 태그 가져오기
  } catch (error) {
    console.error(error);
  }
};

app.get("/crawling/data", (req, res) => {
  getDataHtml()
    .then((html) => {
      const $ = cheerio.load(html.data);
      let mainParentTag = $("div.info_data p");
      let subParentTag = $("div.indicator dd");
      // 크롤링할 태그 찾기

      let resultArr = [];
      mainParentTag.each(function (i, elem) {
        let itemObj = {
          temperature: $(this).find("span.todaytemp").text(),
        };
        resultArr.push(itemObj);
      });

      subParentTag.each(function (i, elem) {
        let itemObj = {
          dust: $(this).find("span").text(),
        };
        resultArr.push(itemObj);
      });

      // resultArr.forEach((elem) => {
      //   console.log(`현재 ${elem._text}의 현황 : ${elem._num}`);
      // });
      return resultArr;
    })
    .then((data) => res.send(data));
});

app.get("/crawling/corona", (req, res) => {
  getHtml()
    .then((html) => {
      const $ = cheerio.load(html.data);
      let parentTag = $("div.liveNum ul.liveNum li");
      // 크롤링할 태그 찾기

      let resultArr = [];
      parentTag.each(function (i, elem) {
        let itemObj = {
          text: $(this).find("strong").text(),
          num: $(this).find("span").text(),
        };
        resultArr.push(itemObj);
      });

      // resultArr.forEach((elem) => {
      //   console.log(`현재 ${elem._text}의 현황 : ${elem._num}`);
      // });
      return resultArr;
    })
    .then((data) => res.send(data));
});


app.use('/image', express.static('./upload'));


app.listen(port, () => console.log(`Listening on port ${port}`));
