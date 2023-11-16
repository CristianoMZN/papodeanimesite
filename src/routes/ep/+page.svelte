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
    <h1>{episode.title}</h1>
    <img src=../../../../../{episode.img}>
    <p>
        {@html episode.desc}
    </p>
    {/if}
</div>
<style></style>