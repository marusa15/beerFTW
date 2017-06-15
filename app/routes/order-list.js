import Ember from 'ember';

export default Ember.Route.extend({
	model() {
        if ((sessionStorage.getItem('entry') !== null) && (sessionStorage.getItem('order') !== null)) {
            return {
                order: JSON.parse(sessionStorage.order),
                entry: JSON.parse(sessionStorage.entry)
            }
          } 
        }
});

