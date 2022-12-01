<?php

namespace App\database\migrations\database;

class userLinksDbMigration{

    public $conn;

    public function connection($sever,$username,$password,$mysqli){

        $this->conn = new $mysqli($sever,$username,$password);

        if($this->conn->connect_error){

            echo "Could not Connect<br>";

        }else{

            echo "Connected<br>";

        }

    }

    public function createUserLinksDatabase(){

        $statement = "CREATE DATABASE devprofile_user_links";

        if($this->conn->query($statement) === TRUE){

            echo "Devprofile user links database has been created<br>";

        }else{

            echo "Could not create devprofile user links database <br>";


        }

    }

}

?>