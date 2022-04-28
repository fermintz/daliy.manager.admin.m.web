<template>
  <div class="order">
    <div class="top">
      <dl 
        v-for="(item, index) in orderState" 
        :key="index" 
        :class="{active: index === stateActive}"
        @click="stateActive = index"
      >
        <dt>{{ item.name }}</dt>
        <dd>{{ item.number }}</dd>
      </dl>
    </div>
    
    <div class="divider h10" />
    <div class="list-opt">
      <h4>주문예약</h4>
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
      <OrderCard v-for="item in 10" :key="item"/>
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
export default class order extends Vue {
  areaSelector:number = 0;
  stateActive:number = 0;
  orderState = [
    {
      name: "주문예약",
      number: 5,
    },
    {
      name: "수거요청",
      number: 53,
    },
    {
      name: "수거중",
      number: 5,
    },
    {
      name: "출고대기",
      number: 0,
    },
    {
      name: "배송대기",
      number: 5,
    },
    {
      name: "작업완료",
      number: 10,
    },
  ];
}
</script>

<style lang="scss" src="./order.scss" scoped />
