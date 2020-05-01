<template>
  <div>
    <BookmarkIllustrationComposition :img="img" />
    <BookmarkHeaderTitle :title="title" :description="description" />
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
    description: {
      type: String,
      default: 'TODO'
    }
  }
}
</script>
