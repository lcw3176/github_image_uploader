<template>
  <v-container fluid>
    <v-card
    class="mx-auto"
  >
    <v-list>
      <v-list-subheader>My Repositories</v-list-subheader>

      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        color="success"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title v-text="item.text"></v-list-item-title>
      </v-list-item>
    </v-list>

    
    <template v-slot:actions>

      <v-spacer></v-spacer>

      <v-btn height="48"
      prepend-icon="mdi-plus-circle"
      variant="flat">

      <template v-slot:prepend>
        <v-icon color="success"></v-icon>
      </template>

        Add Repository
      </v-btn>

      

    </template>
  </v-card>
  </v-container>
</template>

<script>
import { ref } from 'vue'
import { useDisplay } from 'vuetify'
import { VStepper } from 'vuetify/labs/VStepper'
import { useAuthStore } from '../store/auth.js'

export default {
  name: 'HomeView',

  components: {
    VStepper,
  },

  setup() {
    const authStore = useAuthStore();
    
    if(authStore.accessToken === '' || authStore.accessToken === undefined){
      authStore.requestToken();
    }

  },

  data() {
    const display = ref(useDisplay());

    
    return {
      display,

      items: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' },
      ],
    }
  },

}
</script>