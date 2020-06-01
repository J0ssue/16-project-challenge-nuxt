<template>
  <div class="bkfeature-card lg:flex lg:justify-between">
    <BookmarkIllustrationComposition
      class="mb-12 lg:flex-1 lg:pl-16"
      :class="{
        'mb-20': topOffset === 0
      }"
      :img="img"
      position="left"
      :topOffset="!!(topOffset === 1) || !!(topOffset === 2)"
      :resize="true"
    />
    <div>
      <BookmarkHeaderTitle
        class="px-6"
        :title="title"
        :description="description"
        :descriptionSm="true"
      />
      <button
        class="hidden bg-bookmark-soft-blue px-5 py-3 text-white rounded-md mt-10 lg:block border-2 border-bookmark-soft-blue hover:bg-white hover:text-bookmark-soft-blue transition duration-300 ease-in-out"
        v-text="'more info'"
      />
    </div>
  </div>
</template>

<script>
import BookmarkIllustrationComposition from './BookmarkIllustrationComposition'
import BookmarkHeaderTitle from './BookmarkHeaderTitle'
export default {
  components: {
    BookmarkIllustrationComposition,
    BookmarkHeaderTitle
  },
  props: {
    img: {
      type: String,
      default: 'todo'
    },
    title: {
      type: String,
      default: 'TODO'
    },
    topOffset: {
      type: Number
    },
    description: {
      type: String,
      default: 'TODO'
    }
  }
}
</script>
