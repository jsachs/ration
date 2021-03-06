$("#users_table").sortable({
    items: ".draggable",
    handle: ".handle",
    appendTo: "parent",
    helper: "clone"
}).disableSelection();

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

$(".admin_one").click(function () {
    $(this).hide("slide", {
        direction: "left"
    }, 250, function () {
        $(this).next(".admin_two").show("slide", {
            direction: "right"
        }, 250);
    });
});

$(".admin_two > .cancel").click(function () {
    $(this).parent().hide("slide", {
        direction: "right"
    }, 250, function () {
        $(this).parent(".admin").children(".admin_one").show("slide", {
            direction: "left"
        }, 250);
    });
});

$(".deactivate_one").click(function () {
    $(this).hide("slide", {
        direction: "left"
    }, 250, function () {
        $(this).next(".deactivate_two").show("slide", {
            direction: "right"
        }, 250);
    });
});

$(".deactivate_two > .cancel").click(function () {
    $(this).parent().hide("slide", {
        direction: "right"
    }, 250, function () {
        $(this).parent(".deactivate").children(".deactivate_one").show("slide", {
            direction: "left"
        }, 250);
    });
});

$(".delete_one").click(function () {
    console.log(this);
    $(this).hide("slide", {
        direction: "left"
    }, 250, function () {
        $(this).next(".delete_two").show("slide", {
            direction: "right"
        }, 250);
    });
});

$(".delete_two > .cancel").click(function () {
    $(this).parent().hide("slide", {
        direction: "right"
    }, 250, function () {
        $(this).parent(".delete").children(".delete_one").show("slide", {
            direction: "left"
        }, 250);
    });
});