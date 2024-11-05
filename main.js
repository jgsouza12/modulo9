$(document).ready(function() {

    $('#btnAdd').click(function(e) {
        e.preventDefault();
        const task = $('#inputTask').val();

        const novoItem = $('<li class="item"></li>');
        $(`
                <p>${task}
                <button class="check"><i class="fas fa-check"></i></button>
                <button class="trash"><i class="fas fa-trash"></i></button></p>
            `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#inputTask').val('');
        
    });

    
    $('ul').on('click', '.trash',function() {
        $(this).closest('.item').remove();
    });
    
    $('ul').on('click', '.check',function() {
        $(this).closest('.item').toggleClass('completed');         
    })
});