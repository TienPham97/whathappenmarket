import './HappenIssue.css'

function HappenIssue() {
    return (
        <div className="happenIssue">
            <span className="happenIssueTitle">Happened’s issue</span>
            <span className="happenIssueContent">모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.</span>
            <div className="btnHappenIssueSeeMore">
                <button className="btnSeeMore">see more</button>
            </div>
            <div className="happenIssueContainer">
                <div id="happenIssueItem1">
                    <span>
                        whpn
                        issue
                    </span>
                    <div style={{marginTop: '2vw'}}><img src="img/HappenIssue/news-img-01.png" alt="" /></div>
                    <div id="happenIssueObj1"><img src="img/HappenIssue/news-object-03.png" alt="" /></div>
                </div>
                <div>
                    <div style={{ background: '#110e03', flex: '1.5', display: 'flex', justifyContent: 'center', alignItems: 'center' , position: 'relative'}}>
                        <span className="happenIssueItemTitle">b brand</span>
                        <div id="happenIssueObj2"><img src="img/HappenIssue/news-object-04.png" alt="" /></div>
                    </div>
                    <div id="happenIssueItem2-img"></div>
                </div>
                <div>
                    <div style={{ background: '#110e03', flex: '1.5', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <span className="happenIssueItemTitle">c brand</span>
                    </div>
                    <div id="happenIssueItem3-img"></div>
                </div>
                <div>
                    <div style={{ background: '#ff5500', flex: '1.5', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <span className="happenIssueItemTitle">d brand</span>
                    </div>
                    <div id="happenIssueItem4-img">
                        <div id="happenIssueObj3"><img src="img/HappenIssue/news-object-05.png" alt="" /></div>
                    </div>
                </div>
                <div>
                    <div style={{ background: '#110e03', flex: '1.5', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <span className="happenIssueItemTitle">e brand</span>
                    </div>
                    <div id="happenIssueItem5-img"></div>
                </div>
            </div>
        </div>
    );
}

export default HappenIssue;