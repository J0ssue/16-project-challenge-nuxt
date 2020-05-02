<template>
  <div
    class="bookmark-drawer flex flex-col justify-between px-6"
    :class="{
      'bookmark-drawer--active': drawerActive,
      'bookmark-drawer--inactive': !drawerActive
    }"
  >
    <header class="py-8 flex justify-between items-center">
      <div class="hover:cursor-pointer">
        <img
          src="/bookmark-landing/logo-bookmark-drawer.svg"
          alt="close icon"
        />
      </div>
      <button @click="toggleDrawer">
        <svg
          class="fill-current text-white hover:text-bookmark-soft-Red"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="15"
        >
          <path
            fill=""
            fill-rule="evenodd"
            d="M8 5.379L13.303.075l2.122 2.122L10.12 7.5l5.304 5.303-2.122 2.122L8 9.62l-5.303 5.304-2.122-2.122L5.88 7.5.575 2.197 2.697.075 8 5.38z"
          />
        </svg>
      </button>
    </header>

    <main class="flex flex-col flex-1 pt-10">
      <button
        class="uppercase"
        :class="{
          'bookmark-drawer--login border-2 border-white rounded-md mt-4 py-2 hover:text-bookmark-soft-Red hover:border-bookmark-soft-Red':
            btn === 'login',
          'bookmark-drawer__button hover:text-bookmark-soft-Red py-4':
            btn !== 'login'
        }"
        v-text="btn"
        v-for="(btn, i) in ['features', 'pricing', 'contact', 'login']"
        :key="i"
        @click="toggleDrawer(btn)"
      />
    </main>

    <footer class="flex justify-center pb-10">
      <button class="mr-8" @click="toggleDrawer">
        <svg
          class="fill-current text-white hover:text-bookmark-soft-Red hover:cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
        >
          <path
            fill=""
            fill-rule="evenodd"
            d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
          />
        </svg>
      </button>
      <button class="ml-8" @click="toggleDrawer">
        <svg
          class="fill-current text-white hover:text-bookmark-soft-Red hover:cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="20"
        >
          <path
            fill=""
            fill-rule="evenodd"
            d="M24 2.557a9.83 9.83 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337.608a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 1.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 17.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 2.557z"
          />
        </svg>
      </button>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    drawerActive: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggleDrawer(routeName) {
      if (routeName) {
        this.$emit('toggleDrawer', routeName)
      } else {
        this.$emit('toggleDrawer')
      }
    }
  }
}
</script>
