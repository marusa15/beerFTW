import Ember from 'ember';

export default Ember.Route.extend({
	model() {
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
		
	    saveItem() {
	    	var order = new Object();	
	    	var newOrder = new Object();
	    	var e = document.getElementById("productTitleDropDown");
	    	var beerIndex = e.selectedIndex // retrieves index of beer object in array of entries
	    	

			newOrder.beerTitle = e.options[e.selectedIndex].text;
	    	newOrder.quantity = document.getElementById("quantity").value;
	    	newOrder.price = JSON.parse(sessionStorage.entry)[beerIndex].price;
	    	console.log(JSON.parse(sessionStorage.entry)[beerIndex].stock);
	    	console.log(JSON.parse(sessionStorage.order)[beerIndex].quantity);

	    	JSON.parse(sessionStorage.entry)[beerIndex].stock == JSON.parse(sessionStorage.entry)[beerIndex].stock - 5;
	    	console.log(JSON.parse(sessionStorage.entry)[beerIndex].stock);
	    	

	    	if(sessionStorage.order)
			    {
			     order= JSON.parse(sessionStorage.getItem('order'));
			    }else{
			     order=[];
			    }
			 order.push(newOrder)   
			    
			    sessionStorage.setItem('order', JSON.stringify(order));

			    var retrievedObject = sessionStorage.getItem('order');
			    
			  
			    
			    document.getElementById("myForm").reset();

			console.log(JSON.parse(sessionStorage.order)[beerIndex].quantity);

	    	JSON.parse(sessionStorage.entry)[beerIndex].stock = JSON.parse(sessionStorage.entry)[beerIndex].stock - JSON.parse(sessionStorage.order)[beerIndex].quantity;
	    	console.log(JSON.parse(sessionStorage.entry)[beerIndex].stock);

			    
     		},

	      
	     anotherOrder() {
	     	document.getElementById("myForm").reset();
	     	
	     },

	     checkout() {
	     	var decreaseStock = function(beerIndex) {
  				console.log(beerIndex);
}
	     }

	     
	    }
});
