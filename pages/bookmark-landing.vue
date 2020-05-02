<template>
  <div class="bookmark-landing rubik">
    <navbar />
    <Header :header="bookmark.header" />
    <features id="features" :features="bookmark.features" />
    <availability id="pricing" :availability="bookmark.availability" />
    <faqs :faqs="bookmark.faqs" />
    <cta id="contact" :cta="bookmark.cta" />
    <Footer :footer="bookmark.footer" />
  </div>
</template>

<script>
import bookmarkLandingData from '~/helpers/bookmark-landing-db'
import Navbar from '~/components/bookmark-landing/BookmarkNav'
import Header from '~/components/bookmark-landing/BookmarkHeader'
import Features from '~/components/bookmark-landing/BookmarkFeatures'
import Availability from '~/components/bookmark-landing/BookmarkAvailability'
import Faqs from '~/components/bookmark-landing/BookmarkFaqs'
import Cta from '~/components/bookmark-landing/BookmarkCta'
import Footer from '~/components/bookmark-landing/BookmarkFooter'
export default {
  head() {
    return {
      title: 'bookmark-landing-page',
      link: [
        {
          href:
            'https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;1,400;1,500&display=swap',
          rel: 'stylesheet'
        }
      ]
    }
  },
  components: {
    Navbar,
    Header,
    Features,
    Availability,
    Faqs,
    Cta,
    Footer
  },
  data() {
    return {
      bookmark: bookmarkLandingData
    }
  }
}
</script>
