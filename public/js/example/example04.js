function MyViewModel() {
    var self = this;
    
    // 以下處理只有三碼的雙向結合
    self.cities3 = ko.observableArray(cityNames);
    self.city3 = ko.observable();
    self.areas3 = ko.computed(function () {
        var areaData = taiwanZipData[self.city3()];
        var options = [];
        if (areaData) {
            for (var propName in areaData) {
                options.push({
                    value: areaData[propName],
                    text: propName
                });
            };
        }
        return options;
    });
    self.areaZip3 = ko.observable();
    self.addrPrefix3 = ko.computed({
        read: function () {
            return (self.areaZip3() || "");
        },
        write: function (value) {
            // self.city3("桃園市");
            if (value.length >= 3) {
                var zipNumber = value.substr(0,3);
                for (var obj in taiwanZipData) {
                    if (taiwanZipData.hasOwnProperty(obj)) {
                        for (var prop in taiwanZipData[obj]) {
                            if (taiwanZipData[obj].hasOwnProperty(prop) && taiwanZipData[obj][prop] == zipNumber) {
                                self.city3(obj);
                            }
                        }
                    }
                }
            }

            if (value.length >= 3) {
                self.areaZip3(value);
            }
        }
    });
}