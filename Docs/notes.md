- InterestSetupPage fica para depois, não tem utilidade agora
- CommunityPage também fica para depois, quando o formato de community for definido
- ~~O esquema de cores será deifnido por ultimo, até la toda referencia a uma cor estará notada como REVISAR CORES~~
- ~~Os tamanhos e tipos de fontes serão definidos depois, até lá toda referencia aos mesmos estará notada como REVISAR FONTES~~
- Tem que definir o conteúdo e comportamento do navigation-icons
- GERAL: definir como tratar uma publicação de mangá e similires, assim como plataformas de jogos
- GERAL: fazer um schedule de lançamento, tanto um geral quanto um personalizado
- Definir direito a divisão de structure e widget
- Com um pouco de abstração work, person e company e user basic widgets podem ser transformados em um componente só. 
- ~~Já deixar a responsividade preparada~~
- ~~Fazer todo mundo herdar de BaseComponent~~
- UserInteractions seria algo tão grande que vai virar a própria page
- A ArtifactList passou a ser space-evenly. Para minimizar bizarrices de espaçamento, calcular o tamanho da fileira e já passar na request ou ajustar isso no client. NEW: É quase impossivel calcular o espaço exato que a flexbox usará. 
- Por enquanto, tudo que precisa de um service mas não cabe em outor lugar vai para o CommonContainer. Eventualmente, revisar esse serviço e criar outros confome necessário.
- A recalculação de rows do ArtifactList tá ignorando se é portrait, verificar isso dps
- Temos um ExpressionChangedAfterItHasBeenCheckedError por mudar artifactRows em ngAfterViewInit no HomePageComponent. Não parece estar dando problema, mas fica atento a isso.
- Muitas mudanças não estão sendo documentadas. Atualizar a documentação.

- No InterestedSetupPageComponente, colocar um for onde irá criar checkbox e preenche-los com as categorias de cada artefato
- no InterestedSetupPageComponente, deixar os titulos do checkboxs(tipo de midia) dinamicos

- Deve haver um redirect de /work para /media para comportar alguns comportamentos do servidor, para isso /work deve perguntar ao servidor qual é a midia e redirecionar para lá.

