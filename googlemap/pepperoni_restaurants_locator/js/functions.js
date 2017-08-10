$(document).ready(function(){
    	
    	$('#admin_sidebar').css('min-height',($(window).height()-100));
    	
    	$('#toggle_link').bind('click', function(){
 				if($(this).hasClass('open')){
    			$('#main_panel').css('margin-left', '0px');
    			$('#toggle_div').css('left','0px');
    			$('#toggle_link').html("<img src='/images/icons/resultset_next.png'>");
    			$('#admin_sidebar').css('width', '0px').css('border-right', '15px solid #a6ccdd');
    			$('#toggle_link').removeClass('open');
    			}
    			else
    			{
    			$('#main_panel').css('margin-left', '260px');
    			$('#toggle_div').css('left','235px');
    			$('#toggle_link').html("<img src='/images/icons/resultset_previous.png'>");
    			$('#admin_sidebar').css('width', '250px').css('border', 'none');
    			$('#toggle_link').addClass('open');
    			}
    	});
       
        $('#current_business').change(function(){
        	$.ajax({
	          type: 'POST',
	          data: "business_id="+$(this).val(),
	          url: "/admin/index/update_business_session",
	          success: function(data){
				if(data.status=='success')
				top.location.reload();
				else
				alert('Error Updating business ID');
	          },
	          dataType: 'json'
	        });
        });
        
        $('#info').click(function(){
        	var url = top.location.href;
        	url = url.replace('http://','');
        	url = url.replace('https://');
        	a = url.split('/');
        	url = url.replace(a[0],'');
        	var title = escape($('title').html());
        	//alert(url);

        	window.open('http://droplocker.com/wiki/search.php?page='+url+"&title="+title,'information');
        })

        
       	/**
       	 * used on the droplocker template
       	 */
        $('#e_submit').bind('click', function(){
		if($('#e').val() == ''){
			alert("Please enter an email address to join the newsletter");
			return false;
		}
		
		 var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		   var address = $('#e').val();
		   if(reg.test(address) == false) {
		 
		      alert('Invalid Email Address');
		      return false;
		   }
		
		
		return true;
		});
		
		$('#e_link_submit').bind('click', function(){
		if($('#semail_input').val() == ''){
			alert("Please enter an email address to join the newsletter");
			return false;
		}
		
		 var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		   var address = $('#semail_input').val();
		   if(reg.test(address) == false) {
		 
		      alert('Invalid Email Address');
		      return false;
		   }
		
			$.ajax({
				url:"/main/newsletter",
				type: "post",
				data: "e="+$('#semail_input').val()+"&submit=true",
				success:function(data){
					top.location.href = "/main/newsletter";
				}
			});
		
		});
 });
 
function openCenteredWindow(url, width, height) {

    var left = parseInt((document.documentElement.clientWidth/2) - (width/2));
    //alert(left);
    //alert($(window).height() - this.height()  / 2+$(window).scrollTop() + "px");
    var top = parseInt((document.documentElement.clientHeight/2) - (height/2));
    var windowFeatures = "width=" + width + ",height=" + height + ",status,resizable,left=" + left + ",top=" + top + "screenX=" + left + ",screenY=" + top;
    myWindow = window.open(url, "subWind", windowFeatures);
}

function verify_delete(){
    return confirm('Are you sure?');
}


/**
 * dynamic dropdown selection
 * 
 * @param SelectName - id attribute of the the select input
 * @param Value - of the select input
 */
function selectValueSet(SelectName, Value)
{
 
  eval('SelectObject = document.getElementById(\'' + SelectName + '\');');
  for(index = 0; index < SelectObject.length; index++)
  {
   if(SelectObject[index].value == Value)
     SelectObject.selectedIndex = index;
  }
}


function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function setCheckedValue(checked) {
$(document).ready(function() {
checked = checked.replace(/\//gi, "-");
$('#'+checked).attr({checked:true});
});
}
