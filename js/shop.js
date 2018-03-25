$(document).ready(function(){
	function Controller_shop(){
		var _this = this

		this.myEvents = function(){
			// var slecet =$("#select_class")
			$("#select_class,#select_mark").change(function(){
				var type = $("#select_class").val()
				console.log("type", type);
				var mark = $("#select_mark").val()
				console.log("mark", mark);

				$(".cars").hide()

				if(type == "all" && mark == "all"){
					$(".cars").show()
				}

				else if(type == "all"){
					$("."+mark).show()	
				}

				else if(mark == "all"){
					$("."+type).show()	
				}

				else{
					$("."+type).each(function(){
						if($(this).hasClass(mark)){
							$(this).show()
						}
					})
				}
				
			})
		}()
	}
	// Start program
	var app = new Controller_shop()
})