<template>
  <v-list>
    <v-list-item to="/">
      <v-list-item-action>
        <v-icon :title="'Home'">{{ icon.home }}</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        Home
      </v-list-item-content>
    </v-list-item>
    <v-list-item to="/blogs">
      <v-list-item-action>
        <v-icon :title="'Blogs'">{{ icon.about }}</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        Blogs
      </v-list-item-content>
    </v-list-item>
    <v-list-item to="/forum">
      <v-list-item-action>
        <v-icon :title="'Forum'">{{ icon.about }}</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        Forum
      </v-list-item-content>
    </v-list-item>
    <v-list-item to="/about">
      <v-list-item-action>
        <v-icon :title="'About'">{{ icon.about }}</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        About
      </v-list-item-content>
    </v-list-item>
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
        gallery: 'mdi-file-image',
        contact: 'mdi-contact-mail',
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
