<?php

namespace App\database\connections;

class userPasswordResetDbConnection{

    public $user_password_reset_conn;

    public function connection($sever,$username,$password,$database,$mysqli){

        $this->user_password_reset_conn = new $mysqli($sever,$username,$password,$database);

        if($this->user_password_reset_conn->connect_error){

            echo "Could not Connect<br>";

        }else{

            echo "Connected<br>";

        }

    }

}

?>

