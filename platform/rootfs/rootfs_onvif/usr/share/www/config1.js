$(window).ready(function(){

   resizeL();

}).resize(function(){
    resizeL();
});


        	function resizeL(){                 
	               var wwidth =document.documentElement.clientWidth;
	               var wheight=document.documentElement.clientHeight;
	                if(wwidth<=417)
	                {
	                    $('#lmll').css('width',0);
	                    $('#lmrr').css('width',0);
	                    $('#lml').css('width',0);
	                    $('#lmr').css('width',0);
	                    $('#lmm').css('width',wwidth);
	                    $('#ldl').css('width',0);
	                    $('#ldm').css('width',wwidth);
	                    $('#ldr').css('width',0);
	                }
	                else if(wwidth<=1127)
	               {
	                    $('#lmll').css('width',0);
	                    $('#lmrr').css('width',0);
	                    $('#lml').css('width',(wwidth-417)/2+(355-(wwidth-417)/2));
	                    $('#lml').css('margin-left',-(355-(wwidth-417)/2));
	                    $('#lmr').css('width',(wwidth-417)/2);
	                    $('#lmm').css('width',417);
	                    $('#ldl').css('width',((wwidth-417)/2)-1)
	                    $('#ldm').css('width',417);
	                    $('#ldr').css('width',(wwidth-(417+(wwidth-417)/2-1)));
	                }
	                else
	                {
                       $('#lml').css('margin-left',0);
                       $('#lml').css('width',355);                       
                       $('#lmr').css('width',355);
                       $('#lmm').css('width',417); 
	                   $('#ldm').css('width',417);
	                   var w=(wwidth-(417+355+355))/2;
	                   $('#ldl').css('width',w+355);
	                   $('#ldr').css('width',(wwidth-(417+355+w))); 
	                    $('#lmll').css('width',w);	
	                    $('#lmrr').css('width',w);	
	                }
}



function pic_btn_down()
{
	location.href = "playback.html";
}
//snapshot
function Snapshot()
{
	var url = "http://" + g_ip + ":" + g_port + "/snapshot.jpg?size=-1x-1&download=yes";
	window.open(url);
}



