# Host: localhost  (Version: 5.5.53)
# Date: 2020-08-20 13:22:51
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "blogs"
#

DROP TABLE IF EXISTS `blogs`;
CREATE TABLE `blogs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `author` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `article` longtext,
  `createtime` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

#
# Data for table "blogs"
#

/*!40000 ALTER TABLE `blogs` DISABLE KEYS */;
INSERT INTO `blogs` VALUES (1,'张三','爱情是个什么东西','爱是一道光,绿得让人发慌,神秘隔壁老王,也是天天笑呵呵;','2020年2月12日 15:30'),(2,'李四','牛逼就是这么拽','彪悍的人生不需要过多的解释,两横一竖就是干,横平竖直真男子汉;','2020年2月12日 7:00'),(3,'王五','过去的过去是他妈什么东西','过去的过去已经过去,过不去的过去,依然在你心里,所以过去的不一定过去,过不去的很可能是已经死亡的过去','2020年3月1日 12:00'),(4,'麻六','一场不尽兴的性生活,是饥渴还是高要求','性生活时间太短,且不尽兴,对于各种姿势,要求不到位,队友形体太坑,每天自我休眠','2020年08月19日 11:39'),(5,'钱七','为爱情鼓掌,让生活更有情景','野外钓鱼让你生活如麻,见面嘿咻让你爱步难舍,路边的野花慢慢踩,注意玫瑰别扎手','2020年08月19日 11:42');
/*!40000 ALTER TABLE `blogs` ENABLE KEYS */;
