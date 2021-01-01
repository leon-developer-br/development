*** Procedimento
- Para compilar um arquivo .ts basta executar tsc <arquivo.ts>. Será gerado um arquivo .js equivalente. Depois disso, basta rodar normalmente com o Node.
- Podemos executar o código pelo vscode com o plugin Code Runner. A execução é disparada via CTRL + ALT + N.

*** ts-node
- Para executar código typescript diretamente, é necessário o pacote ts-node. Para instalar npm i -g ts-node. 
- Dessa forma, o arquivo compilado é gerado em memória e a execução é feita em seguida. 
- Podemos chamar o ts-node diretamente do shell passanod um arquivo .ts como argumento.

*** Live watch
- Para habilitar a inspeção automática de arquivos do compilador, basta utilizar a flag -w de watch. 