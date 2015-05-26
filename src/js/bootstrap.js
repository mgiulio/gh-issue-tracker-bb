bootstrap();

function bootstrap() {
	
	issues = new Issues(/* null , {repo: 'mgiulio/mgiulio.github.io'} */);
	
	issuesView = new IssuesView({
		collection: issues
	});
	
	toolbarView = new ToolbarView();
	
	document.querySelector('input.repo').value = 'jashkenas/backbone';
	//toolbarView.onChangeRepo();
	issues.setRepo('jashkenas/backbone');
}