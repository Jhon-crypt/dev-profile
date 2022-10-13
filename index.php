<?php

require("./vendor/autoload.php");

use App\views\indexView;

use Phpfastcache\CacheManager;

use Phpfastcache\Config\ConfigurationOption;

class devprofile{

    public $index_view;

    public function index(){

        $index_view = new indexView();

        $index_view->displayIndexPage();

        $this->index_view = $index_view->index_page;

    }

    public function cacheIndex(){

        CacheManager::setDefaultConfig(new ConfigurationOption([
            'path' => '', // or in windows "C:/tmp/"
        ]));
        
        $InstanceCache = CacheManager::getInstance('files');
        
        $key = "index_page";
        $Cached_page = $InstanceCache->getItem($key);
        
        if (!$Cached_page->isHit()) {
        
            $Cached_page->set($this->index_view)->expiresAfter(1);//in seconds, also accepts Datetime
        
            $InstanceCache->save($Cached_page); // Save the cache item just like you do with doctrine and entities
        
            echo $Cached_page->get();
            //echo 'FIRST LOAD // WROTE OBJECT TO CACHE // RELOAD THE PAGE AND SEE // ';
        
        } else {
        
            echo $Cached_page->get();
            //echo 'READ FROM CACHE // ';
        
            $InstanceCache->deleteItem($key);
        }

    }

}

$dev_profile = new devprofile();

$dev_profile->index();

$dev_profile->cacheIndex();


?>