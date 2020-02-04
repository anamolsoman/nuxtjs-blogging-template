<template>
  <div>
    <h1>{{ attributes.title }}</h1>
    <p>{{ attributes.date }}</p>
    <p v-html="html" class="content"></p>
  </div>
</template>

<script>
import Prism from '~/plugins/prism'

export default {
  async asyncData({ params, route }) {
    const guideName = params.slug
    const markdownContent = await import(`~/contents/guides/${guideName}.md`)
    return {
      attributes: markdownContent.attributes,
      html: markdownContent.html,
      currentUrl: route.path
    }
  },
  mounted() {
    Prism.highlightAll()
  },
  head() {
    return {
      title: this.attributes.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.previewText
        },
        {
          hid: 'title',
          name: 'title',
          content: this.attributes.title
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
  }
}
</script>
<style scoped>
.content >>> .paragraph {
  font-size: 20px;
  font-family: Lora, 'Times New Roman', serif;
}
.content >>> .language-javascript,
.content >>> .language-html {
  box-shadow: none;
}
.content >>> .crop-post-image {
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-height: 350px;
}
</style>
