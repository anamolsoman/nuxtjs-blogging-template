<template>
  <div class="main">
    <b-container fluid class="bv-example-row">
      <b-row align-h="center">
        <b-col class="col-lg-6 col-sm-10 ">
          <div>
            <article
              v-for="(guide, index) in guides"
              :key="index"
              class="single-post"
            >
              <div>
                <small>{{ guide.attributes.date }}</small>
                <h3>
                  <nuxt-link
                    class="links"
                    :to="guide.attributes.link"
                    style="box-shadow: none;"
                    >{{ guide.attributes.title }}</nuxt-link
                  >
                </h3>
                <p>{{ guide.attributes.description }}</p>
              </div>
            </article>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import guides from "~/contents/guides/guides.js";

export default {
  async asyncData({ route }) {
    const promises = guides.map(guide =>
      import(`~/contents/guides/${guide}.md`)
    );
    return { guides: await Promise.all(promises) };
  },
  head() {
    return {
      title: "All posts | Nuxt.js PWA survival store"
    };
  }
};
</script>
<style scoped>
.links {
  text-decoration: none;
  color: #343a40;
  font-weight: 800;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.links:hover {
  color: #0085a1;
}
.single-post {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 15px;
  margin-top: 20px;
}
</style>
