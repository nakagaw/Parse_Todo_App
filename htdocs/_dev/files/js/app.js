var App = { };

$(function() {

	// Parse.$ = jQuery;

	// Initialize Parse with your Parse application javascript keys
	Parse.initialize("fpQwFlLwvaaGdSAfHxchdJmnV2rxUObNADMLZfYq", "E7MGkFmw5YH6J3JTQnlR6QdLAV8PAEXdpsK3cC8h");

	//ダミーのモデル保存
	var initializeTasks = function() {
		var tasks = new App.Tasks([
			{
				title: 'task1',
				completed: true
			},{
				title: 'task2'
			},{
				title: 'task3'
			}
		]);
		//デモコレクションにエレメントが見つかる度にDBに保存
		tasks.each(function(task){
			task.save();
		});
		//モデルの配列は返す
		return tasks.models;
	};

	//コレクションの初期化
	App.tasks = new App.Tasks();
	App.addTaskView = new App.AddTaskView({
		collection: App.tasks
	});

	//DBから読み込んだタスクがもし空だったら
	//デモコレクションを表示。空じゃなかったら普通に読み込む
	App.tasks.fetch().then(function(task){
		if (task.length === 0) {
			var models = initializeTasks();
			App.tasks.reset(models);
		}
		//表示一式
		App.tasksView = new App.TasksView({
			collection: App.tasks
		});
		//一覧の表示
		App.container = new App.Container();
		App.container.show(App.tasksView);
	});

});