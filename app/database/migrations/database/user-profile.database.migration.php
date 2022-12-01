<?php

include("../../../../vendor/autoload.php");

//loading env variables
$env = Dotenv\Dotenv::createImmutable('../../../../');
$env->load();

class userProfileDbMigration{

    public $conn;

    public function connection($sever,$username,$password){

        $this->conn = new mysqli($sever,$username,$password);

        if($this->conn->connect_error){

            echo "Could not Connect<br>";

        }else{

            echo "Connected<br>";

        }

    }


    public function createUserProfileDatabase(){

        $statement = "CREATE DATABASE devprofile_user_profile";

        if($this->conn->query($statement) === TRUE){

            echo "Devprofile user profile database has been created<br>";

        }else{

            echo "Could not create devprofile user profile database has been created<br>";


        }

    }

}

$user_profile_db_migration = new userProfileDbMigration();

$user_profile_db_migration->connection($_SERVER['server_name'],$_SERVER['username'],$_ENV['password']);

$user_profile_db_migration->createUserProfileDatabase();

?>