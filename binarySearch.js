'use strict'
Array.prototype.toTwenty = function(){
	var arr = [];
	for(var i = 1; i <= 20; i++){
		arr.push(i);
	}
	return arr;
},
Array.prototype.toForty = function(){
	var arr = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40];
	/*for (var i = 2; i <= 40; i+2) {
		arr.push(i);
	}*/
	return arr;
},
Array.prototype.toOneThousand =  function(){
	var arr = [10,20,30,40,50,60,70,80,90,100,
				110,120,130,140,150,160,170,180,190,200,
				210,220,230,240,250,260,270,280,290,300,
				310,320,330,340,350,360,370,380,390,400,
				410,420,430,440,450,460,470,480,490,500,
				510,520,530,540,550,560,570,580,590,600,
				610,620,630,640,650,660,670,680,690,700,
				710,720,730,740,750,760,770,780,790,800,
				810,820,830,840,850,860,870,880,890,900,
				910,920,930,940,950,960,970,980,990,1000];
	return arr;
},
Array.prototype.search = function(n){
	var minBoundary = 0;
	var maxBoundary = this.length - 1;
	var l = this.length;
	var iter = 0;
	var c = 0;
	for(var i = iter; minBoundary <= maxBoundary ; i++){
		var midIndex = Math.floor((minBoundary + maxBoundary) / 2);
		//var midIndex = (minBoundary + maxBoundary) / 2 | 0;
		if (this[midIndex] === n){
			c = i;
			i = midIndex;
			return {count : c, index: midIndex, length: l};
		}
		else if (this[minBoundary] === n) {
			c = i;
			i = minBoundary;
			return {count : c, index: i, length: l};
		}
		else if (this[maxBoundary] === n) {
			c = i;
			i = maxBoundary;
			return {count : c, index: i, length: l};
		}
		else if (this[midIndex] < n ) {
				minBoundary = midIndex + 1;
				maxBoundary = maxBoundary - 1;
		}
		else if (this[midIndex] > n ) {
				maxBoundary = midIndex - 1;
				minBoundary = minBoundary + 1;
		}
	}
	return {count : iter, index: -1, length: l};
}
var binary_Search = [];
module.exports = binary_Search;
