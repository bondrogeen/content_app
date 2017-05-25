	function executeScript(scriptId, imageId, resultId) {
		$("#" + imageId).show();
		$.post("/res/console/execute_script.xhtml", {script: $("#" + scriptId).val()}, function(data) {
			$("#" + imageId).hide();

			if(data.success && resultId != undefined) {
				$("#" + resultId).val(data.output);
				$("#" + resultId).change(); // fire onchange
			}
		}, "json");
	}
