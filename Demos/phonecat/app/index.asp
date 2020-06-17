<!doctype html>
<html lang="en" ng-app="phonecatApp">

<head>
    <meta charset="utf-8">
    <title>手机展示</title>
    <!-- <link rel="stylesheet" href="lib/bootstrap/dist/css/bootstrap.css" />
    <link rel="stylesheet" href="app.css" />
    <link rel="stylesheet" href="app.animations.css" />

    <script src="lib/jquery/dist/jquery.js"></script> -->
    <script src="libs/angular/angular.js"></script>
    <script src="libs/angular/angular-animate.js"></script>
    <script src="libs/angular/angular-resource.js"></script>
    <script src="libs/angular/angular-route.js"></script>
    <script src="app.module.js"></script>
    <script src="app.config.js"></script>

    <script src="phoneList/phoneList.module.js"></script>
    <script src="phoneList/phoneList.component.js"></script>
    <script src="core/core.module.js"></script>
    <script src="core/phone/phone.module.js"></script>
    <script src="core/phone/phone.service.js"></script>

    <!--<script src="app.animations.js"></script>
    <script src="core/checkmark/checkmark.filter.js"></script>

    <script src="phone-detail/phone-detail.module.js"></script>
    <script src="phone-detail/phone-detail.component.js"></script> -->
</head>

<body>

    <div class="view-container">
        <div ng-view class="view-frame">12345</div>
    </div>

</body>

</html>