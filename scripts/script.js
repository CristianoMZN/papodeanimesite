getData("https://anchor.fm/s/35969184/podcast/rss");

var episodes, app;
var banner = new Vue(
    {
        el:"#header,.main-title",
        data: {
            episodes: [],
            selected: 0
        }
    }
);
setBanner();
async function getData(url) {
    var request = await fetch(url);
    var text = await request.text();
    xmlToDoc(text);
}
function xmlToDoc(xml) {
    var episodes = [],title, mp3, desc, img, items;
    var parser = new DOMParser();
    var doc = parser.parseFromString(xml, "text/xml");
    items = doc.querySelectorAll("item");
    console.log(doc);
    console.log(items);
    for (let i = 0; i < items.length; i++) {
        title = items[i].querySelector("title").textContent;
        mp3 = items[i].querySelector("enclosure").getAttribute("url");
        desc = items[i].getElementsByTagName("itunes:summary")[0].childNodes[0].textContent;
        season = items[i].getElementsByTagName("itunes:season")[0].textContent;
        number = items[i].getElementsByTagName("itunes:episode")[0] ? items[i].getElementsByTagName("itunes:episode")[0].textContent : 0;

        if(season == "1"){
            img = "img/episodios/" + number + ".jpg"
        }else{
            img = "img/episodios/pdn_" + number + ".jpg"
        }

        episodes.push({
            id: i,
            title : title,
            mp3 : mp3,
            desc : desc,
            img : img,
            season: season,
            number: number
        });        
    }
    console.log(episodes);

    for (let i = 0; i < 4; i++) {
        banner.episodes.push(episodes[i]);
    }
    app = new Vue(
        {
            el:"#content",
            data: {episodes: episodes, selectedEpisode: null}
        }
    );

    clearLoading();
}
function clearLoading(){
    var container = document.querySelector(".loading-content");
    if(!container){
        return;
    }
    var startTransition = setTimeout(
        function(){
            container.classList.add("hidden");
        },
        10
    );

    var setGrid = setTimeout(
        function(){
            document.querySelector(".episodes-container").setAttribute("style", "display:grid;");
        },
        1000
    );

    var setOpacity = setTimeout(
        function(){
            document.querySelector(".episodes-container").classList.remove("hidden");
            container.setAttribute("style", "display:none;");

            searchEpisode()
        },
        1010
    );
}
function setBanner(){
    var url = "";
    if(window.innerWidth > 500){
        url = "img/banner.png";
    }else{
        url = "img/banner-mobile.png";
    }
    banner.url = url;
}
document.body.onresize = function(evt){
    setBanner();
}
function clearEpisode() {
    app.selectedEpisode = null;
    window.location.hash = '';
}
function setEpisode(event) {
    var id = event.getAttribute("id");
    var episode = app.episodes[id];
    console.log("Clicou no episódio:", event);
    console.log(app);
    window.location.hash = "episodio="+episode.number+"temporada="+episode.season;
    app.selectedEpisode = episode;
}
function searchEpisode(){
    if(window.location.hash == '' || !window.location.hash){
        return;
    }
    var episode,season,hash,data;
    hash = window.location.hash
    episode = hash.substring(hash.indexOf("episodio=") + 9, hash.indexOf("temporada"));
    season = hash.substring(hash.indexOf("temporada=") + 10);
    console.log("Temporada: ", season, "\nEpisodio: ", episode);

    for (var i = 0; i < app.episodes.length; i++) {
        data = app.episodes[i];
        if(data.season == season && data.number == episode){
            app.selectedEpisode = data;
            return;
        }
    }
}
function prevBanner() {
    if (banner.selected == 0) {
        banner.selected = 3
    }
    else {
        banner.selected = banner.selected - 1
    }
    console.log("novo banner selecionado: ", banner.episodes[banner.selected].title);
}
function nextBanner() {
    if (banner.selected == 3) {
        banner.selected = 0
    }
    else {
        banner.selected = banner.selected + 1
    }
    console.log("novo banner selecionado: ", banner.episodes[banner.selected].title);
}