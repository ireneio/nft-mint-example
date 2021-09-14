<template>
  <v-app>
    <div>
      <v-card flat>
        <v-card-title>
          Error
        </v-card-title>
        <v-card-subtitle>Oops! Server Error...</v-card-subtitle>
        <v-card-text>
          <a href="/">Back to Home</a>
        </v-card-text>
      </v-card>
    </div>
  </v-app>
</template>
<script>
export default {
  layout: 'error',
}
</script>
<style lang="scss" scoped>
</style>
