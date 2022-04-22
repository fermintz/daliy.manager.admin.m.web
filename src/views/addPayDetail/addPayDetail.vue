<template>
  <div class="addPayDetail">
    <div class="header d-flex">
      <div class="left">
        <v-btn icon @click="$router.back(-1)">
          <v-icon> mdi-arrow-left </v-icon>
        </v-btn>
        <h2>추가결제 상세정보</h2>
      </div>
    </div>

    <div class="detail-top">
      <div class="order-number">A0A73E-<strong>0003</strong></div>
      <div class="order-state">요청검수</div>
    </div>
    <div class="request-info">
      <dl>
        <dt>요청파트너</dt>
        <dd>데일리세탁</dd>
      </dl>
      <dl>
        <dt>요청일시</dt>
        <dd>2022.04.12 14:45:12</dd>
      </dl>
      <dl>
        <dt>결제완료일시</dt>
        <dd>-</dd>
      </dl>
      <dl class="price">
        <dt>요청금액</dt>
        <dd>3,000 원</dd>
      </dl>
      <div class="shop-message">
        스포츠웨어 상의(+2)->명품류 자켓(+2)으로 변경되어 추가결제
        요청드립니다.(명품류는 일반세탁으로 불가함을 알려드리며 일반세탁으로
        고객님 요청시 세탁후의 손상은 책임지기 어렵다는 점 고지드립니다.)
      </div>
    </div>
    <div class="goods-images">
      <div class="image-item" @click="imageScail" v-ripple>
        <img src="https://picsum.photos/200/300" />
      </div>
      <div class="image-item" @click="imageScail" v-ripple>
        <img src="https://picsum.photos/201/301" />
      </div>
      <div class="image-item" @click="imageScail" v-ripple>
        <img src="https://picsum.photos/201/301" />
      </div>
    </div>
    <div class="divider h10" />
    <div class="section admin-btns">
      <v-btn text @click="$router.push('detail')">주문상세보기</v-btn>
      <v-btn text>세탁 지시사항 보내기</v-btn>
      <v-btn text>사용자 안내사항 보내기</v-btn>
    </div>

    <div class="section userinfo">
      <div class="head">
        <h4>주문자정보</h4>
      </div>
      <div class="cont">
        <dl>
          <dt>주문자</dt>
          <dd>강보미</dd>
        </dl>
        <dl class="phone">
          <dt>전화번호</dt>
          <dd>010-5578-3137</dd>
        </dl>
        <dl>
          <dt>주소지</dt>
          <dd>부산 연제구 중앙대로 1076번길 43 305호</dd>
        </dl>
        <dl>
          <dt>출입문정보</dt>
          <dd>종 2580</dd>
        </dl>
      </div>
    </div>

    <div class="section product">
      <div class="head">
        <h4>주문상품</h4>
      </div>

      <div class="cont">
        <div class="item">
          <div class="item-info">
            <label>겨울 점퍼/자켓</label>
            <span>7,900</span>
          </div>
          <div class="price">7,900</div>
          <div class="amount">1</div>
        </div>
        <div class="item total">
          <div class="item-info">
            <label>합계</label>
          </div>
          <div class="price">7,900</div>
          <div class="amount">1</div>
        </div>
      </div>
    </div>

    <div class="section product checkout">
      <div class="head">
        <h4>검수 후 상품</h4>
      </div>

      <div class="cont">
        <div class="item">
          <div class="item-info">
            <label>겨울 점퍼/자켓</label>
            <span>7,900</span>
          </div>
          <div class="price">7,900</div>
          <div class="amount">1</div>
        </div>
        <div class="item total">
          <div class="item-info">
            <label>합계</label>
          </div>
          <div class="price">7,900</div>
          <div class="amount">1</div>
        </div>
      </div>
    </div>

    <div class="section price-check">
      <div class="head">
        <h4>최종확인</h4>
      </div>

      <div class="cont">
        <dl class="changed">
          <dt>변동차액</dt>
          <dd>
            <strong>+29,700</strong>
            <span>원</span>
          </dd>
        </dl>
        <dl class="priceEnter">
          <dt>금액입력</dt>
          <dd>
            <input type="number" placeholder="0" />
            <span>원</span>
          </dd>
        </dl>
        <div class="divider" />
        <v-btn text @click="confirmShow"> 검토완료 </v-btn>
      </div>
    </div>

    <ImageViewer ref="imageViewer"  />
    <Confirm ref="confirm" title="검토확인" message="최종 12,900원 추가결제를 요청합니다."/>

    <!-- <my-component ref="modal" :numbers="1" /> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component, Ref } from "vue-property-decorator";
import MyComponent from "@/components/MyComponent.vue";
import ImageViewer from "@/components/imageViewer/imageViewer.vue";
import Confirm from '@/components/confirm/confirm.vue'

@Component({
  name: "AddPayDetail",
  components: { MyComponent, ImageViewer, Confirm },
})
export default class extends Vue {
  @Ref() imageViewer!: ImageViewer;
  @Ref() confirm!: Confirm;

  imageScail():void {
    //Ref변수 선언 사용시
    this.imageViewer.show(true)
    // const modal = this.$refs.imageViewer as ImageViewer;
    // modal.show(true);
  }

  confirmShow():void{
    this.confirm.show(true)
  }
}
</script>

<style lang="scss" src="./addPayDetail.scss" scoped />
