<script>
    import { onMount } from 'svelte';

    let container;

    onMount(() => {
        if (container) {
            // Placeholder for animation logic (e.g., using canvas, SVG, or CSS animations)
            console.log("Date animation component mounted");
            // Example: simple CSS animation - can be expanded later
        }
    });
</script>

<div class="date-animation-container" bind:this={container}>
    <div class="date-graphic">
        <img src="/dates-full-icon.png" alt="Date" class="date-piece piece-1" />
        <img src="/dates-full-icon.png" alt="Date" class="date-piece piece-2" />
        <img src="/date-icon.png" alt="Date" class="date-piece piece-3" />
    </div>
</div>

<style>
    .date-animation-container {
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 2rem 0;
    }

    .date-graphic {
        width: 150px; /* Adjust size as needed */
        height: 100px; /* Adjust size as needed */
        position: relative;
    }

    .date-piece {
        position: absolute;
        width: auto; /* Adjust to image intrinsic width if needed */
        height: 30px; /* Initial height, adjust as needed */
        opacity: 0.8;
        animation: floatAnimation 2s infinite alternate; /* Example animation */
    }

    .date-piece.piece-1 {
        top: 0;
        left: 20px;
        animation-delay: 0s;
    }

    .date-piece.piece-2 {
        top: 30px;
        left: 60px;
        height: 40px; /* slightly larger */
        animation-delay: 0.5s;
    }

    .date-piece.piece-3 {
        top: 10px;
        left: 110px;
        height: 25px; /* slightly smaller */
        animation-delay: 1s;
    }

    .date-piece {
        border-radius: 0%; /* Remove border-radius for image */
    }

    .date-piece {
        background-color: transparent; /* Make background transparent for image */
    }

    @keyframes floatAnimation {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-10px);
        }
    }
</style>
