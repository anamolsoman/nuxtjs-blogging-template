<template>
  <div>
    <b-navbar toggleable="md" class="navbar" type="dark" variant="dark">
      <b-container>
        <b-navbar-brand to="/" class="links">Vuejs Forum Blogs</b-navbar-brand>

        <!-- Put the toggle here after the brand -->
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav class="ml-auto" dark>
            <b-nav-item to="/" class="links">Blogs</b-nav-item>
            <b-nav-item to="forum" class="links">Forum</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Footer from "~/components/Footer";
export default {
  components: {
    Footer
  }
};
</script>
<style scoped>
.navbar {
  border-bottom: 1px solid #000;
}
.links {
  color: white;
}
</style>
