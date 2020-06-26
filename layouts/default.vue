<template>
  <v-app>
    <v-content>
      <v-navigation-drawer v-model="sidebar" app>
        <Navbar />
      </v-navigation-drawer>

      <v-app-bar app flat>
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
      </v-app-bar>

      <!-- <v-row class="justify-center"> -->
      <!-- <v-col class="col-md-6 col-lg-8 col-sm-8 "> -->
      <nuxt />
      <!-- </v-col> -->
      <!-- </v-row> -->
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from '~/components/Navbar'
import Footer from '~/components/Footer'
export default {
  data() {
    return {
      sidebar: false,
      overlay: false
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
