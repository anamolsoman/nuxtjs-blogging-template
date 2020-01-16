<template>
  <v-container>
    <v-row align="center" justify="center">
      <div class="col-lg-8">
        <v-card class="about-block">
          <v-row>
            <v-col class="col-lg-6">
              <v-img :src="require('@/assets/img/about.jpeg')" class="about-img"></v-img>
            </v-col>
            <v-col class="col-lg-6">
              <div class="about-section">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-subtitle>
                      <b>HELLO EVERYBODY I AM</b>
                    </v-list-item-subtitle>
                    <v-list-item-title>
                      <h1>ANAMOL SOMAN</h1>
                    </v-list-item-title>

                    <v-list-item-subtitle>
                      <B>FULL STACK DEVELOPER</B>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-card-text>
                  We have already done that for you. Open the entry "Home" below to play aroundWe have already done that for you. Open the entry
                  "Home" below to play aroundWe have already done that for you. Open the entry "Home" below to play aroundWe have already done that
                  for you. Open the entry "Home" below to play aroundWe have already done that for you. Open the entry "Home" below to play aroundWe
                  have already done that for you. Open the entry "Home" below to play aroundWe have already done that for you. Open the entry "Home"
                  below to play around
                </v-card-text>

                <div class="about-list">
                  <v-list-item-content>
                    <v-list-item-title class="about-list-item">
                      <v-icon :title="'Home'" color="teal darken-1">{{ icon.birthdate }}</v-icon
                      >&nbsp;&nbsp;&nbsp;2nd March, 1998
                    </v-list-item-title>
                    <v-list-item-title class="about-list-item">
                      <v-icon :title="'Home'" color="teal darken-1">{{ icon.address }}</v-icon
                      >&nbsp;&nbsp;&nbsp;Manjri Greens, Pune
                    </v-list-item-title>
                    <v-list-item-title class="about-list-item">
                      <v-icon :title="'Home'" color="teal darken-1">{{ icon.mobile_no }}</v-icon
                      >&nbsp;&nbsp;&nbsp;+91 8806715199
                    </v-list-item-title>
                    <v-list-item-title class="about-list-item">
                      <v-icon :title="'Home'" color="teal darken-1">{{ icon.email }}</v-icon
                      >&nbsp;&nbsp;&nbsp;Anamolsoman2@gmail.com
                    </v-list-item-title>
                  </v-list-item-content>
                </div>
                <div class="icon-section">
                  <v-icon :title="'Home'" class="social-icons" color="blue">{{ icon.facebook }}</v-icon>
                  <v-icon :title="'Home'" class="social-icons" color="blue">{{ icon.twitter }}</v-icon>
                  <v-icon :title="'Home'" class="social-icons" color="red">{{ icon.google }}</v-icon>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </div>
    </v-row>
  </v-container>
</template>
<style scoped>
.about-img {
  margin: 15px;
}
.about-section {
  margin: 30px;
}
.about-block {
  background-color: #b2dfdb;
}
.social-icons {
  font-size: 50px;
  cursor: pointer;
}
.icon-section {
  margin-top: 50px;
  margin-left: 25%;
}
.about-list {
  margin-left: 20px;
}
.about-list-item {
  margin-top: 7px;
}
</style>
<script>
export default {
  data() {
    return {
      icon: {
        facebook: 'mdi-facebook-box',
        twitter: ' mdi-twitter',
        google: 'mdi-google-plus-box',
        birthdate: 'mdi-calendar',
        address: 'mdi-home',
        mobile_no: 'mdi-cellphone-iphone',
        email: ' mdi-gmail'
      }
    }
  }
}
</script>
