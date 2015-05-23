bootstrap();

function bootstrap() {
	
	issues = new Issues(/* null , {repo: 'mgiulio/mgiulio.github.io'} */);
	
	new IssuesView({
		collection: issues
	});
	
	new ToolbarView();
}