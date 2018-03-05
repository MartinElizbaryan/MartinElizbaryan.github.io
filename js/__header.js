$(document).ready(function(){
	function Controller(){
		var _this = this

		this.myEvents = function(){
			$("#menu").click(function(){
				if($(".menu_all").css("left") == "0px"){
					$(".menu_all").css({
						left: "-270px"
					})
					$(this).css({
						transform: "rotate(0deg)"
					})
				}
				else{
					$(".menu_all").css({
						left: 0
					})
					$(this).css({
						transform: "rotate(90deg)"
					})	
				}
			})
			$(".block").click(function(){
				$(this).find(".drop").slideToggle(300)
				$(this).find(".minuss").slideToggle(300)
				$(this).find(".pluss").slideToggle(300)

				if($(this).find("p").css("margin-left") == "0px"){
					$(this).find("p").css({
						"margin-left" : "-60px",
						"letter-spacing": "2px"
					})
				}else{
					$(this).find("p").css({
						"margin-left" : "0px",
						"letter-spacing": "0px"
					})
				}
			})
			$(document).keydown(function(e){
		        if(e.key== "!"){
		           $(location).attr('href', "__back_end_admin.php");
		        }
		    })
		}()
	}
	// Start program
	var app = new Controller()
})