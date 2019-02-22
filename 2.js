const random = Math.random();
if(random>0.5){
	import('./3.js').then(val => {
		console.log(val, '..............', random);
		let { a, shitloadofmoney } = val;
		console.log(a);
		console.log(shitloadofmoney())
	});
}