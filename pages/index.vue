<template>
  <div class="portfolio container livvic">
    <!-- <a
      class="portfolio--zaask"
      target="_blank"
      href="https://www.zaask.pt/user/jdiaz77711"
      ><img
        src="https://www.zaask.pt/widget?user=461367&widget=pro-since"
        alt=""
    /></a> -->
    <header class="portfolio__header relative md:mb-20">
      <div
        class="portfolio__header-img absolute top-0 left-0 w-full h-full"
      ></div>
      <div
        class="portfolio__intro p-16 livvic-bold tracking-wide bg-white absolute left-0 bottom-0"
      >
        <h1 class="mb-4 text-md md:text-2xl" v-html="portfolio.intro" />
        <button
          class="text-xs bg-black px-8 py-1 rounded-lg text-white livvic-semibold tracking-wide capitalize md:text-lg focus:outline-none"
          @click="toggleMenu"
        >
          see projects
        </button>
      </div>
      <div class="absolute right-0 bottom-0" v-html="portfolio.unsplashLink" />
    </header>
    <main>
      <section class="md:flex md:items-center">
        <div><img src="/josue.jpg" alt="josue's image" /></div>

        <div class="px-4 py-10 md:text-lg livvic-semibold md:p-20">
          <p v-html="portfolio.about" />
        </div>
      </section>

      <section class="py-10 px-20">
        <h2 class="text-center livvic-bold-italic text-3xl">
          Tools used to build this project include
        </h2>
        <div class="flex flex-wrap md:flex-row justify-center items-center">
          <div
            class="p-4 w-2/4 md:w-1/3 lg:flex-1"
            v-for="(tech, i) in portfolio.stack"
            :key="i"
          >
            <pill
              class="jobs-pill-tag cursor-default"
              :squared="true"
              :text="tech"
            />
          </div>
        </div>
      </section>
    </main>
    <footer
      class="bg-black text-white px-4 py-8 flex items-center justify-between md:px-10"
    >
      <div class="livvic-semibold uppercase text-sm">
        portfolio
      </div>
      <div class="flex items-center">
        <a class="mr-8" href="https://github.com/J0ssue" target="_blank">
          <img class="w-8 h-8" src="/logo-github.svg" alt="github logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/josue-diaz-67648a159/"
          target="_blank"
        >
          <img class="w-8 h-8" src="/logo-linkedin.svg" alt="linkedin logo" />
        </a>
      </div>
    </footer>
  </div>
</template>
<script>
import portfolio from '~/helpers/portfolio'
import Pill from '~/components/Pill'
export default {
  components: {
    Pill
  },
  data() {
    return {
      portfolio
    }
  },
  methods: {
    toggleMenu() {
      this.$store.dispatch('controls/togglePortfolioDrawer')
      this.removeScroll()
    },
    removeScroll() {
      document.body.style.overflow = 'hidden'
    }
  }
}
</script>
