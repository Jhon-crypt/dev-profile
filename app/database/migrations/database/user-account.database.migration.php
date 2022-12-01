<?php

include("../../../../vendor/autoload.php");

//loading env variables
$env = Dotenv\Dotenv::createImmutable('../../../../');
$env->load();

class userAccountDbMigration{

    public $conn;

    public function connection($sever,$username,$password){

        $this->conn = new mysqli($sever,$username,$password);

        if($this->conn->connect_error){

            echo "Could not Connect<br>";

        }else{

            echo "Connected<br>";

        }

    }

    public function createUserAccountDatabase(){

        $statement = "CREATE DATABASE devprofile_user_accounts";

        if($this->conn->query($statement) === TRUE){

            echo "Devprofile user account database has been created<br>";

        }else{

            echo "Could not create devprofile user account database has been created<br>";


        }

    }

}

$user_account_db_migration = new userAccountDbMigration();

$user_account_db_migration->connection($_SERVER['server_name'],$_SERVER['username'],$_ENV['password']);

$user_account_db_migration->createUserAccountDatabase();

?>