<script>
    import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<title>About - Date Delights</title>
	<meta name="description" content="About Date Delights and its founder" />
</svelte:head>

<div class="text-column" transition:fade={{ duration: 500 }}>
	<h1>About Date Delights</h1>

    <p>
        Date Delights is on a mission to bring the exquisite taste and health benefits of dates to Indian homes. We believe in providing access to premium quality dates, making healthy snacking both delicious and convenient for everyone in India.
    </p>

    <h2>The Visionary Behind Date Delights</h2>

    <p>
        Date Delights is the brainchild of Siddharth Tripathi, a passionate entrepreneur with a deep connection to the world of dates.  His journey with dates began through his extensive travels to the UAE for his sales job, where he was consistently exposed to the finest varieties of dates. This firsthand experience ignited a passion within him to share the wonders of this incredible fruit with his home country.
    </p>

    <p>
        Siddharth's vision extends beyond just business; he is driven by a genuine desire to promote healthier lifestyles in India. He believes that dates, with their rich nutritional profile and natural sweetness, are an ideal food to contribute to this goal.  Date Delights is the embodiment of Siddharth's commitment to combining his business acumen with his passion for health and well-being, bringing the best dates from around the world to your doorstep.
    </p>

	<p>
		This website is built with <a href="https://svelte.dev/docs/kit">SvelteKit</a>.
	</p>
</div>

<style>
    .text-column {
        display: flex;
        max-width: 48rem;
        flex: 0.6;
        flex-direction: column;
        justify-content: center;
        margin: 0 auto;
        padding: 2rem;
    }

    h2 {
        color: var(--color-theme-1); /* Use your theme colors for visual appeal */
        margin-top: 2rem;
        margin-bottom: 1rem;
        border-bottom: 2px solid var(--color-theme-2); /* Add a subtle underline */
        padding-bottom: 0.5rem;
    }

    p {
        line-height: 1.6; /* Improve readability */
        margin-bottom: 1rem;
    }
</style>
