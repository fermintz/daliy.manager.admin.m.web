<template>
  <div class="addPayCard" v-ripple @click="$router.push('addPayDetail')">
    <div class="item-top"> 
      <span class="orderState normal">추가결제중</span> <!-- normal: #08B882 / weight: #DF0E68 / complete: #292929 -->
      <div class="row">
        <div class="order shop">
          <span>데일리세탁</span>
        </div>
        <div class="order number">
          <strong>EE6B12-<b>2600</b></strong>
        </div>
      </div>
    </div>
    <div class="item-cont">
      <span class="name">박수민</span>
      <span class="phone">010-8525-4561</span>
      <span class="address">부산시 북구 구남언덕로 15 3층</span>
    </div>
    <div class="item-bottom">
      <dl>
        <dt>요청일</dt>
        <dd>2022-04-20</dd>
      </dl>
      <dl>
        <dt>요청금액</dt>
        <dd>5,000</dd>
      </dl>
    </div>

  </div>
</template>

<style lang="scss" src="./addPayCard.scss" scoped/>