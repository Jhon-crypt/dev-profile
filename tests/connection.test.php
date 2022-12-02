<?php

require("../vendor/autoload.php");

//loading env variables
$env = Dotenv\Dotenv::createImmutable('../');
$env->load();

use App\database\connections\userAccountsDbConnection;

use App\database\connections\userContactDbConnection;

use App\database\connections\userExperienceDbConnection;

use App\database\connections\userProfileDbConnection;

use App\database\connections\userProjectDbConnection;

use App\database\connections\userSkillsDbConnection;

use App\database\connections\userPasswordResetDbConnection;

class databaseConnectionTest{

    public function userAccountConnectionTest(){

        $user_account_connection_test = new userAccountsDbConnection();

        $user_account_connection_test->connection($_SERVER['server_name'],$_SERVER['username'],$_ENV['password'],"devprofile_user_accounts","mysqli");

    }

    public function userContactConnectionTest(){

        $user_contact_connection_test = new userContactDbConnection();

        $user_contact_connection_test->connection($_SERVER['server_name'],$_SERVER['username'],$_ENV['password'],"devprofile_user_contact","mysqli");

    }

    public function userExperienceConnectionTest(){

        $user_experience_connection_test = new userExperienceDbConnection();

        $user_experience_connection_test->connection($_SERVER['server_name'],$_SERVER['username'],$_ENV['password'],"devprofile_user_experience","mysqli");

    }

    public function userProfileConnectionTest(){

        $user_profile_connection_test = new userProfileDbConnection();

        $user_profile_connection_test->connection($_SERVER['server_name'],$_SERVER['username'],$_ENV['password'],"devprofile_user_profile","mysqli");

    }

    public function userProjectsConnectionTest(){

        $user_project_connection_test = new userProjectDbConnection();

        $user_project_connection_test->connection($_SERVER['server_name'],$_SERVER['username'],$_ENV['password'],"devprofile_user_projects","mysqli");

    }

    public function userSkillsConnectionTest(){

        $user_skills_connection_test = new userSkillsDbConnection();

        $user_skills_connection_test->connection($_SERVER['server_name'],$_SERVER['username'],$_ENV['password'],"devprofile_user_skills","mysqli");

    }

    public function userPasswordResetDbConnection(){

        $user_password_reset_connection_test = new userPasswordResetDbConnection();

        $user_password_reset_connection_test->connection($_SERVER['server_name'],$_SERVER['username'],$_ENV['password'],"devprofile_user_password_reset","mysqli");

    }

}

$database_connection_test = new databaseConnectionTest();

//$database_connection_test->userAccountConnectionTest();

//$database_connection_test->userContactConnectionTest();

//$database_connection_test->userExperienceConnectionTest();

//$database_connection_test->userProfileConnectionTest();

//$database_connection_test->userProjectsConnectionTest();

$database_connection_test->userSkillsConnectionTest();

$database_connection_test->userPasswordResetDbConnection();

?>