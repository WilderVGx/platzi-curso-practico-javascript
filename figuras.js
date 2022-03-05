// Código del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm.");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm.");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + "cm².");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log("Los lados del triángulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm.");

const alturaTriangulo = 5.5;
console.log("La altura del triángulo es de: " + alturaTriangulo + "cm.");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm.")

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triángulo es: " + areaTriangulo + "cm².");

console.groupEnd();

// Código del Círculo
console.group("Círculos");

// Radio
const radioCirculo = 4;

// Diámetro
const diametroCirculo = radioCirculo * 2;

// PI
const PI = Math.PI;

// Circunferencia
const perimetroCirculo = diametroCirculo * PI;

// Área
const areaCirculo = (radioCirculo * radioCirculo) * PI;

console.groupEnd();