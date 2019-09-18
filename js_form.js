$(document).ready(function()
{
           	$('#delevery').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
		
		$.ajax({
			type: "POST",
			url: "newsend.php",
			data: $(this).serialize()	})
			.done(function() {
			document.getElementById('page1').style.display = "none";
			document.getElementById('page2').style.display = "inline-block";
			
			
		});
		return false;
	});

$('#check1, #check2, #check3, #check4,#Dostavka,#Samovivoz').click(function(){
    if ($('#check1').is(':checked')) {
        $('#input1')[0].disabled = false;
        document.getElementById('input1').style.color = "black";
        document.getElementById('input1').style.borderColor = "#00c";
        document.getElementById('kosm').style.color = "black";
         if ($('#input1').val()==''){
        $('#input1').val('10');}
        } else {
                $('#input1')[0].disabled = true;
                
                $('#input1').val(''); 
                document.getElementById('input1').style.borderColor = "#aaaaaa";
                document.getElementById('kosm').style.color = "#aaaaaa";
    }   
    if ($('#check2').is(':checked')){
    $('#input2')[0].disabled = false;
    document.getElementById('input2').style.color = "black";
    document.getElementById('input2').style.borderColor = "#00c";
    document.getElementById('melk').style.color = "black";
       if ($('#input2').val()==''){ $('#input2').val('10');}
    } else {
    $('#input2')[0].disabled = true;
    
        $('#input2').val(''); 
        document.getElementById('input2').style.borderColor = "#aaaaaa";
        document.getElementById('melk').style.color = "#aaaaaa";
        }  
    if ($('#check3').is(':checked')){
    $('#input3')[0].disabled = false;
    document.getElementById('input3').style.color = "black";
    document.getElementById('input3').style.borderColor = "#00c";
    document.getElementById('sred').style.color = "black";
        if ($('#input3').val()==''){$('#input3').val('10');}
    } else {
    $('#input3')[0].disabled = true;
    
        $('#input3').val(''); 
        document.getElementById('input3').style.borderColor = "#aaaaaa";
        document.getElementById('sred').style.color = "#aaaaaa";
        }
        if ($('#check4').is(':checked')){
    $('#input4')[0].disabled = false;
    document.getElementById('input4').style.color = "black";
    document.getElementById('input4').style.borderColor = "#00c";
    document.getElementById('krup').style.color = "black";
         if ($('#input4').val()==''){$('#input4').val('10');}
    } else {
    $('#input4')[0].disabled = true;
        $('#input4').val(''); 
        document.getElementById('input4').style.borderColor = "#aaaaaa";
        document.getElementById('krup').style.color = "#aaaaaa";
    }
        
var $output = $("#output"),
 $output2 = $("#output2"),

 value = parseFloat(+$("#input2").val())+(+$("#input3").val())+(+$("#input4").val()),
 kosm = parseFloat(+$("#input1").val()),
 summ = parseFloat($('#input5').val()),
 sale = $('#sale'),
 obsch = (+value) + (+kosm);

if ((obsch==0)|| (obsch=='')) { 
    if(summ <= 99) {$output.val(summ*50); }
    else
    if(summ <= 299) {$output.val(summ*45); }
    else 
    if(summ <= 999) {$output.val(summ*42); }
    else
    if(summ >= 1000) {$output.val(summ*39); } 
    if (summ>99) {sale.val(+(summ*50)-(+($output.val())));}
    else {sale.val('')}
} 
 else{
    if(kosm !=0 && kosm!=''){$output.val(kosm*30);}else{kosm = '0'}
    if(value <= 99) {$output.val(+(value*50)+ (+(kosm*30))); }
    else
    if(value <= 299) {$output.val(+(value*45)+ (+(kosm*30))); }
    else 
    if(value <= 999) {$output.val(+(value*42) + (+(kosm*30))); }
    else
    if (value >= 1000) {$output.val(+(value*39)+ (+(kosm*30))); }
    if (value>99) {sale.val(+(value*50)+ (+(kosm*30))-(+$output.val()))} 
    else {sale.val('')}
    if ((value == '' || value== '0') && (kosm == '' || kosm== '0')) {$output.val(''); }
 }
  

if ($('#check1').is(':checked')||
    $('#check2').is(':checked')||
    $('#check3').is(':checked')||
    $('#check4').is(':checked'))
        {$('#input5')[0].disabled = true; $('#input5').val(obsch)}
        else 
        {$('#input5')[0].disabled = false;$('#input5').val(summ)}  
        
       $output2.val($output.val());
           if ($('#Dostavka').is(':checked')||
    $('#Samovivoz').is(':checked')) {
document.getElementById('eror').style.display = "none";
        document.getElementById('eror2').style.display = "none";
    }
if (sale.val()>0) {document.getElementById('sale1').style.display = "block"}
        else {document.getElementById('sale1').style.display = "none"}
   
});

