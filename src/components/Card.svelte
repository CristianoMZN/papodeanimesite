<script>
    import { onMount } from "svelte";
    export let episode;
</script>

<a
    href="./ep?number={episode.number}&season={episode.season}"
    class="card"
    item="card"
>
    <img alt="capa do episódio" src={episode.img} width="200" />
    <span>{episode.title}</span>
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
        grid-template-rows: 215px 85px;
        text-align: center;
        align-items: top;
        padding: 10px;
        transition:
            box-shadow 0.5s,
            background-color 1s,
            color 1s;
    }

    a:hover {
        box-shadow: 0 0 15px 10px blue;
    }

    a.card span {
        font-weight: bold;
        font-style: italic;
        padding: 20px 0;
    }

    img {
        margin: 15px auto auto auto;
    }
</style>
