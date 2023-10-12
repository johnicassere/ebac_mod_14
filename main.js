

$(document).ready(function(){
let mascara = '(00) 0000-0000'


    $('#telefone').mask(mascara, {   
       placeholder: '(00) 0000-0000'
    })

    $('form').validate({
        rules:{
            nome:{
                required: true,
            },
            email:{
                required: true,
                email: true
            },
            telefone:{
                required: true,
            },
            mensagem:{
                required: true,
            }
        },
        messages:{
            nome: 'Por favor digitar o seu nome',
            email: 'Por favor digitar o seu email',
            mensagem: 'Pro favor digite sua mensagem',
            telefone: 'Por favor digitar o seu telefone'
        },
        submitHandler:function(form){
            console.log(form);
        },
        invalidHandler: function(evento, validador){
            let camposInsert = validador.numberOfInvalids();
            if(camposInsert){
                alert(`Existem ${camposInsert} campos inconrretos`)
            }
        }

    })
})
    
