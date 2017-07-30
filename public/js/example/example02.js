//將ViewModel宣告成function，方便擴充額外功能
function MyViewModel() 
{
    //由於this在不同範圍代表意義有別，
    //習慣上會用self代表ViewModel本體，不易混淆
    var self = this;
    self.firstName = ko.observable("Jeffrey");
    self.lastName = ko.observable("Lee");
    //使用ko.computed宣告函數，透過運算產生屬性值
    self.fullName = ko.computed(function () {
        //透過ko.observable宣告的屬性，
        //要用propName()方式取得最新結果
        return self.firstName() + " "
                    + self.lastName();
    })
}