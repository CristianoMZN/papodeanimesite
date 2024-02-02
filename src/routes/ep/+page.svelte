<script>
    import episodes from "../../data/episodes_list";
    import { onMount } from "svelte";

    let episode;
    onMount(function () {
        let url = document.location.search;
        function getEpisode() {
            let data = new URLSearchParams(url);
            let number = data.get("number");
            let season = data.get("season");
            let episode;
            for (let i = 0; i < episodes.length; i++) {
                if (episodes[i].number == number &&
                    episodes[i].season == season) {
                    episode = episodes[i];
                    break;
                }
            }
            return episode;
        }
        episode = getEpisode();
    });
</script>
<div>
    {#if episode}
    <img alt="" src=../../../../../{episode.img}>
    <h1>{episode.title}</h1>
    <p>
        {@html episode.desc}
        <br><br>
        <a href={episode.mp3}>Clique aqui e ouça Agora!</a>
    </p>
    {/if}
</div>
<style>
    div {
        display: grid;
        max-width: 80%;
        margin: 50px auto;
        grid-template-columns: 35% 60%;
        grid-template-rows: 75px auto;
        column-gap: 5%;

    }

    h1 {
        margin: 0;
    }

    img {
        width: 100%;
        grid-row-start: 1;
        grid-row-end: 3;
    }

    p {
        max-width: 100%;
        margin: auto 0;
        text-wrap: pretty;
        word-break: break-word;
        padding-left: 25px;
    }

    @media (max-width: 992px) {
        div {
            grid-template-columns: auto;
            grid-template-rows: 256px auto auto;
            row-gap: 30px;
        }

        img {
            width: 256px;
            grid-row: 1 / 2;
        }
    }
</style>