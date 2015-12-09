/**
 * Protect window.console method calls, e.g. console is not defined on IE
 * unless dev tools are open, and IE doesn't define console.debug
 */
(function() {
  if (!window.console) {
    window.console = {};
  }
  // union of Chrome, FF, IE, and Safari console methods
  var m = [
    "log", "info", "warn", "error", "debug", "trace", "dir", "group",
    "groupCollapsed", "groupEnd", "time", "timeEnd", "profile", "profileEnd",
    "dirxml", "assert", "count", "markTimeline", "timeStamp", "clear"
  ];
  // define undefined methods as noops to prevent errors
  for (var i = 0; i < m.length; i++) {
    if (!window.console[m[i]]) {
      window.console[m[i]] = function() {};
    }    
  } 
})();

$(function() {
  // Highlight current page in navbar.
  $(".submenulink").each(function(key,value) {
    if (value.href == window.location.href) {
      $(value).parent().toggleClass("active");
    }
  });

  // Click region outside of iframe to close iframe window.
  $("#ex_bg").click(function() {
    closeIframe();
  });

  // Background music switch
  $(".music-switch").click(function() {
    var btn = $(this);
    var music = videojs("background-music");
    if (btn.hasClass("on")) {
      btn.removeClass("on");
      btn.addClass("off");
      music.pause();
    } else {
      btn.removeClass("off");
      btn.addClass("on");
      music.play();
    }
  });
});

var x;//x控制上导航
var IFRAMENAME = "" ;

// 屏幕宽高
var screenWidth ;
var screenHeight ;
window.onload = function() {
  setFlashSize();  
}
            
$(function() {
    clearTimeout(x);
    x=setTimeout(hideTopNav,7200000);
    
    $("#hoverArea").hover(function(){
        //$("#nabar").animate({"opacity":"1"});
        $("#nabar").animate({"opacity":"1"},{duration: 2000,start : function(){ $("#nabar").css("z-index","9998") } });
    });
    $("#nabar").hover(function(){
        clearTimeout(x);
    },function(){
        clearTimeout(x);
        x=setTimeout(hideTopNav,7200000);
    });
   
    //$("#nabar").animate({"margin-top":"-60px"},2000);
    setFlashSize();

    
    /**  -------------------     */
    
    // set title
    // document.title = STDJSON.title;
    
    // set navigation
    initNav();

});
            
function initNav() {
    // set link
/*                $.each($("#nabar .submenulink"), function(key, val) {
        var link = STDJSON.nav.submenu[key];
        $( this ).text(link.text);
        $( this ).attr("href", link.href);
        $( this ).attr("title", link.title);
    });*/
}

