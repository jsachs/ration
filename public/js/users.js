/**
 * Functions for User List
 */

$(".make_admin").click(function (e) {
    e.preventDefault();
    var activeUser = $(this).attr('data-user');
    console.log('granting admin to ' + activeUser);
    $.ajax({
        type: 'POST',
        url: '/api/account/roles',
        data: {
            email: activeUser,
            roles: ['admin']
        },
        success: function (data, status) {
            window.location.href = '/users';
        }
    });
});

$(".revoke_admin").click(function (e) {
    e.preventDefault();
    var activeUser = $(this).attr('data-user');
    console.log('revoking admin from ' + activeUser);
    $.ajax({
        type: 'POST',
        url: '/api/account/roles',
        data: {
            email: activeUser,
            roles: []
        },
        success: function (data, status) {
            window.location.href = '/users';
        }
    });
});

$(".deactivate_user").click(function (e) {
    e.preventDefault();
    var activeUser = $(this).attr('data-user');
    console.log('deactivating ' + activeUser);
    $.ajax({
        type: 'POST',
        url: '/api/account/deactivate',
        data: {
            email: activeUser
        },
        success: function (data, status) {
            window.location.href = '/users';
        }
    });
});

$(".delete_user").click(function (e) {
    e.preventDefault();
    var activeUser = $(this).attr('data-user');
    console.log('deleting ' + activeUser);
    $.ajax({
        type: 'POST',
        url: '/api/account/delete',
        data: {
            email: activeUser
        },
        success: function (data, status) {
            window.location.href = '/users';
        }
    });
});