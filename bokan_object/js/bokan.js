$(function(){
	var audioBox = document.getElementById('audioBox');
	var mySwiper = new Swiper('#allContent',{
		direction:'vertical',
		onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
    		swiperAnimateCache(swiper); //隐藏动画元素 
  			swiperAnimate(swiper); //初始化完成开始动画

  		}, 
		onSlideChangeEnd: function(swiper){ 
  			swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
  			if(mySwiper.activeIndex==0){
				$('.slider1cont').css('-webkit-animation','slideOneCon 1.5s 1.5s 1 forwards');
  				$('.slider1cont').css('animation','slideOneCon 1.5s 1.5s 1 forwards');

			}
			else{
				$('.slider1cont').css('-webkit-animation','');
				$('.slider1cont').css('animation','');
			}
			if(mySwiper.activeIndex==1){
				$('.slider2PicBox img').each(function(){
					var num = $(this).index()+4;
					$(this).css('animation','slider2PicRot 1s '+num+'s 1 forwards');
					$(this).css('-webkit-animation','slider2PicRot 1s '+num+'s 1 forwards');
					console.log(num);
				});
			}
			else{
				$('.slider2PicBox img').each(function(){
					$(this).css('animation','');
					$(this).css('-webkit-animation','');
				});
			}
			if(mySwiper.activeIndex==3){
				$('.circleBox').css('animation','circleBoxBig 2s 1s 1 forwards');
				$('.circleBox').css('-webkit-animation','circleBoxBig 2s 1s 1 forwards');
			}
			else{
				$('.circleBox').css('animation','');
				$('.circleBox').css('-webkit-animation','');
			}
			if(mySwiper.activeIndex==4){
				$('.slider5TitImg').css('animation','slidersTitRot 2s 0.5s 1 forwards');
				$('.slider5TitImg').css('-webkit-animation','slidersTitRot 2s 0.5s 1 forwards');
			}
			else{
				$('.slider5TitImg').css('animation','');
				$('.slider5TitImg').css('-webkit-animation','');
			}
			if(mySwiper.activeIndex==5){
				$('.slider6TitImg').css('animation','slidersTitRot 2s 0.5s 1 forwards');
				$('.slider6TitImg').css('-webkit-animation','slidersTitRot 2s 0.5s 1 forwards');
			}
			else{
				$('.slider6TitImg').css('animation','');
				$('.slider6TitImg').css('-webkit-animation','');
			}
			if(mySwiper.activeIndex==6){
				$('.slider7TitImg').css('animation','slidersTitRot 2s 0.5s 1 forwards');
				$('.slider7TitImg').css('-webkit-animation','slidersTitRot 2s 0.5s 1 forwards');
			}
			else{
				$('.slider7TitImg').css('animation','');
				$('.slider7TitImg').css('-webkit-animation','');
			}
			if(mySwiper.activeIndex==7){
				$('.slider8TitImg').css('animation','slidersTitRot 2s 0.5s 1 forwards');
				$('.slider8TitImg').css('-webkit-animation','slidersTitRot 2s 0.5s 1 forwards');
			}
			else{
				$('.slider8TitImg').css('animation','');
				$('.slider8TitImg').css('-webkit-animation','');
			}
			if(mySwiper.activeIndex==9){
				var slider10StrCon = '联盟与合作伙伴关系是博看文思也无持续发展的重要保证，博看文思已经与行业领导者建立了战略合作伙伴关系，紧密的合作伙伴关系，确保博看文思能够满足客户的各种需求，并为客户提供最优秀的解决方案。';
				var slider10Time = null;
				var slider10num = 0;
				function slider10ConInput(t){
					if(slider10num>t.length-1){
						clearInterval(slider10Time);
						slider10num=0;
					}
					else{
						var a = t.charAt(slider10num);
						slider10ConP.innerHTML+=a;
						slider10num++;
					}
				}
				slider10Time = setInterval(function(){
					slider10ConInput(slider10StrCon)
				},50);
			}
			else{
				slider10ConP.innerHTML = '';
			}
			if(mySwiper.activeIndex==11){
				$('.slider12Con img').each(function(){
					var num = $(this).index()*0.5;
					$(this).css('animation','slider12Img 0.5s '+num+'s 1 forwards');
					$(this).css('-webkit-animation','slider12Img 0.5s '+num+'s 1 forwards');
				});
			}
			else{
				$('.slider12Con img').each(function(){
					$(this).css('opacity','0');
					$(this).css('animation','');
					$(this).css('-webkit-animation','');
				});
			}
			// if(mySwiper.activeIndex==12){
			// 	$('.erweima img').css('-webkit-animation',' erweimaImg 1s 3.5s 1 forwards');
  	// 			$('.erweima img').css('animation',' erweimaImg 1s 3.5s 1 forwards');

			// }
			// else{
			// 	$('.erweima img').css('-webkit-animation','');
			// 	$('.erweima img').css('animation','');
			// }
  		}
	});
	$('.slider1cont').css('-webkit-animation','slideOneCon 1.5s 1.5s 1 forwards');
  	$('.slider1cont').css('animation','slideOneCon 1.5s 1.5s 1 forwards');
	var slider10ConP = document.getElementById('slider10ConP');
	if(audioBox.paused){
			// alert('暂停');
			audioBox.play();
			$('.musicStart').css('-webkit-animation','musicOpen 2s linear infinite');
			$('.musicStart').css('animation','musicOpen 2s linear infinite');
			$('.musicBox img').attr('src','img/musicOpen.png');
		}
	else{
		// alert('播放');
		audioBox.pause();
		$('.musicStart').css('-webkit-animation','');
		$('.musicStart').css('animation','');
		$('.musicBox img').attr('src','img/musicClose.png');
	}
	$('.musicBox').click(function(){
		// $('.musicBox img').toggleClass('musicStart');
		if(audioBox.paused){
			// alert('暂停');
			audioBox.play();
			$('.musicStart').css('-webkit-animation','musicOpen 2s linear infinite');
			$('.musicStart').css('animation','musicOpen 2s linear infinite');
			$('.musicBox img').attr('src','img/musicOpen.png');
		}
		else{
			// alert('播放');
			audioBox.pause();
			$('.musicStart').css('-webkit-animation','');
			$('.musicStart').css('animation','');
			$('.musicBox img').attr('src','img/musicClose.png');
		}
	});
})