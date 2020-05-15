<template>
  <div
    class="dine-booking flex flex-col pb-20 pt-16 px-10 xl:px-32 xl:flex-row xl:flex-wrap xl:justify-between"
  >
    <nuxt-link to="/dine" class="block xl:mb-20 xl:w-full">
      <img class="mx-auto md:ml-0" src="/dine/logo.svg" alt="dine logo" />
    </nuxt-link>
    <header class="dine-booking__hero text-center xl:text-left">
      <div class="mt-16 mb-20 text-white xl:mt-0">
        <h1 class="mb-6 dine-h1" v-text="booking.title" />
        <p class="mb-8 dine-body mx-auto" v-text="booking.description" />
        <a
          class="py-5 px-12 inline-block border border-white uppercase md:hidden"
          href="#booking-form"
          v-text="'reserve place'"
        />
      </div>
    </header>
    <main class="dine-booking__main">
      <section>
        <dine-form />
      </section>
    </main>
    <img
      class="dine-booking__pattern pointer-events-none absolute bottom-0 left-0 hidden xl:inline-block"
      src="/dine/patterns/pattern-curve-bottom-right.svg"
      alt="pattern"
    />
  </div>
</template>

<script>
import DineForm from '@/components/dine/DineForm'
import dineDb from '@/helpers/dine-db'
export default {
  name: 'DineBooking',
  head: {
    title: 'Dine-Booking'
  },
  layout: 'dine',
  components: {
    DineForm
  },
  data() {
    return {
      booking: dineDb.booking
    }
  }
}
</script>
