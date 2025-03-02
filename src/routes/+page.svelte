<script>
    import { fade } from 'svelte/transition';
    import DateAnimation from '$lib/components/DateAnimation.svelte'; // Import the new component
    import * as LucideSvelte from 'lucide-svelte';
    import ImageCarousel from './ImageCarousel.svelte'; // Import the ImageCarousel component

    const categorySummaries = [
        {
            title: 'Health Benefits',
            description: 'Discover the amazing health benefits of dates. Learn how this sweet fruit can boost your well-being.',
            link: '/health',
            icon: LucideSvelte.HeartPulse
        },
        {
            title: 'Date Origins',
            description: 'Trace the fascinating history of dates, from ancient civilizations to modern cultivation in India.',
            link: '/origins',
            icon: LucideSvelte.Globe
        },
        {
            title: 'Types of Dates',
            description: 'Explore the diverse world of date varieties. Find out the unique characteristics and uses of each type.',
            link: '/types',
            icon: LucideSvelte.ClipboardList
        },
        {
            title: 'Date Recipes',
            description: 'Get inspired with delicious and healthy date recipes. From snacks to desserts, explore the culinary possibilities.',
            link: '/recipes',
            icon: LucideSvelte.ChefHat
        }
    ];

    const dateImages = [
        '/medjool-dates.jpg',
        '/ajwa-dates.jpg',
        '/barhi-dates.jpg',
        '/deglet-noor-dates.jpg',
        '/dates-hero.jpg',
    ];
</script>

<svelte:head>
	<title>Welcome to Date Delights</title>
	<meta name="description" content="Explore the world of dates: health benefits, origins, types, recipes and more!" />
</svelte:head>

