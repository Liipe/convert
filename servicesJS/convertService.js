var convertService = {

	convertTemp: function(celsius,callback) {
		$.ajax({
		  url: 'servicesPHP/convert.php',
		  data: {'celsius': celsius},
		  success: function(result){
		  	callback(parseFloat(result));
		  },
		  error: function(){
		  	callback(null);
		  }
		});
	},
	
};