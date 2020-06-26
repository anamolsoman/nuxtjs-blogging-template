<template>
  <div class="main">
    <!-- <v-row>
      <v-card v-for="(guide, index) in guides" :key="index" class="single-post col-md-6" flat hover>
        <article>
          <v-img :src="guide.attributes.thumbnail"></v-img>
          <div>
            <small>{{ guide.attributes.date }}</small>
            <h2>
              <nuxt-link class="links" :to="guide.attributes.link" style="box-shadow: none;">{{ guide.attributes.title }}</nuxt-link>
            </h2>
            <p>{{ guide.attributes.description }}</p>
          </div>
        </article>
      </v-card></v-row
    > -->
    <v-container grid-list-xl>
      <v-layout justify-center wrap>
        <v-flex xs12 md12>
          <v-container py-0>
            <v-layout wrap>
              <v-flex xs12 sm6 md4 v-for="(guide, index) in guides" :key="index">
                <v-card flat hover class="single-post ">
                  <article>
                    <v-img :src="guide.attributes.thumbnail"></v-img>
                    <div>
                      <small>{{ guide.attributes.date }}</small>
                      <h2>
                        <nuxt-link class="links" :to="guide.attributes.link" style="box-shadow: none;">{{ guide.attributes.title }}</nuxt-link>
                      </h2>
                      <p>{{ guide.attributes.description }}</p>
                    </div>
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
  },
  head() {
    return {
      title: 'Vuejs Forum',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Vuejsforum.com is question and answer forum for vuejs developers'
        },
        {
          hid: 'title',
          name: 'title',
          content: 'Vuejs Forum'
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'Vuejs Forum'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Vuejs Forum'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Vuejsforum.com is question and answer forum for vuejs developers'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Vuejs Forum'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Vuejsforum.com is question and answer forum for vuejs developers'
        }
      ]
    }
  }
}
</script>
<style scoped>
.links {
  text-decoration: none;
  color: black;
  font-weight: 800;
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
