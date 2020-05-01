<template>
  <div>
    <BookmarkIllustrationComposition
      class="mb-12"
      :class="{
        'mb-20': topOffset === 0
      }"
      :img="img"
      position="left"
      :topOffset="!!(topOffset === 1) || !!(topOffset === 2)"
      :resize="true"
    />
    <BookmarkHeaderTitle
      class="px-6"
      :title="title"
      :description="description"
      :descriptionSm="true"
    />
    <button v-text="'more info'" v-if="false" />
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