var $output = $("#output");
var $output2 = $("#output2");
$("#input5,#input4, #input3, #input2, #input1").on("change keyup", function () {
var value = parseFloat(+$("#input2").val())+(+$("#input3").val())+(+$("#input4").val());
var kosm = parseFloat(+$("#input1").val());
var summ = parseFloat($('#input5').val());
var obsch = (+value) + (+kosm),
 sale = $('#sale');
 

if ((obsch==0)|| (obsch=='')) { 
    if(summ <= 99) {$output.val(summ*50); }
    else
    if(summ <= 299) {$output.val(summ*45); }
    else 
    if(summ <= 999) {$output.val(summ*42); }
    else
    if (summ >= 1000) {$output.val(summ*39); } 
    if (summ>99) {sale.val(+(summ*50)-(+($output.val())))}
    else {sale.val('')}
} 
 else{
    if(kosm !=0 && kosm!=''){$output.val(kosm*30);}else{kosm = '0'}
    if(value <= 99) {$output.val(+(value*50)+ (+(kosm*30))); }
    else
    if(value <= 299) {$output.val(+(value*45)+ (+(kosm*30))); }
    else 
    if(value <= 999) {$output.val(+(value*42) + (+(kosm*30))); }
    else
    if (value >= 1000) {$output.val(+(value*39)+ (+(kosm*30))); } 
    if (value>99) {sale.val(+(value*50)+ (+(kosm*30))-(+$output.val()))} 
    else {sale.val('')}
    if ((value == '' || value== '0') && (kosm == '' || kosm== '0')) {$output.val('')}
 }
    if ($('#check1').is(':checked')||
    $('#check2').is(':checked')||
    $('#check3').is(':checked')||
    $('#check4').is(':checked'))
        {$('#input5')[0].disabled = true; $('#input5').val(obsch)}
        else 
        {$('#input5')[0].disabled = false;$('#input5').val(summ)}   
        
        $output2.val($output.val());
        
        if (sale.val()>0) {document.getElementById('sale1').style.display = "block"}
        else {document.getElementById('sale1').style.display = "none"}
});
$('#Dostavka, #Samovivoz').click(function(){
if ($('#Dostavka').is(':checked'))
   {document.getElementById('nesam').style.display = "block";
document.getElementById('nesam1').style.borderColor = "#00c";
document.getElementById('nesam1').style.color = "black";}
else 
   {document.getElementById('nesam').style.display = "none";
 document.getElementById('nesam1').style.borderColor = "#ccc";
document.getElementById('nesam1').style.color = "#aaaaaa";}
 if ($('#Samovivoz').is(':checked'))
   {document.getElementById('sam').style.display = "block";
document.getElementById('sam1').style.borderColor = "#00c";
document.getElementById('sam1').style.color = "black";}
else 
   {document.getElementById('sam').style.display = "none";
 document.getElementById('sam1').style.borderColor = "#ccc";
document.getElementById('sam1').style.color = "#aaaaaa";}

});

var next = document.getElementsByClassName("button24")[0];
var formmodal = document.getElementById('formModal');

var zakrit = document.getElementsByClassName("close")[0];

next.onclick = function(){
     if ($('#Dostavka').is(':checked')) {
         if ($('#adres').val()=='') {document.getElementById('eror2').style.display = "block"}
         else {document.getElementById('eror2').style.display = "none";
             
         if ($('#input5').val()<10) {document.getElementById('eror3').style.display = "block"}
         else {document.getElementById('eror3').style.display = "none";
             formmodal.style.display = "block";
             document.getElementById('page1').style.display = "inline-block";
document.getElementById('page2').style.display = "none"; 
            }
         }
     }
    else
    if ($('#Samovivoz').is(':checked')) {
formmodal.style.display = "block" ;
document.getElementById('page1').style.display = "inline-block";
document.getElementById('page2').style.display = "none";}
else {document.getElementById('eror').style.display = "block"}
$('.phone').mask('', {placeholder: "+_ (___) ___ __ __"});
}

zakrit.onclick = function(){
formmodal.style.display = "none";
document.getElementById('page1').style.display = "inline-block";
document.getElementById('page2').style.display = "none";

}

window.onclick = function(){
if (event.target == formmodal){
formmodal.style.display = "none";
document.getElementById('page1').style.display = "inline-block";
document.getElementById('page2').style.display = "none";
}
}

 $('#telefon').mask('+7 (999) 999-99-99');

$('#check11').on('click', function() {
        if ($("#check11").prop("checked")) {
            $('#button').attr('disabled', false);
        } else {
            $('#button').attr('disabled', true);
        }
    });
 
 

});

