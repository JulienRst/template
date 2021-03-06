<?php
/**
 * CakePHP(tm) : Rapid Development Framework (http://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 * @link          http://cakephp.org CakePHP(tm) Project
 * @since         0.10.0
 * @license       http://www.opensource.org/licenses/mit-license.php MIT License
 */
?>
<!DOCTYPE html>
<html ng-app="template">
<head>
    <?= $this->Html->charset() ?>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Template - PlayApp</title>
    <?= $this->Html->meta('icon') ?>
    <?= $this->Html->css('master') ?>
</head>
<body>
    <?= $this->fetch('content') ?>
    <script src="bower_components/angular/angular.min.js" charset="utf-8"></script>
    <script src="bower_components/jquery/dist/jquery.min.js" charset="utf-8"></script>
    <script src="js/master.js" charset="utf-8"></script>
</body>
</html>
