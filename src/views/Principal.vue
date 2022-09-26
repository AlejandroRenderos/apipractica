<template>
  <v-card>
    <v-toolbar
      flat
      color="primary"
      dark
    >
      <v-toolbar-title>Practica</v-toolbar-title>
    </v-toolbar>
    <v-tabs vertical>
      <v-tab>
        <v-icon left>
          mdi-account
        </v-icon>
        Option 1
      </v-tab>
      <v-tab>
        <v-icon left>
          mdi-lock
        </v-icon>
        Option 2
      </v-tab>
      <v-tab>
        <v-icon left>
          mdi-access-point
        </v-icon>
        Option 3
      </v-tab>

      <v-tab-item>
        <v-card flat>
          <Primera/>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <Segunda/>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
    
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>
<script>
import Primera from '@/components/primera.vue';
import Segunda from '@/components/segunda.vue';
export default {
    components: { Primera, Segunda }
}
</script>