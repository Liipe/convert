var convertController = {
	
	init: function() {
		convertController.setForm();
	},
	
	setForm: function() {
		var form = document.querySelector('form');
		form.addEventListener('submit', function(event) {
			convertController.calculateConvert(form);
			//it is necessary to avoid form submition
			event.preventDefault();
		});
	},
	
	calculateConvert: function(form) {
		var 
			celsius = parseFloat(form.celsius.value),
			result = 0;
		
		var callback = function(result) {
			convertController.showResult(result);			
		};
		
		convertController.showLoading(true);
		convertService.convertTemp(celsius, callback);
	},
	
	showResult: function(result) {
		var spanResult = document.querySelector('.result');
		spanResult.innerHTML = result.toFixed(2);
		convertController.showLoading(false);
	},
	
	showLoading: function(isLoading) {
		document.querySelector('.label').innerHTML = isLoading ? 'loading...' : 'Fahreneit'
	}
	
}

//initialization
convertController.init();