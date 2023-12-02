<script>
	import './styles.css';
	import { onMount } from "svelte";
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

	let dark_mode = true;

	function toogle_dark_mode() {
		if (dark_mode === true) {
			console.log("darkmode off");
			dark_mode = false;
		} else {
			console.log("darkmode on");
			dark_mode = true;
		}
	}

	onMount(function () {
		document.onkeyup = function (event) {
			if (event.keyCode == 68) {
				toogle_dark_mode();
			}
		}
	});
</script>
<svelte:head>
	<title>Papo de anime</title>
</svelte:head>
<div class="app" class:dark_mode={dark_mode}>
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
		background-color: #ccc;
		grid-template-columns: 100%;
		grid-template-rows: auto auto 200px;

		transition: background-color 1s;
	}

	.dark_mode {
		background-color: #050505;
		color: white;
	}

	/* aplica dark mode nos cards */

	.dark_mode :global(a.card[item=card]),
	.dark_mode :global(div.footer) {
		background-color: black;
		color: white;
	}
</style>