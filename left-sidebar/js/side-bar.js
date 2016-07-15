$(function() {
	//SideBar
	if ( $("#expandSideBar").length ) {
 		$(".container").each(function(){
			$(this).css("padding-right","65px");
		});
	}
	var expandSideBar = false;
	$("#expandSideBar").click(function(){	
		if(!expandSideBar){
			$(this).addClass("fa-angle-right");
			$(this).removeClass("fa-angle-left");
			$("#sidePanel").addClass("able");
			expandSideBar = true;
			$(".container").each(function(){
				$(this).addClass('widthContainerSideBar');
				$(this).css("transition","1s");
				$(this).css("padding-right", "");
			});
			$(this).siblings(".sidePanelContent").delay(1000).fadeIn();		
		} else {
			$(this).removeClass("fa-angle-right");
			$(this).addClass("fa-angle-left");
			$(this).siblings(".sidePanelContent").fadeOut(function(){
				$("#sidePanel").removeClass("able");
				expandSideBar = false;
				$(".container").each(function(){
						$(this).removeClass('widthContainerSideBar');
						$(this).css("padding-right","65px");
				});
			});	
		}
	});
});
