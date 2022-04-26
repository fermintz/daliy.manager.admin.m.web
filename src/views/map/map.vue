<template>
  <div class="map-wrap">
    <div class="header d-flex">
      <div class="left">
        <v-btn icon @click="$router.back(-1)">
          <v-icon> mdi-arrow-left </v-icon>
        </v-btn>
        <h2>상세정보</h2>
      </div>
    </div>

    <div class="map-area">
      <div class="map-top">
        <v-btn text class="active">
          <label>전체</label>
          <strong>42</strong>
        </v-btn>
        <v-btn text>
          <label>수거</label>
          <strong>22</strong>
        </v-btn>
        <v-btn text>
          <label>배송</label>
          <strong>20</strong>
        </v-btn>
        <v-btn text>
          <label>배송</label>
          <strong>20</strong>
        </v-btn>
        <v-btn text>
          <label>배송</label>
          <strong>20</strong>
        </v-btn>
        <v-btn text>
          <label>배송</label>
          <strong>20</strong>
        </v-btn>
        <v-btn text>
          <label>배송</label>
          <strong>20</strong>
        </v-btn>
      </div>
      <div class="map">

      </div>
      <div class="card-area">
        <OrderCard />
      </div>
    </div>

    
    
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import OrderCard from '@/components/orderCard/orderCard.vue'

@Component({
  components:{
    OrderCard
  },
})
export default class extends Vue{

}
</script>

<style lang="scss" src="./map.scss" scoped />