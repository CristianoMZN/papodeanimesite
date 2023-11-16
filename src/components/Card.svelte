<script>
    export let episode;
</script>
<a href="./ep?number={episode.number}&season={episode.season}" class="card" item="card">
    <img alt="capa do episódio" src={episode.img} width="200" />
    <br />
    {episode.title}
</a>
<style>
    a.card {
        background-color: white;
        box-shadow: 0 0 10px 2px #666;
        border-radius: 15px;
        width: 250px;
        height: 300px;
        margin: 30px 50px;
        display: grid;
        grid-template-rows: 200px 100px;
        text-align: center;
        align-items: top;
        padding: 10px;
        transition: box-shadow 0.5s, background-color 1s, color 1s;
    }

    a:hover {
        box-shadow: 0 0 15px 10px blue;
    }

    img {
        margin: 15px auto auto auto;
    }
</style>