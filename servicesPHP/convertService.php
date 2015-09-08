<?php
class convertService{
    public static function convertTemp($celsius){
        return ($celsius * 1.8 + 32);    
    }
}

?>