<main class="content-area" transition:fade={{ duration: 500 }}>
    <div class="hero-container">
        <section class="hero">
            <ImageCarousel images={dateImages} />  <!-- Move the ImageCarousel component here, above the logo -->
            <img src="/date-delight-logo.png" alt="Date Delights Logo" class="hero-logo-image" />
            <p class="subtitle">Your guide to the delicious and nutritious world of dates.</p>
        </section>
    </div>

	<section class="introduction">
		<h2>Discover Dates</h2>
		<p>
			Welcome to Date Delights, your one-stop destination to learn everything about dates!
			From the sunny orchards where they grow to the delightful recipes you can create,
			we're here to guide you on a flavorful journey.
		</p>
		<p>
			Explore the amazing health benefits of dates, discover their rich history and diverse origins,
			learn how to identify different varieties, and find mouth-watering recipes to incorporate dates into your daily diet.
		</p>
	</section>

    <DateAnimation />  <!-- Render the DateAnimation component here -->

    <section class="category-highlights">
        <h2>Explore Date Delights</h2>
        <div class="highlights-grid">
            {#each categorySummaries as category}
                <article class="highlight-card">
                    <a href={category.link}>
                        <div class="card-icon">
                            <svelte:component this={category.icon} />
                        </div>
                        <h3>{category.title}</h3>
                        <p>{category.description}</p>
                        <span class="learn-more">Learn more</span>
                    </a>
                </article>
            {/each}
        </div>
    </section>
</main>

<style>
    .hero-container {
        /* background-image: url('/dates-hero.jpg');  Removed background image */
        background-size: cover;
        background-position: center;
        color: white; /* Adjust text color for image contrast if needed */
        padding: 2rem 2rem; /* Adjusted padding to reduce hero section height */
        text-align: center;
        margin-bottom: 1rem; /* Reduced margin-bottom to reduce spacing */
        border-radius: 0; /* Removed border-radius to span edges */
        position: relative; /* Needed for overlay positioning */
        mask-image: radial-gradient(circle at center, black 75%, transparent 100%); /* Fade out edges on all sides */
        background-color: transparent; /* ADDED: Make hero container background transparent */
    }

    .hero-container::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.0); /* Modified: Make overlay transparent */
        border-radius: 0; /* Match hero container border-radius */
    }

    .hero {
        position: relative; /* Ensure text is above the overlay */
		text-align: center;
		margin-bottom: 0; /* Reduced margin as hero is in hero-container now */
        z-index: 1; /* Ensure text is above the overlay */
	}

    .hero-logo-image {
        width: 100%; /* Make logo fill hero width */
        max-width: 400px; /* Limit maximum logo width if needed */
        height: auto; /* Maintain aspect ratio */
        margin-bottom: 1rem; /* Add some space below the logo */
        padding-top: 4rem; /* ADDED: top padding to logo image */
    }

	.content-area {
		display: flex;
		flex-direction: column;
		align-items: stretch; /* Changed to stretch to allow hero to span width */
		padding: 0; /* Removed padding from content-area */
	}


	.hero h1 {
		font-size: 3rem;
		font-weight: bold;
		color: white; /* Changed to white for hero image background */
		margin-bottom: 0.5rem;
	}

	.hero .subtitle {
		font-size: 1.2rem;
		color:  var(--color-theme-2); /* Modified subtitle color to theme-2 */
        margin-bottom: 1rem; /* Added margin-bottom to subtitle */
	}

	.introduction, .feature-links {
		max-width: 700px;
		margin: 2rem auto; /* Added auto margin and max-width for intro and links */
		padding: 0 2rem; /* Added horizontal padding for intro and links */
	}

	.introduction h2, .feature-links h2 {
		font-size: 2rem;
		color: var(--color-theme-2); /* Using secondary theme color for section titles */
		margin-bottom: 1rem;
	}

	.introduction p {
		font-size: 1rem;
		line-height: 1.6;
	}

	.category-list {
		list-style: none;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1rem;
	}

	.category-list li {
		margin-bottom: 0.5rem;
	}

	.category-list li a {
		display: inline-block;
		padding: 0.75rem 1.5rem;
		background-color: var(--color-bg-2);
		color: var(--color-text);
		border-radius: 0.5rem;
		font-weight: 500;
		transition: background-color 0.2s ease;
	}

	.category-list li a:hover {
		background-color: var(--color-bg-1);
		text-decoration: none;
	}

    /* Category Highlights Section Styles */
    .category-highlights {
        max-width: 900px;
        margin: 2rem auto;
        padding: 2rem;
        text-align: center;
    }

    .category-highlights h2 {
        font-size: 2.2rem;
        color: var(--color-theme-2);
        margin-bottom: 1.5rem;
    }

    .highlights-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive grid */
        gap: 2rem;
    }

    .highlight-card {
        background-color: var(--color-bg-2);
        border-radius: 0.75rem;
        padding: 1.5rem;
        box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.07);
        transition: transform 0.2s ease-in-out;
    }

    .highlight-card:hover {
        transform: scale(1.03);
    }

    .highlight-card a {
        display: block; /* Make the entire card clickable */
        color: inherit; /* Inherit text color from body */
        text-decoration: none; /* Remove default link underline */
    }

    .card-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 4rem;
        height: 4rem;
        margin: 0 auto 1rem;
        border-radius: 50%;
        background-color: var(--color-bg-1);
        color: var(--color-theme-1);
        font-size: 2rem;
    }

    .highlight-card h3 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        color: var(--color-theme-1);
    }

    .highlight-card p {
        font-size: 1rem;
        line-height: 1.4;
        margin-bottom: 1rem;
    }

    .learn-more {
        display: inline-block;
        font-weight: 500;
        color: var(--color-theme-1);
        transition: color 0.2s ease;
    }

    .highlight-card a:hover .learn-more {
        color: var(--color-theme-2);
        text-decoration: underline;
    }

    /* Mobile Styles */
    @media (max-width: 767px) {
        .hero-carousel {
            display: none; /* Hide carousel on mobile */
        }
        .hero-logo-image {
            padding-top: 1rem; /* Reduced top padding for logo on mobile */
        }
    }
</style>
