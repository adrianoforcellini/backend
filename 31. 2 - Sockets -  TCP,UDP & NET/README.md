### MODELO OSI - 
#### Funciona por uma pilha de protocolos, onde cada camada define uma parte da comunicação.

-Camada 1: Física
É a camada que estabelece a comunicação real entre os dois dispositivos por meio físico, seja através do cabo
de internet, seja através de onda de radiofrequência, como por exemplo a wifi, dentre outras.

-Camada 2: Enlace (ligação/link de dados)
Faz o controle de fluxo da transmissão dos dados, detectando e corrigindo erros do nível físico como
instabilidades, interferências, e recebe/passa tudo para a camada física.

-Camada 3: Rede
Realiza o endereçamento/mapeamento dos dispositivos na rede, ou seja, quais os caminhos que as informações
 devem percorrer desde a origem até o destino.

-Camada 4: Transporte
A camada de transporte garante a confiança do pacote, o qual chegará na máquina com todos os dados 
necessários e enviados, sem perdas, erros ou duplicidade, além de obedecerem a uma sequência lógica.
A unidade dessa camada é o segmento, e os protocolos de transporte são o TCP e o UDP.

-Camada 5: Sessão
É responsável por manter o controle de quando iniciar, gerenciar e terminar a conexão entre os hosts . 
Ou seja, é essa camada que controla as duas ou mais máquinas que estão se comunicando.

-Camada 6: Apresentação
Esta camada realiza a conversão dos formatos dos dados, de forma que sejam utilizados na transmissão. Há a 
compressão e criptografia para que o receptor possa entender os dados.

-Camada 7: Aplicação
É com essa camada, que são os softwares, que nós, desenvolvedores/usuários, interagimos no nosso dia a dia.
Essa camada é, basicamente, a interface com que interagimos. É nela que o HTTP, SMTP, FTP etc. atuam.

