

import React from 'react';


const PromotionAppScreenSliderBox_02 = () => {
    return(
<div className="PromotionAppScreenSliderBox box">
<span className="font_content1 color_coral_text" style={{ display: 'block' }}>공사콕 인증서</span>
<div className="PromotionAppScreenSliderContainer">
  <div className="swiper swiper-initialized swiper-horizontal swiper-backface-hidden" loopadditionalslides="1">
    <div className="swiper-wrapper" style={{ transitionDuration: '0ms', transform: 'translate3d(-166.667px, 0px, 0px)' }}>
      <div className="swiper-slide" data-swiper-slide-index="0" style={{ width: '146.667px', marginRight: '20px' }}>
        <img src="images/certificationBox_1.jpg" alt="[object Object]" />
        <span className="font_content3 sliderText">
          <span>
            <span>벤처기업</span>
            <span>확인서</span>
          </span>
        </span>
      </div>
      <div className="swiper-slide swiper-slide-prev" data-swiper-slide-index="1" style={{ width: '146.667px', marginRight: '20px' }}>
        <img src="images/certificationBox_2.jpg" alt="[object Object]" />
        <span className="font_content3 sliderText">
          <span>
            <span>AI특허증</span>
          </span>
        </span>
      </div>
      <div className="swiper-slide swiper-slide-active" data-swiper-slide-index="2" style={{ width: '146.667px', marginRight: '20px' }}>
        <img src="images/certificationBox_3.jpg" alt="[object Object]" />
        <span className="font_content3 sliderText">
          <span>
            <span>네트워크 시스템</span>
            <span>방어 특허증</span>
          </span>
        </span>
      </div>
      <div className="swiper-slide swiper-slide-next" data-swiper-slide-index="3" style={{ width: '146.667px', marginRight: '20px' }}>
        <img src="images/certificationBox_4.jpg" alt="[object Object]" />
        <span className="font_content3 sliderText">
          <span>
            <span>국가 유공자</span>
            <span>표창 기업</span>
          </span>
        </span>
      </div>
      <div className="swiper-slide" data-swiper-slide-index="5" style={{ width: '146.667px', marginRight: '20px' }}>
        <img src="images/certificationBox_5.jpg" alt="[object Object]" />
        <span className="font_content3 sliderText">
          <span>
            <span>우수기업</span>
            <span>확인서</span>
          </span>
        </span>
      </div>
    </div>
    <div className="swiper-pagination swiper-pagination-fraction swiper-pagination-horizontal">
      <span className="swiper-pagination-current">3</span> / <span className="swiper-pagination-total">6</span>
    </div>
  </div>
</div>
</div>
    )
}

  export default PromotionAppScreenSliderBox_02;