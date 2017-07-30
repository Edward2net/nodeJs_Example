//很簡單的User資料物件
function UserViewModel(id, name, score) {
    var self = this;
    self.id = id;
    self.name = name;
    self.score = score;
}

function MyViewModel() {
    var self = this;
    self.users = ko.observableArray();
    //移除User，輸入參數為user物件
    //foreach產生的元素，click事件時會帶入該元素所繫結的資料物件
    self.removeUser = function(user) {
        self.users.remove(user);
    }
    //分數加總，透過神奇的Dendency Tracking功能
    //一旦有任何User分數更動，它就會自動更新
    self.totalScore = ko.computed(function () {
        var total = 0;
        $.each(self.users(), function (i, u) {
            total += u.score;
        });
        return total;
    });
}