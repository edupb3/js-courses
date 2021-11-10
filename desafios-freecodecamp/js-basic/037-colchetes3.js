/**
 * Usar notação de colchetes para descobrir o enésimo caractere antes do último em uma string
Você pode usar o mesmo princípio que nós acabamos de usar para recuperar o último caractere em uma string, para recuperar o enésimo caractere antes do último caractere.

Por exemplo, você pode pegar o valor da antepenúltima letra da string var firstName = "Augusta" usando firstName[firstName.length - 3]

Exemplo:

var firstName = "Augusta";
var thirdToLastLetter = firstName[firstName.length - 3];
thirdToLastLetter teria o valor da string s.

Use notação de colchetes para descobrir o penúltimo caractere na string lastName.

Dica: tente olhar o exemplo acima se você ficar travado.
 */
// Configuração
var lastName = "Lovelace";

// Altere apenas o código abaixo desta linha
var secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Altere esta linha