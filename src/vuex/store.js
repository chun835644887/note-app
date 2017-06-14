import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    /**
     * note:所有的note的数组
     * activenode：被选中的node
     * 
     */
    notes:[],
    activeNote:{}
}
const mutations = {
    /**
     * 添加笔记
     * text:默认的文本
     * favorite：是否喜欢
     */
    ADD_NOTE(state){
        const newNote={
            text:'主人，您还没有添加数据',
            favorite:false
        }
        state.notes.push(newNote);
        state.activeNote = newNote;
        console.log(state.activeNote);
    },
    TOGGLE_FAVORITE(state){
        if(state.notes.length>0){
            state.activeNote.favorite = !state.activeNote.favorite
        }
    },
    DELETE_NOTE(state){
        for(var i = 0; i < state.notes.length; i++){
            if(state.notes[i]==state.activeNote){
                state.notes.splice(i,1)
            }
        }
        if(state.notes.length > 0){
            state.activeNote = state.notes[0];
        }else{
            state.activeNote={}
        }
    },
    ACTIVE_NOTE(state,note){
        state.activeNote = note;
    },
    EDIT_NOTE(state,value){
        state.activeNote.text=value
    },
    SET_ACTIVE_NOTE(state){
        state.activeNote = state.notes[0]
    }
}
const actions = {
    addNote({commit}) {
        commit('ADD_NOTE')
    },
    toggleFavorite({commit}) {
        commit('TOGGLE_FAVORITE')
    },
    deleteNote({commit}) {
        commit('DELETE_NOTE')
    },
    activeNote({commit},note){
        commit('ACTIVE_NOTE');
    },
    editNote({commit},value){
        commit('EDIT_NOTE',value)
    },
    setActiveNote({commit}){
        commit('SET_ACTIVE_NOTE')
    }
}
const getters = {
    notes: state => state.notes,
    activeNote: state => state.activeNote
}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})