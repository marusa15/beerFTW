import Ember from 'ember';

export default Ember.Route.extend({
	model() {
        if ((sessionStorage.getItem('entry') !== null) && (sessionStorage.getItem('order') !== null)) {
            return {
                order: JSON.parse(sessionStorage.order),
                entry: JSON.parse(sessionStorage.entry),
                total: sessionStorage.total
            }
          } 
        },
     actions: {
     	computeTotal() {
     		
            var sum;
            
            (JSON.parse(sessionStorage.order)).reduce(function(prevVal, elem) {
                sum = prevVal + elem.subtotal;
                return sum;
            }, 0);

            sessionStorage.setItem("total", sum);
            console.log(sessionStorage);
            console.log('sum', sum);
     	}
     }   
});

