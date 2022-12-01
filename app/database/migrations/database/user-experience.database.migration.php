<?php

namespace App\database\migrations\database;

class userExperienceDbMigration{

    public $conn;

    public function connection($sever,$username,$password,$mysqli){

        $this->conn = new $mysqli($sever,$username,$password);

        if($this->conn->connect_error){

            echo "Could not Connect<br>";

        }else{

            echo "Connected<br>";

        }

    }

    public function createUserExperienceDatabase(){

        $statement = "CREATE DATABASE devprofile_user_experience";

        if($this->conn->query($statement) === TRUE){

            echo "Devprofile user experience database has been created<br>";

        }else{

            echo "Could not create devprofile user experience database has been created<br>";


        }

    }

}

?>