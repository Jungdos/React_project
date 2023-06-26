import React from 'react';


const PromotionAppScreenSliderBox = () => {
    return(
        <div className="PromotionAppScreenSliderBox box">
          <span className="font_content1 color_coral_text" style={{ display: 'block' }}>공사에 대한 고민을 함께합니다.</span>
          <div className="PromotionAppScreenSliderContainer">
            <div className="swiper swiper-initialized swiper-horizontal swiper-backface-hidden" loopadditionalslides="1">
              <div className="swiper-wrapper" style={{ transitionDuration: '0ms', transform: 'translate3d(-166.667px, 0px, 0px)' }}>

              <div className="swiper-slide swiper-slide-next" data-swiper-slide-index="1" style={{ width: '146.667px', marginRight: '20px' }}>
                  <img src="/images/promotion_appScreen_slide2.jpg" alt="견적의뢰서 작성" />
                  <span className="font_content3">견적서 받기</span>
                </div>

                <div className="swiper-slide swiper-slide-next" data-swiper-slide-index="0" style={{ width: '146.667px', marginRight: '20px' }}>
                  <img src="/images/promotion_appScreen_slide1.jpg" alt="견적의뢰서 작성" />
                  <span className="font_content3">견적의뢰서 작성</span>
                </div>

              <div className="swiper-slide swiper-slide-next" data-swiper-slide-index="3" style={{ width: '146.667px', marginRight: '20px' }}>
                  <img src="/images/promotion_appScreen_slide1.jpg" alt="견적의뢰서 작성" />
                  <span className="font_content3">긴급/당일/예약 분류</span>
                </div>

                <div className="swiper-slide" data-swiper-slide-index="4" style={{ width: '146.667px', marginRight: '20px' }}>
                  <img src="/images/promotion_appScreen_slide5.gif" alt="이용자 리뷰" />
                  <span className="font_content3">위치기반 업체 추천</span>
                </div>

                <div className="swiper-slide" data-swiper-slide-index="2" style={{ width: '146.667px', marginRight: '20px' }}>
                  <img src="/images/promotion_appScreen_slide3.gif" alt="견적서 받기" />
                  <span className="font_content3">이용자 리뷰</span>
                </div>

              </div>
              <div className="swiper-pagination swiper-pagination-fraction swiper-pagination-horizontal">
                <span className="swiper-pagination-current">5</span> / <span className="swiper-pagination-total">5</span>
              </div>
            </div>
          </div>
        </div>
    )
}

  export default PromotionAppScreenSliderBox;