(function(){
	function createItems(data){
		$.each(data, function(key,val){  		//遍历图片数据
			if(!val['jcr:created']){
				return;
			}
			if(val["img"]){
				var img = val["img"];
				$("#innerObj").attr("src",img);
			}
		});
	}
	function initOutputSize(data){
		var w= data['width'];
		var h = data['height'];
		if(!isNaN(w) && !isNaN(h)){
			$('body').height(h+'px');
			$('body').width(w+'px');
		}else{
			$('body').height("100%");
			$('body').width("100%");
		}
	}
	$(document).ready(function(){
		// 初始化输出大小
		initOutputSize(data);
		createItems(data);
		
	});
})()