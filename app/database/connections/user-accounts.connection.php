<?php

namespace App\database\connections;

class userAccountsDbConnection{

    public $user_accounts_conn;

    public function connection($sever,$username,$password,$database,$mysqli){

        $this->user_accounts_conn = new $mysqli($sever,$username,$password,$database);

        if($this->user_accounts_conn->connect_error){

            echo "Could not Connect<br>";

        }else{

            echo "Connected<br>";

        }

    }

}

?>