<?php

namespace App\database\migrations\database;

class userSocialsDbMigration{

    public $conn;

    public function connection($sever,$username,$password,$mysqli){

        $this->conn = new $mysqli($sever,$username,$password);

        if($this->conn->connect_error){

            echo "Could not Connect<br>";

        }else{

            echo "Connected<br>";

        }

    }

    public function createUserSocialsProjectsDatabase(){

        $statement = "CREATE DATABASE devprofile_user_socials";

        if($this->conn->query($statement) === TRUE){

            echo "Devprofile user socials database has been created<br>";

        }else{

            echo "Could not create devprofile user socials database <br>";


        }

    }

}

?>