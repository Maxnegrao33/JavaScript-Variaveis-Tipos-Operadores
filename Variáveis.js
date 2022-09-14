/*Variáveis são espaços de memória que deixam o programa flexível
E obedece algumas regras que iremos ver adiante*/

var nome = "Max";
var sobrenome = "Oliveira";
var anoNascimento = "1978";
var anoAtual = "2022";
var idade = anoAtual - anoNascimento;
    alert(idade);

/*O símbolo de "=" é de atribuição de valores */
/*O nome da variável deve iniciar com uma letra (a, B, S, g)
  Cifrão ou underline: $ ou _
  Os nomes são sensíveis a letras maíusculas e minúsculas (Case Sensitive)
  */

  /*Basicamente existem 3 tipos de variáveis
  com algumas subdivisões */

  var inteiro = 5; /* inteiros*/
  var decimal = 1.5; /*fracionados*/
  var char = "Roberto";  /*Textos*/
  var boolean = true; /*boolean*/
  
    alert(inteiro);
    alert(decimal);
    alert(char);
    alert(boolean);

  /*Operadores numéricos*/

  var soma = 3 + 2;
  var subtracao = 3 - 2;
  var multiplicacao = 3 * 3;
  var divisao = 3 / 3;
  var resto = 3 % 1;
  var x = Math.sqrt(25);   //Raiz quadrada
  
  /*Calculo de média*/
  var media = 3 + 3 + 3 / 3;  //Oresultado não irá ser 9
  console.log(media);   //Existe uma ordem de precedência

  /*O programa obedece as normas matemáticas
  parênteses
  divisão e multiplicação,
  soma e subtração depois */

  var media = (3 + 3 + 3) / 3;  
  console.log(media);
  /*Agora o resultado é 9*/



