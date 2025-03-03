<script lang="ts">
	import { page } from '$app/state';
	import github from '$lib/images/github.svg';
    import { base } from '$app/paths';

	const navItems = [
		{ path: `${base}/origins`, label: 'Origins' },
		{ path: `${base}/health`, label: 'Health' },
		{ path: `${base}/types`, label: 'Types' },
		{ path: `${base}/recipes`, label: 'Recipes' },
		{ path: `${base}/about`, label: 'About' },
	];

    let mobileMenuOpen = false;

    function toggleMobileMenu() {
        mobileMenuOpen = !mobileMenuOpen;
    }

    function closeMobileMenu() {
        mobileMenuOpen = false;
    }

    import { onMount } from 'svelte';

    onMount(() => {
        document.addEventListener('click', handleDocumentClick);
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    });

    function handleDocumentClick(event) {
        if (mobileMenuOpen) {
            const navElement = document.querySelector('nav'); // Select nav element directly
            if (navElement && !navElement.contains(event.target) && !document.querySelector('.mobile-menu-button').contains(event.target)) {
                closeMobileMenu();
            }
        }
    }
</script>

<header>
	<div class="corner logo-corner">
		<a href="{base}/">
            <img src="{base}/date-delight-logo.png" alt="Date Delights Logo" class="logo-image" />
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
			<li aria-current={page.url.pathname === `${base}/` ? 'page' : undefined}>
				<a href="{base}/">Home</a>
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
		<a href="https://github.com/khushman1/date-delights">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
        padding: 0 1rem;
	}

    .logo-corner {
        margin-left: 0;
    }

    .github-corner {
        margin-right: 0;
    }

	.corner {
		width: auto;
		height: auto;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		height: 100%;
		text-decoration: none;
	}

    .corner a .logo-image {
		width: 3em;
		height: 3em;
		object-fit: contain;
	}

	.logo-text {
		color: var(--color-theme-1);
		font-weight: bold;
		font-size: 1.5rem;
		margin-left: 0.25rem;
	}


	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

    .mobile-menu-button {
        display: none;
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        color: var(--color-text);
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
            flex-wrap: wrap;
            padding: 0.5rem 1rem;
            position: relative;
        }

        .logo-corner {
            flex: 1;
            margin-left: 0;
        }

        .mobile-menu-button {
            display: block;
        }

        nav {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: var(--color-bg-1);
            flex-direction: column;
            align-items: stretch;
            padding: 1rem 0;
            z-index: 10;
            clip-path: inset(0 0 100% 0);
            transition: clip-path 0.3s ease-out;
        }

        nav.mobile-menu-open {
            clip-path: inset(0 0 0 0);
        }


        nav svg {
            display: none;
        }

        nav ul {
            flex-direction: column;
            height: auto;
            align-items: flex-start;
            background: none;
        }

        nav li {
            height: auto;
            border-bottom: 1px solid var(--color-bg-2);
        }

        /* REMOVE ARROW INDICATOR */
        nav li[aria-current='page']::before {
            content: none; /* Hide the arrow */
        }

        /* HIGHLIGHT CURRENT PAGE BACKGROUND */
        nav li[aria-current='page'] a {
            background-color: var(--color-bg-2);
            color: var(--color-theme-1);
            border-radius: 0.5rem;
        }


        nav li:last-child {
            border-bottom: none;
        }


        nav a {
            padding: 0.75rem 1.5rem;
            font-size: 1rem;
            display: block;
        }

        .github-corner {
            margin-right: 0;
            margin-left: auto;
        }
    }

    /* Tablet Styles (Example - adjust breakpoint as needed) */
    @media (min-width: 768px) and (max-width: 1023px) {
        header {
            padding: 0.75rem 2rem;
        }
        .logo-text {
            font-size: 1.75rem;
        }
        nav a {
            padding: 0 0.75rem;
            font-size: 0.9rem;
        }
    }
</style>
