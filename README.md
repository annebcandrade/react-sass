# Documentação Teste Técnico - Ensinio 

#  🚀 Deploy: 

 # 💡 Como Funciona a aplicação? 
A aplicação em questão trata-se de uma interface da empresa Ensinio, quando clicamos no botão Serviços ela abre um modal embaixo do contêiner azul com as principais soluções a mostra. Se clicar no botão X o modal é fechado. Quando clicamos no botão PT também abre um modal para que o usuário possa selecionar a linguagem escolhida, que também é fechado clicando no X. 

A página está toda traduzida para as linguagens de português, espanhol e inglês. 

A página também está responsiva, ou seja, se adapta a diversos tamanhos de telas incluindo o mobile. 

# 🎯 Tomada de Decisões
Inclui dois modais, um de linguagem e um com as soluções pois tentei que no lugar dos botões fossem select’s, mas ao tentar adicionar imagens ao select(fornecidas de acordo com a interface do Figma) não consegui, então tive a ideia de criar os modais, assim ficaria mais bonito, mais funcional e entregaria uma melhor experiência ao usuário. 

*  #  ⚜️ Tecnologias Utilizadas: 

Aplicação desenvolvia com React com Javascript, StyledComponents, fonts Degular e Inter, imagens fornecidas no link do Figma, i18n para tradução, e hooks para o funcionamento da aplicação. Axios, Json-server para a integração com APi fictícia. 

*  #  💻 Código e Jornada (Passo a Passo do desenvolvimento da aplicação) 

1 - Ao criar a aplicação, no main principal foi definido que teríamos dois contêiners: Header e ContainerInfos, no Header a informações dentro do background azul que ocupa 50% da página e no containerinfos as outras informações. Dentro da pasta src foram criadas as pastas Containers que dentro dele tem a Home, Components, que possui o Header, ContainerzInfos, Modal e ModalLinguage e para cada um um arquivo index.jsx e o styles.já com a estilização de cada um deles. Dentro do src tem a pasta styles para o GlobalStyles, ou seja, estilizações para a página toda. 

Estilização foi feita totalmente com styled components. Fontes utilizadas: Degular e Inter.  Botões possuem também usabilidade, todos eles possuem cursor:pointer. 

2 - Após a estilização dos dois containers foi criado o primeiro modal de soluções principais que abre de acordo com o clique do botão serviços e também fecha se o usuário clicar no X no canto superior dele. Para que ele fosse exibido foi usado o conceito de props, para que quando o botão fosse clicado o modal fosse aberto e também o useState que começa false, ou seja, quando a aplicação inicia o modal está fechado, o useState só fica true quando o botão serviços é clicado. 

3 - O mesmo foi feito logo após na criação do segundo modal, de linguagem. 
Logo após a criação e estilização do modal foi dado sua funcionalidade, para fazer a tradução foi utilizado o i18n, foi feita a instação com yarn, foi importado no main principal para que a atualização pegasse toda aplicação, e para fazer a tradução foi criada uma pasta com i18n dentro dela o arquivo principal e após 3 json, um para tradução em português , um em inglês e um em espanhol, assim como, logo após, todos os components da aplicação foram traduzidos usando a const  {T} e o useTranslation que é um Hook do React, assim como useState, useEffect, entre outros. 

4 -  Para que as 3 informações de Trilhas, Playlists e coleções fossem consumidas pela APi fictícia fornecida e que estava contida no db.json, primeiro foi instalado o json-Server nas dependências do packge.json, assim como no packge.json foi adicionado a tag “Server” para que, ao iniciar a aplicação dando o comando “yarn dev” o Server (db.json) também fosse aberto. Foi utilizado o Axios para a integração com a APi fake, como também o get para chamar as informações. 



Se não der certo: | depois, foi tentado que os dados da APi aparecessem na tela utilizando o  Axios e o get para encontrar as informações do db.json, o map para mapeamento dos itens, em cada “div” de informação foi colocado um key={item.id}, mas sem sucesso, porque estava dando um erro no Axios, no inspect/console da aplicação dizia que não conseguia achar o map do array items. Então exclui as configurações que permitiam os dados do db.json na tela e deixei do jeito que estava antes, os dados com a tradução. 

Se der certo : | 



*  # 📧 Considerações Finais
Espero que vocês gostem do resultado da aplicação, tentei entregar excelência e a melhor experiência quanto a qualidade da experiência do usuário. Tenham certeza que dei o meu máximo. Espero que dê tudo certo, pois será uma grande honra fazer parte do time da Ensinio!


# 👩🏻‍💻 Autoria: 

Anne Beatriz Caldeira de Andrade
