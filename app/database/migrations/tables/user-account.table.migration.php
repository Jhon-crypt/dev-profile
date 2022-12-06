<?php

namespace App\database\migrations\tables;

class userAccountTableMigration{

    public $conn;

    public function connection($sever,$username,$password,$database,$mysqli){

        $this->conn = new $mysqli($sever,$username,$password,$database);

        if($this->conn->connect_error){

            echo "Could not Connect<br>";

        }else{

            echo "Connected<br>";

        }

    }

    public function createUserAccounTable(){

        $statement = "CREATE TABLE user_accounts
        (
            id int NOT NULL AUTO_INCREMENT,
            username text,
            gender text,
            ref_id text,
            password text,
            date_created text,
            time_created text,
            status text,
            PRIMARY KEY(id)
        )";

        if($this->conn->query($statement) === TRUE){

            echo "User account table has been created<br>";

        }else{

            echo "Could not create user account table";

        }

    }

}

?>