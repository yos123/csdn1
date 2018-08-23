/*
* @Author: admin
* @Date:   2018-06-12 15:57:02
* @Last Modified by:   admin
* @Last Modified time: 2018-06-19 14:25:48
*/
$(function(){
	$('.lft_b').mouseenter(function(event) { 
			c = $(this).index();
			$('.rig').eq(c).css('display', 'block');
			// $('.rig').eq(c).siblings().removeClass('current');
			// console.log(c);
		});
		$('.rig').mouseenter(function(event) { 
			
			$(this).css('display', 'block');
			// $('.rig').eq(c).siblings().removeClass('current');
			// console.log(c);
		});
		$('.lft_b').mouseleave(function(event) {
			c = $(this).index();
			$('.rig').eq(c).css('display', 'none');
		});
		$('.rig').mouseleave(function(event) { 
			$(this).css('display', 'none');
			// $('.rig').eq(c).siblings().removeClass('current');
			// console.log(c);
		});
		$(window).scroll(function(event) {
			if ($(window).scrollTop()>100) {
				$('nav').addClass('fixing');
			}
			else{
				$('nav').removeClass('fixing');
			}
		});
		$('.right_top').children().children().click(function(event) {
			var i = $(this).index();
			$(this).addClass('nex');
			$(this).siblings().removeClass('nex');
			$('.rbt').eq(i).addClass('come');
			$('.rbt').eq(i).siblings().removeClass('come');
		
		});
		$('.trp').hover(function() {
			$(this).css('backgroundColor', 'rgba(0,0,0,0.5)');
		}, function() {
			$(this).css('backgroundColor', 'transparent');
		});
		$('.transpar').hover(function() {
			$(this).css('backgroundColor', 'rgba(0,0,0,0.5)');
		}, function() {
			$(this).css('backgroundColor', 'transparent');
		});
		$('.table ul li').mouseenter(function(event) {
			$(this).children('span').css('display', 'inline-block');
			$(this).children('span').animate({'width':'150px'},300);
		});
		$('.table ul li').children('span').mouseleave(function(event) {
			$(this).css('width', '0px');
		});
		$('.table ul li').mouseleave(function(event) {
			$(this).children('span').css('width', '0px');
			$(this).children('span').css('display', 'none');
		});
		$(window).scroll(function(event) {
			if ($(window).scrollTop()>$('header').offset().top) {
				$('#table_li4').css('display', 'block');
				console.log($('header').offset().top);
			}else{
				$('#table_li4').css('display', 'none');

			}
		});
		$('#table_li4').click(function(event) {
			$('html,body').animate({'scrollTop':$('header').offset().top},300)
		});
		var num = 0;
		var timer = setInterval(begin,1500);
			function trans(){
				
			$('#bannerul').animate({'left':-750*num}, 500);
			$('ol li').eq(num).addClass('current');
			$('ol li').eq(num).siblings('li').removeClass('current');
		}
		function begin(){
			num =num+1;
			if(num>2){
				num=0;
			}
			trans();
		}
		$('ol li').click(function(){
			num = $(this).index();
			trans();
		})

		$('.a_span_left').click(function(){
			num = num-1;
			if(num<0){
				num = 2;
			}
			trans();
		})
		$('.a_span_right').click(function(){
			num = num+1;
			if(num>2){
				num = 0;
			}
			trans();
		})
		$('.a_box_left').mouseenter(function(event) {
			clearInterval(timer);
		});
		$('.a_box_left').mouseleave(function(event) {
			timer = setInterval(begin, 2000);
		});
		 // var i = $('#bottomul img').index();
		$('.hover').hover(function() {
			$(this).css('backgroundColor', 'rgba(255, 0, 0, 0.4)');
		}, function() {
			$(this).css('backgroundColor', 'transparent');
		});
})