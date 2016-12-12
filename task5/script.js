// b(1,15) => 16, b(55,3) => 58, b(-5, -5) => -10, typeof a() => number
function b(x,y)
{
	return x+y;
}

// c(2,2) => 4, c(3,3) => 27, b(4,5) => 1024, typeof a() => number
function c(x,y)
{
	return Math.pow(x,y);
}
// d(1) => {a:1}, b(123) => {a:123}, typeof a() => object
function d(number){
	var obj = {
		a: number
	};
	return obj;
}
// e(55)() => 55, e(123)() => 123, typeof a() => number
function e(x) {
	return function 
	{
		return x;
	}
}
// f(1,3) => [1,1,1], b('x',5) => ['x','x','x','x','x'], b(-1,2) => [-1,-1], typeof a() => object (array)
function f(x,y)
{
	var array = [];
	for (i=0; i<y; i++){
		array.push(x)
	}
	return array;

}

// g() => 99, b(1) => 1, b(2) => 2, b(3) => 3, b(99) => 99, typeof a() => number
function g(x){
	if (x)
	{
		return x;
	} else {
		return 99;
	}
}
// h(function(){return 5}) => 5, h(function(){return 123}) => 123, typeof a() => number
function h(x) {
	return x();
}

// j([1,2,3]) => 6, j([12,34,56]) => 102, typeof a() => number
function j(array=[]) {
	return array[0] + array[1] + array[2];
}
// k({a:1,b:2,c:3}) => 6, k({n:55,s:82}) => 137, typeof a() => number
function k(obj = {}){
	var sum = 0;
		for (var key in obj){
			sum = sum + obj[key]
		}
}



// m([1,2,3],[55,12,33]) => [56,14,36], m([2,3],[5,-1]) => [7,2], typeof a() => object (array)
function(arrayone =[], arrayonetwo = [])
	var arraysum = [];
	{
	for (var i=0; i < array.length; i++){
		arraysum[i] = arrayone [i] + arrayonetwo[i]
	}
	return arraysum;
}


// n(1)(2)(3) => 6, n(5)(25)(8) => 38, n(3)(-5)(0) => -2, typeof a() => number

function n(x){
	function (y){
		function (z)
		{
			return x+y+z;
		}
	}

}