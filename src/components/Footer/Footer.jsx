import './Footer.css';

function Footer() {
    return (
        <footer>
            <div className="topFooter">
                <div className="topLeftFooter">
                    <span className="topLeftFooterTitle">what happended</span>
                    <ul>
                        <li>[공지] 개인 정보 처리 방침 변경 사전 안내</li>
                        <li>[공지] 29CM 강남 스토어 영업 종료</li>
                        <li>[공지] 개인 정보 처리 방침 변경 사전 안내</li>
                        <li>[공지] iOS 10 이하 버전 지원 중단 안내</li>
                        <li>[공지] 개인 정보 처리 방침 변경 사전 안내</li>
                    </ul>
                </div>
                <dir className="topRightFooter">
                    <div className="topRightFooterItem">
                        <span className="topRightFooterTitle">about us</span>
                        <ul>
                            <li>회사 소개</li>
                            <li>인재 채용</li>
                            <li>상시 할인 혜택</li>
                        </ul>
                    </div>
                    <div className="topRightFooterItem">
                        <span className="topRightFooterTitle">order</span>
                        <ul>
                            <li>내 주문</li>
                            <li>주문 배송</li>
                            <li>취소 / 교환 / 반품 내역</li>
                            <li>상품 리뷰 내역</li>
                            <li>증빙 서류 발급</li>
                        </ul>
                    </div>
                    <div className="topRightFooterItem">
                        <span className="topRightFooterTitle">my account</span>
                        <ul>
                            <li>회원 정보 수정</li>
                            <li>회원 등급</li>
                            <li>마일리지 현황</li>
                            <li>쿠폰</li>
                        </ul>
                    </div>
                    <div className="topRightFooterItem">
                        <span className="topRightFooterTitle">help</span>
                        <ul>
                            <li>1 : 1 상담 내역</li>
                            <li>상품 Q & A 내역</li>
                            <li>공지 사항</li>
                            <li>자주하는 질문</li>
                            <li>고객의 소리</li>
                        </ul>
                    </div>
                </dir>
            </div>
            <div className="footerLine"></div>
            <div className="bottomFooter">
                <div className="bottomLeftFooter">
                    <span>© 2020-2021 what happened corp  l  (주) 왓헤픈 | 대표자 : 홍길동 | 사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr</span>
                    <span>서울특별시 강남구 도산대로 8길 17 | FAX : 070-0000-0000  l  서비스 이용약관  l  개인정보처리방침</span>
                </div>
                <dir className="bottomRightFooter">
                    <img src="img/snsicon-01.png" alt="" />
                    <img src="img/snsicon-02.png" alt="" />
                    <img src="img/snsicon-03.png" alt="" />
                </dir>
            </div>
        </footer>
    );
}

export default Footer;