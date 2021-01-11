import logo from './logo.svg';
import { RestClient } from "@bootpay/server-rest-client"
import React from 'react';
import BootPay from 'bootpay-js';


function App() {


  const request = async () => {

    BootPay.request({
      price: 0, // 0으로 해야 한다.
      application_id: '5fdf37812fa5c2001d038af6',
      name: '정기적인 결제', //결제창에서 보여질 이름
      pg: 'kcp',
      method: 'card_rebill', // 빌링키를 받기 위한 결제 수단
      show_agree_window: 0, // 부트페이 정보 동의 창 보이기 여부
      user_info: {
        username: '사용자 이름',
        email: '사용자 이메일',
        addr: '사용자 주소',
        phone: '010-1234-4567'
      },
      order_id: 'hayoung', //고유 주문번호로, 생성하신 값을 보내주셔야 합니다
      extra: {
        start_at: '2019-05-10', // 정기 결제 시작일 - 시작일을 지정하지 않으면 그 날 당일로부터 결제가 가능한 Billing key 지급
        end_at: '2022-05-10' // 정기결제 만료일 -  기간 없음 - 무제한
      }
    }).error(function (data) {
      //결제 진행시 에러가 발생하면 수행됩니다.
      console.log(data);
    }).cancel(function (data) {
      //결제가 취소되면 수행됩니다.
      console.log(data);
    }).done(function (data) {
      // 빌링키를 정상적으로 가져오면 해당 데이터를 불러옵니다.
      console.log(data);
    });
  }

  return (
    <div className="App">
      <button onClick={request}>확인해봐바바ㅏ</button>

    </div>
  );
}

export default App;
