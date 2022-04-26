<template>
  <div class="header">
    <div class="logo">
      <strong>데일리세탁</strong>
      <label>매니저용</label>
    </div>

    <div class="right">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
            v-bind="attrs"
            v-on="on"
            class="area-selector"
          >
            <label>{{selectedArea}}</label>
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <div class="area-menu">
          <span 
            v-ripple 
            v-for="item in ['전체','전라남도','서울']"
            :key="item"
            @click="selectedArea = item"
          >
            {{item}}
          </span>
        </div>
      </v-menu>
      <v-btn icon @click="$router.push('map')" class="mapBtn">
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component({

})
export default class extends Vue{
  selectedArea:string = '전체';
}
</script>

<style lang="scss" src="./header.scss" scoped />
