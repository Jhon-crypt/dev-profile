<?php

namespace App\database\migrations\database;

class userPasswordResetDbMigration{

    public $conn;

    public function connection($sever,$username,$password,$mysqli){

        $this->conn = new $mysqli($sever,$username,$password);

        if($this->conn->connect_error){

            echo "Could not Connect<br>";

        }else{

            echo "Connected<br>";

        }

    }

    public function createUserPasswordResetDatabase(){

        $statement = "CREATE DATABASE devprofile_user_password_reset";

        if($this->conn->query($statement) === TRUE){

            echo "Devprofile user password reset database has been created<br>";

        }else{

            echo "Could not create devprofile user password reset database has been created<br>";


        }

    }

}

?>