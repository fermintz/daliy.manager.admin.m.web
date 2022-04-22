<template>
  <div class="home">    
    <div class="search-wrap">
      <div class="search">
        <v-menu offset-y>
          <template v-slot:activator="{on,attrs}">
            <v-btn 
              text
              v-bind="attrs"
              v-on="on"
              class="selected"
            >
              <label>주문번호</label>
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <div class="selector">
            <span v-ripple>주문번호</span>
            <span v-ripple>이름</span>
          </div>
        </v-menu>
        
        <input type="text" placeholder="검색하실 키워드를 입력해주세요" pattern="\d*" inputmode="numeric">
        <v-btn text class="search-btn">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </div>  
    </div>
        
 
    <div class="divider h-10" />

    <div class="resultText">
      <p class="success-text"><strong>[2600]</strong>에 대한 검색결과</p>
    </div>
    
    <div class="resultList">  
      <div class="no-item">
        <v-icon>mdi-alert-circle</v-icon>검색된 자료가 없습니다.
      </div>

      <OrderCard @click="$router.push('detail')" />

    </div>

    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import OrderCard from '@/components/orderCard/orderCard.vue'

@Component({
  components:{
    OrderCard
  }
})
export default class Home extends Vue {

}
</script>

<style lang="scss" src="./home.scss" scoped />

