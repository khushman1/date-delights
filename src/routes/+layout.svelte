<script>
	import Header from '../routes/Header.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>Date Delights</title>
</svelte:head>

<div class="app">
    <Header />
	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		overflow-x: hidden;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

    @media (min-width: 640px) {
        main {
            padding: 2rem 2rem;
        }
    }
</style>
