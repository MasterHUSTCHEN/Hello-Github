// function getMaxDays(str){
// 	if (!str.trim()) return 0;
// 	var arr_input=str.split(" ");
// 	if (arr_input.length<=0) return 0;
// 	var arr_Length=arr_input.length;
// 	var arr_new=[];
// 	for(var i=0;i<arr_Length;i++){
// 		if (arr_input[i].trim()) {
//              arr_new.push(arr_input[i]);
// 		}
// 	}
// 	if (arr_new.length!=4) return 0;
// 	console.log(arr_new);
// 	var x=parseInt(arr_new[0]);
// 	var f=parseInt(arr_new[1]);
// 	var d=parseInt(arr_new[2]);
// 	var p=parseInt(arr_new[3]);
// 	if (Math.floor(d/x)<=f) {return Math.floor(d/x);}
//     return Math.floor((d+f*p)/(x+p));
// }
// var num=getMaxDays("3  5  100  10");
// console.log(num);
// // while(str=readline()){
// //     if (!str.trim()){
// //         return 0;
// //     }
// // 	var arr_input=str.split(" ");
// // 	if (arr_input.length<=0) return 0;
// // 	var arr_Length=arr_input.length;
// // 	var arr_new=[];
// // 	for(var i=0;i<arr_Length;i++){
// // 		if (arr_input[i].trim()) {
// //              arr_new.push(arr_input[i]);
// // 		}
// // 	}
// // 	if (arr_new.length!=4) return 0;
// // 	var x=parseInt(arr_new[0]);
// // 	var f=parseInt(arr_new[1]);
// // 	var d=parseInt(arr_new[2]);
// // 	var p=parseInt(arr_new[3]);
// // 	if (Math.floor(d/x)<=f) {return Math.floor(d/x);}
// //     return Math.floor((d+f*p)/(x+p));
// // }
//
// function getDiffSyleCount(str){
// 	var arr_input=str.split("");
// 	var arr_new=[];
// 	for (var i = 0; i < arr_input.length; i++) {
// 		if(arr_new.indexOf(arr_input[i])===-1){
// 			arr_new.push(arr_input[i]);
// 		}
// 	}
// 	console.log(arr_new);
// 	if (arr_new.length>2){
// 		 return 0;
// 		}else if(arr_new.length<=0){
// return 0;
// 		}else if(arr_new.length==1){
// 			return 1;
// 		}
// 	return 2;
// }
// var num=getDiffSyleCount("ABAB");
// console.log(num);

// function get(str){
// 	//var str_new= str.replace(/1(01)+/g,"");
// 	var reg=new RegExp("((01)+)","g");
// 	var str_new_1=reg.exec(str);
// 	console.log(str_new_1);
// }
// get("101101110101010");
// var str = "longen<p>gtgrfrf</p>yunxi<p>frfrf</p>boyboy";
// console.log(str.match(/<p>.*<\/p>/)[0]);
// var str_1="abc";
// console.log(str_1.match(/ab?c/)[0]);

// function getDiffStyle(str){
// 	if (str.length<=0) { return 0;}
// 	var arr_input=str.split("");
// 	var arr_color=[];
// 	for (var i = 0; i < arr.length; i++) {
// 		if (arr_input.indexOf(arr_input[i])===-1) {
// 			arr_color.push(arr_input[i]);
// 		}
// 	}
// 	if(arr_color.length>2){
// 		return 0;
// 	}else if (arr_color.length===1) {
// 		return 1;
// 	}else{
// 		return 2;
// 	}
// }

// function isCan(num,arr){
//     if (arr.length!=num) { return "Impossible";}
//     if(num<=2) return "Impossible";
//     arr.sort(function(a,b){return a-b;});
//     var diff=arr[1]-arr[0];
//     for (var i = 2; i < arr.length; i++) {
//     	if(arr[i]-arr[i-1]!==diff){
//     		return "Impossible";
//     	}
//     }
//     return "Possible";
// }

// function getMaxLong(str){
// 	if(str.length<=0) return 0;
// 	var ret=1,cnt=1;
// 	var arr=str.split("");
// 	for (var i = 1; i < arr.length; i++) {
// 		if(arr[i]!=arr[i-1]){
// 			cnt++;
// 		}else{
// 			cnt=1;
// 		}
// 		ret=Math.max(ret,cnt);
// 	}
// 	return ret;
// }

//var arr=[1,2,3];
// var arr="hhudheu";
// var v=typeof arr;
// console.log(v);

// if ("223">"1223") {
// 	console.log("a>b");
// }
// console.log("wo".charCodeAt(1));
// console.log("23"-"22");

// var reg=new RegExp("(1?(01)+0?)|(0?(10)+1?)","g");
// //var arr=reg.exec("101010101011101110101010");
// var arr="1101010101101010".match(reg);
// console.log(arr);

//求01串-------->
// function getMaxLong(str){
// 	if(str.length<=0) return 0;
// 	var reg=new RegExp("(1?(01)+0?)|(0?(10)+1?)","g");
// 	var arr=str.match(reg);
// 	if(!arr){
// 		return 1;
// 	}
// 	//console.log(arr);
// 	//var maxlong=0;
// 	arr.sort(function(a,b){return a.length-b.length;});
// 	//console.log(arr);
// 	return arr[arr.length-1].length;
// }
// getMaxLong("1010101010110101110110101001101110101010");
// ------------->


// function RegExpTest() {
//     var src = "The rain in Spain falls mainly in the plain.";
//     var re = /(1?(01)+0?)|(0?(10)+1?)/g; // 创建正则表达式模式。
//     var arr;
//     while ((arr = re.exec(src)) != null){
//      console.log(arr.index + "-" + RegExp.lastIndex + "\t" + arr[0]);//此处RegExp.lastIndex和arr.lastIndex均有同样的属性，可以互换。在此注意IE6和7的lastIndex重设置0的bug

//     }
// };
// RegExpTest();


// window.setTimeout(function(){
// 	console.log(10);
// },10);
// window.setTimeout(function(){
// 	console.log(0);
// },0);
// console.log(100);
//
// var reg=();