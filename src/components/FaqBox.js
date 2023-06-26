import React, { useState } from 'react';



const FaqBox = () => {

    const [visibleSections, setVisibleSections] = useState({});

    const handleClick = (sectionKey) => {
        setVisibleSections(prevState => ({
            ...prevState,
            [sectionKey]: !prevState[sectionKey]
        }));
    }

    return(
        <div className="FaqBox box">
          <div className="font_content1 color_green_text headTitle" style={{ textAlign: 'center' }}>FAQ</div>
          <div>
            <div className="contentWrap">
              <div className="titleText">
              <img src="images/promition_qna_qicon.png" alt="질문 아이콘" />
                <span 
                    className={`font_content2 ${visibleSections.first ? 'active':''}`} 
                    onClick={() => handleClick('first')}
                >
                    B2C 서비스와 B2B 서비스의 차이는 무엇인가요?</span>
              </div>
                {visibleSections.first && (
                    <p className='answerText text_01'>
                        B2C 서비스란 사용자 ( 고객 ) 와 사업자를 연결 매칭하는 서비스<br></br>
                        또한 원하시는 공사 업체를 연결하고 견적의뢰서 및 견적서를 주고받는 공유 플랫폼<br></br>
                        <br></br>
                        B2B 서비스란 사업자와 사업자를 연결 매칭하는 서비스<br></br>
                        자재, 공구, 인력, 운송 업체 등 현장에서 필요한 업무를 온라인에서 공유하는 사업자 플랫폼<br></br>
                        </p>
                )}
            </div>

            <div className="contentWrap">
              <div className="titleText">
              <img src="images/promition_qna_qicon.png" alt="질문 아이콘" />
                <span
                    className={`font_content2 ${visibleSections.second  ? 'active':''}`} 
                    onClick={() => handleClick('second')}
                >
                    견적의뢰서 작성은 어떻게 하나요?</span>
              </div>
              {visibleSections.second && (
                    <p className='answerText text_02'>
                    사업자 정보 상세 페이지에서 우측 상단의 <img src='images/promotion_qnabox_paper.png'></img>(서류 모양 아이콘)을 터치한 후 작성하시면 됩니다.<br></br>
                    ( 자세히 기재 요망 )<br></br>
                    </p>
              )}
            </div>

            
            <div className="contentWrap">
              <div className="titleText">
              <img src="images/promition_qna_qicon.png" alt="질문 아이콘" />
              <span
                    className={`font_content2 ${visibleSections.Third ? 'active':''}`} 
                    onClick={() => handleClick('Third')}
                >
                    경적서는 어떻게 확인하나요?</span>
              </div>
              {visibleSections.Third && (
                    <p className='answerText text_03'>
                    공사업체 여러 곳을 선정하여 견적의뢰서를 작성하여 전송, 견적의뢰서를 받은 공사업체는 견적서를 작성하여<br></br>
                    고객에게 전송, 사용자 ( 고객 ) 는 여러 업체의 견적서를 받아 확인 후 공사업체 선정<br></br>
                    </p>
              )}
            </div>


            <div className="contentWrap">
              <div className="titleText">
              <img src="images/promition_qna_qicon.png" alt="질문 아이콘" />
              <span
                    className={`font_content2 ${visibleSections.Fourth ? 'active':''}`} 
                    onClick={() => handleClick('Fourth')}
                >
              견적의뢰서 및 견적서는 각각 몇개까지 받아볼 수 있나요?</span>
              </div>
              {visibleSections.Fourth && (
                    <p className='answerText text_04'>
                    ( 차후 정책에 따라 결정 예정 )<br></br>
                    </p>
              )}
            </div>


            <div className="contentWrap">
              <div className="titleText">
                <img src="images/promition_qna_qicon.png" alt="질문 아이콘" />
                <span
                    className={`font_content2 ${visibleSections.fifth ? 'active':''}`} 
                    onClick={() => handleClick('fifth')}
                >
                업체 등록 가맹점은 어떻게 신청하나요?</span>
              </div>
              {visibleSections.fifth && (
                    <p className='answerText text_05'>
                    우측 상단 <img src='images/promotion_qnabox_menu.png'></img>( 메뉴 아이콘 ) 터치 후<img src='images/promotion_qnabox_moniter.png'></img>( 공사콕 서비스 신청하기 아이콘 ) 에서 신청<br></br>
                    </p>
              )}
            </div>


          </div>
        </div>
    )
}

  export default FaqBox;