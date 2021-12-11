<template>
  <v-app>
    <v-content>
      <!-- <v-app-bar app flat>
        <span class="hidden-sm-and-up">
          <v-app-bar-nav-icon @click="sidebar = !sidebar" />
        </span>
        <v-spacer></v-spacer>
        <nuxt-link to="/" tag="span" style="cursor: pointer">
          <v-toolbar-title><v-img :src="require('~/assets/img/logo.png')" height="50" width="250" /> </v-toolbar-title>
        </nuxt-link>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-xs-only">
          <v-btn to="/" text>Blogs</v-btn>
          <v-btn href="http://vuejsforum.com/" text>Forum</v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <span class="hidden-sm-and-up">
          <v-avatar :tile="true" class="">
            <v-img :src="require('~/static/logo.png')" alt="logo" height="35px" />
          </v-avatar>
        </span>
      </v-app-bar> -->
      <v-app-bar color="#082a4e" height="70px" dark>
        <v-app-bar-nav-icon @click="drawer = true" class="hidden-md-and-up"></v-app-bar-nav-icon>
        <v-toolbar-title class="website-title">Vue Blogs</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
          <v-btn to="/" text>Blogs</v-btn>
          <v-btn href="https://github.com/anamolsoman" text>About Me</v-btn>
        </v-toolbar-items>
      </v-app-bar>
      <v-layout justify-center class="blog-listing-background">
        <v-flex md10 lg10 sm12>
          <!-- <v-app-bar color="teal lighten-3">
            <v-toolbar-title>Title</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-app-bar> -->
          <!-- <v-app-bar color="white" dark rounded="">
            <v-app-bar-nav-icon @click="drawer = true" class="hidden-md-and-up"></v-app-bar-nav-icon>
            <v-toolbar-title>Vue Blogs</v-toolbar-title>
          </v-app-bar> -->

          <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-list nav dense>
              <v-list-item-group v-model="group" active-class="primary--text text--accent-4">
                <v-list-item to="/">
                  <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Home</v-list-item-title>
                </v-list-item>

                <v-list-item href="https://github.com/anamolsoman">
                  <v-list-item-icon>
                    <v-icon>mdi-account</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>About Me</v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-navigation-drawer>
          <nuxt
        /></v-flex>
      </v-layout>
    </v-content>
    <!-- <Footer /> -->
  </v-app>
</template>

<script>
import Navbar from '~/components/Navbar'
import Footer from '~/components/Footer'
export default {
  data() {
    return {
      sidebar: false,
      overlay: false,
      drawer: false,
      group: null
    }
  },
  watch: {
    overlay(val) {
      val &&
        setTimeout(() => {
          this.overlay = false
        }, 3000)
    }
  },
  components: {
    Footer,
    Navbar
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Karla:wght@300;400&family=Source+Sans+3:wght@300;400&display=swap');
.blog-listing-background {
  background-color: #f0f2f5;
}
.blog-background {
  background-color: white;
}
.website-title {
  font-size: 26px;
}
*,
body {
  font-family: 'Karla', sans-serif;
}
p {
  font-size: 21px;
}
@media only screen and (max-width: 600px) {
  .website-title {
    font-size: 22px;
  }
}
</style>
