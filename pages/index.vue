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
        <v-flex xs12 md10 lg10>
          <div class="py-5"></div>
          <v-container py-0>
            <v-layout wrap>
              <v-flex xs12 sm6 md6 lg6 v-for="(guide, index) in guides" :key="index" pa-md-4 mt-4>
                <!-- <v-card rounded="" class="single-post pa-0">
                  <article>
                    <nuxt-link class="links" :to="guide.attributes.link" style="box-shadow: none;">
                      <v-card-title class="pa-0"> <v-img :src="guide.attributes.thumbnail"></v-img> </v-card-title
                    ></nuxt-link>

                    <div>
                      <v-card-subtitle>{{ guide.attributes.date }}</v-card-subtitle>
                      <v-card-title> {{ guide.attributes.title }}</v-card-title>
                      <p>{{ guide.attributes.description }}</p>
                    </div>
                  </article>
                </v-card> -->
                <nuxt-link class="links" :to="guide.attributes.link" style="box-shadow: none;">
                  <v-hover v-slot="{ hover }">
                    <v-card :elevation="hover ? 12 : 2" class="mx-auto post rounded-lg" max-height="550" :max-width="600">
                      <v-card-title class="pa-0">
                        <v-img :src="guide.attributes.thumbnail" class="rounded-img"></v-img>
                      </v-card-title>
                      <v-card-title class="">
                        <v-layout wrap>
                          <v-flex md9 lg9 xs12
                            ><h4>{{ guide.attributes.title }}</h4></v-flex
                          >
                          <v-flex md3 lg3 xs12> <v-btn :class="hover ? 'primary white--text' : ''" outlined>Read More</v-btn> </v-flex></v-layout
                        >
                      </v-card-title>
                    </v-card>
                  </v-hover>
                </nuxt-link>
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
.post {
  overflow: hidden;
}
</style>
