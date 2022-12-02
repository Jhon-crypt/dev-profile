<?php

namespace App\database\connections;

class userSkillsDbConnection{

    public $user_skills_conn;

    public function connection($sever,$username,$password,$database,$mysqli){

        $this->user_skills_conn = new $mysqli($sever,$username,$password,$database);

        if($this->user_skills_conn->connect_error){

            echo "Could not Connect<br>";

        }else{

            echo "Connected<br>";

        }

    }

}

?>