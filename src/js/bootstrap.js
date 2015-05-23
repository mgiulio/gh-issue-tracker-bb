bootstrap();

function bootstrap() {
	
	var issues = new Issues(/* null , {repo: 'mgiulio/mgiulio.github.io'} */);
	
	new IssuesView({
		collection: issues
	});
			
}