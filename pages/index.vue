<template>
  <div>
    <v-card flat>
      <v-card-title>index</v-card-title>
      <v-card-subtitle @click="$router.push('/pg')">
        <nuxt-link to="/pg">go to playground</nuxt-link>
      </v-card-subtitle>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { dataStore } from '~/store/index'

@Component({
  layout: 'default'
})
export default class Index extends Vue {
}
</script>
