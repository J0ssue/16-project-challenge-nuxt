<template>
    <div class="default">
        <nav
            class="navbar flex flex-col md:flex-row items-center px-12"
            role="navigation"
            aria-label="main navigation"
        >

            <nuxt-link
                to="/"
                class="navbar-brand mr-8 py-2"
            >
                <img
                    class="default__juicee-logo"
                    src="~/assets/images/default/juicee-logo.svg"
                    alt="juicee logo"
                >
            </nuxt-link>
            <nuxt-link
                class="navbar-item capitalize p-2 hover:bg-gray-200 transition-all duration-150 ease"
                to="/single-price-grid"
            >Single Price Grid</nuxt-link>|
            <nuxt-link
                class="navbar-item capitalize p-2 hover:bg-gray-200 transition-all duration-150 ease"
                to="/four-card-feature"
            >four card feature</nuxt-link> |
            <nuxt-link
                class="navbar-item capitalize p-2 hover:bg-gray-200 transition-all duration-150 ease"
                to="/huddle"
            >huddle</nuxt-link>
        </nav>
        <div class="container mx-auto">
            <nuxt />
        </div>
    </div>
</template>
