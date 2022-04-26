<template>
  <div class="addPayment">
    <div class="top">
      <div class="left">
        <h3>결제요청관리</h3>
      </div>
      <div class="right">
        <dl 
          v-for="(item, index) in addPaymentState" 
          :key="index" 
          :class="{active: index === stateActive}"
          @click="stateActive = index"
        >
          <dt>{{ item.name }}</dt>
          <dd>{{ item.number }}</dd>
        </dl>
      </div>
      
    </div>
    <div class="divider h10" />
    <div class="list-top">
      <v-btn 
        text 
        :class="{active:areaSelector === index}"
        @click="areaSelector = index" 
        v-for="(item, index) in ['전체','부산','서울']"
        :key="index"
      >{{item}}</v-btn>
    </div>
    <div class="list">
      <div class="no-item">
        등록된 요청이 없습니다.
      </div>
      <AddPayCard v-for="item in 3" :key="item"/>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Ref} from 'vue-property-decorator'
import AddPayCard from '@/components/addPayCard/addPayCard.vue'
import Confirm from '@/components/confirm/confirm.vue'

@Component({
  components:{
    AddPayCard,
  },
})
export default class extends Vue{
  areaSelector:number = 0;
  stateActive:number = 0;

  addPaymentState = [
    {
      name:'추가결제',
      number:3
    },
    {
      name:'요청검수',
      number:5
    },
    {
      name:'결제완료',
      number:10
    },
  ];


}

</script>

<style lang="scss" src="./addPayment.scss" scoped/>