// document.ready(function(){
//     document.getElementsByClassName('O_card_turn').click(function(){
//         this.find('.A_long_oval_framed_image').classList.toggle('romb');
//     })
// })

document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll('.O_card_turn').forEach(function(box) {
        box.addEventListener('click', function() {
            // var image = this.querySelector('.A_long_oval_framed_image');
            // if (image) {
            //     image.classList.toggle('romb');
            // }
            this.querySelector('.A_long_oval_framed_image').classList.toggle('romb');
            this.querySelector('.W_section_card-text_one_string').classList.toggle('tree');
            // setTimeout(function() {
            //     this.querySelector('.W_section_card-text_one_string').classList.add('see');
            // }, 500);
        });
    });
});

