var days;
(function (days) {
    days[days["sunday"] = 10] = "sunday";
    days[days["monday"] = 11] = "monday";
    days[days["tuesday"] = 12] = "tuesday";
    days[days["wednesday"] = 13] = "wednesday";
    days[days["thursday"] = 14] = "thursday";
    days["friday"] = "hello";
    days["saturday"] = "hello world";
})(days || (days = {}));
var weekday = days.sunday;
console.log(weekday);
