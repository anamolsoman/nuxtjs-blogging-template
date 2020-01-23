<template>
  <v-card class="col-lg-10 mx-auto">
    <nuxt-link :to="id" class="links">
      <v-row>
        <v-col class="col-lg-4"><v-img :src="thumbnailUrl" class="thumbnail-img"></v-img></v-col>
        <v-col class="col-lg-8"
          ><h1>{{ title }}</h1>
          <br />
          <p>{{ previewText }}</p></v-col
        >
      </v-row>
    </nuxt-link>
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
.links {
  text-decoration: none;
  color: black;
}
.thumbnail-img {
  border-radius: 5px;
}
</style>
