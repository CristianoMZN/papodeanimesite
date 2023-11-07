<script>
	import './styles.css';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
</script>
<svelte:head>
	<title>Papo de anime</title>
</svelte:head>
<div class="app">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>
<style>
	.app {
		position: absolute;
		display: grid;
		min-height: 100%;
		width: 100%;
		background-color: #eee;
		grid-template-columns: 100%;
		grid-template-rows: auto auto 200px;
	}
</style>