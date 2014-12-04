
	
	$defaultViewMode="normal"; //full, normal, original
	$tsMargin=30; //first and last thumbnail margin (for better cursor interaction) 
	$scrollEasing=600; //scroll easing amount (0 for no easing) 
	$scrollEasingType="easeOutCirc"; //scroll easing type 
	$thumbnailsContainerOpacity=0.8; //thumbnails area default opacity
	$thumbnailsContainerMouseOutOpacity=0; //thumbnails area opacity on mouse out
	$thumbnailsOpacity=0.6; //thumbnails default opacity
	$nextPrevBtnsInitState="show"; //next/previous image buttons initial state ("hide" or "show")
	$keyboardNavigation="on"; //enable/disable keyboard navigation ("on" or "off")
	var totalContent=0;
	$toolbar=$("#toolbar");
	$toolbar_a=$("#toolbar a");
	$bgimg=$("#bgimg");
	$.init = function()
	{
		//cache vars
		$thumbnails_wrapper=$("#thumbnails_wrapper");
		$outer_container=$("#outer_container");
		$thumbScroller=$(".thumbScroller");
		$thumbScroller_container=$(".thumbScroller .container");
		$thumbScroller_content=$(".thumbScroller .content");
		$thumbScroller_thumb=$(".thumbScroller .thumb");
		$preloader=$("#preloader");
		
		//$img_title=$("#img_title");
		$nextImageBtn=$(".nextImageBtn");
		$prevImageBtn=$(".prevImageBtn");
	}
	$.initload = function(){
		$.init();
		//��ʼĬ������ͼƬΪ���״̬�� ΪidΪtoolbar��ǩԪ���и������� �����ݵ�����ΪimageViewMode,����ֵΪfull������normal��
		$toolbar.data("imageViewMode",$defaultViewMode);        
		if($defaultViewMode=="full"){
			$toolbar_a.html("<img src='images/toolbar_n_icon.png' width='50' height='50'  />").attr("onClick", "$.ImageViewMode('normal');return false").attr("title", "�ָ�");
		} else {
			$toolbar_a.html("<img src='imagestoolbar_fs_icon.png' width='50' height='50'  />").attr("onClick", "$.ImageViewMode('full');return false").attr("title", "���");
		}
		//��ʾ��һ��/��һ��ͼƬ��ť
		//ShowHideNextPrev($nextPrevBtnsInitState);
		//thumbnail scroller
		//��������ͼ����߾�
		$thumbScroller_container.css("marginLeft",$tsMargin+"px"); //add margin
		//��ȡclassΪthumbScroller_container��Ԫ��λ�ã�Ԫ�ص�leftλ�ã����븸Ԫ�أ�class ΪthumbScroller��Ԫ�أ���ƫ�
		sliderLeft=$thumbScroller_container.position().left;
		sliderWidth=$outer_container.width();
		$thumbScroller.css("width",sliderWidth);
		
		fadeSpeed=200;
		
		$the_outer_container=document.getElementById("outer_container");
		 $placement=findPos($the_outer_container);
		$thumbScroller_content.each(function () {
			var $this=$(this);
			if($this.children().children().children(".thumb").width()){
				//��ȡÿһ��ͼƬ�Ŀ�ȣ������ڱ߾�padding��
				totalContent+=$this.innerWidth();
			}else{
				totalContent+= 220;
			}
			$thumbScroller_container.css("width",totalContent);
			//�涨��ǰԪ�شӵ�ǰ͸����һ�����ٶȱ任��ָ����͸����ֵ��
			$this.children().children().children(".thumb").fadeTo(fadeSpeed, $thumbnailsOpacity);
			$thumbnails_wrapper.fadeTo(fadeSpeed, $thumbnailsContainerOpacity);
		});
		//Ϊ$outer_container������һ��ͼƬ������
		$outer_container.data("nextImage",$(".content").first().next().find("a").attr("href"));
		$outer_container.data("nextImageName",$(".content").first().next().find("a").attr("name"));
		//Ϊ$outer_container������һ��ͼƬ������
		$outer_container.data("prevImage",$(".content").last().find("a").attr("href"));
		$outer_container.data("prevImageName",$(".content").last().find("a").attr("name"));
		init_event();
	}
		
		
	function init_event(){	
		$thumbScroller.mousemove(function(e){
			if($thumbScroller_container.width()>sliderWidth){
				//���������ĵ������Ե��X�����λ��
				var mouseCoords=(e.pageX - $placement[1]);
				var mousePercentX=mouseCoords/sliderWidth;
				var destX=-((((totalContent+($tsMargin*2))-(sliderWidth))-sliderWidth)*(mousePercentX));
				var thePosA=mouseCoords-destX;
				var thePosB=destX-mouseCoords;
				if(mouseCoords>destX){
					$thumbScroller_container.stop().animate({left: -thePosA}, $scrollEasing,$scrollEasingType); //with easing
				} else if(mouseCoords<destX){
					$thumbScroller_container.stop().animate({left: thePosB}, $scrollEasing,$scrollEasingType); //with easing
				} else {
					$thumbScroller_container.stop();  
				}
			}
		});

		$thumbScroller_thumb.hover(
			function(){ //mouse over
				var $this=$(this);
				$this.stop().fadeTo(fadeSpeed, 1);
			},
			function(){ //mouse out
				var $this=$(this);
				$this.stop().fadeTo(fadeSpeed, $thumbnailsOpacity);
			}
		);
	//next/prev images buttons
	$nextImageBtn.click(function(event){
		//event.preventDefault();
		SwitchImage($outer_container.data("nextImage"),$outer_container.data("nextImageName"));
		var $this=$("#outer_container a[href='"+$outer_container.data("nextImage")+"']");
		GetNextPrevImages($this);
		
	});

	$prevImageBtn.click(function(event){
		//event.preventDefault();
		SwitchImage($outer_container.data("prevImage"),$outer_container.data("prevImageName"));
		var $this=$("#outer_container a[href='"+$outer_container.data("prevImage")+"']" );
		GetNextPrevImages($this);
	});
 }

	function BackgroundLoad($this,imageWidth,imageHeight,imgSrc,imgJson){
		$this.attr("src", "").attr("src", imgSrc); //change image source
		$("#bgimg").attr("name", "").attr("name", imgJson);
	}
	//get next/prev images
	function GetNextPrevImages(curr){
		var nextImage=curr.parents(".content").next().find("a").attr("href");
		var nextImageName = curr.parents(".content").next().find("a").attr("name");
		if(nextImage==null){ //if last image, next is first
			nextImage=$(".content").first().find("a").attr("href");
			nextImageName = $(".content").first().find("a").attr("name");
		}
		$outer_container.data("nextImage",nextImage);
		$outer_container.data("nextImageName",nextImageName);
		var prevImage=curr.parents(".content").prev().find("a").attr("href");
		var prevImageName = curr.parents(".content").prev().find("a").attr("name");
		if(prevImage==null){ //if first image, previous is last
			prevImage=$(".content").last().find("a").attr("href");
			prevImageName = $(".content").last().find("a").attr("name");
		}
		$outer_container.data("prevImage",prevImage);
		$outer_container.data("prevImageName",prevImageName);
	}

	//switch image
	function SwitchImage(img,img_json){
		var theNewImg = new Image();
		theNewImg.onload = CreateDelegate(theNewImg, theNewImg_onload);
		theNewImg.src = img;
		theNewImg.name = img_json;
	}
	
	//get new image dimensions
	function CreateDelegate(contextObject, delegateMethod){
		return function(){
			return delegateMethod.apply(contextObject, arguments);
		}
	}

	//new image on load
	function theNewImg_onload(){
		$bgimg.data("newImageW",this.width).data("newImageH",this.height);
		BackgroundLoad($bgimg,this.width,this.height,this.src,this.name);
	}


	//function to find element Position
		function findPos(obj) {
			var curleft = curtop = 0;
			if (obj.offsetParent) {
				curleft = obj.offsetLeft
				curtop = obj.offsetTop
				while (obj = obj.offsetParent) {
					curleft += obj.offsetLeft
					curtop += obj.offsetTop
				}
			}
			return [curtop, curleft];
		}