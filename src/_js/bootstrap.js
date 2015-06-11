var
	issues,
	issuesView,
	toolbarView
;

bootstrap();

function bootstrap() {
	
	issues = new Issues();
	
	issuesView = new IssuesView({
		collection: issues
	});
	
	toolbarView = new ToolbarView();
}