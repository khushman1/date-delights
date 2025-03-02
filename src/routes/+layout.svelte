<script lang="ts">
	import Header from './Header.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="app">
    <div class="header-container">
	    <Header />
    </div>

	<main>
		{@render children()}
	</main>

	<footer>
        <p>
			This website is about Date Delights.
		</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

    .header-container {
        width: 100%;
		max-width: 64rem; /* Same max-width as main content */
		margin: 0 auto;     /* Center the header */
        box-sizing: border-box; /* Ensure padding/border within max-width */
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

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
