// *********************************************************
//  2. Crear una función constructora para cada objeto.
// *********************************************************
function Consultorio(nombreCons, pacientes) {
  this.nombreCons = nombreCons;
  this.pacientes = pacientes;
  // *********************************************************
  //  3.-  Implementar métodos getters y setters
  // *********************************************************
  Object.defineProperty(this, 'nombreCons_', {
    enumerable: true,
    get: function () {
      return this.nombreCons;
    },
    set: function (nombreCons) {
      this.nombreCons = nombreCons;
    },
  });

  Object.defineProperty(this, 'pacientes_', {
    enumerable: true,
    get: function () {
      return this.pacientes;
    },
    set: function (nuevoPaciente) {
      this.pacientes = nuevoPaciente;
    },
  });
}

// *********************************************************
//  2. Crear una función constructora para cada objeto.
// *********************************************************
function Paciente(nombre, edad, rut, diagnostico) {
  this.nombre = nombre;
  this.edad = edad;
  this.rut = rut;
  this.diagnostico = diagnostico;

  // *********************************************************
  //  3.-  Implementar métodos getters y setters
  // *********************************************************

  Object.defineProperty(this, 'nombre_', {
    enumerable: true,
    get: function () {
      return this.nombre;
    },
    set: function (nuevoNombre) {
      this.nombre = nuevoNombre;
    },
  });
  Object.defineProperty(this, 'edad_', {
    enumerable: true,
    get: function () {
      return this.edad;
    },
    set: function (nuevoEdad) {
      this.edad = nuevoEdad;
    },
  });
  Object.defineProperty(this, 'rut_', {
    enumerable: true,
    get: function () {
      return this.rut;
    },
    set: function (nuevoRut) {
      this.rut = nuevoRut;
    },
  });
  Object.defineProperty(this, 'diag_', {
    enumerable: true,
    get: function () {
      return this.diagnostico;
    },
    set: function (nuevoDiagnostico) {
      this.diagnostico = nuevoDiagnostico;
    },
  });
}

// *********************************************************
// 4.- a) METODO  MOSTRANDO LOS DATOS PACIENTES REGISTRADOS
// **********************************************************

Consultorio.prototype.todosLosPaciente = function () {
  let arrayPac = JSON.parse(JSON.stringify(this.pacientes));
  let fap =
    '  <thead> <tr> <th scope="col">NOMBRE</th>  <th scope="col">EDAD</th>    <th scope="col">RUT</th> <th scope="col">DIAGNOSTICO</th>  </tr></thead>';

  for (let i = 0; i < arrayPac.length; i++) {
    fap += `<tr>
    <td>${arrayPac[i].nombre_}</td>
    <td>${arrayPac[i].edad_}</td>
    <td>${arrayPac[i].rut_}</td>
    <td> ${arrayPac[i].diag_}</td>       
     </tr> `;
  }

  document.getElementById('ulMostrarTodo').innerHTML = fap;
};

// **********************************************************
//  N°4.-b) METODO MOSTRAR DATOS PACIENTE POR NOMBRE_ / RUT_
// **********************************************************

Consultorio.prototype.buscarPaciente = function () {
  let btnMostrar = document.getElementById('btnMostrar');
  let inputNombre = document.getElementById('inputNombre');
  let dataParse = JSON.parse(JSON.stringify(this.pacientes));

  btnMostrar.addEventListener('click', function () {
    let buscarFiltro = dataParse.filter(function (params) {
      return (
        params.nombre_ === inputNombre.value ||
        params.rut_ === inputNombre.value
      );
    });

    let vuelta2 =
      '  <thead> <tr> <th scope="col">CONSULTORIO</th> <th scope="col">NOMBRE</th>  <th scope="col">EDAD</th>    <th scope="col">RUT</th> <th scope="col">DIAGNOSTICO</th>  </tr></thead>';
    function obtenerPac2(item2) {
      return (vuelta2 += `<tr>
      <td>${consul1.nombreCons}</td>
      <td>${item2.nombre_}</td>
      <td>${item2.edad_}</td>
      <td>${item2.rut_}</td>
      <td> ${item2.diag_} </td>   
        
        </tr> `);
    }

    buscarFiltro.map(obtenerPac2).forEach(function (m) {
      return (document.getElementById('divBuscar').innerHTML = m);
    });
  });
};

// **********************************************************
// 5. Instanciar cada objeto utilizando la instrucción new
// **********************************************************
const paciente1 = new Paciente('Juan', 35, '1.111.111-k', 'Hipertension');
const paciente2 = new Paciente('Jose', 44, '2.222-222-k', 'Gripe');
const paciente3 = new Paciente('Raul', 55, '3.333.333-k', 'Diabetes');
const paciente4 = new Paciente('Jorge', 54, '4.444.444-k', 'Lumbago');

const consul1 = new Consultorio('Juan Bautista', [
  paciente1,
  paciente2,
  paciente3,
  paciente4,
]);

consul1.todosLosPaciente();
consul1.buscarPaciente();

// Ocultar lista pacientes hasta presione el boton (ICONO OJO)

const btnVerLista = document.getElementById('btnVerLista');
ulMostrarTodo.style.display = 'none';

function verListado() {
  let ulMostrarTodo = document.getElementById('ulMostrarTodo');

  if (ulMostrarTodo.style.display === 'none') {
    ulMostrarTodo.style.display = 'block';
  } else {
    ulMostrarTodo.style.display = 'none';
  }
}

//LIMPIAR CAMPOS
const reload = document.getElementById('limpiar');

reload.addEventListener('click', () => {
  inputNombre.value = '';
  divBuscar.innerHTML = '';
});

//VALIDAR INPUT - NO VACIO
function validar() {
  let x = document.getElementById('inputNombre').value;
  if (x == '') {
    alert('Favor completar informacion.!');
    return false;
  }
}
