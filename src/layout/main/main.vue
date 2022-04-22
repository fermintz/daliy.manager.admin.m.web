<template>
  <div class="container">
    <Header />
    <div class="main">
      <router-view />
    </div>
    <BottomNavigation />
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import Header from '@/components/header/header.vue'
import BottomNavigation from '@/components/bottomNav/bottomNav.vue'


@Component({
  components:{
    Header, BottomNavigation
  },
})
export default class mainLayout extends Vue{
  
}
</script>

<style lang="scss" src="./main.scss" scoped />