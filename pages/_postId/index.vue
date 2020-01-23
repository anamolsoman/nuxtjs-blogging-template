<template>
  <v-container>
    <v-row justify="center">
      <div id="post" class="col-lg-8 ">
        <div>
          <v-img :src="image" class="post-thmubnail"></v-img>
        </div>
        <v-card>
          <div class="description">
            <h1>{{ title }}</h1>
            <hr />
            <div class="description"><p v-html="description"></p></div>
            <br />
            <v-img :src="post_image"></v-img>
          </div>
        </v-card>
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.previewText
        },
        {
          hid: 'title',
          name: 'title',
          content: this.title
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: this.title
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.previewText
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.previewText
        }
      ]
    }
  },
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories/blog/' + context.params.postId, {
        version: 'draft'
      })
      .then((res) => {
        console.log(res)
        return {
          image: res.data.story.content.thumbnailUrl,
          post_image: res.data.story.content.post_image,
          title: res.data.story.content.title,
          previewText: res.data.story.content.previewText,

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
  padding: 25px;
}
.background {
  color: red;
}
</style>
