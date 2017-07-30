function MyViewModel() {
    var self = this;
    //cities為所有縣市名稱組成的observableArray
    self.cities = ko.observableArray(cityNames);
    //city用來儲存目前挑選的縣市名稱
    self.city = ko.observable();
    //areas為一computed，會傳回city縣市所屬鄉鎮市區資料物件陣列
    self.areas = ko.computed(function () {
        var areaData = taiwanZipData[self.city()];
        var options = [];
        if (areaData) {
            for (var propName in areaData) {
                options.push({
                    value: propName + areaData[propName],
                    text: propName
                });
            }
        }
        return options;
    });
    //areaZip用來儲存鄉鎮市區加郵遞區號資料
    self.areaZip = ko.observable();
    //可寫式computed
    //用以傳回"台北市大安區106"格式之city + areaZip資料
    //變更內容時，會將"台北市大安區106"格式解析並更新至city與areaZip
    self.addrPrefix = ko.computed({
        read: function () {
            return (self.city() || "") + (self.areaZip() || "");
        },
        write: function (value) {
            if (value.length >= 3) {
                self.city(value.substr(0, 3));
            }
            if (value.length > 3) {
                self.areaZip(value.substr(3));
            }
        }
    });
}