function hideTopNav() {
  $("#nabar").animate({"opacity":"0"},{duration: 2000,complete : function(){ $("#nabar").css("z-index","1") } });
}
                        
            $(window).resize(function(){
                 
                 var vh = window.screen.height;
                 var vw = window.screen.width;
                 
                 var sw = $(window).width();
                 var sh = $(window).height();
                 
                 if(sw == vw &&  ( vh - sh ) < 2 ){
                    var content = document.getElementById("ex_content"); // flash 显示 div
                    var nav = document.getElementById("nabar"); // flash 显示 nav
                    content.style.position = "absolute";
                    content.style.width = sw + "px";
                    content.style.height = sh + "px";
                    content.style.left = 0 + "px";
                    content.style.top = 0 + "px";
                    
                    nav.style.top = 0 + "px";
                    nav.style.left = 0 + "px";
                    
                 }else{
                    setFlashSize();
                 }
                 
                 // 由于ie6 浏览器的特殊性，在F11下 ie6 还是会存在一个标签栏，也就是说，他只是假全屏，所以只能减去标签栏这部分的像素了
                 if(document.all){  
                    if((sw - vw) < 5 &&  ( vh - sh ) < 36 ){
                        var content = document.getElementById("ex_content"); // flash 显示 div
                        //content.style.position = "absolute";
                        content.style.width = sw + "px";
                        content.style.height = sh + "px";
                        content.style.left = 0 + "px";
                        content.style.top = 0 + "px";
                        
                        nav.style.top = 0 + "px";
                        nav.style.left = 0 + "px";
                     }else{
                        setFlashSize();
                     }
                 }
                 
            });
            
            
            
            function setFlashSize(){ // 页面加载时，首先获取当前document显示区域的大小
               
                var screenWidth = $(window).width();
                var screenHeight = $(window).height();
                console.log("window width : " + screenWidth);
                console.log("window height : " + screenHeight);
                
                var content = document.getElementById("ex_content"); // flash 显示 div
                var ib = document.getElementById("iframe_border"); // 弹出框显示 div
                var ifm = document.getElementById("innerObj"); // 弹出框显示 div
                
                var nav = document.getElementById("nabar"); // flash 显示 nav
                var ha = document.getElementById("hoverArea");
                
                var foot = document.getElementById("footer");
                var logoImg = document.getElementById("logoImg");
                
                // 如果超出1440px宽时，我们就不以屏幕的大小动态的计算宽高了，直接限定一个宽高，不随着屏幕分辨率的增加而增加
                if(screenWidth > 1440){
                    // flash 显示区域
                    //content.style.position = "absolute";
                    //chenyang20141204新需求：全屏显示。
                    //content.style.width = 1440 + "px";
                    //content.style.height = 900 + "px";
                    //content.style.left = (screenWidth - 1440)/2 + "px";
                    //content.style.top = (screenHeight - 900)/2 + "px";
                    content.style.height = screenHeight + "px";
                    content.style.width = screenWidth + "px";
                    
                    //chenyang20141204-2 使用margin来做更方便。
                    //nav.style.width = 1440 + "px";
                    //nav.style.left = (screenWidth - 1440)/2 + "px";
                    //nav.style.top = (screenHeight - 900)/2 + "px";
                    
                    ha.style.width = 1440 + "px";
                    ha.style.left = (screenWidth - 1440)/2 + "px";
                    ha.style.top = (screenHeight - 900)/2 + "px";
                    
                    /* 设置弹出框区域大小  */
                    //chenyang20141204-3 按照当前分辨率进行调整。
                    //ib.style.width = 1440 * 0.9 + "px";
                    //ib.style.height =  900 * 0.85 + "px";
                    //ib.style.left = ( 1440 * 0.15 )/2 + (screenWidth - 1440)/2 + "px";
                    //ib.style.top = ( 900 * 0.2 )/2 + (screenHeight - 900)/2 + "px";
                    ib.style.height = screenHeight * 0.85 + "px";
                    ib.style.width =  (900/660)*screenHeight*0.85 + "px"
                    ib.style.left = ( screenWidth - (900/660)*screenHeight*0.95 )/2 + "px";
                    ib.style.top = ( screenHeight * 0.15 )/2 + "px";
  
                    /*调整iframe*/
                    if (ifm) {
                      ifm.style.height =ib.style.height;
                      ifm.style.width =  ib.style.width;
                    }

                    /** 设置foot */
                    // TODO(d3vin.chen@gmail.com): Why not set a fixed value on style property?
                    //foot.style.right = (screenWidth-1440)/2 + "px";
                    foot.style.bottom = 0 + "px";
                    
                    /** 设置logo */
                    logoImg.style.left = (screenWidth - 1440)/2 + "px";
                    logoImg.style.top = (screenHeight - 900)/2 + "px";
                    
                    return ;
                }
                
                // 如果是宽屏，以高为准，左右留白
                if(screenWidth > screenHeight){
                    //content.style.position = "absolute";
                    // 设置flash显示大小
                    content.style.height = screenHeight + "px";
                    //chenyang20141204新需求：全屏显示。
                    //content.style.width = (1440*screenHeight)/900 + "px";
                    content.style.width = screenWidth + "px";
                    
                    // 设置左右留白
                    //chenyang20141204新需求：全屏显示。
                    //content.style.left = ( screenWidth - (1440*screenHeight)/900 )/2 + "px";
                    
                    //chenyang20141204-2 使用margin来做更方便。
                    //nav.style.width = (1440*screenHeight)/900 + "px";
                    //nav.style.left = ( screenWidth - (1440*screenHeight)/900 )/2 + "px";
                    
                    /* 设置弹出框区域大小 */
                    // 展板大小是900x660
                    ib.style.height = screenHeight * 0.85 + "px";
                    ib.style.width =  (900/660)*screenHeight*0.85 + "px"
                    ib.style.left = ( screenWidth - (900/660)*screenHeight*0.95 )/2 + "px";
                    ib.style.top = ( screenHeight * 0.15 )/2 + "px";
                     
                    /*调整iframe*/
                    if(ifm){
                    ifm.style.height =ib.style.height;
                    ifm.style.width =  ib.style.width; }
                   
                    /** 设置foot */
                    //foot.style.right = (screenWidth-(1440*screenHeight)/900) + "px";
                    foot.style.bottom = 1 + "px";
                    
                    /** 设置logo */
                    logoImg.style.left = ( screenWidth - (1440*screenHeight)/900 )/2 + "px";
                    
                    
                }else{ //如果是竖屏，以宽为准，上下留白
                    //content.style.position = "absolute";
                    // 设置flash显示大小
                    content.style.width = screenWidth + "px";
                    content.style.height = (900*screenWidth)/1440 + "px";
                    // 设置上下留白
                    content.style.top = ( screenHeight - (900*screenWidth)/1440 )/2 + "px";
                    
                    /*  设置弹出框区域大小 */
                    ib.style.height = (900*screenWidth*0.9)/1440 + "px";
                    ib.style.width =  screenWidth*0.9 + "px"
                    ib.style.left = ( screenWidth - screenWidth*0.9 )/2 + "px";
                    ib.style.top = ( screenHeight - (900*screenWidth*0.9)/1440 )/2 + "px";
                    
                    /*调整iframe*/
                    if(ifm){
                    ifm.style.height =ib.style.height;
                    ifm.style.width = ib.style.width; }


                    /** 设置foot */
                    foot.style.right = (screenWidth-(1440*screenHeight)/900)/2 + "px";
                    foot.style.bottom = 1 + "px";
                    
                    /** 设置logo */
                    logoImg.style.top = ( screenHeight - (900*screenWidth)/1440 )/2 + "px";
                }
            }
            
            
            function stack(){

                  if(this.top==undefined){
                  //初始化堆栈的顶部指针和数据存放域
                        this.top=0;
                        this.unit=new Array();
                  }

                  this.push=function(pushvalue){
                  //定义压入堆栈的方法            
                        this.unit[this.top]=pushvalue;
                        this.top+=1;            
                  }

                  this.readAllElements=function(){
                  //定义读取所有数据的方法
                        if(this.top==0){
                              alert("当前栈空，无法读取数据");
                              return("");
                        }

                        var count=0;
                        var outStr="";
                                    
                        for(count=0;count<this.top;count++){
                              outStr+=this.unit[count]+",";
                        }            
                        return(outStr);
                  }

                  this.pop=function(){
                  //定义弹出堆栈的方法
                        if(this.top==0){
                              alert("当前栈空，无法弹出数据");
                              return("");
                        }

                        var popTo=this.unit[this.top-1];
                        this.top--;
                        return(popTo);

                        /* 从堆栈弹出数据，顶部指针减一，不过这里没有做到资源的释放，也
                        就是说数据仍然存在于this.unit的数组中，只不过无法访问罢了。目前
                        我也没想到好的办法解决。*/
                  }

            }
            
            // 接收一个模板id，和一个点击热区的id
            var raino = new stack();
            function receiveUrl(id){
                console.log("receiveUrl id : "+id);
            
                var hId = Number(id); // 强制转换成数字格式
                
                raino.push(hId); //入栈 方便以后实现前进，后退功能实用
                
                urlTranslate(hId);
            }
            

            function urlTranslate(id){
                document.getElementById("ex_bg").style.display = "block";
                document.getElementById("iframe_border").style.display = "block";
                var parentNode = document.getElementById("iframe_border");
                
                //若不存在展品，也要设置弹出框尺寸
                if(!(id in HOTSPOT_JSON_LIST)){
                    //setIframeBorderSize(900,660);
                }
                
            
                    parentNode.innerHTML =  '<p id="prompt">此展位暂时没有展品</p><img src="img/del_but.png" id="del" onclick="closeIframe();">';
                   // parentNode.innerHTML =  "<p id=\"prompt\">此展位暂时没有展品</p><div id='del' onclick='closeIframe();'>x</div> ";
                    for(var i=0;i<HOTSPOT_JSON_LIST.length;i++){
                        var conId = Number(HOTSPOT_JSON_LIST[i].id);
                        var fFormat = Number(HOTSPOT_JSON_LIST[i].format);
                        var fRef = HOTSPOT_JSON_LIST[i].ref;
                        if(conId == id){
                            if( id == 100){
                                nineCreateHtmlIframe(parentNode,fRef);                          
                            }else{
                                createHtmlIframe(parentNode,fRef);
                            }
                        }
                    }
            }

            function nineCreateHtmlIframe(pNode,fName){
               // pNode.innerHTML =  " <div id='del' onclick='closeIframe();'>x</div>  "
                pNode.innerHTML =  " <img src='img/del_but.png' id='del' onclick='closeIframe();'> "
                                    +"<div class=\"btn-group\" id=\"xiala\">"
                                    +"    <button class=\"btn dropdown-toggle\" data-toggle=\"dropdown\">多维展示<span class=\"caret\"></span></button>"
                                    +"    <ul class=\"dropdown-menu\" id='ddm'>"
                                    +"      <li><a href=\"#\" onclick='changeIframe(\"12\");'>图片介绍</a></li>"
                                    +"      <li><a href=\"#\" onclick='changeIframe(\"14\");'>视频介绍</a></li>"
                                    +"      <li><a href=\"#\" onclick='changeIframe(\"15\");'>3D展示</a></li>"
                                    +"    </ul>"
                                    +"  </div>"
                                    + " <iframe id='innerObj' src='source/hot_12/index.html'> ";
            }

            function createHtmlIframe(pNode,fName){
                //pNode.innerHTML =  " <div id='del' onclick='closeIframe();'>x</div>  "
                IFRAMENAME = fName ;
                pNode.innerHTML =  "<img src='img/del_but.png' id='del' onclick='closeIframe();'> "// 
                                    + " <iframe id='innerObj' src="+fName+" name='outer' > ";//onload='setIPopupSize();'
            }

            function closeIframe(){

                var innerObj = document.getElementById("innerObj");
                var parentNode = document.getElementById("iframe_border");
                var ex_bg = document.getElementById("ex_bg");
                var innerObj = document.getElementById("innerObj");

                if(innerObj != null &&parentNode !=null){
                    var name = document.getElementById("innerObj").getAttribute("name");
                    
                    if(name == "outer"){
                        ex_bg.style.display = "none";
                        parentNode.style.display = "none";
                        //setIframeBorderSize(900,660);
                        // 在创建节点前，首先删除parentNode中所有的节点。
                        for(var i=0;i<parentNode.childNodes.length;i++){
                            parentNode.removeChild(parentNode.childNodes[i]);
                        }
                        
                    }else if(name == "inner"){
                        innerObj.setAttribute("name","outer");
                        innerObj.setAttribute("src",IFRAMENAME);

                    }else {
                        ex_bg.style.display = "none";
                        parentNode.style.display = "none";
                    }
                }else{
                    ex_bg.style.display = "none";
                    parentNode.style.display = "none";
                    //setIframeBorderSize(900,660);
                }

                
            }

            function openNewWindow(){
                window.open(GLOBAL_VAR + "?url=" + document.URL);
            }

            function changeIframe(id){
                switch(id){
                    case "12":
                        document.getElementById("innerObj").src = "source/hot_12/index.html";
                        break;
                    case "14":
                        window.open("http://v.youku.com/v_show/id_XNDg1MTM3NjEy.html");
                        break;
                    case "15":
                        document.getElementById("innerObj").src = "source/hot_15/iframe.html";
                        break;
                }
            }

            function navEvent(id){
                switch(id){
                    case "1":
                        urlTranslate(1);
                        break;
                    case "2":
                        urlTranslate(2);
                        break;
                    case "3":
                        urlTranslate(13);
                        break;
                }
            }

            // 根据固定尺寸来设置弹出框尺寸
            function setIPopupSize(){

                var iframe = $("#innerObj");
                var w =0;
                var h = 0;  
                
                if(iframe[0].contentWindow.data){

                    var data = iframe[0].contentWindow.data;
                    var w1= data['width'];
                    var h1= data['height'];
                    //未指定的宽高选择默认尺寸 900*660
                    if(!isNaN(w1) && !isNaN(h1)){
                        w =w1;
                        h =h1;
                    }else{
                        w =900;
                        h = 660;
                    }       
                }else{
                    w =900;
                    h = 660;
                }
                    setIframeSize(w,h);
            }

            //设置iframe的尺寸
            function setIframeSize(w,h){
                var iframe = $("#innerObj");
                iframe.width(w+'px');
                iframe.height(h+'px');
                //setIframeBorderSize(w,h);
            }

            //设置iframe外部div的尺寸
            function setIframeBorderSize(w,h){
                var ifb = $("#iframe_border");
                
                 //显示区域尺寸同 document.body.clientWidth
                var windowWidth = $(window).width();
                var windowHeight =$(window).height();       
                ifb.width(windowWidth*0.6+'px');
                ifb.height(windowHeight*0.6+'px');
                
                //居中
                ifb.css("left",((windowWidth - w)/2) + 'px');
                ifb.css("top",((windowHeight -h)/2) + 'px');   
                
                if((windowHeight - h) < 80){   //防止关闭按钮被菜单栏盖住 top = (windowHeight - iframe.height())/2
                    ifb.css("top",((windowHeight - h)/2) + 48 + 'px'); 
                }
            }

       
    jQuery(function(){             
        function rollUpFilterSelect(obj) { 
            var _obj = obj; 
            jQuery(_obj).css({ "box-shadow": "none", "-webkit-box-shadow": "none", "-moz-box-shadow": "none","width":"150px;" }); 
            jQuery(".tag_selector").slideUp(150, function() { 
                jQuery(":first", _obj).stop().animate({"width": jQuery.data(document, "filterSelectInitWidth") + "px"}, 150, function() { 
                    jQuery(obj).removeClass("locked");                   
                }); 
            }); 
        } 
     
        jQuery("ul.tags li").mouseover( 
            function() { 
                var filterSelectedOption = jQuery(".tag_picker").children().first(); 
                jQuery("span", filterSelectedOption).text(jQuery(this).text()); 
                jQuery.data(document, "filterSelectInitWidth", jQuery("span", filterSelectedOption).width()); 
            } 
            ).click( 
                function(){ 
                    //alert(jQuery(this).text()); 
                    jQuery("#filter-select-post").remove(); 
                    
                    if(jQuery(this).text()=='多维信息展示') { 
                        jQuery("<form id='filter-select-post' action='index.php?option=com_k2&view=latest&layout=latest&Itemid=58' method='post'></form>").prependTo(".tag_picker"); 
                        jQuery("#filter-select-post").submit(); 
                    } 
                    else if(jQuery(this).text()=='FAVORITES'){ 
                        jQuery("<form id='filter-select-post' action='index.php?option=com_k2&view=itemlist&task=favorite&Itemid=58' method='get'><input type='hidden' name='task' value='favorite'><input type='hidden' name='view' value='itemlist'></form>").prependTo(".tag_picker"); 
                        jQuery("#filter-select-post").submit(); 
                    } else if(jQuery(this).text()=='POPULAR'){ 
                        jQuery("<form id='filter-select-post' action='index.php?option=com_k2&view=itemlist&task=popular&Itemid=58' method='get'><input type='hidden' name='task' value='popular'><input type='hidden' name='view' value='itemlist'></form>").prependTo(".tag_picker"); 
                        jQuery("#filter-select-post").submit(); 
                    } else{ 
                        jQuery("<form id='filter-select-post' action='index.php?option=com_k2&view=itemlist&task=tag&tag=" + jQuery(this).text() + "' method='post'><div><input type='hidden' name='tag' value='" + jQuery(this).text() + "' /><input type='hidden' name='option' value='com_k2' /><input type='hidden' name='view' value='itemlist' /><input type='hidden' name='task' value='tag'></div></form>").prependTo(".tag_picker"); 
                        jQuery("#filter-select-post").submit(); 
                         
                    } 
                }
            );             
        }); 
