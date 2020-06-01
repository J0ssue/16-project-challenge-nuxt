<template>
  <div
    class="border-b"
    :class="{
      'pb-8': activeSlug === slug
    }"
  >
    <button
      class="w-full flex justify-between items-center py-8 focus:outline-none hover:text-bookmark-soft-Red"
      @click="toggleDropdown"
    >
      <h4
        class="rubik bookmark-title-description font-semibold"
        v-text="title"
      />
      <svg
        class="transform transition duration-300 ease-in-out"
        :class="{
          'stroke-current fill-current text-bookmark-soft-blue':
            activeSlug !== slug,
          'stroke-current fill-current text-bookmark-soft-Red':
            activeSlug === slug,
          'rotate-180': activeSlug === slug
        }"
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="12"
      >
        <path fill="none" stroke="" stroke-width="3" d="M1 1l8 8 8-8" />
      </svg>
    </button>
    <div
      class="transition duration-300 ease-in-out"
      :class="{
        'opacity-0 pointer-events-none h-0': activeSlug !== slug,
        'opacity-1 pointer-events-auto h-full': activeSlug === slug
      }"
    >
      <p
        class="text-bookmark-grayish-blue bookmark-title-description leading-relaxed"
        v-text="description"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activeSlug: {
      type: String
    },
    slug: {
      type: String
    },
    title: {
      type: String,
      default: 'TODO'
    },
    description: {
      type: String,
      default: 'TODO'
    }
  },
  methods: {
    toggleDropdown() {
      this.$emit('toggleDropdown', this.slug)
    }
  }
}
</script>
