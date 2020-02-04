<template>
  <v-app-bar fixed app flat dense dark>
    <nuxt-link to="/">
      <v-toolbar-title>Vue Js forum</v-toolbar-title>
    </nuxt-link>
    <v-spacer />
    <v-toolbar-items class=" ml-0 hidden-sm-and-down">
      <v-btn to="/" text>Blogs</v-btn>
      <v-btn to="/forum" text>Forum</v-btn>
      <v-btn to="/about" text>About</v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      icon: {
        home: 'mdi-apps',
        about: 'mdi-information-variant',
        forum: ' mdi-forum',
        blog: 'mdi-blogger',
        language: 'mdi-translate'
      },
      title: 'Shrividya',
      miniVariant: false,
      right: true,
      rightDrawer: false
    }
  }
}
</script>
