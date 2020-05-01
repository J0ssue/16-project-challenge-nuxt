<template>
  <section>
    <header>
      <HeaderTitle
        :title="availability.title"
        :description="availability.description"
      />
    </header>
    <main>
      <div>
        <div>
          <BrowserCard
            :img="browser.img"
            :title="browser.title"
            :version="browser.version"
            v-for="browser in availability.browsers"
            :key="browser.slug"
          />
        </div>
      </div>
    </main>
  </section>
</template>

<script>
import HeaderTitle from './BookmarkHeaderTitle'
import BrowserCard from './BookmarkBrowserCard'
export default {
  components: {
    HeaderTitle,
    BrowserCard
  },
  props: {
    availability: {
      type: Object,
      required: true
    }
  }
}
</script>
