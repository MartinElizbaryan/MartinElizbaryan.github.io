$(document).ready(function(){
	function Controller(){
		var _this = this
		this.setTime = function(){
			var d = new Date();
	        var hour = d.getHours();
	        var min = d.getMinutes();
	        var sec = d.getSeconds();
	        if(min < 10){min = "0" + min}
	        if(hour < 10){hour = "0" + hour}
	        if(sec < 10){sec = "0" + sec}
	        var text = hour + " <span>:</span> " + min + " <span>:</span> " + sec
	        $('.real_clock').html(text)
		}

		this.time = function(){
			var x = setInterval(()=>{
				_this.setTime()
			},1000)
		}()

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
			$("#submit").click(function(e){
				e.stopPropagation()
				$(".div_search").css({
					width: "250px"
				})
				$("#submit").hide()
				$("#go").show()
				$("#text").focus()
			})

			$(".div_search input").click(function(e){
				e.stopPropagation()
			})

			$(document).click(function(){
				$(".div_search").css({
					width: "32px"
				})
				$("#submit").show()
				$("#go").hide()
			})
		}()
	}
	// Start program
	var app = new Controller()
	app.setTime()
})