function calcularPanes() {
    let panes1 = Number(document.getElementById("panes1").value);
    let panes2 = Number(document.getElementById("panes2").value);
    let monedas = Number(document.getElementById("monedasPanes").value);

    let resultado = document.getElementById("resultadoPanes");

    if (
        document.getElementById("panes1").value === "" ||
        document.getElementById("panes2").value === "" ||
        document.getElementById("monedasPanes").value === "" ||
        !Number.isInteger(panes1) ||
        !Number.isInteger(panes2) ||
        !Number.isInteger(monedas) ||
        panes1 < 0 ||
        panes2 < 0 ||
        monedas < 0 ||
        panes1 + panes2 === 0
    ) {
        resultado.textContent =
            "Ingresa cantidades enteras válidas, sin números negativos, y al menos un pan.";
        return;
    }

    let totalPanes = panes1 + panes2;
    let totalTercios = totalPanes * 3;
    let consumoPorPersona = totalTercios / 3;

    let aporte1 = panes1 * 3 - consumoPorPersona;
    let aporte2 = panes2 * 3 - consumoPorPersona;

    if (aporte1 < 0 || aporte2 < 0) {
        resultado.textContent =
            "Uno de los viajeros no aportó excedente de pan. Revisa las cantidades.";
        return;
    }

    let totalAportes = aporte1 + aporte2;

    if (totalAportes === 0) {
        resultado.textContent =
            "No hubo excedente de pan para repartir las monedas.";
        return;
    }

    let parte1 = monedas * aporte1 / totalAportes;
    let parte2 = monedas * aporte2 / totalAportes;

    resultado.innerHTML =
        "<strong>Análisis matemático:</strong><br>" +
        "Total de panes: " + totalPanes +
        " (" + totalTercios + " trozos de 1/3).<br>" +
        "Cada persona se comió: " + consumoPorPersona + " trozos.<br><br>" +
        "<strong>Aportes reales al jeque:</strong><br>" +
        "Beremiz aportó: " + aporte1 + " trozos.<br>" +
        "El amigo aportó: " + aporte2 + " trozos.<br><br>" +
        "<strong>Reparto justo de las monedas:</strong><br>" +
        "A Beremiz le corresponden: " + Number(parte1.toFixed(2)) + " monedas.<br>" +
        "Al amigo le corresponden: " + Number(parte2.toFixed(2)) + " monedas.";
}


function calcularGanancia() {
    let costo = Number(document.getElementById("costo").value);
    let cantidad = Number(document.getElementById("cantidad").value);
    let precio = Number(document.getElementById("precio").value);

    let resultado = document.getElementById("resultadoGanancia");

    if (
        document.getElementById("costo").value === "" ||
        document.getElementById("cantidad").value === "" ||
        document.getElementById("precio").value === "" ||
        !Number.isInteger(cantidad) ||
        costo < 0 ||
        cantidad <= 0 ||
        precio < 0
    ) {
        resultado.textContent =
            "Ingresa valores válidos. La cantidad debe ser un entero positivo y los precios no pueden ser negativos.";
        return;
    }

    let costoTotal = costo * cantidad;
    let ingresos = precio * cantidad;
    let ganancia = ingresos - costoTotal;
    let porcentaje = costoTotal === 0
        ? null
        : ganancia / costoTotal * 100;

    resultado.innerHTML =
        "Costo total: " + Number(costoTotal.toFixed(2)) + "<br>" +
        "Ingresos por ventas: " + Number(ingresos.toFixed(2)) + "<br>" +
        "Ganancia o pérdida: " + Number(ganancia.toFixed(2)) + "<br>" +
        "Porcentaje de ganancia: " +
        (porcentaje === null
            ? "No calculable porque el costo total es cero"
            : Number(porcentaje.toFixed(2)) + "%");
}


function limpiarGanancia() {
    document.getElementById("costo").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("resultadoGanancia").textContent = "";
}


function resolverEcuacion() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);

    let resultado = document.getElementById("resultadoEcuacion");

    if (
        document.getElementById("a").value === "" ||
        document.getElementById("b").value === "" ||
        document.getElementById("c").value === ""
    ) {
        resultado.textContent = "Completa los tres coeficientes.";
        return;
    }

    if (a === 0) {
        if (b === 0) {
            resultado.textContent = c === 0
                ? "La ecuación tiene infinitas soluciones."
                : "La ecuación no tiene solución.";
        } else {
            resultado.textContent =
                "Es una ecuación lineal. Su solución es: x = " +
                Number((-c / b).toFixed(6));
        }
        return;
    }

    let discriminante = b * b - 4 * a * c;

    if (discriminante > 0) {
        let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);

        resultado.innerHTML =
            "Dos soluciones reales:<br>" +
            "x₁ = " + Number(x1.toFixed(6)) + "<br>" +
            "x₂ = " + Number(x2.toFixed(6));
    } else if (discriminante === 0) {
        let x = -b / (2 * a);

        resultado.textContent =
            "Una solución real: x = " + Number(x.toFixed(6));
    } else {
        resultado.textContent =
            "No existen soluciones reales. Discriminante: " + discriminante;
    }
}


function estimarPi() {
    let iteraciones = Number(document.getElementById("iteraciones").value);

    let resultado = document.getElementById("resultadoPi");

    if (
        document.getElementById("iteraciones").value === "" ||
        !Number.isInteger(iteraciones) ||
        iteraciones < 1 ||
        iteraciones > 1000000
    ) {
        resultado.textContent =
            "Introduce entre 1 y 1.000.000 iteraciones.";
        return;
    }

    let suma = 0;

    for (let n = 1; n <= iteraciones; n++) {
        suma += 1 / (n * n);
    }

    let pi = Math.sqrt(6 * suma);

    resultado.textContent =
        "Valor aproximado de π: " + pi.toFixed(10) +
        " | Iteraciones: " + iteraciones;
}