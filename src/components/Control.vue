<template>
    <div id="control">
        <span @click="addNote" class="glyphicon glyphicon-plus"></span>
        <span @click="toggleFavorite"class="glyphicon glyphicon-star" :class="{star:getActiveNote}"></span>
        <span @click="deleteNote" class="glyphicon glyphicon-remove"></span>
    </div>
</template>
<script>
    export default {
        computed:{
            getActiveNote(){
                return this.$store.getters.activeNote.favorite
            }
        },
        methods:{
            addNote(){
                this.$store.dispatch('addNote')
            },
            toggleFavorite(){
                this.$store.dispatch('toggleFavorite')
            },
            deleteNote(){
                this.$store.dispatch('deleteNote')
            }
        }
    }
</script>
<style lang="sass">
    #control
        float: left
        width: 80px
        padding: 35px 25px 25px 25px
        height: 100%
        background-color: #30414d
        color: #767676
        span
            font-size: 30px
            margin-bottom: 35px
            cursor: pointer
            opacity: 0.8
            transition: opacity 0.5 ease
        .star
            color: #f7ae4f
</style>