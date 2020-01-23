<template>
  <v-container>
    <v-row>
      <v-col v-for="post in posts" :key="post.id" class="col-lg-12">
        <Postpreview :title="post.title" :previewText="post.previewText" :thumbnailUrl="post.thumbnailUrl" :id="post.Id" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Postpreview from '@/components/blog/PostPreview'
export default {
  components: {
    Postpreview
  },
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories', {
        version: 'draft',
        starts_with: 'blog/'
      })
      .then((res) => {
        return {
          posts: res.data.stories.map((bp) => {
            return {
              Id: bp.slug,
              title: bp.content.title,
              previewText: bp.content.previewText,
              thumbnailUrl: bp.content.thumbnailUrl
            }
          })
        }
      })
  }
}
</script>
