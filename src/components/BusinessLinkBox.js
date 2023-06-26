import React from 'react';


const BusinessLinkBox = () => {
    return(
        <div className="BusinessLinkBox box">
          <div className="font_content1" style={{ textAlign: 'center' }}>공사콕 <span style={{ color: '#41B2A5' }}>B2C</span> · <span style={{ color: '#B53BFD' }}>B2B</span> 비전</div>
          <div className="font_content3">
            <span>축적된 10만명의 사업자 회원 데이터</span>
            <span>한옥 건축 문화를 온라인으로 매칭, 연결하는 <span style={{ color: '#F48B84', display: 'inline-block' }}>K한문화 플랫폼</span></span>
            <span>비지니스 회원과 함께 신뢰로 사업을 같이 공유합니다.</span>
          </div>
          <div className="img">
          </div>
          <div className="visualBox_buttonWrap">
            <button className="font_button" style={{ backgroundColor: '#333333', color: 'white' }}>1577-7942</button>
            <a className="font_button" href="/grandopen" style={{ backgroundColor: 'white', color: '#333333' }}>가맹점 등록 신청하기</a>
          </div>
        </div>
    )
}

  export default BusinessLinkBox;