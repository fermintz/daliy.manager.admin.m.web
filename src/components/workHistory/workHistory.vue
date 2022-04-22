<template>
  <v-dialog
    v-model="visible"
  >
    <div class="workHistory">
      <div class="head">
        <h3>작업히스토리</h3>
        <v-btn icon @click="visible = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>

      <div class="list">
        <div 
          class="history-item" 
          v-for="item in ['주문접수','수거시작','수거완료','입고완료','출고완료','배송완료']" 
          :key="item"
        >    
          <label>{{item}}</label>
          <div class="item-info">
            <strong>본사</strong>
            <span>2022-04-17 14:32:34</span>
          </div>
        </div>
      </div>
    </div>
  </v-dialog>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component({

})
export default class workHistory extends Vue{
  visible : boolean = false

  show(value:boolean):void{
    this.visible = value;
  }
}
</script>

<style lang="scss" src="./workHistory.scss" scoped />

