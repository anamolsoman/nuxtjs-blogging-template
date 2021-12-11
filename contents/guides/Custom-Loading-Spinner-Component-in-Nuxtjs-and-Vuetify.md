---
title: Custom Loading Spinner Component in Nuxtjs and Vuetify
date: Feb 02,2020
link: 'guides/Custom-Loading-Spinner-Component-in-Nuxtjs-and-Vuetify'
thumbnail: 'https://miro.medium.com/max/1000/0*0lcAMwgZTTpQzaLk'
meta_description: 'VueJS props are the simplest way to share data between components. Props are custom attributes that we can give to a component'
description: 'Hello guys, In this blog I will show you how we can add our custom component for default loading. If you are reading this blog means you are bored with the default loading layout of Nuxt js so without wasting the time lets start customizing it.'
---

Hello guys, In this blog I will show you how we can add our custom component for default loading. If you are reading this blog means you are bored with the default loading layout of Nuxt js so without wasting the time lets start customizing it.

## Why loading component is important?

If we are developing the next based application and we deal with API's then we must need the loading because sometimes API takes time to respond and nothing is happening on the screen so it may confuse the user.

Nuxt js provide its default loading style which is like a bar loading on the top side of the application yes we can change the position and coloring but it's kind of boring and the worst part is when we are using it in PWA it's very difficult to see that loading bar it looks like browser loading.

That's why we are designing this custom loading component which really looks nice than a default

## Let's create a custom loading component

Firstly just create a component called loading.vue inside your components folder and paste the beloved code.

```javascript
<template lang="html">
  <v-overlay v-if="loading" :value="overlay">
    <v-progress-circular
      indeterminate
      size="64"
      color="primary"
    ></v-progress-circular>
  </v-overlay>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    overlay: false,
  }),
  methods: {
    start() {
      this.loading = true
      this.overlay = true
    },
    finish() {
      this.loading = false
      this.overlay = false
    },
    fail(error) {
      console.log(error)
    },
    increase(num) {
      // console.log(num)
    },
  },
}
</script>
```

Note one thing I am using vuetify for designing if you are using any different one then just replace that v-overlay tag with your loading style but won't forget to add that v-if and value.

You can add custom css also and change the design of loading style its simple

## Change in nuxt.config.js

Now we want to make a change in nuxt.config.js because we need a default loading we don't want to call it every time that why we are making a change in our main file which is nuxt.config.js

loading: ‘~/components/loading.vue’,

Just add the above line in your file and don't forget to remove the previous loading.

## Conclusion

That's it your loading component is ready to use. It gets called whenever your API response takes time and it indicates the user that they need to wait
So that's it guys hope you like the article if you have any queries regarding this or any suggestion please ping me in the comment section

Thank you
