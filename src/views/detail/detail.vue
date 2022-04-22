<template>
  <div class="orderDetail">
    <div class="header d-flex">
      <div class="left">
        <v-btn icon @click="$router.back(-1)">
          <v-icon> mdi-arrow-left </v-icon>
        </v-btn>
        <h2>상세정보</h2>
      </div>
      <div class="right">
        <v-btn icon @click="$refs.workHistory.show(true)">
          <v-icon>mdi-history</v-icon>
        </v-btn>
      </div>
    </div>
    <div class="detail-top">
      <div class="order-number">A0A73E-<strong>0003</strong></div>
      <div class="order-state">주문접수</div>
    </div>
    <div class="order-date">
      <dl>
        <dt>주문일시</dt>
        <dd>22.04.12(화) 15:24:34</dd>
      </dl>
      <dl class="pickup">
        <dt>수거예약일</dt>
        <dd>22.04.13(수) PM 09</dd>
      </dl>
      <dl class="delivery-man">
        <dt>배송담당</dt>
        <dd>박수민</dd>
      </dl>
    </div>
    <div class="divider h10" />
    <div class="section admin-btns">
      <v-btn text class="lock" @click.stop="lockBtnHandle">
        <v-icon>mdi-lock-outline</v-icon>
        <span>임시보관</span>
      </v-btn>
      <v-btn text @click.stop="$refs.userPostMessage.show(true)">사용자안내 발송</v-btn>
      <v-btn text @click.stop="$refs.confrim.show(true)">검수상태 되돌리기</v-btn>
    </div>

    <div class="section memo">
      <div class="head">
        <h4>주문메모</h4>
        <v-btn text>저장</v-btn>
      </div>
      <div class="cont">
        <textarea placeholder="메모를 입력해주세요" />
      </div>
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

    <div class="section request">
      <div class="head">
        <h4>요청사항</h4>
      </div>
      <div class="cont">
        <dl class="delivery">
          <dt>배송</dt>
          <dd>안전하게 배송 부탁드립니다</dd>
        </dl>
        <dl class="wash">
          <dt>세탁</dt>
          <dd>요청사항이 없습니다.</dd>
        </dl>
      </div>
    </div>

    <div class="section product dropdown">
      <div class="head">
        <h4>주문상품</h4>
        <v-icon> mdi-chevron-down </v-icon>
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
    <div class="section product checkout dropdown">
      <div class="head">
        <h4>검수 후 상품</h4>
        <v-icon> mdi-chevron-down </v-icon>
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
    <div class="section delivery-photo dropdown">
      <div class="head">
        <h4>배송정보</h4>
        <v-icon>mdi-chevron-down</v-icon>
      </div>

      <div class="cont">
        <div class="no-item">
          <span>등록된 수거/배송 정보가 없습니다.</span>
        </div>

        <div class="images">
          <div class="image-box" v-ripple @click.stop="$refs.imageViewer.show(true)">
            <span>수거</span>
            <strong>21.12.28 12:34</strong>
            <img src="https://picsum.photos/640/480" />
          </div>
          <div class="image-box" v-ripple @click.stop="$refs.imageViewer.show(true)">
            <span>배송</span>
            <strong>21.12.28 12:34</strong>
            <img src="https://picsum.photos/480/640" />
          </div>
        </div>
      </div>

      
    </div>

    <div class="section payment-info dropdown hidden">
      <div class="head">
        <h4>결제정보</h4>
        <v-icon>
          mdi-chevron-down
        </v-icon>
      </div>
      <div class="cont">
        <div class="payment-info-item">
          <div class="top">
            <label>선결제</label>
            <strong>22,400</strong>
          </div>
          <div class="bottom">
            <div class="left">
              <span>2022.04.18 08:48:45</span>
              <label>우리체크(2664)</label>
            </div>
            <v-btn text @click.stop="$refs.refound.show(true)">부분취소</v-btn>
          </div>
        </div>

        <div class="payment-info-item">
          <div class="top">
            <label>추가결제</label>
            <strong>5,000</strong>
          </div>
          <div class="bottom">
            <div class="left">
              <span>2022.04.19 14:23:50</span>
              <label>우리체크(2664)</label>
            </div>
            <v-btn text @click.stop="$refs.refound.show(true)">부분취소</v-btn>
          </div>
        </div>
      </div>
    </div>

    <div class="section add-payment-info dropdown hidden">
      <div class="head">
        <h4>추가결제정보</h4>
        <v-icon>mdi-chevron-down</v-icon>
      </div>
      <div class="cont">
        <div class="add-payment-info-item" @click="$router.push('addPayDetail')">
          <div class="top">
            <label>추가결제중</label>
            <strong>본사</strong>
          </div>
          <div class="middle">
            <dl class="price">
              <dt>요청금액</dt>
              <dd>5,000</dd>
            </dl>
            <dl class="request-date">
              <dt>요청일</dt>
              <dd>2022-04-20</dd>
            </dl>
            <dl class="complete-date">
              <dt>결제일시</dt>
              <dd>2022-04-23 12:35:50</dd>
            </dl>
          </div>
          <div class="message">
            극세사이불 사이즈변경으로 추가결제 요청드립니다.
          </div>
        </div>
      </div>
    </div>

    <ImageViewer ref="imageViewer" />
    <WorkHistory ref="workHistory" />
    <UserPostMessage ref="userPostMessage"/>
    <Confirm ref="confrim" title="검수상태 되돌리기" message="검수단계 이후 진행된 사항의 모든 데이터가 손실됩니다 진행하시겠습니까?"/> 
    <Refound ref="refound"/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import ImageViewer from '@/components/imageViewer/imageViewer.vue'
import WorkHistory from '@/components/workHistory/workHistory.vue'
import UserPostMessage from '@/components/userPostMessage/userPostMessage.vue'
import Confirm from '@/components/confirm/confirm.vue'
import Refound from '@/components/refound/refound.vue'

@Component({
  components:{
    ImageViewer, WorkHistory, UserPostMessage, Confirm, Refound
  }
})
export default class Detail extends Vue{
  mounted(){
    this.dropdownHandle()
  }

  dropdownHandle(): void{
    const target = Array.from(document.querySelectorAll('.dropdown'));
    
    target.map((item, index) => {
      item.addEventListener('click', ()=>{
        target[index].classList.toggle('hidden')
      })
    })
  }

  lockBtnHandle(){
    const target = document.querySelector('.lock')
    target?.classList.toggle('active')
  }
}
</script>

<style lang="scss" src="./detail.scss" scoped />
