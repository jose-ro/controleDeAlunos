var contAlunos = 0; //usada para controlar o número de alunos
var numeroDeAlunos = 10; //se inicalizar essa variável com zero, será impresso "Sala de aula vazia!"

/*
//A estrutura de repetição "for" está sendo utilizada porque conhecemos a quantidade de vezes; no caso, 10, para repetirmos
// um bloco de comandos. O mesmo resultado, é alcançado com uma outra estrutura de repetição denominada "while", que  
// conterá o mesmo bloco comandos. no fluxo de execução dos comandos. Há uma pequena diferença entre elas. 
//
//
//UTILIZANDO A ESTRUTURA DE REPETIÇÃO "for":
//
for(contAlunos; contAlunos <= numeroDeAlunos; contAlunos++)
{
    if (numeroDeAlunos == 0)
    {
        console.log("Sala de aula vazia! " );
    }
    else if (contAlunos%2 == 0)
         {
            console.log("O número de alunos presentes é: " + "Par");
         }
         else
         {
            console.log("O número de alunos presentes é: " + "Impar"); 
         }
}
*/ 

//
//UTILIZANDO A ESTRUTURA DE REPETIÇÃO "while":
//
//Serão utilizados o mesmo bloco de comandos e a mesma variável "contAlunos".  
//

contAlunos = 0;
while (contAlunos <= numeroDeAlunos)
{
    //console.log(contAlunos);
    if (numeroDeAlunos == 0)
    {
        console.log("Sala de aula vazia! " );
    }
    else if (contAlunos%2 == 0)
         {
            //console.log("O número de alunos presentes é: " + "Par");
           console.log (`O número de alunos ${contAlunos}, é Par`); 
         }
         else
         {
            //console.log("O número de alunos presentes é: " + "Impar");
            console.log (`O número de alunos ${contAlunos}, é Ímpar`);  
         }
   contAlunos++;      
}
 


