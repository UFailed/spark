<html>
<head>
    <title>注册</title>
</head>
<body>
<form name="register" action="/user/save" method="post">
    姓名：<input name="username" type="text">
    密码：<input name="password" type="text">

    <input type="submit"> <input type="reset">
    <br>
    message:${message}
</form>
</body>
</html>
