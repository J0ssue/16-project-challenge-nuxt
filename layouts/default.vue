<template>
    <div class="default">
        <nav
            class="navbar flex"
            role="navigation"
            aria-label="main navigation"
        >

            <nuxt-link
                to="/"
                class="navbar-brand"
            >
                <img
                    class="default__juicee-logo"
                    src="~/assets/images/default/juicee-logo.svg"
                    alt="juicee logo"
                >
            </nuxt-link>
            <nuxt-link
                class="navbar-item"
                to="/single-price-grid"
            >Single Price Grid</nuxt-link>
        </nav>
        <div class="container mx-auto">
            <nuxt />
        </div>
    </div>
</template>
