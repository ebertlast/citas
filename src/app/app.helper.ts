import { Injectable } from '@angular/core';
declare var Snackbar: any;
declare var $: any;

@Injectable()
export class Helper {

    /**
     * Despliega un mensaje al usuario en la parte inferior izquierda de la pantalla
     * @param mensaje Mensaje a mostrar al usuario
     * @param tipo Tipo de Mensaje, por defecto es exito (verde), opciones posibles: error (rojo), advertencia (amarillo),
     * informacion (azul celeste), exito (verde).
     */
    public Notificacion(mensaje: string, tipo: string = 'exito') {
        let background = '323232';
        switch (tipo) {
            case 'exito':
                background = '51A655';
                break;
            case 'error':
                background = 'FA3A39'
                break;
            case 'advertencia':
                background = 'FE9808'
                break;
            case 'informacion':
                background = '00B9D5';
                break;
            default:
                background = '323232'
                break;
        }
        background = '#' + background;

        /**
         * Propiedad            Valor por defecto   Descripcion
         * text	                null	            El texto a distribuir dentro de la notificación.
         * textColor	        #FFFFFF	            Color de texto del texto de notificación. El predeterminado es blanco.
         * pos	                bottom-left	        La posición que mostrará la notificación. Opciones posibles: top-left, top-center, top-right, bottom-left, bottom-center, bottom-right.
         * customClass	        null	            Agregar una clase personalizada a la notificación para personalizar el estilo.
         * width	            auto	            Ancho de la notificación. Se utiliza para reducir / expandir la ventana como se desea.
         * showActionButton	    true	            Booleano para mostrar la acción buton o no.
         * actionText	        Dismiss	            Texto a mostrar como botón de acción.
         * actionTextColor	    #4CAF50	            Color de texto del botón de acción.
         * backgroundColor	    #323232	            Color de fondo de la ventana de notificación.
         * duration	            5000	            Tiempo en milisegundos la notificación se muestra antes de desaparecer.
         * onActionClick	    dismiss function	La acción predeterminada cierra la notificación. Una función con el elemento de notificación como argumento.
         */
        Snackbar.show({
            text: mensaje,
            // width: '475px',
            backgroundColor: background,
            actionText: 'Cerrar',
            actionTextColor: '#000',
            pos: 'bottom-right',
            //    onActionClick: function(element) {
            //        //Set opacity of element to 0 to close Snackbar
            //        $(element).css('opacity', 0);
            //        alert('Clicked Called!');
            //    }
        });
    }

    /**
     * Aplica efectos de animaciones a un div
     * @param idDiv Identificador del div donde se va a realizar la animacióm
     * @param animation Nombre de la animación, que puede encontrarse en la documentacion https://github.com/daneden/animate.css
     */
    public AnimarDiv(idDiv: string, animation: string) {
      $('#' + idDiv)
        .removeClass()
        .addClass(animation + ' animated')
        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $(this).removeClass();
        });
    }

    /**
     * Cambia de color principal a toda la plantilla
     * @param color Color a ser utilizado. Opciones: blue, brown, cyan, deep-orange, deep-purple, green, grey, indigo, light-blue,
     * light-green, lime, orange, pink, purple, red, teal, yellow. Valor por defecto: light-blue
     * @param tonalidad Oscuridad de la tonalidad. Opciones: 300, 400, 500, 600, 700. Valor por Defecto: 500
     */
    public CambiarColorTema(color: string = 'light-blue', tonalidad: number = 500) {
      $('#theme').attr('href', 'assets/css/style.' + color + '-' + tonalidad.toString() + '.min.css')
    }
}
