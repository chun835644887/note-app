<template>
    <div id="node-list">
        <h2>NOTES</h2>
        <div class="btn-gorup"  role="group">
            <div class="btn-group" :class="{active:activeAll}" @click="all">
                <button class="btn btn-default all" role="group">All Notes</button>
            </div>
            <div class="btn-group" :class="{active:activeFavorite}" @click="favorite">
                <button class="btn btn-default favorite"  role="group">Favorite Notes</button>
            </div>
        </div>
        <div class="notes">
            <span class="note-box" v-for="(note,index) in notes" 
            :note="note" @click="changeActive(index)" :class="{active:note===activeNote}">
                <h4 class="note-header">{{note.text}}</h4>
            </span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            activeAll:true,
            activeFavorite:false,
            activeNoteIndex:0     
        }
    },
    methods:{
        all(){
            this.activeAll = true;
            this.activeFavorite = false;
            // this.activeNoteIndex = 0;
        },
        favorite(){
            this.activeAll = false;
            this.activeFavorite = true;
            // this.activeNoteIndex = 0;
        },
        changeActive(note){
            this.$store.dispatch('activeNote',note);
        }
    },
    computed:{
        notes(){
            if(this.activeAll){
                return this.$store.getters.notes
            }else{
                return this.$store.getters.notes.filter(note => note.favorite)
            }
        },
        activeNote(){
            return this.$store.getters.activeNote
        }
    }
}
</script>
<style lang="sass">
    #node-list
        height: 100%
        float: left
        width: 300px
        background-color: #f0f0f0
        h2
            text-align: center
        .btn-gorup
            width: 100%
            padding: 20px 0 30px 0
            text-align: center
            font-size: 0
            .btn-group
                width: 120px
                margin-left: 0
                button
                    width: 100%
                    outline: none
                .all
                    border-top-right-radius: 0
                    border-bottom-right-radius: 0
                .favorite
                    border-top-left-radius: 0
                    border-bottom-left-radius: 0
            .active
                button
                    background-color: #e6e6e6
                    border-color: #adadad
        .notes
            .note-box
                display: block
                width: 100%
                margin-bottom: -1px
                cursor: pointer
                height: 48px
                line-height: 24px
                padding: 12px 6px
                border: 1px solid #ddd
                background-color: #ffffff
                .note-header
                    margin: 0
                    width: 100%
                    white-space: nowrap
                    overflow: hidden
                    text-overflow: ellipsis
                &:last-child
                    border-bottom-left-radius: 4px
                    border-bottom-right-radius: 4px
                &:first-child
                    border-top-left-radius: 4px
                    border-top-right-radius: 4px
            .active
                background-color: #007ACC
</style>