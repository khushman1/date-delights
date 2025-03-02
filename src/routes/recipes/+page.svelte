<script>
    import { fade } from 'svelte/transition';
</script>

<svelte:head>
    <title>Date Recipes - Date Delights</title>
    <meta name="description" content="Explore delicious date recipes" />
</svelte:head>

<main class="content-area" transition:fade={{ duration: 500 }}>
    <section class="category-hero">
        <h1>Date Recipes</h1>
    </section>

    <section class="category-content">
        <p>Delicious date recipes will be showcased here.</p>
        <p>Come back soon to explore our recipe collection!</p>
    </section>
</main>

<style>
    .content-area {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
    }

    .category-hero {
        text-align: center;
        margin-bottom: 2rem;
    }

    .category-hero h1 {
        font-size: 2.5rem;
        font-weight: bold;
        color: var(--color-theme-1);
        margin-bottom: 0.5rem;
    }

    .category-content {
        max-width: 700px;
        margin-bottom: 2rem;
    }

    .category-content p {
        font-size: 1rem;
        line-height: 1.6;
    }
</style>
