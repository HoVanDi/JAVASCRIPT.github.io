// type="text/javascript"
//         var a = "Hello";
//         var a = "World";
//         var c = a +" " + b;
//         // alert(c);
//         // document.write(c);
//         document.getElementById('kq').innerHTML =c;

function tinhtuoi(){
        var D = new Date();
        var Dateofbirth= import("Nhập ngày sinh của bạn:" ,0);
        var Monthofbirth= import("Nhập tháng sinh của bạn:" ,0);
        var Yearofbirth= import("Nhập năm sinh của bạn:" ,0);
        var ngay_thu = D.getDate();
        var Sotuoi = D.getFullYear() - Yearofbirth;
        alert("Hiện tại bạn" + Sotuoi + "tuổi" + "tuổi và bạn sinh vào ngày thứ"+ ngay_thu);
    }