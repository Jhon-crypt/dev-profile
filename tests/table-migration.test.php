<?php

require("../vendor/autoload.php");

//loading env variables
$env = Dotenv\Dotenv::createImmutable('../');
$env->load();

use App\database\migrations\tables\userAccountTableMigration;

use App\database\migrations\tables\userProfileTableMigration;

class tableMigrationTest{

    public function userAccountTableMigrationTest(){

        $user_account_table_migration = new userAccountTableMigration();

        $user_account_table_migration->connection($_SERVER['server_name'],$_SERVER['username'],$_ENV['password'],"devprofile_user_accounts","mysqli");

        $user_account_table_migration->createUserAccounTable();

    }

    public function userProfileTableMigrationTest(){

        $user_profile_table_migration = new userProfileTableMigration();

        $user_profile_table_migration->connection($_SERVER['server_name'],$_SERVER['username'],$_ENV['password'],"devprofile_user_profile","mysqli");

        $user_profile_table_migration->createUserProfileTable();

    }

}

$table_migration_test = new tableMigrationTest();

//$table_migration_test->userAccountTableMigrationTest();

$table_migration_test->userProfileTableMigrationTest();

?>