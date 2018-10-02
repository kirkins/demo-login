## Set config variables

Set variables in config.js

## MYSQL command to create table

'users', 'CREATE TABLE `users` (\n  `id` int(11) NOT NULL AUTO_INCREMENT,\n  `first_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,\n  `last_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,\n  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,\n  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,\n  `created` datetime NOT NULL,\n  `modified` datetime NOT NULL,\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci'

