<script lang="ts">
	import { page } from '$app/state';
	import github from '$lib/images/github.svg'; // Keep github icon for now, or replace

	const navItems = [
		{ path: '/health', label: 'Health' },
		{ path: '/origins', label: 'Origins' },
		{ path: '/types', label: 'Types' },
		{ path: '/recipes', label: 'Recipes' },
		{ path: '/about', label: 'About' }, // Keep about page in nav for now
	];

    let mobileMenuOpen = false;

    function toggleMobileMenu() {
        mobileMenuOpen = !mobileMenuOpen;
    }
</script>

<header>
	<div class="corner logo-corner">
		<a href="/">
            <img src="/date-delight-logo.png" alt="Date Delights Logo" class="logo-image" />
			<!-- <span class="logo-text">Date Delight</span> -->
		</a>
	</div>

    <button class="mobile-menu-button" aria-label="Toggle navigation" on:click={toggleMobileMenu}>
        <svg viewBox="0 0 32 32" aria-hidden="true">
            <rect x="2" y="6" width="28" height="2" fill="currentColor" />
            <rect x="2" y="16" width="28" height="2" fill="currentColor" />
            <rect x="2" y="26" width="28" height="2" fill="currentColor" />
        </svg>
    </button>

	<nav class:mobile-menu-open={mobileMenuOpen}>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			{#each navItems as item}
				<li aria-current={page.url.pathname.startsWith(item.path) ? 'page' : undefined}>
					<a href={item.path}>{item.label}</a>
				</li>
			{/each}
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner github-corner">
		<a href="https://github.com/sveltejs/kit">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center; /* Vertically align items in header */
        padding: 0 1rem;
	}

    .logo-corner {
        margin-left: 0; /* Reset margin for logo corner */
    }

    .github-corner {
        margin-right: 0; /* Reset margin for github corner */
    }

	.corner {
		width: auto; /* Adjust width to content */
		height: auto; /* Adjust height to content */
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: flex-start; /* Align logo/text to the start */
		height: 100%;
		text-decoration: none; /* Remove underline from logo link */
	}

    .corner a .logo-image { /* Increased specificity here */
		width: 3em; /* Adjust size as needed */
		height: 3em;
		object-fit: contain;
	}

	.logo-text {
		color: var(--color-theme-1); /* Theme color for logo text */
		font-weight: bold;
		font-size: 1.5rem; /* Adjust size as needed */
		margin-left: 0.25rem; /* Spacing between image and text if you use image logo */
	}


	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

    .mobile-menu-button {
        display: none; /* Hide by default on larger screens */
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        color: var(--color-text); /* Match text color */
    }

    .mobile-menu-button svg {
        width: 2rem;
        height: 2rem;
    }


	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}

    /* Mobile Styles */
    @media (max-width: 767px) { /* Mobile devices */
        header {
            flex-wrap: wrap; /* Allow header items to wrap on smaller screens */
            padding: 0.5rem 1rem;
        }

        .logo-corner {
            flex: 1; /* Allow logo to take up available space */
            margin-left: 0;
        }

        .mobile-menu-button {
            display: block; /* Show menu button on mobile */
        }

        nav {
            position: absolute;
            top: 100%; /* Position nav below header */
            left: 0;
            width: 100%;
            background-color: var(--color-bg-1); /* Match header background */
            flex-direction: column;
            align-items: stretch;
            padding: 1rem 0;
            z-index: 10; /* Ensure it's above other content */
            clip-path: inset(0 0 100% 0); /* Hide nav menu initially */
            transition: clip-path 0.3s ease-out;
        }

        nav.mobile-menu-open {
            clip-path: inset(0 0 0 0); /* Show nav menu when open */
        }


        nav svg {
            display: none; /* Hide svg separators in mobile nav */
        }

        nav ul {
            flex-direction: column;
            height: auto; /* Adjust height for mobile menu */
            align-items: flex-start; /* Align menu items to the start */
            background: none; /* Remove background from ul in mobile nav */
        }

        nav li {
            height: auto; /* Adjust li height for mobile menu */
            border-bottom: 1px solid var(--color-bg-2); /* Add separator between menu items */
        }

        nav li:last-child {
            border-bottom: none; /* Remove border from last item */
        }


        nav a {
            padding: 0.75rem 1.5rem; /* Increase padding for mobile menu links */
            font-size: 1rem; /* Adjust font size for mobile menu links */
            display: block; /* Make links full width for easier tapping */
        }

        .github-corner {
            margin-right: 0;
            margin-left: auto; /* Push github icon to the right */
        }
    }

    /* Tablet Styles (Example - adjust breakpoint as needed) */
    @media (min-width: 768px) and (max-width: 1023px) {
        header {
            padding: 0.75rem 2rem; /* Slightly larger padding for tablet */
        }
        .logo-text {
            font-size: 1.75rem; /* Slightly larger logo text for tablet */
        }
        nav a {
            padding: 0 0.75rem; /* Slightly larger nav link padding for tablet */
            font-size: 0.9rem;
        }
    }
</style>
