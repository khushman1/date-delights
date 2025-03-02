<script>
    import { onMount, onDestroy } from 'svelte';

    export let images = [];
    let currentImageIndex = 0;
    let intervalId;

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    }

    onMount(() => {
        intervalId = setInterval(nextImage, 7000); // Change image every 7 seconds
    });

    onDestroy(() => {
        clearInterval(intervalId); // Clear interval when component unmounts
    });
</script>

<div class="image-carousel hero-carousel">
    <button class="carousel-button prev" on:click={prevImage}>&lt;</button>
    <img src={images[currentImageIndex]} alt="Date Carousel Image" class="carousel-image" />
    <button class="carousel-button next" on:click={nextImage}>&gt;</button>
</div>

<style>
    .image-carousel {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1rem; /* Adjust margin as needed */
        width: 80%; /* Reduced width of the carousel container */
        max-width: 45rem; /* Reduced max-width to ensure arrows are visible and center */
        margin-left: auto; /* Added to center carousel */
        margin-right: auto; /* Added to center carousel */
    }

    .carousel-image {
        width: 100%; /* Make image take full width of carousel container */
        height: 400px; /* ADDED: fixed height for carousel images */
        object-fit: cover; /* ADDED: cover to maintain aspect ratio and fill space */
        border-radius: 0.5rem;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .carousel-button {
        background: none;
        border: none;
        font-size: 2rem;
        color: var(--color-theme-1);
        cursor: pointer;
        padding: 0.5rem;
    }

    .carousel-button:hover {
        color: var(--color-theme-2);
    }

    .carousel-button.prev {
        margin-right: 1rem;
    }

    .carousel-button.next {
        margin-left: 1rem;
    }

    @media (max-width: 768px) {
        .image-carousel {
            display: none !important;
        }
    }
</style>
