import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		if (sessionStorage.getItem('entry') !== null) {
		    return { 
		    	entry: JSON.parse(sessionStorage.entry)
			}
		}

		else if ((sessionStorage.getItem('entry') !== null) && (sessionStorage.getItem('order') !== null)) {
			return {
		    		order: JSON.parse(sessionStorage.order),
		    		entry: JSON.parse(sessionStorage.entry)
		    	}
			}
	},

	actions: {

		saveEntry() {
			var entry = new Object();
			var newEntry = new Object();


			if (sessionStorage.getItem('entry') !== null) {
			    newEntry.id = (JSON.parse(sessionStorage.entry)).length + 1;

			} else {
			    newEntry.id = 1;
			}

			newEntry.productTitle = document.getElementById("productTitle").value; //ima drugačno vrednost z vsakim klikom
			
			
			newEntry.stock = document.getElementById("stock").value;
			newEntry.price = document.getElementById("price").value;
			newEntry.itemImage = document.getElementById("itemImage").value;

			if (sessionStorage.entry) {
				entry = JSON.parse(sessionStorage.getItem('entry'));
			}

			else {
				entry = [];
			}

			entry.push(newEntry)

			sessionStorage.setItem('entry', JSON.stringify(entry));

			var retrievedObject = sessionStorage.getItem('entry');
			console.log('retrievedObject: ', JSON.parse(retrievedObject));
			console.log(JSON.parse(sessionStorage.entry));
			document.getElementById("new-entry").reset();
			location.reload();



		},

		deleteEntry() {
				
			}
		}
	
});

