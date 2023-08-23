<template>
  <v-layout>

    <v-app-bar elevation="3" v-if="display.mdAndUp">

      <v-row>
        <v-col cols="2">

        </v-col>

        <v-col>
          <v-btn class="font-weight-black font-weight-bold text-h5" variant="plain" size="large" to="/">

            {{ appTitle }}

          </v-btn>

        </v-col>

        <v-col class="text-right">
          <v-btn v-for="item in desktop" :key="item.title" variant="plain" size="large" :to="item.path">

            {{ item.title }}

          </v-btn>
        </v-col>

        <v-col cols="2">

        </v-col>
      </v-row>

    </v-app-bar>



    <v-bottom-navigation v-else grow>
      <v-btn v-for="item in mobile" :key="item.title" color="teal" :to="item.path">
        <v-icon>{{ item.icon }}</v-icon>
        {{ item.title }}
      </v-btn>
    </v-bottom-navigation>



    <v-main>
      <v-row v-if="display.mdAndUp">
        <v-col cols="2">

        </v-col>

        <v-col>
          <router-view></router-view>
        </v-col>


        <v-col cols="2">

        </v-col>
      </v-row>


      <v-row v-else>
        <v-col cols="1">

        </v-col>

        <v-col>
          <router-view></router-view>
        </v-col>


        <v-col cols="1">

        </v-col>
      </v-row>
    </v-main>

  </v-layout>
</template>



<script>

import { useDisplay } from 'vuetify'
import { ref } from 'vue'


export default {
  components: {

  },

  data() {
    const display = ref(useDisplay())

    return {
      appTitle: "URL Printer",
      sidebar: false,
      desktop: [
        // { title: "사용법", path: "/report" },
        { title: "Convert", path: "/auth/convert" },
        { title: "Log in", path: "/login" },
      ],


      mobile: [
        { title: "Home", path: "/", icon: "mdi-home-outline" },
        { title: "Convert", path: "/convert" , icon: "mdi-cog-outline"},
        // { title: "사용법", path: "/report", icon: "mdi-bullhorn-outline" },
        { title: "Log in", path: "/login", icon: "mdi-login" },

      ],
      display
    };
  },
}
</script>