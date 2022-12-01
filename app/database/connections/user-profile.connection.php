<?php

namespace App\database\connections;

class userProfileDbConnection{

    public $user_profile_conn;

    public function connection($sever,$username,$password,$database,$mysqli){

        $this->user_profile_conn = new $mysqli($sever,$username,$password,$database);

        if($this->user_profile_conn->connect_error){

            echo "Could not Connect<br>";

        }else{

            echo "Connected<br>";

        }

    }

}

?>