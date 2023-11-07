<script>
    export let episode;
</script>
<div>
    <img alt="capa do episódio" src={episode.img} width="200" />
    <br />
    {episode.title}
</div>
<style>
    div {
        background-color: white;
        box-shadow: 0 0 10px 2px black;
        border-radius: 5px;
        width: 250px;
        height: 300px;
        margin: 30px 50px;
        display: grid;
        grid-template-rows: 200px 100px;
        text-align: center;
        align-items: top;
        padding: 10px;
        transition: box-shadow 0.5s;
    }

    div:hover {
        box-shadow: 0 0 15px 10px blue;
    }

    img {
        margin: auto;
    }
</style>