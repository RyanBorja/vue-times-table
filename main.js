var table = new Vue({

	el: '#main',

	data: {

		numberOfRows: 5,
		numberOfCols: 7,
		maxRows: 20,
		maxCols: 20,
		minRows: 1,
		minCols: 1,
		defaultRows: 5,
		defaultCols: 7

	},

	computed: {

		numberizedCols: function() {

			var temp = parseInt(this.numberOfCols);

			if ( temp <= this.maxCols && temp >= this.minCols ) {
				this.numberOfCols = temp;
			}			
			else {
				this.numberOfCols = this.defaultCols;
			}

			return this.numberOfCols;		

		},

		numberizedRows: function() {

			var temp = parseInt(this.numberOfRows);

			if ( temp <= this.maxRows && temp >= this.minRows ) {
				this.numberOfRows = temp;
			}			
			else {
				this.numberOfRows = this.defaultRows;
			}

			return this.numberOfRows;		

		}

	}

});