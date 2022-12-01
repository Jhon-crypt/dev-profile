<?php

require("../vendor/autoload.php");

//loading env variables
$env = Dotenv\Dotenv::createImmutable('../');
$env->load();

use App\database\migrations\database\userAccountDbMigration;

use App\database\migrations\database\userDevProfileDbMigration;

use App\database\migrations\database\userPasswordResetDbMigration;

use App\database\migrations\database\userSkillsDbMigration;

use App\database\migrations\database\userExperienceDbMigration;

use App\database\migrations\database\userProjectsDbMigration;

use App\database\migrations\database\userContactDbMigration;

use App\database\migrations\database\userSocialsDbMigration;

use App\database\migrations\database\userLinksDbMigration;

class databaseMigrationTest{

    public function userAccountMigrationTest(){

        $user_account_db_migration = new userAccountDbMigration();

        $user_account_db_migration->connection($_SERVER['server_name'],$_SERVER['username'],$_ENV['password'],"mysqli");

        $user_account_db_migration->createUserAccountDatabase();

    }

    public function userDevProfileMigrationTest(){

        $user_dev_profile_db_migration = new userDevProfileDbMigration();

        $user_dev_profile_db_migration->connection($_SERVER['server_name'],$_SERVER['username'],$_ENV['password'],"mysqli");

        $user_dev_profile_db_migration->createUserProfileDatabase();

    }

    public function userPasswordResetDbMigrationTest(){

        $user_password_reset_db_migration = new userPasswordResetDbMigration();

        $user_password_reset_db_migration->connection($_SERVER['server_name'],$_SERVER['username'],$_ENV['password'],"mysqli");

        $user_password_reset_db_migration->createUserPasswordResetDatabase();

    }   

    public function userSkillsDbMigrationTest(){

        $user_skills_db_migration = new userSkillsDbMigration();

        $user_skills_db_migration->connection($_SERVER['server_name'],$_SERVER['username'],$_ENV['password'],"mysqli");

        $user_skills_db_migration->createUserSkillsDatabase();

    }

    public function userExperienceDbMigration(){

        $user_experience_db_migration = new userExperienceDbMigration();

        $user_experience_db_migration->connection($_SERVER['server_name'],$_SERVER['username'],$_ENV['password'],"mysqli");

        $user_experience_db_migration->createUserExperienceDatabase();

    }

    public function userProjectsDbMigration(){

        $user_projects_db_migration = new userProjectsDbMigration();

        $user_projects_db_migration->connection($_SERVER['server_name'],$_SERVER['username'],$_ENV['password'],"mysqli");

        $user_projects_db_migration->createUserProjectsDatabase();

    }

    public function userContactDbMigration(){

        $user_contact_db_migration = new userContactDbMigration();

        $user_contact_db_migration->connection($_SERVER['server_name'],$_SERVER['username'],$_ENV['password'],"mysqli");

        $user_contact_db_migration-> createUserContactDatabase();

    }

    public function userSocialsDbMigration(){

        $user_socials_db_migration = new userSocialsDbMigration();

        $user_socials_db_migration->connection($_SERVER['server_name'],$_SERVER['username'],$_ENV['password'],"mysqli");

        $user_socials_db_migration->createUserSocialsProjectsDatabase();

    }


    public function userLinksDbMigration(){

        $user_links_db_migration = new userLinksDbMigration();

        $user_links_db_migration->connection($_SERVER['server_name'],$_SERVER['username'],$_ENV['password'],"mysqli");

        $user_links_db_migration->createUserLinksDatabase();

    }

}

$database_migration_test = new databaseMigrationTest();

//$database_migration_test->userAccountMigrationTest();

//$database_migration_test->userDevProfileMigrationTest();

//$database_migration_test->userPasswordResetDbMigrationTest();

//$database_migration_test->userSkillsDbMigrationTest();

//$database_migration_test->userExperienceDbMigration();

//$database_migration_test->userProjectsDbMigration();

//$database_migration_test->userContactDbMigration();

//$database_migration_test->userSocialsDbMigration();

$database_migration_test->userLinksDbMigration();

?>