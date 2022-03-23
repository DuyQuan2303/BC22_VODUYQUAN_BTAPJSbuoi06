function getEle(id) {
    return document.getElementById(id);
  }
// Bai tap 1

  function timSoNguyenDuongNhoNhat (){
      let sum = 1 ;
      let n = 1 ;
      while (sum < 10000){
        n++ ; 
        sum += n ;
      }
    //   return n ;
      console.log(sum);
      console.log(n);
      var kq = "Số nguyên dương bé nhất là " + n;
      return kq;
  }

//   timSoNguyenDuongNhoNhat();

getEle("footerSoNguyenDuongNhoNhat").innerHTML = timSoNguyenDuongNhoNhat();

// Bai tap 2 
function baiTap2 (x,n){
    var sum = 0 ;
    for (var i = 1 ; i <= n; i++){
        sum += Math.pow(x, i)
    }
    return sum;
}

getEle("btnBaiTap2").addEventListener("click", function (){
    var x  = getEle("txtX").value ;
    var n = getEle("txtN").value ;
    var ketQua = baiTap2(x,n);
    getEle("footerBaiTap2").innerHTML = ketQua ;
})


// Bai tap 3 
function baiTap3 (N){
    var giaithua = 1 ;
    for (var i = 1; i <= N ; i++){
        giaithua *= i ;
    }
    return giaithua ;
}

getEle("btnBaiTap3").addEventListener("click", function(){
    var N = getEle("txtN1").value ;
    var ketQuaBT3 = baiTap3(N);
    getEle("footerBaiTap3").innerHTML = ketQuaBT3;
})

// Bài tập 4 
function taothediv(){
    var taothe = "";
    for (var i = 1; i <= 10 ; i++){
        if (i % 2 == 0){
            taothe += "<div style='color:white; background-color:red'> Khối chẵn số: "+ i +"</div>";
        }else {
            taothe += "<div style='color:white; background-color:blue'> Khối lẻ số: "+ i +"</div>";
        }
        // return taothe;
    }
}

getEle("btnBaiTap4").onclick =  function(){
    var taoThe = "";
    for (var i = 1; i <= 10 ; i++){
        if (i % 2 == 0){
            taoThe += "<div style='color:white; background-color:red'> Khối chẵn số: "+ i +"</div>";
        }else {
            taoThe += "<div style='color:white; background-color:blue'> Khối lẻ số: "+ i +"</div>";
        }
        // return taothe;
    }
    getEle("footerBaiTap4").innerHTML = taoThe;

}

