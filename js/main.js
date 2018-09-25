

var button = document.getElementById("bar");

button.addEventListener("click", function(){
	// when clicking the button, add class active if it is NOT included in button.parentNode's classList 
	// or delete class active if it is in button.parentNode's classList
	this.parentNode.classList.toggle('active');
	// when clicking the button, add class change if it is NOT included in button's classes/classList.
	// or delete class change if it is included in button's classes. 
	this.classList.toggle('change');
	// active里会定义一些属性或者效果，这里toggle的意思是指 当无效果的时候，click鼠标，button就会添加active出现效果，
	// 当有效果的时候，click鼠标active就会从button的classlist里删除，随之效果就会消失
	this.classList.toggle('active');

	var menu = document.getElementById("menu");

 if (menu.style.maxHeight){
      menu.style.maxHeight = null;
    } else {
	  menu.style.maxHeight = menu.scrollHeight + "px";
    } 
});

$('.middle').click(function(){
	var imgSrc = $(this).prev().children();
	var id = imgSrc.attr('id');
	console.log($(this).prev());
	console.log(id);
	if(id === 'Rose flower'){
		$('#Rose').css('display', 'block');
		// $('#Rose').children().css('transform', 'scale(1.7)');
		$('#Rose').children().animate({
			width: '700px',
			opacity: '1.0'
		});
	}else if(id === 'Mix flower'){
		$('#Mix').css('display', 'block');
		// $('#Mix').children().css('transform', 'scale(1.7)');
		$('#Mix').children().animate({
			width: '700px',
			opacity: '1.0'
		});
	}else if(id === 'leaf'){
		$('#Leaf').css('display', 'block');
		// $('#Leaf').children().css('transform', 'scale(1.7)');
		$('#Leaf').children().animate({
			width: '700px',
			opacity: '1.0'
		});
	}else if(id === 'Multi flower'){
		$('#Multi').css('display', 'block');
		// $('#Multi').children().css('transform', 'scale(1.7)');
		$('#Multi').children().animate({
			width: '700px',
			opacity: '1.0'
		});
	}else if(id === 'pink flower'){
		$('#Pink').css('display', 'block');
		// $('#Pink').children().css('transform', 'scale(1.7)');
		$('#Pink').children().animate({
			width: '700px',
			opacity: '1.0'
		});
	}else if(id === 'river'){
		$('#River').css('display', 'block');
		// $('#River').children().css('transform', 'scale(1.7)');
		$('#River').children().animate({
			width: '700px',
			opacity: '1.0'
		});
	}
});

$('.img-overlay').click(function(){
	$('.scale-overlay').css('display', 'none');
	$('.img-overlay').css('width', '200px');
})
// var height = screen.height;
// var detail = document.getElementById("detail");
// detail.style.height = height;
  

