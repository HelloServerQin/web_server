# Host: localhost  (Version: 5.5.53)
# Date: 2020-08-20 13:22:36
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "adminstater"
#

DROP TABLE IF EXISTS `adminstater`;
CREATE TABLE `adminstater` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `gender` char(6) DEFAULT '男',
  `age` int(11) DEFAULT '14',
  `address` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `userIcon` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

#
# Data for table "adminstater"
#

/*!40000 ALTER TABLE `adminstater` DISABLE KEYS */;
INSERT INTO `adminstater` VALUES (1,'张三','123456','123456789963258741','男',37,'上海','15969549920',NULL,'15969549920@163.com');
/*!40000 ALTER TABLE `adminstater` ENABLE KEYS */;
