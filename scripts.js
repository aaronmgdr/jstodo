


var tasksTemplateHtml = $('#templates .action').html();
var tasksTemplate = _.template(tasksTemplateHtml);

var tasks = [];

var TodoListView = Backbone.View.extend({
	initialize: function (){
	},
	render: function (){
		for (var i = 0; i < tasks.length; i+= 1) {
			var t = tasks[i];
		}
		var newTaskHtml = tasksTemplate(t)

		$('#tasks').append(newTaskHtml);
	}
});

var actionview = new TodoListView();

$('#name').keypress(function(e){

	var inp = $("#name").val();
	
	if(jQuery.trim(inp).length > 0 && e.keyCode == 13){
		var name = $('#name').val();

		var newTaskHtml = {
			name: name,
			complete: false
		};

		tasks.push(newTaskHtml)

		// $('#tasks').empty();
		actionview.render();
		$('#name').val("")
	}
});

// clears textbox on selection
$('#name').focusin(function(e){ 
	$('#name').val("");
	$(this).css({"color":"black", "font-style":"normal"});
});

$(document).on('change', ".action > input", function (e) {
// 	// just need to figure out how to use the index number to the splice function	
// 	// $ parent.index
// // 		tasks.splice(this.el)
// // 	// 
// 	var x = $('.action').parent().index()

});
