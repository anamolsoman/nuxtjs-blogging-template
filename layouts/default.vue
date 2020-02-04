<template>
  <v-app>
    <v-content>
      <Navbar />
      <v-container>
        <v-row class="justify-center">
          <v-col class="col-md-8 col-lg-8 col-sm-8 ">
            <nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from '~/components/Navbar'
import Footer from '~/components/Footer'
export default {
  components: {
    Footer,
    Navbar
  }
}
</script>
