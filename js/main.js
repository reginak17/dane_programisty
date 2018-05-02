     $('button').on('click', function () {


         $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {


             var divNew = document.createElement('div');

             $(divNew).attr('id', 'dane-programisty');
             $('body').append(divNew);


             $('#dane-programisty').html(data.imie + ' ' + data.nazwisko + ' '  + data.zawod + ' ' + data.firma);


         });
     });
