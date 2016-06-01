var local_stroage = window.localStroage;
$('.login-button').click(function() {
    var arr = $('.login-page').serializeArray();
    var userData = {};
    $.each(arr, function(index, item) {
        userData[item.name] = item.value;
    });
    var storage = localStorage;
    $.ajax({
        data: userData,
        url: '/login',
        method: 'post',
        success: function(data) {
            if (data.judge) {
                storage.userId = data.userId;
                storage.userName = data.userName;
                storage.userRole = data.userRole;

                console.log(storage.userRole);
                if (storage.userRole === '学生') {
                    location.href = "student_index.html";
                } else if (storage.userRole === '教师') {
                    location.href = "teacher_index.html";
                }
            } else {
                alert("用户名或密码错误");
            }
        },
        error: function(err) {
            console.log(err);
            alert("网络错误");
        }
    });
});