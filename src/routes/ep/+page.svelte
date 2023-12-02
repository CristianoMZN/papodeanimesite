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
    <img src=../../../../../{episode.img}>
    <h1>{episode.title}</h1>
    <p>
        {@html episode.desc}
    </p>
    {/if}
</div>
<style>
    div {
        /* box-shadow: 0px 0px 5px 5px purple; */
        display: grid;
        max-width: 80%;
        margin: 50px auto;
        grid-template-columns: 35% 65%;
        grid-template-rows: 75px auto;
    }

    h1 {
        margin-top: 0;
    }

    img {
        width: 100%;
        grid-row-start: 1;
        grid-row-end: 3;
    }

    p {
        padding-left: 25px;
    }
</style>