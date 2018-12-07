<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <p>{{demo}}</p>
    <p>{{demoLen}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
}
)
export default class Home extends Vue {
   demo = 'demo'  //data
   
   get demoLen ():number {  //computed
    return this.demo.length
  }
  newData(){
    this.demo="haha"
  }

  created(){                //created
    this.newData()
  }

  mounted(){                //mounted

  }

}
</script>
