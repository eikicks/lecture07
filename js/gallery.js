var photoListElement = document.querySelector("#photos");
//photosへ挿入

var photoList = [
    {src: "img/200705.png", title: "7月"},
    {src: "img/200806.png", title: "8月"},
	  {src: "img/200902.png", title: "9月"},
	  {src: "img/201008.png", title: "もう1回8月"},
    {src: "img/front.png", title: "前"},
    {src:	"img/side.png", title: "横"},
        {src: "img/111.png", title: "自分の1"},
    {src: "img/222.png", title: "自分の2"},
    {src: "img/333.png", title: "自分の3"}
];
//リストに画像を追加

var isReady = function(){
    return photoListElement != null &&
    //#photosが存在し、なおかつ
        photoList != null &&
        //photolistが空ではなく、なおかつm
        
        photoList.length > 0;
        //photolistの中のファイル数が０以上
};

var renderPhoto = function(index){
    var photo = photoList[index];
    var elm = document.createElement("img");
    //画像の要素を挿入する
    elm.setAttribute("src", photo.src);
    elm.setAttribute("title", photo.title);
    //要素に属性を追加
    return elm;
    //elmを実行する
};

var showPhotos = function(){
    if(isReady()){
        var index = 0;
        while(index < photoList.length){
            //indezの値がphotolistないの数より小さいとき、
            var elm = renderPhoto(index);
            //elmを呼び出す
            photoListElement.appendChild(elm);
            //要素を追加する
            index = index + 1;
            //indexを+1する
        }
    }
};
//

var initApp = function(){
    var btn = document.querySelector("#startButton");
    btn.addEventListener("click", showPhotos);
};
//startbuttonをクリックすることで、関数showphotoを呼び出す
initApp();
//initappの関数を呼び出す
