//モデルの定義
App.Task = Parse.Object.extend('Task' , {
	defaults: {
		title: 'do something!',
		completed: false
	},
	//もし入力フォームが空だったら
	validate: function(attrs) {
		if( _.isEmpty(attrs.title)){
			return 'title must not be empty';
		}
	},
	initialize: function() {
		this.on('invalid', function(model, error) {
			$('#error').html(error);
		})
	}
});

//コレクションの定義
App.Tasks = Parse.Collection.extend({
	model: App.Task
});