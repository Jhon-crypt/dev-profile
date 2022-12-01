<?php

include("../../../../vendor/autoload.php");

//loading env variables
$env = Dotenv\Dotenv::createImmutable('../../../../');
$env->load();

class userPasswordResetDbMigration{

    public $conn;

    public function connection($sever,$username,$password){

        $this->conn = new mysqli($sever,$username,$password);

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

$user_password_reset_db_migration = new userPasswordResetDbMigration();

$user_password_reset_db_migration->connection($_SERVER['server_name'],$_SERVER['username'],$_ENV['password']);

$user_password_reset_db_migration->createUserPasswordResetDatabase();

?>