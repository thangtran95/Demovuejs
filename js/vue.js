function App(element){
	if( $(element).length == 0) return;
	new Vue({
	el: element,
		data: {
			infors: [
				{
					id: 1,
					name: 'thang',
					age: 24,
				},
				{
					id: 2,
					name: 'nam',
					age: 24,
				},
				{
					id: 3,
					name: 'hoang',
					age: 20,
				}
			],
			newUser: ' ',
			newAge: ' ',

		},
		created: function(){
		},
		methods:{
			addUser: function(e){
				e.preventDefault();
				this.infors.push({
					name : this.newUser,
					age : this.newAge,
					
				});
				this.newUser = ' ';
				this.newAge = ' ';
			},

			deleteUser: function(index){
				this.infors.splice(index, 1);
			},

	  	},
		computed:{
		},
		watch:{
		},
		mounted: function(){
		},
	});
	return this;
}
var app = new App('#demo');