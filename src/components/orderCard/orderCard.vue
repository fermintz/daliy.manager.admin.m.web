<template>
  <div class="orderCard" v-ripple @click="$router.push('detail')"> <!-- normal: #ffffff / complete: #f2f2f2 배송완료이거나 주문취소일 경우  --> 
    <div class="item-top"> 
      <span class="orderState normal">검수대기</span> <!-- normal: #0007EE / cancle: #DF0E68 / complete: #292929 -->
      <div class="row">
        <div class="order date">
          <span>주문</span>
          <strong>21.01.26</strong>
        </div>
        <div class="order number">
          <span>번호</span>
          <strong>EE6B12-<b>2600</b></strong>
        </div>
      </div>
    </div>
    <div class="item-cont">   
      <div class="left">
        <span class="date">01.26</span>
        <span class="week">월요일</span>
        <span class="time">PM 09</span>
      </div>
      <div class="right">
        <span class="name">박수민</span>
        <span class="phone">010-8525-4561</span>
        <span class="address">부산시 북구 구남언덕로 15 3층</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./orderCard.scss" scoped />