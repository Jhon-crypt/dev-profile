<?php

namespace App\database\connections;

class userProjectDbConnection{

    public $user_project_conn;

    public function connection($sever,$username,$password,$database,$mysqli){

        $this->user_project_conn = new $mysqli($sever,$username,$password,$database);

        if($this->user_project_conn->connect_error){

            echo "Could not Connect<br>";

        }else{

            echo "Connected<br>";

        }

    }

}

?>