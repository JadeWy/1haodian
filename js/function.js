// 获取类名的函数
function getClass(classname,obj){
	var obj=obj||document;//如果调取这个函数时传的实参只有一个，那么obj就为假 变量obj就会调取后面document的值
	if(obj.getElementsByClassName){
		// alert("支持");
		return obj.getElementsByClassName(classname);
		// document.getElementsByClassName('inner')
		
	}else{//解决IE兼容
		// alert("不支持");
		var arr=[];//定义一个新数组
		var alls=obj.getElementsByTagName('*');//获取到所有的标签名
		for (var i = 0; i < alls.length; i++) {
			if(checkClass(alls[i].className,classname)){//if括号里面的判断条件是要接收true或者false
                arr.push(alls[i])//如果为真 就把元素添加到定义的新数组里
			}
		};
		return arr;
		// console.log(alls);
	}
}
function checkClass(newclass,oldclass){ 
  var cl=newclass.split(' ');
  var flag;
  for(var i=0;i<cl.length;i++){
  	if(cl[i]==oldclass){
        flag=true;
  	}
  }
 return flag;
}


//兼容获取文本
function getText(obj,val){
	if(val==undefined){
		if(typeof obj.textContent=='string'){
			// console.log("f/c");
			return obj.textContent;
		}else{
			// console.log("ie6-8");
			return obj.innerText;
		}
	}else{
		if(typeof obj.textContent=='string'){
			obj.textContent=val;
		}else{
			obj.innerText=val;
		}
	}
	
}

//获取外部样式

function getStyle(obj,attr){
	if(!obj.currentStyle){
		return getComputedStyle(obj,null)[attr];
	}else{
		return obj.currentStyle.attr;
	}
}

//简化document方法
function $(selector,obj){
	if(typeof selector==='string'){
		var obj=obj||document;
		if(selector.charAt(0)=='.'){
			return getClass(selector.substring(1),obj);
		}else if(selector.charAt(0)=='#'){
			return obj.getElementById(selector.substring(1));
		}else if(/^[a-z][a-z1-6]{0,9}$/g.test(selector)){
			return obj.getElementsByTagName(selector);
		}else if(/^<[a-z][a-z1-6]{0,9}>$/.test(selector)){
			return document.createElement(selector.slice(1,-1));
		}
	}else if(typeof selector=='function'){
		// selector();
		window.onload=function(){
			selector();
		}
	}
}
// 获取节点
function getChild(parent,t){
	var childs=parent.childNodes;
	var arr=[];
	var t=t||false;
	if(t==true){
		for (var i = 0; i < childs.length; i++) {
			if(childs[i].nodeType==1||(childs[i].nodeType==3&&childs[i].nodeValue.replace(/^\s+|\s+$/g,'')!='')){
				arr.push(childs[i]);
			}
		};
	}else if(t==false){
		for (var i = 0; i < childs.length; i++) {
			if(childs[i].nodeType==1){
				arr.push(childs[i]);
			}
		};
	}
	return arr;
}
//获取第一个子节点
function getFirst(obj){
	return getChild(obj)[0];
}
//获取最后一个子节点
function getLast(obj){
	var allChild=getChild(obj);
	return allChild[allChild.length-1]
}

//获取任意一个子节点

function getNum(obj,num){
	return getChild(obj)[num];
}


//获取下一个兄弟节点
function getNext(objs){
	var next=objs.nextSibling;
	if(next==null){
		return false;
	}
	while(next.nodeType==8||(next.nodeType==3&&next.nodeValue.replace(/^\s+|\s+$/g,'')=='')){
		next=next.nextSibling;
		if(next==null){
			return false;
	}
	
   }
   return next;
}

//获取上一个兄弟节点
function getUp(objs){
	var up=objs.previousSibling;
	if(up==null){
		return false;
	}
	while(up.nodeType==8||(up.nodeType==3&&up.nodeValue.replace(/^\s+|\s+$/g,'')=='')){
		up=up.previousSibling;
		if(up==null){
			return false;
	}
	
   }
   return up;
}

//插入到之前
/*
     obj1:要插入的对象
     obj2：之前的对象
 
*/
function insertBefore(obj1,obj2){
	var parentnodes=obj2.parentNode;
	parentnodes.insertBefore(obj1,obj2);
}
/*
     obj1:要插入的对象
     obj2：插到谁前面
 */

function insertAfter(obj1,obj2){
	var next=obj2.nextSibling;
	insertBefore(obj1,next);
}
