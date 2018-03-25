$(document).ready(function(){
	function Controller_settings(){
		var _this = this

		this.myEvents = function(){
			$("input[type='password']").keyup(function(){
				var inp1 = $(".changes input:nth-child(1)").val()
				var inp2 = $(".changes input:nth-child(2)").val()
				var inp3 = $(".changes input:nth-child(3)").val()
				// console.log(inp1,inp2,inp3)

				if(inp2 == inp3 && inp1!="" && inp2!=""&& inp3!=""){
					console.log("yes")
					$("#pass input:nth-child(2),#pass input:nth-child(3)").css({
						background: "url(svg/ok.svg)",
						"background-repeat": "no-repeat",
						"background-position": "center right 5px"
					})
				}else if(inp2!=""&& inp3!=""){
					console.log("no")
					$("#pass input:nth-child(2),#pass input:nth-child(3)").css({
						background: "url(svg/not_ok.svg)",
						"background-repeat": "no-repeat",
						"background-position": "center right 5px"
					})
				}
				else{
					$("#pass input:nth-child(2),#pass input:nth-child(3)").css({
						background: "none"
					})
				}
			})
		}()
	}
	// Start program
	var app = new Controller_settings()
})
