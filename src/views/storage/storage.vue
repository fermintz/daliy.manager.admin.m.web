<template>
  <div class="storage">


    <div class="list-opt">
      <h4>임시보관함</h4>
      <div class="listInSearch">
        <input type="text" placeholder="리스트 내 검색">
        <v-btn icon> 
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </div>
    </div>
    <div class="list">
      <div class="no-item">
        등록된 주문이 없습니다.
      </div>
      <OrderCard v-for="item in 5" :key="item"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import OrderCard from '@/components/orderCard/orderCard.vue'

@Component({
  components:{
    OrderCard,
  }
})
export default class extends Vue {
 
}
</script>

<style lang="scss" src="./storage.scss" scoped />