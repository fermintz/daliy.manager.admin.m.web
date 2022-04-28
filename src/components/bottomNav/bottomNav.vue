<template>
  <div class="bottom-nav">
    <div
      class="nav-item"
      v-ripple
      v-for="(item, index) in navigation"
      :key="index"
      :class="{active: $route.name === item.routeName}"
      @click="defaultPage = index; $router.push({name:item.routeName})"
    >
      <v-icon>{{ item.icon }}</v-icon>
      <label>{{ item.name }}</label>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  
})
export default class BottomNavigation extends Vue {
  defaultPage:number = 2
  navigation = [
    {
      name: "임시보관",
      icon: "mdi-archive-outline",
      routeName:'storage'
    },
    {
      name: "주문현황",
      icon: "mdi-van-utility",
      routeName:'order'
    },
    {
      name: "검색하기",
      icon: "mdi-magnify",
      routeName:'home'
    },
    {
      name: "추가결제",
      icon: "mdi-credit-card",
      routeName:'addPayment'
    },
    {
      name: "전체메뉴",
      icon: "mdi-menu",
      routeName:'drawer'
    },
    
  ]

}
</script>

<style lang="scss" src="./bottomNav.scss" scoped />
