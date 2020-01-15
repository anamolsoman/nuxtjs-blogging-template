<template>
  <v-container>
    <v-row align="center" justify="center">
      <div id="post" class="col-lg-8 ">
        <div>
          <v-img :src="image" class="post-thmubnail"></v-img>
        </div>
        <v-card>
          <v-card-title>{{ title }}</v-card-title>
          <v-card-text>{{ content }}</v-card-text>
          <v-card-text>{{ description }}</v-card-text>
        </v-card>
      </div>
    </v-row>
  </v-container>
</template>
<script>
export default {
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
          description: res.data.story.content.description
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
</style>
