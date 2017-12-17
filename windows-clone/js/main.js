$(document).ready(function() {

  $("#myFolder,#myTrash").modal({
    backdrop: false,
	show: false
  });
  $("#myFolder,#myTrash").draggable();
  $(".btn-computer,.btn-trash,.btn-folder,.btn-facebook,.btn-twitter").draggable();
  
  // Toggle volume
  $("#volume").on("click", function() {
    var $this = $(this);
    if ( $this.hasClass("fa fa-volume-up") ) {
      $this.removeClass("fa fa-volume-up");
	  $this.addClass("fa fa-volume-off");
	} else {
      $this.removeClass("fa fa-volume-off")
      $this.addClass("fa fa-volume-up");
	}
  });

});
