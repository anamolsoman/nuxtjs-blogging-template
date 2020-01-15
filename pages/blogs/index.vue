<template>
  <v-container>
    <v-layout>
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
    </v-layout>
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
        console.log(res)
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
  //   data() {
  //     return {
  //       posts: [
  //         {
  //           title: 'first Post',
  //           previewText: 'this is a first post',
  //           thumbnailUrl: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
  //           Id: 'new-post'
  //         },
  //         {
  //           title: 'Second Post',
  //           previewText: 'this is a Second post',
  //           thumbnailUrl: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
  //           Id: 'Second-post'
  //         },
  //         {
  //           title: 'Second Post',
  //           previewText: 'this is a Second post',
  //           thumbnailUrl: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
  //           Id: 'Second-post'
  //         },
  //         {
  //           title: 'Second Post',
  //           previewText: 'this is a Second post',
  //           thumbnailUrl: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
  //           Id: 'Second-post'
  //         },
  //         {
  //           title: 'Second Post',
  //           previewText: 'this is a Second post',
  //           thumbnailUrl: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
  //           Id: 'Second-post'
  //         },
  //         {
  //           title: 'Second Post',
  //           previewText: 'this is a Second post',
  //           thumbnailUrl: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
  //           Id: 'Second-post'
  //         }
  //       ]
  //     }
  //   }
}
</script>
