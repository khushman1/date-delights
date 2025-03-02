<script>
    import { fade } from 'svelte/transition'; // Import fade transition
</script>

<svelte:head>
    <title>The Ancient Origins of Dates - Date Delights</title>
    <meta name="description" content="Explore the fascinating history and origins of dates, from ancient civilizations to modern cultivation." />
</svelte:head>

<main class="content-area">
    <section class="category-hero">
        <h1>Tracing Back the Sweetness: The Origins of Dates</h1>
        <p class="hero-subtitle">Journey through time to discover the ancient roots of dates.</p>
    </section>

    <section class="origins-story">
        <article class="story-section" transition:fade={{ duration: 500 }}> <!-- Apply fade transition -->
            <div class="image-container">
                <img src="/date-palm-origins-1.jpg" alt="Ancient Date Palm Tree" />
            </div>
            <div class="text-container">
                <h2>A History Rooted in Antiquity</h2>
                <p>
                    The date palm (Phoenix dactylifera L.) boasts a history as rich and layered as its sweet fruit.
                    Believed to have originated around the Persian Gulf, dates are one of the oldest cultivated fruits in the world, with evidence suggesting their cultivation as far back as 6000 BC in regions of Mesopotamia and ancient Egypt.
                </p>
                <p>
                    These weren't just a food source; dates were deeply interwoven into the fabric of ancient societies.
                    Palm trees were revered, symbolizing fertility and abundance, and their fruit was a staple food, a source of trade, and even mentioned in ancient texts and religious scriptures.
                </p>
            </div>
        </article>

        <article class="story-section" transition:fade={{ duration: 500 }}> <!-- Apply fade transition -->
            <div class="image-container">
                <img src="/ancient-dates-farming.jpg" alt="Ancient Date Palm Cultivation" />
            </div>
            <div class="text-container">
                <h2>Cultivation Across Civilizations</h2>
                <p>
                    From Mesopotamia, the cultivation of date palms spread rapidly. The trees thrived in the arid and semi-arid climates of the Middle East and North Africa, becoming integral to the agricultural practices of various civilizations.
                </p>
                <p>
                    Ancient Egyptians used dates to make wine, bread, and as offerings to their gods. In ancient Persia, dates were a prized delicacy and a symbol of hospitality.  The Romans, fascinated by exotic goods, imported dates from North Africa, further spreading awareness of this unique fruit across the Mediterranean.
                </p>
            </div>
        </article>

        <article class="story-section" transition:fade={{ duration: 500 }}> <!-- Apply fade transition -->
            <div class="image-container">
                <img src="/dates-trade-routes.jpg" alt="Ancient Trade Routes for Dates" />
            </div>
            <div class="text-container">
                <h2>Dates and the Spice Routes</h2>
                <p>
                    As trade routes expanded, so did the reach of dates. They became a vital commodity along the ancient spice routes, traveling from the Middle East to India and beyond.
                    Dates were not only valuable for their taste and nutritional benefits but also for their excellent preservation qualities, making them ideal for long journeys across deserts and seas.
                </p>
                <p>
                    In India, dates found a new home and were integrated into local cuisines and traditions.  Their journey along trade routes highlights their historical significance as a globally appreciated food long before modern transportation.
                </p>
            </div>
        </article>

        <article class="story-section" transition:fade={{ duration: 500 }}> <!-- Apply fade transition -->
            <div class="image-container">
                <img src="/modern-date-farm.jpg" alt="Modern Date Palm Farm" />
            </div>
            <div class="text-container">
                <h2>Modern Date Cultivation</h2>
                <p>
                    Today, date palms are cultivated in many warm regions around the world, including parts of the Americas, Southern Europe, and Asia. While modern agricultural techniques have increased efficiency, the fundamental process of date palm cultivation remains rooted in ancient practices.
                </p>
                 <p>
                    From the careful hand-pollination methods that echo ancient traditions to the sustainable water management techniques employed in date palm groves, the story of dates continues to evolve, connecting us to millennia of human history and ingenuity.
                </p>
            </div>
        </article>

        <article class="story-section" transition:fade={{ duration: 500 }}>
            <div class="image-container">
                <img src="/sustainable-date-farming.jpg" alt="Sustainable Date Farming Practices" />
            </div>
            <div class="text-container">
                <h2>Sustainability and Ethical Sourcing Today</h2>
                <p>
                    As we enjoy dates in the modern era, it's important to consider the sustainability and ethical aspects of their cultivation.  Traditional date palm farming is often inherently sustainable, relying on natural resources and time-honored methods.
                </p>
                <p>
                    However, with increased global demand, modern date production must prioritize responsible practices. This includes efficient water use in arid regions, minimizing pesticide use, ensuring fair labor practices for farmworkers, and supporting local communities involved in date cultivation. By choosing dates from sources committed to these values, we can ensure that the "sweet delight" of dates continues for generations to come, in a way that respects both people and the planet.
                </p>
            </div>
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

    .origins-story {
        max-width: 900px; /* Wider container for story */
        margin-bottom: 2rem;
    }

    .story-section {
        display: flex;
        flex-direction: column; /* Stack text and image on smaller screens */
        margin-bottom: 2rem;
        padding: 1.5rem;
        background-color: var(--color-bg-2);
        border-radius: 0.5rem;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
    }

    @media (min-width: 768px) { /* Adjust layout for larger screens */
        .story-section {
            flex-direction: row; /* Image and text side-by-side on larger screens */
            align-items: center; /* Vertically align items */
        }
        .image-container {
            width: 50%;
            padding-right: 2rem; /* Space between image and text for normal sections */
        }
        .text-container {
            width: 50%;
        }
         /* Reverse order for alternating layout */
        .story-section:nth-child(even) {
            flex-direction: row-reverse; /* Reverse layout for even sections */
        }
        .story-section:nth-child(even) .image-container {
             padding-left: 2rem; /* Space between image and text for even sections (reversed) */
             padding-right: 0; /* Remove right padding for even sections */
        }
        .story-section:nth-child(even) .text-container {
             padding-right: 2rem; /* Space between text and image for even sections (reversed) */
             padding-left: 0; /* Remove left padding for even sections */
        }
    }


    .story-section h2 {
        font-size: 2rem;
        color: var(--color-theme-2);
        margin-bottom: 1rem;
    }

    .story-section p {
        font-size: 1rem;
        line-height: 1.7;
        margin-bottom: 1rem;
    }

    .image-container {
        margin-bottom: 1rem; /* Spacing below image on smaller screens */
    }

    .image-container img {
        width: 100%;
        border-radius: 0.5rem;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1); /* Slightly stronger shadow for images */
    }
</style>
