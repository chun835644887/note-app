<template>
    <div id="note-area">
        <textarea v-on:input="editNote" v-bind:value="activeNoteValue"></textarea>
    </div>
</template>
<script>
    export default {
        computed:{
            activeNoteValue(){
                if(this.$store.getters.activeNote!=={}){
                    return this.$store.getters.activeNote.text
                }else{
                    return ""
                }
            }
        },
        methods:{
            editNote(event){
                console.log(event)
                this.$store.dispatch('editNote',event.target.value)
            }
        }
    }
</script>
<style lang="sass">
#note-area
    height: 100%
    width: 100%
    margin-left: 380px
    textarea
        width: 100%
        height: 100%
        outline: none
</style>