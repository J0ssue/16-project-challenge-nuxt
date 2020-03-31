<template>
    <div class="default">
        <nav
            class="navbar flex flex-col md:flex-row items-center px-12"
            role="navigation"
            aria-label="main navigation"
        >
            <nuxt-link
                class="navbar-item capitalize p-2 hover:bg-gray-200 transition-all duration-150 ease"
                to="/single-price-grid"
            >Single Price Grid</nuxt-link><span class="hidden lg:inline-block">|</span>
            <nuxt-link
                class="navbar-item capitalize p-2 hover:bg-gray-200 transition-all duration-150 ease"
                to="/four-card-feature"
            >four card feature</nuxt-link> <span class="hidden lg:inline-block">|</span>
            <nuxt-link
                class="navbar-item capitalize p-2 hover:bg-gray-200 transition-all duration-150 ease"
                to="/huddle"
            >huddle</nuxt-link><span class="hidden lg:inline-block">|</span>
            <nuxt-link
                class="navbar-item capitalize p-2 hover:bg-gray-200 transition-all duration-150 ease"
                to="/base-apparel"
            >base apparel</nuxt-link><span class="hidden lg:inline-block">|</span>
            <nuxt-link
                class="navbar-item capitalize p-2 hover:bg-gray-200 transition-all duration-150 ease"
                to="/sign-up-form"
            >Sign up form</nuxt-link><span class="hidden lg:inline-block">|</span>
            <nuxt-link
                class="navbar-item capitalize p-2 hover:bg-gray-200 transition-all duration-150 ease"
                to="/monthly"
            >Monthly</nuxt-link><span class="hidden lg:inline-block">|</span>
        </nav>
        <div class="container mx-auto">
            <nuxt />
        </div>
    </div>
</template>
