import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, Select, Input, Switch, Button } from 'antd';
import { withRouter } from 'react-router-dom';
import { withUserAgent } from 'react-useragent';
import queryString from 'query-string';

import {
  PGS,
  METHODS_FOR_INICIS,
  QUOTAS_FOR_INICIS_AND_KCP,
} from './constants';
import { getMethods, getQuotas } from './utils';

const { Item } = Form;
const { Option } = Select;

function Payment() {

  const onClickCertification = () => {
    /* 1. 가맹점 식별하기 */
    const { IMP } = window;
    IMP.init('imp93696209');

    /* 2. 본인인증 데이터 정의하기 */
    const data = {
      merchant_uid: `mid_${new Date().getTime()}`,  // 주문번호
      company: '아임포트',                           // 회사명 또는 URL
      carrier: 'SKT',                              // 통신사
      name: '이하영',                                // 이름
      phone: '01099123059'
    };

    /* 4. 본인인증 창 호출하기 */
    IMP.certification(data, callback);
  }

  /* 3. 콜백 함수 정의하기 */
  function callback(response) {
    const {
      success,
      merchant_uid,
      error_msg
    } = response;

    if (success) {
      alert('본인인증 성공');
    } else {
      alert(`본인인증 실패: ${error_msg}`);
    }
  }


  return (
    <div>

      <button onClick={onClickCertification}>본인인증 하기</button>
    </div>
  );
}


export default Payment;
