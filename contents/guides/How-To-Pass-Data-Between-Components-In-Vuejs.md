---
title: How To Pass Data Between Components In Vue.js
date: Feb 02,2020
link: 'guides/How-To-Pass-Data-Between-Components-In-Vuejs'
thumbnail: 'https://storage.googleapis.com/vue-mastery.appspot.com/flamelink/media/PWA%20-%20Getting%20Started.001.jpg?GoogleAccessId=firebase-adminsdk-jyioc%40vue-mastery.iam.gserviceaccount.com&Expires=16725225600&Signature=ixoheNHXKqzaaYQWl4ozaf2TjgsAGWH9YzJ1Ji%2FirqVe8cMrgcK9IocRzy0I9EVQ2niR9GGzOFi3pqEE%2FVGYvCXrrnKRBWKPeUosGqBfltr0lRwAYxbLwG1JY89qpklSK4pRfXdy%2F9sslphMho%2FZf63EOnMqGfQJT1aHvXQ5IF%2Bhrf%2FdGmy6ERywx94WL9EL8alIKpBrkwEn4aB0R14gg1qzbiy%2FhfDyGVjS8DBorcvpryk7TKyPNLJBLqXE5i2JbXIRhJaDv5B83DtRw8VtqY5YV2s6dhC4Z3xElUuBnmk52kuWXxa7b1b4NeWkGVzWbTg7SKjiROIlPFqjLi6cEg%3D%3D'
meta_description: 'VueJS props are the simplest way to share data between components. Props are custom attributes that we can give to a component'
description: 'VueJS props are the simplest way to share data between components. Props are custom attributes that we can give to a component. Then, in our template, we can give those attributes values and — BAM — we’re passing data from a parent to a child component!'
---

## Using Props To Share Data From Parent To Child

VueJS props are the simplest way to share data between components. Props are custom attributes that we can give to a component. Then, in our template, we can give those attributes values and — BAM — we’re passing data from a parent to a child component!

For example, let’s say we’re working on a user profile page and want to have a child component accept a username prop. We’ll need two components.

The child component accepting the prop, let’s call this AccountInfo.vue.
The parent component passing the prop, let’s call this ProfilePage.vue.
Inside AccountInfo.vue, we can declare the props it accepts using the props option. So, inside the component options, let’s make it look like the following.

```javascript
<template>
 <div id='account-info'>
   {{username}}
 </div>
</template>

<script>
export default {
 props: ['username']
}
</script>
```

Copy
Then, to actually pass the data from the parent (ProfilePage.vue), we pass it like a custom attribute.

```HTML
<account-info username='matt' />
```

Copy
Now if we load our page, we can see that our AccountInfo component properly renders the value passed in by its parent.

As when working with other VueJS directives, we can use v-bind to dynamically pass props. For example, let’s say we want to set the username prop to be equal to a variable. We can accomplish this by using shorthand for the v-bind directive (or just : for short). The code would look a little like this:

```javascript
<template>
 <div>
   <account-info :username="user.username" />
 </div>
</template>

<script>
import AccountInfo from "@/components/AccountInfo.vue";

export default {
 components: {
   AccountInfo
 },
 data() {
   return {
     user: {
       username: 'matt'
     }
   }
 }
}
</script>
```

Copy
This means that we can change our data and have any child props using that value will also update.

TIP: ALWAYS VERIFY YOUR PROPS
If you’re looking to write clearer Vue code, an important technique is to verify your props. In short, this means that you need to specify the requirements for your prop (i.e. type, format, and so on). If one of these requirements is not met (e.g. if the prop is passed an incorrect type), Vue will print out a warning.

Let’s say we want our username prop to only accept Strings. We would have to modify our props object to look like this:

```javascript
export default {
  props: {
    username: String
  }
}
```

Copy
Verifying props is essential when working in large-scale Vue apps or when designing plugins. It helps ensure that everyone is on the same page and use props the way that they were intended.

For a full list of the verifications we can include on props, I’d definitely recommend checking out the official documentation for an in-depth review.

TIP: FOLLOW PROP NAMING CONVENTIONS
According to the VueJS style guide, the best way to name your props is by using camelCase when declaring them in your script and kebab-case when referencing them in template code.

The reasoning behind this is actually quite simple. In Javascript, camelCase is the standard naming convention and in HTML, it’s kebab-case.

So, Vue recommends that we stick to the norms of each language. Thankfully, Vue is able to automatically convert between the two styles so there’s no additional setup for developers.

```javascript
<account-info :my-username="user.username" />
props: {
myUsername: String
}
```

```javascript
// BAD
<account-info :myUsername="user.username" />
props: {
"my-username": String
```
