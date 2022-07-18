CREATE DATABASE IF NOT EXISTS nodedb;

USE nodedb;

CREATE TABLE IF NOT EXISTS `people` (
  `id` int(11) NOT NULL auto_increment,   
  `name` varchar(250)  NOT NULL default '',     
   PRIMARY KEY  (`id`)
);