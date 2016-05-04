$(function(){
	var imgs=$('a',$('.banner-img')[0]);
	// console.log(imgs);
	var btn=$('li',$('.banner-img')[0]);
	// console.log(btn);
	var bgc=$('.banner')[0];
	var arrbg=['rgb(255, 210, 216)','rgb(202, 125, 255)','rgb(255, 148, 164)','rgb(27, 168, 239)','rgb(255, 229, 167)','rgb(221, 52, 31)','rgb(253, 76, 22)','rgb(83, 190, 86)'];
	var index=0;
	var t=setInterval(wheel,2000);
	function wheel(){
		index++;
		// console.log(index);
		if(index>imgs.length-1){
			index=0;
		}
		for (var i = 0; i < imgs.length; i++) {
			animate(imgs[i],{opacity:0});
			btn[i].className='';
			bgc.style.background=arrbg[i];
		};

		animate(imgs[index],{opacity:1});
		btn[index].className='ss';
		bgc.style.background=arrbg[index];
	}
	var rigbtn=$('.rigbtn')[0];
	var lefbtn=$('.lefbtn')[0];
	bgc.onmouseover=function(){
		clearInterval(t);
		rigbtn.style.display='block';
		lefbtn.style.display='block';
	}
	bgc.onmouseout=function(){
		t=setInterval(wheel,2000);
		rigbtn.style.display='none';
		lefbtn.style.display='none';
	}
	for (var i = 0; i < btn.length; i++) {
		btn[i].index=i;
		btn[i].onmouseover=function(){
			for (var j = 0; j < imgs.length; j++) {
				animate(imgs[j],{opacity:0});
				btn[j].className='';
				bgc.style.background=arrbg[j];
			};
			animate(imgs[this.index],{opacity:1});
			btn[this.index].className='ss';
			bgc.style.background=arrbg[this.index];
		}
	};
	lefbtn.onclick=function(){
		wheel();
	}
	rigbtn.onclick=function(){
		index--;
		
		
		// console.log(index);
		if(index==-1){
			index=imgs.length-1;
		}
		for (var i = 0; i < imgs.length; i++) {
			animate(imgs[i],{opacity:0});
			btn[i].className='';
			bgc.style.background=arrbg[i];
		};

		animate(imgs[index],{opacity:1});
		btn[index].className='ss';
		bgc.style.background=arrbg[index];
	}

     
    //  小轮播图
    var jkbbox=$('.jinkou-cont-mid')[0];
    
    var jkbox=$('.jinkou-cont-mida')[0];
    // console.log(jkbox);
    var jkas=$('a',jkbox);
    // console.log(jkas);
    var jkaw=parseInt(getStyle(jkas[0],'width'));
    // console.log(jkaw);
    
    var jkbtn=$('.btn',jkbbox)[0];
    var jkli=$('li',jkbtn);
    // console.log(jkli);
    var index1=0;
    var e=setInterval(jkwh,1000);
    function jkwh(){
    	index1++;
    	if(index1==jkas.length){
    		index1=0;
    	}
    	for (var i = 0; i < jkli.length; i++) {
    		jkli[i].className='';
    	};
    	animate(jkbox,{marginLeft:-index1*jkaw});
    	jkli[index1].className='jkc';
    }
    jkbbox.onmouseover=function(){
    	clearInterval(e);
    }
    jkbbox.onmouseout=function(){
    	e=setInterval(jkwh,1000);
    }
    for (var i = 0; i < jkli.length; i++) {
    	jkli[i].index=i;
    	jkli[i].onmouseover=function(){
    		for (var j = 0; j < jkli.length; j++) {
	    		jkli[j].className='';
	    	};
	    	animate(jkbox,{marginLeft:-this.index*jkaw});
	    	jkli[this.index].className='jkc';
	    	index1=this.index;
    	}
    };

    // 小logo轮播
    var lxloxo=$('.liuxing-cont-left-logobox-box')[0];
    var lxloas=$('a',lxloxo);
    var lxloaw=parseInt(getStyle(lxloas[0],'width'));
    var lxindex=0;
    var flag=true;
    var w=setInterval(lxwh,1000);
    function lxwh(){
    	if(!flag){
    		return;
	    }
	    flag=false;
    	animate(lxloxo,{marginLeft:-lxloaw},function(){
    		lxindex++;
    		lxloxo.appendChild(getFirst(lxloxo));
    		lxloxo.style.marginLeft=0+'px';
    		if(lxindex==lxloas.length){
    			lxindex=0;
    		}
    		flag=true;
    	
    	});
    	

    }
    var lxbox=$('.liuxing-cont-left-logo')[0];
    lxbox.onmouseover=function(){
    	clearInterval(w);
    }
    lxbox.onmouseout=function(){
    	w=setInterval(lxwh,1000);
    }
    var lxleft=$('.liuxing-cont-left-logobtn1')[0];
    var lxright=$('.liuxing-cont-left-logobtn2')[0];
    lxright.onclick=function(){
    	lxwh();
    }
    lxleft.onclick=function(){
    	lxloxo.insertBefore(getLast(lxloxo),getFirst(lxloxo));
		lxloxo.style.marginLeft=-lxloaw+'px';
    	animate(lxloxo,{marginLeft:0},function(){
    		lxindex--;
    		
    		if(lxindex==-1){
    			lxindex=lxloas.length-1;
    		}
    	});
    }
})