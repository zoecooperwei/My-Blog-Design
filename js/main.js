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

// var height = screen.height;
// var detail = document.getElementById("detail");
// detail.style.height = height;
  

