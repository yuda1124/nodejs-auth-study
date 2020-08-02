CREATE DATABASE `login-test`; /*!40100 DEFAULT CHARACTER SET utf8 */;
CREATE TABLE `user`
(
  `key` int
(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar
(45) NOT NULL,
  `user_pw` varchar
(512) NOT NULL,
  `name` varchar
(45) NOT NULL,
  `salt` varchar
(512),
  PRIMARY KEY
(`key`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
