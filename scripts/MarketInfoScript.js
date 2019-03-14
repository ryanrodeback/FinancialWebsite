let app = new Vue({
  el: '#app',
  data: {
    stockTickers: ["IVV", "IUSV"],
    timeFrames: ["1d", "1m", "3m", "6m", "1y", "2y", "5y"]
  },
  created() {},
  computed: {

  },
  methods: {
    async getStockData(stockTicker, timeFrame) {
      const url = "https://api.iextrading.com/1.0/stock/" + stockTicker + "/chart/" + timeFrame;
      console.log(url);
      fetch(url)
        .then(function(response) {
          return response.json();
        })
        .then(function(json) {
          //console.log(json);
          let changeInPercent = json[0].close / json[json.length - 1].close;
          console.log((Math.floor(changeInPercent * 100) / 100).toString());
          return (Math.floor(changeInPercent * 100) / 100).toString();
        })
    },
  },
});



document.getElementById("ChartButton")
  .addEventListener("click", function(event) {
    event.preventDefault(); //event is the literal event. Has lots of weird stuff. event.preventDefault tells it not to reload everything
    let image = "<img id=\"InvestmentChart\" src=\"/InvestmentChart.pdf\" alt=\"Chart of Investment returns over the last 10 years. Source Wells Fargo\">";
    document.getElementById("marketInfoArea").innerHTML = image;
    document.getElementById("marketInfoArea").style.height = "auto";
  });

document.getElementById("symbolSubmit")
  .addEventListener("click", function(event) {
    event.preventDefault(); //event is the literal event. Has lots of weird stuff. event.preventDefault tells it not to reload everything
  });


document.getElementById("GraphButton")
  .addEventListener("click", function(event) {
    event.preventDefault(); //event is the literal event. Has lots of weird stuff. event.preventDefault tells it not to reload everything
    let image = "<div class=\"tradingview-widget-container\" style=\"height: calc(100% - 32px);\">\n      <div id=\"tv-medium-widget\" style=\"height: 100%;\"><iframe id=\"tradingview_28a5f\" src=\"https://s.tradingview.com/mediumwidgetembed/?symbols=S%26P%20500,IVW,IUSV,IJH,IJR,VWO,REET,AOA&amp;S%26P%20500=SP%3ASPX%7C1y&amp;IVW=AMEX%3AIVW%7C1y&amp;IUSV=NASDAQ%3AIUSV%7C1y&amp;IJH=AMEX%3AIJH%7C1y&amp;IJR=AMEX%3AIJR%7C1y&amp;VWO=AMEX%3AVWO%7C1y&amp;REET=AMEX%3AREET%7C1y&amp;AOA=AMEX%3AAOA%7C1y&amp;locale=en&amp;trendLineColor=%234bafe9&amp;underLineColor=%23dbeffb&amp;fontColor=%2383888D&amp;gridLineColor=%23e9e9ea&amp;width=100%25&amp;height=100%25&amp;utm_source=localhost&amp;utm_medium=widget_new&amp;utm_campaign=symbol-overview\" style=\"margin: 0 !important; padding: 0 !important; width: 100%; height: 100%;\" frameborder=\"0\" allowtransparency=\"true\" scrolling=\"no\"></iframe></div>\n      <div class=\"tradingview-widget-copyright\" style=\"width: 100%;\"><a href=\"https://www.tradingview.com/symbols/AAPL/\" rel=\"noopener\" target=\"_blank\"><span class=\"blue-text\">Apple</span></a>, <a href=\"https://www.tradingview.com/symbols/GOOGL/\" rel=\"noopener\" target=\"_blank\"><span class=\"blue-text\">Google</span></a> <span class=\"blue-text\">and</span> <a href=\"https://www.tradingview.com/symbols/SP-SPX/\" rel=\"noopener\" target=\"_blank\"><span class=\"blue-text\">S&amp;P 500 Quotes</span></a> by TradingView</div>\n      <script type=\"text/javascript\" src=\"https://s3.tradingview.com/tv.js\"></script>\n      <script type=\"text/javascript\">\n        new TradingView.MediumWidget({\n          \"container_id\": \"tv-medium-widget\",\n          \"symbols\": [\n            [\n              \"S&P 500\",\n              \"SP:SPX|1y\"\n            ],\n            [\n              \"IVW\",\n              \"AMEX:IVW|1y\"\n            ],\n            [\n              \"IUSV\",\n              \"NASDAQ:IUSV|1y\"\n            ],\n            [\n              \"IJH\",\n              \"AMEX:IJH|1y\"\n            ],\n            [\n              \"IJR\",\n              \"AMEX:IJR|1y\"\n            ],\n            [\n              \"VWO\",\n              \"AMEX:VWO|1y\"\n            ],\n            [\n              \"REET\",\n              \"AMEX:REET|1y\"\n            ],\n            [\n              \"AOA\",\n              \"AMEX:AOA|1y\"\n            ]\n          ],\n          \"greyText\": \"Quotes by\",\n          \"gridLineColor\": \"#e9e9ea\",\n          \"fontColor\": \"#83888D\",\n          \"underLineColor\": \"#dbeffb\",\n          \"trendLineColor\": \"#4bafe9\",\n          \"width\": \"100%\",\n          \"height\": \"100%\",\n          \"locale\": \"en\",\n        });\n      </script>\n    </div>";
    document.getElementById("marketInfoArea").innerHTML = image;
    document.getElementById("marketInfoArea").style.height = "500px";
  });