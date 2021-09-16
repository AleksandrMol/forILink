// document.addEventListener('DOMContentLoaded', function () {
//     let dropZone = document.getElementById('uploadContainer');

//     dropZone.addEventListener('drag dragstart dragend dragover dragenter dragleave drop', function(){
//         e.preventDefault();
//         e.stopPropagation();
//    });
//     dropZone.addEventListener('dragover dragenter', function() {
//         dropZone.classList.add('dragover');
//     });
//     dropZone.addEventListener('dragleave', function(e) {
//         dropZone.classList.remove('dragover');
//     });
//    dropZone.addEventListener('dragleave', function(e) {
//         let dx = e.pageX - dropZone.offset().left;
//         let dy = e.pageY - dropZone.offset().top;
//         if ((dx < 0) || (dx > dropZone.width()) || (dy < 0) || (dy > dropZone.height())) {
//             dropZone.removeClass('dragover');
//         };
//     });
// });