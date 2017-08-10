<?php
/*
 * Description: dynamically store Google Static Map in JPG format to a file on server
 * Author:  Biana Custom Web Developer
 * URL:     http://www.247apps.mobi
 * Date:    08/10/2017
 * License: GNU
* */


$gg = 'http://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap
&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
&markers=color:red%7Clabel:C%7C40.718217,-73.998284';

$jpg_file = file_get_contents($gg);
$appraiserkey = '580761ac2461ad4ceafdc3857dec3137'; //awdb.appraiser table

$filename = "google_maps/{$appraiserkey}_".time() .'.jpg';

if (!file_exists($filename)) {
   //if same filename not exist, save it
    file_put_contents($filename, $jpg_file);
    echo $filename;

} else {
    echo 'no map image found';
}