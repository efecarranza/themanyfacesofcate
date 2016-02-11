$(document).ready(function() {
    var img = {
        1: {'verb': 'IntoxiCated', 'img': 'cate1.png'},
        2: {'verb': 'SophistiCated', 'img': 'cate5.jpg'},
        3: {'verb': 'CompliCated', 'img': 'cate3.jpg'},
        4: {'verb': 'DupliCated', 'img': 'cate2.png'},
        5: {'verb': 'ImpliCated', 'img': 'cate4.jpeg'}
    }

    $('.button').click(function() {
        var currentInt = 1;
        var rnd = randint(currentInt);
        $('.verb').text(img[rnd]['verb']);
        $('img').attr('src', img[rnd]['img']);
    });

    
});

var randint = function(current) {
        var rsp = Math.floor(Math.random() * 5) + 1;
        console.log(rsp);
        if (rsp == current) {
            randint(current);
        } else {
            return rsp;
        }
    }