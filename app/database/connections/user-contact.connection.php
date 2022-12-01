<?php

namespace App\database\connections;

class userContactDbConnection{

    public $user_contact_conn;

    public function connection($sever,$username,$password,$database,$mysqli){

        $this->user_contact_conn = new $mysqli($sever,$username,$password,$database);

        if($this->user_contact_conn->connect_error){

            echo "Could not Connect<br>";

        }else{

            echo "Connected<br>";

        }

    }

}

?>