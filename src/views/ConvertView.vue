<template>
  <v-container fluid>

    <v-stepper :items="['Step 1', 'Step 2', 'Step 3']" alt-labels>
      <template v-slot:item.1>
        <v-card title="Step One" flat>
          <v-file-input chips multiple variant="underlined" label="Select or drop Image here"></v-file-input>

        </v-card>
      </template>

      <template v-slot:item.2>
        <v-card title="Step Two" flat>...</v-card>
      </template>

      <template v-slot:item.3>
        <v-card title="Step Three" flat>...</v-card>
      </template>
    </v-stepper>



  </v-container>
</template>

<script>
import { ref } from 'vue'
import { useDisplay } from 'vuetify'
import { VStepper } from 'vuetify/labs/VStepper'

export default {
  name: 'HomeView',

  components: {
    VStepper,
  },

  setup() {

  },

  data() {
    const display = ref(useDisplay());

    return {
      display
    }
  },

}
</script>