<template>
  <v-container>
    <v-row>
      <v-col v-for="post in posts" :key="post.id">
        <Postpreview
          :title="post.title"
          :previewText="post.previewText"
          :thumbnailUrl="post.thumbnailUrl"
          :id="post.Id"
          class="col-lg-3 col-md-4 col-sm-6 col-xs-12"
        />
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
