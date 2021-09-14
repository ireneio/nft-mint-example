<template>
  <v-app>
    <nuxt />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'
import { $axios } from '~/utils/api'
import { dataStore } from '~/store/index'

@Component({
})
export default class Default extends Vue {
}
</script>
