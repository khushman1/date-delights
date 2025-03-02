<script>
    import { fade } from 'svelte/transition';
    import { base } from '$app/paths'; // Import base path
</script>

<svelte:head>
    <title>Know Your Dates: Types and Quality - Date Delights</title>
    <meta name="description" content="Explore different types of dates and learn how to identify high-quality dates when buying." />
</svelte:head>

<main class="content-area" transition:fade={{ duration: 500 }}>
    <section class="category-hero">
        <h1>Decoding Dates: Varieties and Quality Guide</h1>
        <p class="hero-subtitle">Not all dates are created equal! Discover the diverse world of dates and how to choose the best.</p>
    </section>

    <section class="date-types">
        <h2>Exploring Date Varieties</h2>
        <p>
            The world of dates is surprisingly diverse, with hundreds of varieties grown around the globe. Each type boasts a unique flavor profile, texture, and appearance. Here are a few popular types you might encounter:
        </p>

        <article class="date-type-item">
            <h3>Medjool</h3>
            <div class="type-image-container">
                <img src="{base}/medjool-dates.jpg" alt="Medjool Dates" />
            </div>
            <p>
                Known as the "king of dates," Medjool dates are large, soft, and incredibly sweet with a rich, caramel-like flavor. They have a chewy texture and are often enjoyed fresh due to their moistness.
            </p>
            <p><b>Key characteristics:</b> Large size, soft and chewy, caramel-like taste, moist appearance.</p>
        </article>

        <article class="date-type-item">
            <h3>Deglet Noor</h3>
            <div class="type-image-container">
                <img src="{base}/deglet-noor-dates.jpg" alt="Deglet Noor Dates" />
            </div>
            <p>
                Often called the "queen of dates," Deglet Noor dates are less sweet than Medjool and have a firmer, slightly drier texture. They possess a delicate, nutty flavor and are excellent for cooking and baking as they hold their shape well.
            </p>
            <p><b>Key characteristics:</b>  Medium size, firm texture, subtly sweet, nutty flavor, translucent color.</p>
        </article>

        <article class="date-type-item">
            <h3>Barhi</h3>
            <div class="type-image-container">
                <img src="{base}/barhi-dates.jpg" alt="Barhi Dates" />
            </div>
            <p>
                Barhi dates are unique as they are often eaten in their Khalal stage (yellow and crunchy) as well as fully ripe (Rutab stage - brown and soft).  When ripe, they are very soft, creamy, and intensely sweet with a butterscotch flavor.
            </p>
            <p><b>Key characteristics:</b>  Round shape, very soft when ripe, creamy texture, butterscotch flavor, can be eaten at different stages of ripeness.</p>
        </article>

        <article class="date-type-item">
            <h3>Ajwa</h3>
            <div class="type-image-container">
                <img src="{base}/ajwa-dates.jpg" alt="Ajwa Dates" />
            </div>
            <p>
                Ajwa dates are a prized variety from Saudi Arabia. They are known for their soft, dark brown to black color and raisin-like texture. They have a moderately sweet and fruity flavor with hints of caramel.
            </p>
            <p><b>Key characteristics:</b>  Small to medium size, soft, dark color, raisin-like texture, moderately sweet, fruity flavor.</p>
        </article>
    </section>

    <section class="quality-identification">
        <h2>Identifying Quality Dates</h2>
        <p>
            Choosing high-quality dates ensures you get the best flavor and nutritional value. Here's what to look for when selecting dates:
        </p>

        <article class="quality-tip">
            <h3>Appearance</h3>
            <p>
                Good quality dates should have a plump, glossy appearance and consistent color for their type. Avoid dates that look overly dry, shriveled, or have sugar crystals on the surface (unless it's intentional for certain types).
            </p>
        </article>

        <article class="quality-tip">
            <h3>Texture</h3>
            <p>
                The texture varies depending on the type of date, but generally, they should be soft and slightly yielding to the touch, not hard or rock-solid.  They should also not be overly sticky or mushy, which can indicate spoilage.
            </p>
        </article>

        <article class="quality-tip">
            <h3>Smell</h3>
            <p>
                Fresh, high-quality dates should have a mild, sweet, and fruity aroma characteristic of dates. Avoid dates that have a fermented, sour, or off-putting smell, as this is a sign of spoilage.
            </p>
        </article>

        <article class="quality-tip">
            <h3>Packaging and Source</h3>
            <p>
                If buying packaged dates, check for airtight packaging to ensure freshness.  Consider purchasing dates from reputable sources or brands that prioritize quality and proper storage.  Knowing the origin can sometimes also indicate quality, as certain regions are renowned for specific date varieties.
            </p>
        </article>
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

    .category-hero .hero-subtitle {
        font-size: 1.2rem;
        color: var(--color-text);
    }

    .date-types, .quality-identification {
        max-width: 800px;
        margin-bottom: 2rem;
    }

    .date-types h2, .quality-identification h2 {
        font-size: 2rem;
        color: var(--color-theme-2);
        margin-bottom: 1rem;
    }

    .date-types p, .quality-identification p {
        font-size: 1rem;
        line-height: 1.6;
        margin-bottom: 1rem;
    }

    .date-type-item, .quality-tip {
        margin-bottom: 1.5rem;
        padding: 1.5rem;
        background-color: var(--color-bg-2);
        border-radius: 0.5rem;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
    }

    .date-type-item h3, .quality-tip h3 {
        font-size: 1.5rem;
        color: var(--color-theme-1);
        margin-bottom: 0.75rem;
    }

    .type-image-container {
        max-width: 300px;
        margin: 0 auto 1rem;
    }

    .type-image-container img {
        width: 100%;
        border-radius: 0.5rem;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    }

    .date-type-item b {
        font-weight: bold;
    }
</style>
