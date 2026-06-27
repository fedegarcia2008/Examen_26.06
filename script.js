let carros = [
{
    color: "morado",
    tipo: "minivan",
    registroDia: new Date("2017-01-03"),
    capacidad: 7
},
{
    color: "rojo",
    tipo: "camioneta",
    registroDia: new Date("2018-03-03"),
    capacidad: 5
}
];

function carroForm() {
    return {
        color: document.getElementById("color").value,
        tipo: document.getElementById("tipo").value,
        registroDia: document.getElementById("reg").value,
        capacidad: parseInt(document.getElementById("capacidad").value)
    };
}

document.getElementById('agregar').addEventListener('click', () => {
    function agregarInicio() {
        let nuevoCarro = carroForm();
        carros.unshift(nuevoCarro);
        ver(carros);
    }
    agregarInicio();
});

document.getElementById('agregarfinal').addEventListener('click', () => {
    function agregarFinal() {
        let nuevoCarro = carroForm();
        carros.push(nuevoCarro);
        ver(carros);
    }
    agregarFinal();
});

document.getElementById('buscrojo').addEventListener('click', () => {
    function buscarRojo() {
        let buscado = carros.find(car => 
            car.color == "rojo");
        if (buscado) {
            ver([buscado]);
        } else {
            document.getElementById("resultado").innerHTML = "No existe un carro rojo.";
        }
    }
    buscarRojo();
});

document.getElementById('mostrarrojo').addEventListener('click', () => {
    function mostrarRojo() {
        let rojos = carros.filter(c => 
            c.color == "rojo");
        if (rojos.length > 0) {
            ver(rojos);
        } else {
            document.getElementById("resultado").innerHTML = "No hay carros rojos.";
        }
    }
    mostrarRojo();
});

function ver(obj) {
    let salida = "";
    obj.forEach(c => {
        salida += `
            <p>
            Color: ${c.color}<br>
            Tipo: ${c.tipo}<br>
            Registro: ${c.registroDia}<br>
            Capacidad: ${c.capacidad}
            </p>
        `;
    });
    document.getElementById("resultado").innerHTML = salida;
}