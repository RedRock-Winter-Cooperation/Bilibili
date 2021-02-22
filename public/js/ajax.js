function ajax_get(url,data,success){
	var ajax=new XMLHttpRequest();
        if(data){
        	url+='?';
        	url+=data;
        }else{
        	
        }
        ajax.open('get',url);
		ajax.send();
		ajax.onreadystatechange=function(){
			if(ajax.readyState==4&&ajax.status==200){
				success(ajax.responseText);
		}
	}
}

function ajax_post(url,data,success){
	var ajax=new XMLHttpRequest();
		ajax.open('post',url);
		ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		if(data){
			ajax.send(data);
		}else{
			ajax.send();
		}
		ajax.onreadystatechange=function(){
			if(ajax.readyState==4&&ajax.status==200){
				success(ajax.responseText);
		}
	}
}