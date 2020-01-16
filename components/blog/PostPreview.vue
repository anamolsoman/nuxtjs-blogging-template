<template>
  <v-card max-width="500 " class=" mx-auto">
    <nuxt-link :to="id">
      <v-list-item>
        <v-list-item-avatar color="grey"> <v-img :src="require('@/assets/img/about.jpeg')"></v-img></v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline">{{ title }}</v-list-item-title>
          <v-list-item-subtitle>by Anamol Soman</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-img :src="thumbnailUrl" class="thumbnail-img"></v-img>
      <v-card-text>
        {{ previewText }}
      </v-card-text>
    </nuxt-link>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    previewText: {
      type: String,
      required: true
    },
    thumbnailUrl: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  }
}
</script>
<style scoped>
a {
  text-decoration: none;
  color: black;
}
.thumbnail-img {
  border-radius: 5px;
}
</style>
