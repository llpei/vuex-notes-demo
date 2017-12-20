<template lang="html">
  <div class="ui container notes">
    <h4 class="ui horizontal divider header">
      <i class="paw icon"></i>
      llpei Notes APP _ vue.js + vuex.js
    </h4>
    <a class='ui right floated basic violet button'
      v-on:click="create"
    >添加文章</a>
    <div class="ui divided items">
      <note
        v-for="entity in entities"
        v-bind:entity="entity"
      ></note>
      <span class="ui small disabled header"
      v-if="!entities.length">
        还没有文章，请点击“添加文章”按钮
      </span>
    </div>
  </div>
</template>

<script>
import Note from "./Note"
import {mapGetters,mapActions} from "vuex"

export default {
  created(){
    this.initialData();
  },
  methods:{
    ...mapActions(['initialData','create'])
  },
  computed:{
    ...mapGetters(['entities','updated','words','header'])
  },
  components:{
    Note
  }
}
</script>

<style lang="css">
</style>
