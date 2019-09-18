<?php
$sendto = "5570899@mail.ru"; // 5570899@mail.ru почта, на которую будет приходить письмо !!! Измените на свою!!!

$pack_value = $_POST['pack'];

if ($_POST['delevery']=='Доставка по адресу')
{$adres = $_POST['adres'];
 $kv = $_POST['kv'];
} else {
 $adres = 'Самовывоз';
}

$usertel =  htmlspecialchars ($_POST['tel']);
$username = htmlspecialchars ($_POST["user_name"]);
$usermail =  $_POST['milo'];
       
       
  $subject = "Заявка на заказ с Hirudomed.ru";
$headers = "From: info@hirudo-med.ru\r\n";
  
  
  $headers .= "MIME-Version: 1.0\r\n";
  
  $headers .= "Content-Type: text/html;charset=\"UTF-8\" \r\n";
 
  
 
// Формирование тела письма
  $msg = "<html><body style='font-family:Arial,sans-serif;'>";
  $msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Содержание заказа:</h2>\r\n";
  $msg .= "<p><strong>От кого:</strong>". $username." </p>\r\n";
  $msg .= "<p><strong>Почта:</strong> ". $usermail."</p>\r\n";
  $msg .= "<p><strong>Номер телефона:</strong> ". $usertel."</p>\r\n";

  $msg .= "<p><strong>Адрес доставки: </strong> ". $adres ."</p>\r\n";
  

if ($_POST['kosmeticheskaya']=='on')
{$razmer_k = "Косметическая";
 $kol_k = $_POST['kosm'];
$msg .= "<p><strong> Косметические: </strong> ".$kol_k."шт.</p>\r\n";
}

if ($_POST['melkaya']=='on')
{$razmer_k = "Мелкая";
 $kol_m = $_POST['melk'];
 $msg .= "<p><strong> Мелкая: </strong> ".$kol_m."шт.</p>\r\n";
}

if ($_POST['sredn']=='on')
{$razmer_k = "Средняя";
 $kol_s= $_POST['sr'];
 $msg .= "<p><strong> Средняя: </strong> ".$kol_s."шт.</p>\r\n";
}

if ($_POST['krupn']=='on')
{$razmer_k = "Крупная";
 $kol_kr = $_POST['kr'];
 $msg .= "<p><strong> Крупная: </strong> ".$kol_kr."шт.</p>\r\n";
}

  $msg .= "<p><strong>Общее кол-во пиявок: </strong> ".$_POST['obchee']."шт.</p>\r\n";

  $msg .= "<p><strong>Упаковка: </strong>".$pack_value."</p>\r\n";

 
  $msg .= "</body></html>";


@mail($sendto, $subject, $msg, $headers);

?>