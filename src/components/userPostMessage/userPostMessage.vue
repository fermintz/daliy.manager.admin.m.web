<template>
  <v-dialog 
    v-model="visible"
  >
    <div class="userPostMessage">
      <div class="head">
        <h4>사용자 메세지 보내기</h4>
      </div>
      
      <div class="cont">
        <v-menu offset-y>
          <template v-slot:activator="{on, attrs}" >
            <div
              v-bind="attrs"
              v-on="on"
              v-ripple
              class="selector"
            >
              <span>{{seletedMessage}}</span>
              <v-icon>
                mdi-chevron-down
              </v-icon>
            </div>
          </template>

          <div class="selector_menu">
            <div 
              class="item" 
              v-for="(item,index) in messageCont" 
              :key="index" 
              v-ripple
              @click="contPost(item)"
            >
              {{item.title}}
            </div>
          </div>

        </v-menu>

        <textarea placeholder="내용을 입력해주세요  " id="textbox" v-model="text"/>
      </div>

      <!-- <div class="divider" />

      <div class="imageArea">
        <div class="images">
          <img src="https://picsum.photos/200/300">
          <img src="https://picsum.photos/200/300">
          <img src="https://picsum.photos/200/300">
          <img src="https://picsum.photos/200/300">
          <img src="https://picsum.photos/200/300">
        </div>
        <v-btn text class="file-upload">이미지 첨부</v-btn>
      </div> -->
      <div class="btns">
        <v-btn text class="cancle" @click="visible = false">취소</v-btn>
        <v-btn text class="complete" @click="visible = false">확인</v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';


@Component
export default class extends Vue{
  visible = false
  seletedMessage = '내용선택'
  text:string = '';
  messageCont = [
    {
      title:'심한 오염 및 이염안내',
      cont:`검수과정에서 세탁물의 심한 오염/이염이 발견되어 사전 안내를 드립니다. 해당 얼룩의 경우 이미 소재내에 고착화 혹은 탈색이 진행되어 정상적인 세탁(드라이 혹은 물세탁)을 진행함에도 완벽하게 지워지지 않을 수 있음을 미리 안내드립니다.
과도한 오염제거 시도는 세탁물의 손상이 동반되므로 추가요청은 데일리세탁 카카오채널(http://pf.kakao.com/_GAFDxb/chat)을 통해 주문번호와 함께 요청해주시길 바랍니다.

[세탁 후 빈번히 잔존하는 오염의 종류]
 - 혈흔 오염
 - 녹물, 커피 오염
 - 염색약의 이염
 - 탈색 및 변색 (세탁이 아닌 복구작업에 해당됩니다.)`
    },
    {
      title:'세무/가죽이 포함된 운동화 및 의류의 변형가능성 사전알림',
      cont:`세탁물 재질의 특이성에 의해 세무/가죽이 포함된 운동화 및 의류세탁 진행 시 주름,딱딱해짐,벗겨짐의 현상이 불가피하게 발생 할 수 있음을 미리 고지드립니다. 해당 변형가능성에 대해 충분한 이해를 해주시고, 우려가 되신다면 반드시 [세탁철회요청]을 부탁드립니다.

[변형이 빈번하게 발생하는 주요 브랜드]
 - 뉴발란스 세무재질 포함 운동화
 - 오니츠카 운동화류
 - 나이키 덩크(가죽재질)
 - 컨버스화 (가죽재질)
 - 팔꿈치의 가죽패치가 포함 된 니트/셔츠류

[세탁철회요청안내]
세탁철회요청은 데일리세탁 카카오채널(http://pf.kakao.com/_GAFDxb/chat)을 통해 주문번호와 함께 해당세탁물 철회요청을 진행해주시길 바랍니다. 해당 세탁물의 금액은 환불조치됩니다.`
    },
    {
      title:'세탁 전 의류 부자재(단추,지퍼,화펜 등) 확인 알림',
      cont:`세탁 전 검수과정에서 세탁물의 부자재(단추,지퍼,와펜 등)일부분이 소실 혹은 파손 된 것을 발견하여 세탁 전 사전알림 메시지를 전달드립니다.`
    },
    {
      title:'직접입력',
      cont:``
    }
  ]


  show(value:boolean):void{
      this.visible = value;
  }

  contPost(item: {title:string;cont:string;}):void{
    this.seletedMessage = item.title;
    this.text = item.cont
  }


}
</script>

<style lang="scss" src="./userPostMessage.scss" scoped/>
