<template>
  <v-dialog v-model="visible">
    <div class="refound modal">
      <div class="top">
        <h3>결제금액 부분취소</h3>  
      </div>
      <div class="middle">
        <dl class="priceWrite">
          <dt>취소금액 입력</dt>
          <dd>
            <input type="number" placeholder="0">
            <span>원</span>
          </dd>
        </dl>
        
        <dl class="selector">
          <dt>과실책임 선택</dt>
          <dd>
            <v-btn text 
              :class="{selected: shopSelected === index}"
              @click="shopSelected = index"
              v-for="(item, index) in shop" 
              :key="index"
            >
              {{item}}
            </v-btn>
          </dd>
        </dl>

        <div class="divider"></div>

        <div class="guide">
          <span>* 데일리세탁의 경우(이벤트성 금액 환불시)</span>
          <span>* 세탁소의 경우(상품처리 및 수량 변경시)</span>
        </div>
      </div>
      <div class="bottom">
        <v-btn class="cancle" @click="visible=false">취소</v-btn>
        <v-btn class="ok" @click="visible=false">확인</v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'

@Component
export default class extends Vue{
  visible:boolean = false;
  shop = ['데일리세탁','세탁소'];
  shopSelected = 0

  show(value:boolean):void{
    
    this.visible = value;
  }
}
</script>

<style lang="scss" src="./refound.scss" scoped />