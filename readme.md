***關於本專案***
## 目的
練習建立一簡單且具體的框架網頁

## 需求
1. node.js
2. 實現具體且清晰的 mvvm 架構
3. 實現 Observer pattern 使前端單一依賴觀察者
4. 實現 Repository pattern 抽離資料庫耦合


## step by step
### 環境
1. 先由 express 正體網站教學安裝 express 

[參考網站](http://expressjs.com/zh-tw/starter/generator.html)

2. 使用 bower 套件管理安裝所需套件

[參考網站](https://blog.wu-boy.com/2013/01/bower-is-a-package-manager-for-the-web/)
指令: bower i bootstrap font-awesome ionicons jquery knockout

3. 使用模版 AdminLTE Control Panel Template，複製相關檔案到 views 資料夾

[參考網站](https://adminlte.io/themes/AdminLTE/index2.html)

### 設定
1. 設定 routes/example.js 網址呼叫請求路由

2. 設定 app.js 載入指定路徑
包括以下：

'''
// 新增路由
var examples = require('./routes/example');

app.use('/example', examples);

// 設定第三方的靜態路徑
app.use(express.static(path.join(__dirname, 'bower_components')));
'''


### 頁面結構
使用 AdminLTE 的佈景進行 Layout 切版, 主檔置於 views/shared 路徑下
頁尾  foot.pug
頁首  header-bar.pug
主配置 layout.pug
左側控制區塊   sidebar-left.pug
右側訊息區塊   sidebar-right.pug


## 相關資料
### 使用工具及套件
1. [Microsoft Visual Studio Code](https://code.visualstudio.com/)
2. [Node.js](https://nodejs.org/en/)
3. [Express](http://expressjs.com/zh-tw/)
4. [Bootstrap](http://getbootstrap.com)
5. [Awesome](https://fortawesome.com)
6. [Ionic](http://ionicframework.com/)
7. [jQuery](http://www.jquery.com/)
8. [Knockout](http://knockoutjs.com/documentation/introduction.html)
9. [AdminLTE Control Panel Template](https://adminlte.io/)
10. [Pug JS](https://pugjs.org/api/getting-started.html)

### 參考及提示網站
[JQuery's documentation](http://api.jquery.com/)

[Knockout online examples](http://knockoutjs.com/examples/)

[Heroku html2pug](https://html2pug.herokuapp.com/)

[黑暗執行緒 - KO範例](http://blog.darkthread.net/post-2012-05-09-knockout-js-intro.aspx)

[jquery-twzipcode](https://code.essoduke.org/twzipcode/)

[Node.js SQLite3](http://www.w3resource.com/node.js/nodejs-sqlite.php)


此範例僅供練習使用，一套完整功能的程式是由無數人的智慧所累積而成的，感謝所有付出的人們