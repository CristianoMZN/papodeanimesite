<script>
	import Card from "../components/Card.svelte";
	import episodes from "../data/episodes_list";
</script>
<section>
	{#each episodes as ep}
	<Card episode={ep} />
	{/each}
</section>
<style>
	section {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
</style>