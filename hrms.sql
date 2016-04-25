/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50520
Source Host           : 127.0.0.1:3306
Source Database       : hrms

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2016-04-25 16:12:37
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for contract
-- ----------------------------
DROP TABLE IF EXISTS `contract`;
CREATE TABLE `contract` (
  `EId` int(20) NOT NULL AUTO_INCREMENT,
  `signDate` datetime DEFAULT NULL,
  `stopDate` datetime DEFAULT NULL,
  `term` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`EId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of contract
-- ----------------------------

-- ----------------------------
-- Table structure for department
-- ----------------------------
DROP TABLE IF EXISTS `department`;
CREATE TABLE `department` (
  `EId` int(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `code` varchar(20) NOT NULL,
  `organizationId` int(20) NOT NULL,
  PRIMARY KEY (`EId`),
  KEY `organizationId` (`organizationId`),
  CONSTRAINT `department_ibfk_1` FOREIGN KEY (`organizationId`) REFERENCES `organization` (`EId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of department
-- ----------------------------

-- ----------------------------
-- Table structure for duty
-- ----------------------------
DROP TABLE IF EXISTS `duty`;
CREATE TABLE `duty` (
  `EId` int(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `code` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`EId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of duty
-- ----------------------------

-- ----------------------------
-- Table structure for employee
-- ----------------------------
DROP TABLE IF EXISTS `employee`;
CREATE TABLE `employee` (
  `EId` int(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `level` int(10) DEFAULT NULL,
  `sex` varchar(20) DEFAULT NULL,
  `birthDate` datetime DEFAULT NULL,
  `workTime` datetime DEFAULT NULL,
  `IDCard` varchar(255) DEFAULT NULL,
  `origin` varchar(255) DEFAULT NULL,
  `nation` varchar(255) DEFAULT NULL,
  `political` varchar(255) DEFAULT NULL,
  `education` varchar(255) DEFAULT NULL,
  `school` varchar(255) DEFAULT NULL,
  `major` varchar(255) DEFAULT NULL,
  `graduTime` datetime DEFAULT NULL,
  `spouseName` varchar(20) DEFAULT NULL,
  `spouseCompany` varchar(255) DEFAULT NULL,
  `originalFactory` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `departmentId` int(20) DEFAULT NULL,
  `postId` int(20) DEFAULT NULL,
  `contractId` int(20) DEFAULT NULL,
  `dutyId` int(11) DEFAULT NULL,
  PRIMARY KEY (`EId`),
  UNIQUE KEY `name` (`name`),
  KEY `departmentId` (`departmentId`),
  KEY `postId` (`postId`),
  KEY `contractId` (`contractId`),
  KEY `dutyId` (`dutyId`),
  CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`departmentId`) REFERENCES `department` (`EId`),
  CONSTRAINT `employee_ibfk_2` FOREIGN KEY (`postId`) REFERENCES `post` (`EId`),
  CONSTRAINT `employee_ibfk_3` FOREIGN KEY (`contractId`) REFERENCES `contract` (`EId`),
  CONSTRAINT `employee_ibfk_4` FOREIGN KEY (`dutyId`) REFERENCES `duty` (`EId`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of employee
-- ----------------------------
INSERT INTO `employee` VALUES ('1', '1', '1', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `employee` VALUES ('2', '2', '1', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `employee` VALUES ('3', '3', '1', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `employee` VALUES ('4', '4', '1', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `employee` VALUES ('5', 'ddd', 'ddd', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `employee` VALUES ('6', 'ccc', 'ccc', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `employee` VALUES ('7', 'lyl', 'lyl', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `employee` VALUES ('8', 'www', 'www', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `employee` VALUES ('9', 'ww', 'ww', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `employee` VALUES ('10', 'eee', 'eee', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);

-- ----------------------------
-- Table structure for module
-- ----------------------------
DROP TABLE IF EXISTS `module`;
CREATE TABLE `module` (
  `EId` int(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(40) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`EId`),
  KEY `systemId` (`remark`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of module
-- ----------------------------

-- ----------------------------
-- Table structure for organization
-- ----------------------------
DROP TABLE IF EXISTS `organization`;
CREATE TABLE `organization` (
  `EId` int(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `code` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`EId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of organization
-- ----------------------------
INSERT INTO `organization` VALUES ('1', '大江工业', '大江工业');

-- ----------------------------
-- Table structure for post
-- ----------------------------
DROP TABLE IF EXISTS `post`;
CREATE TABLE `post` (
  `EId` int(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `code` varchar(20) DEFAULT NULL,
  `departmentId` int(20) DEFAULT NULL,
  PRIMARY KEY (`EId`),
  KEY `departmentId` (`departmentId`),
  CONSTRAINT `post_ibfk_1` FOREIGN KEY (`departmentId`) REFERENCES `department` (`EId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of post
-- ----------------------------

-- ----------------------------
-- Table structure for train
-- ----------------------------
DROP TABLE IF EXISTS `train`;
CREATE TABLE `train` (
  `EId` int(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  PRIMARY KEY (`EId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of train
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
