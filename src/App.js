import React, { Component } from 'react'
import "./App.css";

export default class App extends Component {
    pedirFecha = async () =>{    
        const dias = [
            "Domingo",
            "Lunes",
            "Martes",
            "Miercoles",
            "Jueves",
            "Viernes",
            "Sabado",
        ];
        const meses = [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
        ];
        const d = new Date();

        var style = (d.getMinutes() === 0 && (d.getSeconds() % 2) === 0) ? "color: red":"color: white";
        document.getElementById("fecha_hora").style = style;
        if(d.getMinutes()===0 && d.getSeconds()===0){
            console.log("En punto");
        }

        var diaSemana = d.getDay();
        var diaMes = (d.getDate() < 10) ? '0' + d.getDate() : d.getDate();
        var mes = meses[d.getMonth()];
        var hora = (d.getHours() > 12) ? d.getHours() - 12 : d.getHours();
        hora = (hora < 10) ? '0' + hora : hora;
        var minuto = (d.getMinutes() < 10) ? '0' + d.getMinutes() : d.getMinutes();
        var segundo = (d.getSeconds() < 10) ? '0' + d.getSeconds() : d.getSeconds();

        const fecha = `${diaMes} ${mes} ${d.getFullYear()}`;
        const horaActual = `${hora}:${minuto}:${segundo}`;
        
        document.getElementById("dia_semana").innerHTML = dias[diaSemana];
        document.getElementById("fecha").innerHTML = fecha;
        document.getElementById("hora").innerHTML = horaActual;
    }

    run = async()=>{
        await setInterval(this.pedirFecha, 100);
    }

    componentDidMount(){
        this.run();
    }

    render() {
        return (
            <div className="content" id="fecha_hora">
                <div id="dia_semana">Dia semana</div>
                <div id="fecha">Fecha</div>
                <div id="hora">Hora</div>
            </div>
        )
    }
}
