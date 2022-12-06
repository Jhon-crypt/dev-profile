<?php

namespace App\database\migrations\tables;

class userProfileTableMigration{

    public $conn;

    public function connection($sever,$username,$password,$database,$mysqli){

        $this->conn = new $mysqli($sever,$username,$password,$database);

        if($this->conn->connect_error){

            echo "Could not Connect<br>";

        }else{

            echo "Connected<br>";

        }

    }

    public function createUserProfileTable(){

        $statement = "CREATE TABLE user_devprofile
        (
            id int NOT NULL AUTO_INCREMENT,
            fullname text,
            title text,
            ref_id text,
            avatar text,
            date_created text,
            time_created text,
            status text,
            PRIMARY KEY(id)
        )";

        if($this->conn->query($statement) === TRUE){

            echo "User profile table has been created<br>";
 
        }else{

            echo "Could not create user profile table";

        }

    }

}

?>