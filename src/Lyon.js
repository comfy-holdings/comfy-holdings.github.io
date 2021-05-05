import './Lyon-finance/assets/css/main.css';
import './Lyon-finance/assets/css/fontawesome-all.min.css';
import bg from './Lyon-finance/assets/css/images/lyon-finance.png';

export default () => <>
    <div id="bg"></div>
    <div id="overlay"></div>
    <div id="main">
        <header id="header">
          <img className="lyon-heading" src={bg}></img>
          <h3>ERC20 Contract Address</h3>
          <p>0x0e29041fb31a3e7f5f7f6a917a7df006f75a7373</p>
          <nav>
            <ul>
              <li><a href="https://t.me/Lyon_Finance" target="_blank" className="icon brands fa-telegram" title="Telegram"><span className="label">Telegram</span></a></li>
              <li><a href="https://twitter.com/Lyon_Finance" target="_blank" className="icon brands fa-twitter" title="Twitter"><span className="label">Twitter</span></a></li>
              <li><a href="https://etherscan.io/token/0x0e29041fb31a3e7f5f7f6a917a7df006f75a7373" target="_blank" className="icon brands fa-ethereum" title="Etherscan"><span className="label">Etherscan</span></a></li>
              <li><a href="https://www.dextools.io/app/uniswap/pair-explorer/0x0e29041fb31a3e7f5f7f6a917a7df006f75a7373" target="_blank" className="fas fa-chart-line" title="Dext Tools"><span className="label">
              Dext Tools</span></a></li>
              <li><a href="https://app.uniswap.org/#/swap?inputCurrency=0x0e29041fb31a3e7f5f7f6a917a7df006f75a7373" target="_blank" className="fa fa-coins" title="Uniswap"><span className="label">
              Uniswap</span></a></li>
            </ul>
          </nav>
        </header>

        <footer id="footer">
          <span className="copyright">&copy; Lyon Finance 2021 <a href=""></a></span>
        </footer>

    </div>
  </>
