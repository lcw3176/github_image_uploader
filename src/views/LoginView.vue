<template>
    <v-container fluid>
  
        Log in using github...
  
    </v-container>
  </template>
  
  <script>
 import { useAuthStore } from '../store/auth.js'

  export default {


    name: 'LoginView',
  
    components: {

    },
  
    setup() {
        const authStore = useAuthStore();

        authStore.moveToGithub();
    },
  
    data() {

    },
  
  }
  </script>

