<template>
  <v-app>
    <v-navigation-drawer v-model="sidebar" app>
      <Navbar />
    </v-navigation-drawer>
    <v-app-bar app color="teal darken-1">
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click="sidebar = !sidebar" />
      </span>
      <nuxt-link to="/" tag="span" style="cursor: pointer">
        <v-toolbar-title class="white--text">Vuejs Forum</v-toolbar-title>
      </nuxt-link>
      <v-spacer></v-spacer>
      <span class="hidden-sm-and-up">
        <v-avatar :tile="true" class="">
          <img :src="require('~/static/logo.png')" alt="logo" />
        </v-avatar>
      </span>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn to="blogs" text color="#FFFFFF">Blogs</v-btn>
        <v-btn to="forum" text color="#FFFFFF">Forum</v-btn>
        <v-btn to="about" text color="#FFFFFF">About</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '~/components/Navbar'
// import Appbar from '~/components/Appbar'
export default {
  components: {
    Navbar
  },
  data() {
    return {
      webtitle: 'Vuejs Forum',
      clipped: true,
      sidebar: false,
      fixed: true,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: { eng: 'Nuxt image gallery' }
    }
  }
}
</script>
