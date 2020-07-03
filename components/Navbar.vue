<template>
  <v-list>
    <v-list-item to="/">
      <v-list-item-action>
        <v-icon :title="'Home'">{{ icon.blog }}</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        Home
      </v-list-item-content>
    </v-list-item>

    <!-- <v-list-item >
      <v-list-item-action>
        <v-icon :title="'Forum'">{{ icon.forum }}</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        Forum
      </v-list-item-content>
    </v-list-item> -->
  </v-list>
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

<style scoped>
.links {
  text-decoration: none;
  color: white;
}
</style>
