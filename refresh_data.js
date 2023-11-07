import url from "./rss_url_config.js";
import xml2json from "xml2json";
import fs from "fs";

async function getData(url) {
    var request = await fetch(url);
    var text = await request.text();
    xmlToDoc(text);
}

function xmlToDoc(xml) {
    var episodes = [], title, mp3, desc, img, items, season, number;
    var doc = xml2json.toJson(xml);
    doc = JSON.parse(doc);
    items = doc.rss.channel.item
    for (let i = 0; i < items.length; i++) {
        title = items[i].title;
        mp3 = items[i].enclosure.url;
        desc = items[i].description;
        season = items[i]["itunes:season"];
        number = items[i]["itunes:episode"] ? items[i]["itunes:episode"] : 0;

        if (season == "1") {
            img = "img/episodios/" + number + ".jpg"
        } else {
            img = "img/episodios/pdn_" + number + ".jpg"
        }

        episodes.push({
            id: i,
            title: title,
            mp3: mp3,
            desc: desc,
            img: img,
            season: season,
            number: number
        });
    }
    console.log(episodes[0]);

    fs.writeFile("./src/data/episodes_list.js", "const episodes = " + JSON.stringify(episodes, null, 2) + "; export default episodes;",
        function (err) {
            if (err) {
                console.log("erro ao escrever arquivo: ", err);
            } else {
                console.log("dados do podcast atualizados");
            }
        }
    );
}

getData(url);