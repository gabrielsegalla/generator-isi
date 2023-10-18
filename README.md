# Scaffold ISI

 **OBJETIVO:** Desenvolver um scaffold de frontend altamente configurável e adaptável para simplificar o desenvolvimento inicial de projetos ReactJS em sua equipe, com foco na utilização da biblioteca Ant Design Framework e Reactstrap. Este scaffold também é adaptado para consumir API do Jhipster, fornecendo autenticação e controle de permissões.


## Tecnologias Utilizadas
-   ReactJS
-   Next.js
-   Ant Design Framework
-   Reactstrap
-   Yeoman

## Funcionalidades

-   Criação rápida de projetos com base no scaffold.
-   Integração com a API do Jhipster.
-   Autenticação e permissões de usuário.
-   Utilização de componentes da biblioteca Ant Design Framework.

## Fluxo de Uso

**1) Instale as dependências:**  

*Gerador ISI*  
  

    $ npm install -g https://github.com/gabrielsegalla/generator-isi.git
    
*Yeoman*

    $ npm install -g yo

**2) Execute o Gerador:**

    $ yo isi

  O gerador solicitará o nome do projeto e após fornecer o nome do projeto, uma pasta com o nome fornecido será criada, contendo a estrutura básica do projeto.

O projeto gerado conterá as configurações, dependências e componentes pré-configurados, incluindo a integração com a API do Jhipster, autenticação e permissões.

## Beneficios

A equipe pode começar a desenvolver o frontend do projeto imediatamente, aproveitando as facilidades oferecidas pelo scaffold.

 - Agiliza o desenvolvimento inicial de projetos frontend.
- Fornece uma solução robusta e adaptada às necessidades da equipe. 
 - Padronização da interface do usuário por meio da utilização do Ant Design Framework.
  - Melhora a eficiência e produtividade da equipe de desenvolvimento.



## Considerações Finais

Este projeto oferece uma solução frontend robusta e atualizada, eliminando a dependência de soluções frontend geradas pelo Jhipster, que muitas vezes utilizam tecnologias ultrapassadas. Agora, nossa equipe pode aproveitar as tecnologias mais recentes e ter maior controle sobre o desenvolvimento de interfaces de usuário eficientes e modernas.

Além disso, é importante destacar a escolha do Next.js como uma parte fundamental deste scaffold. O Next.js é uma estrutura popular de renderização do lado do servidor (SSR) para aplicações React e oferece uma série de benefícios, como:

1.  **Renderização do lado do servidor (SSR)**: O Next.js permite a renderização do lado do servidor, o que melhora o desempenho e a otimização para mecanismos de busca, resultando em tempos de carregamento mais rápidos e melhor SEO.
    
2.  **Pré-renderização**: O Next.js suporta a pré-renderização, permitindo que você gere páginas estáticas antecipadamente para um carregamento mais rápido, enquanto mantém a capacidade de atualizar dinamicamente quando necessário.
    
3.  **Roteamento simplificado**: O roteamento no Next.js é simples de configurar e usar, economizando tempo no desenvolvimento.
    
4.  **Integração com React**: Como o Next.js é construído em torno do React, ele é facilmente integrado a projetos React existentes, tornando-o uma escolha natural para desenvolvedores familiarizados com essa biblioteca.
    
5.  **Suporte a ambientes de produção escaláveis**: O Next.js é altamente escalável e é frequentemente utilizado em aplicações de grande porte.
    

A combinação de Next.js com as bibliotecas Ant Design Framework e Reactstrap oferece uma base sólida e eficiente para o desenvolvimento frontend, garantindo um produto final de alta qualidade e proporcionando a nossa equipe a liberdade de explorar tecnologias modernas e atualizadas.
