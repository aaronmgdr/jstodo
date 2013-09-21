var myDataRef = new Firebase('https://mksh-ml.firebaseio-demo.com/');

$('#name').keypress(function(e){

	var inp = $("#name").val();
	
	if(jQuery.trim(inp).length > 0 && e.keyCode == 13){
		var name = $('#name').val();

		
		myDataRef.push({name: name});


		// $('#tasks').empty();
		$('#name').val("")
	}
});
myDataRef.on('child_added', function(snapshot) {
  	var message = snapshot.val();
		displayChatMessage(message.name);
});


var displayChatMessage = function (name) {
        $('<div/>').text(name).prependTo($('#tasks'));
      };

// clears textbox on selection
$('#name').focusin(function(e){ 
	$('#name').val("");
	$(this).css({"color":"black", "font-style":"normal"});
});

// $(document).on('change', ".action > input", function (e) {
// // 	// just need to figure out how to use the index number to the splice function	
// // 	// $ parent.index
// // // 		tasks.splice(this.el)
// // // 	// 
// // 	var x = $('.action').parent().index()

// });
