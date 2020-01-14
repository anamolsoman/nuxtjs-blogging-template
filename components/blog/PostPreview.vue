<template>
  <v-card max-width="500" class="mb-12 mx-auto">
    <nuxt-link :to="id">
      <v-card-title>{{ title }}</v-card-title>
      <v-list-item>
        <v-list-item-avatar color="grey"></v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline">{{ title }}</v-list-item-title>
          <v-list-item-subtitle>by Anamol Soman</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-img :src="thumbnailUrl" height="194"></v-img>
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
      type: String
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
</style>
