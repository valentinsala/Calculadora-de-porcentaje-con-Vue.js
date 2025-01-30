const { createApp } = Vue;

createApp({
    data() {
        return {
            total: 0,
            porcentaje: 0,
            resultado: 0,
            isHovered: false // Para manejar la animación en el logo
        };
    },
    methods: {
        calcular() {
            this.resultado = (this.total * this.porcentaje) / 100;
        },
        botonHover() {
            // Efecto de animación al pasar el mouse por encima del botón
            document.querySelector(".btn-success").style.transform = "scale(1)";
        },
        botonLeave() {
            // Restaurar el tamaño del botón cuando se quita el mouse
            document.querySelector(".btn-success").style.transform = "scale(0.9)";
        }
    }
}).mount("#app");