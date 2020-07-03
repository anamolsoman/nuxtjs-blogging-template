<template>
  <div class="main">
    <v-container grid-list-xl>
      <v-layout justify-center wrap>
        <v-flex xs12 md12>
          <v-container py-0>
            <v-layout wrap>
              <v-flex xs12 sm6 md4 v-for="(guide, index) in guides" :key="index">
                <v-card flat hover class="single-post">
                  <article>
                    <nuxt-link class="links text-justify" :to="guide.attributes.link">
                      <v-img :src="guide.attributes.thumbnail"></v-img>
                      <div>
                        <small>{{ guide.attributes.date }}</small>
                        <h2>{{ guide.attributes.title }}</h2>
                        <p class="text-justify">{{ guide.attributes.description }}</p>
                      </div>
                    </nuxt-link>
                  </article>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import guides from '~/contents/guides/guides.js'

export default {
  async asyncData({ route }) {
    const promises = guides.map((guide) => import(`~/contents/guides/${guide}.md`))
    return { guides: await Promise.all(promises) }
  }
}
</script>
<style scoped>
.links {
  text-decoration: none;
  color: black;
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
.links:hover {
  color: #34495e;
}
.single-post {
  padding: 15px;
  margin-top: 20px;
}
</style>
