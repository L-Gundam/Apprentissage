//每种例子前都打了'//'，目的在于防止报错，使用时删除即可
//ts严谨，要求每一类型都先表现出来，不同于js
//文字内容由自己总结，有误请雅正
//var str:string = 'hello,world'
//console.log(str)//字符串类型

//var nael:number = 123
//nael = 13726087872 
//数字类型
//重新赋值，输出为最后赋值的量

//console.log(nael)
//'var'是es5类型的，'let'是es6类型的，var就是js的，
//而let是ts的


//第一种定义数组方式

//let arr:number[] = [13726087872,13726037238,231]
//console.log(arr)
//不能同时给arr类型【数组类型】定义多种类型，会报错
//par exemple:不能定义完‘string’就再定义‘number’.

//第二种数组类型

//let arr:Array<string> = ["华强北"，"迪迦"]
//console.log(arr)

//元组类型(数组的一种) 用于指定多种类型

//let arr:[number,string,boolean]=[123,"一二三",true]
//console.log(arr)
//每组类型要一一对应

//枚举类型

//enum flag {vrai=1,fause=-1}
 //flag是定义内容，是随意的

//let b:flag=flag.fause
//亦可以直接console.log(flag.fause)
//console.log(b)

//enum Color {rouge,bleu,vert}
//let a:Color=Color.bleu
//console.log(a)
//枚举类型可枚举多种事物，不会报错
//若没有事先给枚举内容表示数字，会从0开始自动表示

//enum Color {rouge,bleu=6,vert}
//let c:Color=Color.vert
//console.log(c)
//以上为给其中一个枚举内容表示数字大小，但其余仍不变
//rouge还是0，vert变成被赋值为下一数字(这里vert为7)

//enum Color {rouge='o',bleu=1}
//console.log(Color.rouge)
//赋值为字符串亦可
//2021.1.31

//解释一下这里let的含义
//par exemple:let nael:number=123
//它的解释为定义nael为数字类型，表示为123
//2021.2.1




