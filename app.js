document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("R4DTENieFn9XIM2am");

    var myForm = document.getElementById('my-form');
    
    myForm.addEventListener('submit', function(event) {
        event.preventDefault();

        
        emailjs.sendForm('service_lw2nv0c', 'template_xoeflxz', this)
            .then(function() {
                alert('Mensagem enviada com sucesso!');
                myForm.reset(); 
            }, function(error) {
                alert('Erro ao enviar a mensagem: ', error);
            });
    });
});
