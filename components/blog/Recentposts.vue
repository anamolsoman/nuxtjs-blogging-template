<template>
  <nuxt-link>
    <v-row>
      <v-col class="col-lg-4"> <v-img :src="thumbnailUrl" class="thumbnail-img"></v-img></v-col>
      <v-col class="col-lg-8"
        ><h3>{{ title }}</h3></v-col
      >
    </v-row>
  </nuxt-link>
</template>
<script>
export default {
  title: {
    type: String,
    required: true
  },
  thumbnailUrl: {
    type: String,
    required: true
  }
}
</script>
