<template lang="html">
  <div class="item">
    <div class="meta">
      {{ updated(entity) }}
    </div>
    <div class="content">
      <div class="header"
        v-on:click="open=!open"
        >
        {{ header(entity) || '文章标题' }}
      </div>
      <div class="extra"
        v-if="open"
      >
        <editor
          v-bind:entity="entity"
        ></editor>
      </div>
      {{ words(entity) }}字
      <i class="right floated trash icon"
        v-on:click="remove(entity)"
        v-if="open"
      ></i>
    </div>
  </div>
</template>

<script>
import Editor from "./Editor"
import {mapGetters,mapActions} from "vuex"
export default {
  data(){
    return {'open':false}
  },
  props:['entity'],
  methods:{
    ...mapActions(['remove'])
  },
  computed:{
    ...mapGetters(['updated','words','header'])
  },
  components:{
    Editor
  }
}
</script>

<style lang="css">
</style>
