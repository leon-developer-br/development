*** JSX
- Sempre que foi usado jsx em um arquivo, é necessário realizar a importação do React.

*** Propriedades
- Um componente pode receber propriedades a serem usadas pelo componente pai. 
- Essas propriedades são passadas no construtor da função do componente.
- No mundo React, chamamos esses parametros de <props>.

*** Opções
- Text
- View
- Button
- SafeAreaView

*** Text

*** View

** Button

*** SafeAreaView
- É a area disponivel para desenhar a aplicação na tela. 
- Dessa forma, os componentes ficam dentro de uma area segura.

*** Fragment
- Em React, o retorno de uma função que representa um componente só pode ter 1 unico componente na raiz. 
- Dessa forma, podemos usar o Fragment <> </> que é um elemento sem semântica para que este passe a ser o componente raiz e seja satisfeita esta condição.
- Uma outra forma de usar Fragment é usar React.Fragment. Fragment pode ser importado de React.
- Usando <> não é possivel passar uma propriedade. Para isso, podemos usar React.Fragment.

*** Comentarios
- Basta envolver o componente com { /* <componente> */ }