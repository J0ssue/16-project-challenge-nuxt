<template>
  <header
    class="bookmark-landing__header mb-32 lg:flex lg:flex-row-reverse lg:justify-between"
  >
    <div class="mb-12">
      <IllustrationComposition :img="header.hero_img" :resize="false" />
    </div>
    <div class="px-6 lg:pl-16">
      <HeaderTitle
        :titleBig="true"
        :title="header.title"
        :description="header.description"
      />
      <div class="mt-8 flex justify-center lg:justify-start">
        <button
          class="bookmark-btn-blue-sm mr-2 rubik-bold border-2 border-bookmark-soft-blue hover:bg-white hover:text-bookmark-soft-blue transition duration-300 ease-in-out"
          v-text="'Get it on Chrome'"
        />
        <button
          class="bookmark-btn-sm ml-2 rubik-bold border-2 border-transparent hover:border-bookmark-grayish-blue"
          v-text="'Get it on Firefox'"
        />
      </div>
    </div>
  </header>
</template>

<script>
import IllustrationComposition from './BookmarkIllustrationComposition'
import HeaderTitle from './BookmarkHeaderTitle'
export default {
  components: {
    IllustrationComposition,
    HeaderTitle
  },
  props: {
    header: {
      type: Object
    }
  }
}
</script>
