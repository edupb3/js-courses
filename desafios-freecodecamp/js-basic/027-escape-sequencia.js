/**
 * Escapar sequências em strings
Aspas não são os únicos caracteres que podem ser escapados dentro de uma string. Há dois motivos para usar caracteres de escapamento:

Para permitir que você use caracteres que você pode não ser capaz de digitar do contrário, como o caractere de retorno de carro.
Para permitir que você represente várias aspas em uma string sem o JavaScript entender erroneamente o que você quis dizer.
Aprendemos isso no desafio anterior.

Código	Saída
\'	aspas simples
\"	aspas duplas
\\	barra invertida
\n	nova linha
\r	retorno de carro
\t	tab
\b	limite de palavra
\f	quebra de página
Note que a própria barra invertida deve ser escapada para ser exibida como uma barra invertida.

Atribua as três linhas de texto a seguir em uma única variável myStr usando sequências de escapamento.

FirstLine
    \SecondLine
ThirdLine
Você precisará usar sequências de escapamento para inserir corretamente os caracteres especiais. Você também precisará seguir os espaçamentos assim como acima, sem espaços entre sequências de escapamento ou palavras.

Observação: a identação para SecondLine é alcançada com o caractere de espaçamento tab, e não com espaços.
 */

const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Altere esta linha