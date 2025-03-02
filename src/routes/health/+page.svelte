<script>
    import { fade } from 'svelte/transition';
    import * as LucideSvelte from 'lucide-svelte';

    const benefitIcons = {
        "Rich in Nutrients": LucideSvelte.HeartPulse,
        "High in Fiber": LucideSvelte.Leaf,
        "Source of Antioxidants": LucideSvelte.Atom,
        "Natural Energy Booster": LucideSvelte.LightningBolt,
        "May Promote Brain Health": LucideSvelte.Brain
    };
</script>

<svelte:head>
    <title>Health Benefits - Date Delights</title>
    <meta name="description" content="Learn about the health benefits of dates" />
</svelte:head>

<main class="content-area" transition:fade={{ duration: 500 }}>
    <section class="category-hero">
        <h1>Sweet & Healthy: Date Benefits! </h1>
        <p class="hero-subtitle">Nature's candy with amazing perks! ✨</p>
    </section>

    <section class="health-benefits">
        <article class="benefit-item">
            <div class="benefit-header">
                <h2>Nutrient Powerhouse 💪</h2>
            </div>
            <p>
                Dates?  Tiny packages, HUGE nutrition! 🎉 They're packed with vitamins & minerals your body craves.
            </p>

            <p>
                 A sweet & easy way to boost your health daily.
            </p>

            <p>
                Key nutrients in dates:
            </p>
            <ul class="benefit-list">
                <li>
                    <span class="nutrient-name">Potassium 🍌:</span> <span class="nutrient-benefit">Heart healthy! ❤️ Keeps blood pressure in check & your heart happy.</span>
                </li>
                <li>
                    <span class="nutrient-name">Magnesium 🧘‍♀️:</span> <span class="nutrient-benefit">Muscles, nerves, blood sugar & energy - Magnesium's got you covered! Feel balanced & energized.</span>
                </li>
                <li>
                    <span class="nutrient-name">Iron 🩸:</span> <span class="nutrient-benefit">Energy booster! ⚡  Fights tiredness & keeps you strong by carrying oxygen.</span>
                </li>
                <li>
                    <span class="nutrient-name">Bonus Nutrients 🌟:</span> <span class="nutrient-benefit">Copper, manganese & vitamin B6 -  small but mighty for overall wellness.</span>
                </li>
            </ul>
        </article>

        <article class="benefit-item">
            <div class="benefit-header">
                <h2>Fiber Rich Friend 🌱</h2>
            </div>
            <p>
                Need gut love? Dates = Fiber Power! 🚀  Fiber is essential for digestion & feeling great.
            </p>

            <p>
                 Think of it as your internal clean-up crew! 🧹
            </p>

            <p>
                Date fiber benefits:
            </p>
            <ul class="benefit-list">
                <li>
                    <span class="benefit-point">Happy Gut 🏆:</span> <span class="benefit-description">Say bye-bye to constipation! 👋 Promotes smooth digestion & regularity.</span>
                </li>
                <li>
                    <span class="benefit-point">Steady Sugar ⚖️:</span> <span class="benefit-description">Keeps blood sugar levels even.  No more energy crashes! 🎢</span>
                </li>
                <li>
                    <span class="benefit-point">Weight Buddy 🤝:</span> <span class="benefit-description">Feeling full helps manage weight.  Satisfied & on track! 🍽️</span>
                </li>
            </ul>
        </article>

        <article class="benefit-item">
            <div class="benefit-header">
                <h2>Antioxidant Powerhouse 🛡️</h2>
            </div>
            <p>
                Antioxidant Alert! 🎉 Dates are loaded!  Antioxidants protect your cells from damage, like tiny bodyguards.
            </p>

            <p>
                 Fight off those bad guys (free radicals)!
            </p>

            <p>
                Top antioxidants in dates:
            </p>
            <ul class="benefit-list">
                <li>
                    <span class="antioxidant-name">Flavonoids 🌟:</span> <span class="antioxidant-benefit">Disease fighters! 💪  Powerful anti-inflammatory & antioxidant action.</span>
                </li>
                <li>
                    <span class="antioxidant-name">Carotenoids 🥕:</span> <span class="antioxidant-benefit">Heart & eye love! ❤️👁️ Boost heart health & keep your vision sharp.</span>
                </li>
                <li>
                    <span class="antioxidant-name">Phenolic acids ✨:</span> <span class="antioxidant-benefit">Inflammation calmer! 🔥 Soothe your body from within with these anti-inflammatory heroes.</span>
                </li>
            </ul>
        </article>

        <article class="benefit-item">
            <div class="benefit-header">
                <h2>Natural Energy Lift ⚡</h2>
            </div>
            <p>
                Need energy NOW? Dates to the rescue! 🚀  They give you sustained energy thanks to natural sugars & fiber.
            </p>

            <p>
                 Perfect pre-workout or for a busy day! 🏃‍♀️💨
            </p>
        </article>

        <article class="benefit-item">
            <div class="benefit-header">
                <h2>Brain Food? 🤔 Yes, Dates! 🧠</h2>
            </div>
            <p>
                Brain boost alert! 🤯 Dates might be good for your mind.  Antioxidants may help memory & protect your brain long-term.
            </p>

            <p>
                 Think smart snack! 😉
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

    .health-benefits {
        max-width: 900px;
        margin-bottom: 2rem;
    }

    .benefit-item {
        margin-bottom: 3rem; /* Increased spacing between benefit items */
        padding: 2rem;
        background-color: var(--color-bg-2);
        border-radius: 0.75rem;
        box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.07);
    }

    .benefit-header {
        display: flex;
        align-items: center;
        margin-bottom: 1.5rem; /* Increased spacing below header */
    }

    .benefit-icon {
        width: 2.5rem;
        height: 2.5rem;
        margin-right: 1rem;
        color: var(--color-theme-1);
        display: none; /* Hide the icon visually, but keep in code if needed for other reasons */
    }

    .benefit-item h2 {
        font-size: 2rem;
        color: var(--color-theme-2);
        margin-bottom: 0;
    }

    .benefit-item p {
        font-size: 1.1rem;
        line-height: 1.7;
        margin-bottom: 1.2rem; /* Increased spacing below paragraphs */
    }

    .benefit-list {
        list-style: none;
        padding-left: 0;
    }

    .benefit-list li {
        margin-bottom: 1rem; /* Increased spacing between list items */
        display: flex;
        flex-direction: column;
    }

    .nutrient-name, .antioxidant-name, .benefit-point {
        font-weight: bold;
        color: var(--color-theme-1);
        margin-bottom: 0.3rem; /* Increased spacing below names */
    }

    .nutrient-benefit, .antioxidant-benefit, .benefit-description {
        font-size: 1rem;
        line-height: 1.5;
    }

    .benefit-item b {
        font-weight: bolder;
    }
</style>
