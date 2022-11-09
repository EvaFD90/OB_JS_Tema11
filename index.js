class Estudiante {
    _nombre = "Eva";
    _asignaturas = ["Javascript", "HTML", "CSS" ];

    obtenDatos () {
        return {
            nombre: this._nombre,
            asignaturas: this._asignaturas
        };
    }
};

const estudiante = new Estudiante();

console.log(estudiante.obtenDatos());