<?php

namespace App\database\connections;

class userExperienceDbConnection{

    public $user_experience_conn;

    public function connection($sever,$username,$password,$database,$mysqli){

        $this->user_experience_conn = new $mysqli($sever,$username,$password,$database);

        if($this->user_experience_conn->connect_error){

            echo "Could not Connect<br>";

        }else{

            echo "Connected<br>";

        }

    }

}

?>