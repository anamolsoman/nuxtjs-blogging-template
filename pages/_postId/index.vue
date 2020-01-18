<template>
  <v-container>
    <v-row justify="center">
      <div id="post" class="col-lg-8 ">
        <div>
          <v-img :src="image" class="post-thmubnail"></v-img>
        </div>
        <v-card>
          <v-card-title>{{ title }}</v-card-title>
          <v-card-text>{{ content }}</v-card-text>
          <div class="description"><p v-html="description"></p></div>
          <div></div>
        </v-card>
      </div>
      <div class="col-lg-3">
        <v-card v-for="post in posts" :key="post.id"><Recentposts :title="post.title" :thumbnailUrl="post.thumbnailUrl"/></v-card>
      </div>
    </v-row>
  </v-container>
</template>
<script>
import Recentposts from '@/components/blog/Recentposts'
export default {
  components: {
    Recentposts
  },
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories/blog/' + context.params.postId, {
        version: 'draft'
      })
      .then((res) => {
        return {
          image: res.data.story.content.thumbnailUrl,
          title: res.data.story.content.title,
          content: res.data.story.content.previewText,
          description: context.app.$storyapi.richTextResolver.render(res.data.story.content.description)
        }
      })
  }
}
</script>
<style scoped>
.post-thmubnail {
  background-size: cover;
  height: 300px;
}
.description {
  margin: 20px;
}
</style>
