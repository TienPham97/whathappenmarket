import './BestProduct.css'

function BestProduct() {
    return (
        <div className="bestProduct">
            <div className="bstProText">
                <span className="bstProTitle">best product</span>
                <span className="bstProContent">How to create mobile-optimized videos in minutes. Not a designer,
                    every team makes a lot of videos Can be trimmed. Take the first </span>
            </div>
            <div className="bstProContainer">
                <div id="bstProItem1">
                    <div className="bstProBg">
                        <img srcSet="img/producticon-bg.png" alt="" />
                        <span style={{left : '6%'}}>01</span>
                    </div>
                    <div className="bstProBtn">
                        <span>How to create mobile-optimized</span>
                        <div><img src="img/go-icon.png" alt="" /></div>
                    </div>
                </div>
                <div id="bstProItem2">
                <div className="bstProBg">
                        <img srcSet="img/producticon-bg.png" alt="" />
                        <span  style={{left : '5%'}}>02</span>
                    </div>
                    <div className="bstProBtn">
                        <span>How to create mobile-optimized</span>
                        <div><img src="img/go-icon.png" alt="" /></div>
                    </div>
                </div>
                <div id="bstProItem3">
                <div className="bstProBg">
                        <img srcSet="img/producticon-bg.png" alt="" />
                        <span  style={{left : '5%'}}>03</span>
                    </div>
                    <div className="bstProBtn">
                        <span>How to create mobile-optimized</span>
                        <div><img src="img/go-icon.png" alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BestProduct;