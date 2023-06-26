import React from 'react';


const MarginBottomBox = () => {
    return(
        <div className="marginBottomBox">
          <div className="PromotiongpsContainer">
            <div className="font_content1 color_green_text" style={{ textAlign: 'center' }}>원하시는 공사를 연결해드려요.</div>
            <div className="gpsBoximgWrap">
              <img src="/images/promotion_gpsBox_img.png" className="centerClass"/>
            </div>
          </div>
          <div className="font_content3 GpsBoxtextWrap">
            <span>원하시는 공사를 검색하면</span>
            <span>현재 위치를 파악하여 업체를 확인할 수 있으며</span>
            <span>정해진 견적 프로세스를 통해</span>
            <span>쉽고 간단하게 시공이 가능합니다.</span>
          </div>
        </div>
    )
}

  export default MarginBottomBox;