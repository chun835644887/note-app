<template>
  <div id="app">
    <v-control></v-control>
    <v-nodelist></v-nodelist>
    <v-activenote></v-activenote>
  </div>
</template>

<script>
import Control from './components/Control.vue';
import NoteList from './components/Notelist.vue';
import ActiveNore from './components/ActiveNote.vue';

export default {
  components:{
    'v-control':Control,
    'v-nodelist':NoteList,
    'v-activenote':ActiveNore
  }
}
</script>
<style lang="sass">
html,#app
  height: 100%
body
  margin: 0
  padding: 0
  border: 0
  height: 100%
  max-height: 100%
  position: relative
</style>
