# Site Anime Views

![Banner](https://animesflix.net/_theme/img/image-header.jpg)

Este é um site desenvolvido utilizando o framework Next.js na versão 13, com a biblioteca de estilização Ant Design, TypeScript e a integração com a API Kitsu, que fornece dados sobre animes.

## Finalidade

Este é o projeto foi criado como parte de um teste para uma vaga de desenvolvedor. O objetivo do projeto é desenvolver um aplicativo da web para visualização de animes.

## Tecnologias Utilizadas

O site foi desenvolvido utilizando as seguintes tecnologias:

- **Next.js v13:** O Next.js é um framework React de código aberto utilizado para a construção de aplicações web. Sua versão 13 traz melhorias de desempenho e novos recursos para facilitar o desenvolvimento.

- **Ant Design:** Ant Design é uma biblioteca de componentes de interface de usuário (UI) para React. Ela oferece um conjunto de componentes prontos e estilizados, que facilitam a criação de interfaces elegantes e responsivas.

- **TypeScript:** TypeScript é um superconjunto de JavaScript que adiciona recursos de tipagem estática ao JavaScript. Com o TypeScript, é possível detectar erros durante o desenvolvimento e obter um código mais seguro e escalável.

- **API Kitsu:** A API Kitsu é uma plataforma que fornece dados sobre animes, incluindo informações sobre títulos, episódios, personagens e muito mais. Ela possui uma ampla variedade de recursos que podem ser utilizados para exibir e pesquisar informações sobre animes.

## Funcionalidades

O site de animes desenvolvido possui as seguintes funcionalidades:

1. **Listagem de Animes:** O site exibe uma lista de animes populares, obtidos através da API Kitsu. Cada anime é exibido com sua imagem e título.

2. **Detalhes do Anime:** Ao clicar em um anime da lista, é possível visualizar os detalhes completos do anime, incluindo sua sinopse, gêneros, classificação, vídeo (se disponível) e outras informações relevantes.

3. **Pesquisa de Animes:** O site permite que os usuários realizem pesquisas por animes específicos. Ao digitar o nome do anime desejado na barra de pesquisa, o site exibe os resultados correspondentes, obtidos através da API Kitsu.

4. **Paginação:** Quando a lista de animes é extensa, o site oferece recursos de paginação por meio do botão "See more" para facilitar a navegação.

## Estrutura do projeto
├── components/    # Componentes React reutilizáveis <br>
│   ├── Banner.tsx          # Componente de banner <br>
│   ├── Card.tsx            # Componente de card <br>
│   ├── CardEpisodes.tsx    # Componente de card de episódios <br>
│   ├── Header.tsx          # Componente de cabeçalho <br>
│   ├── Skeletons.tsx       # Componente de placeholders de carregamento <br>
│   ├── StarRating.tsx      # Componente de classificação de estrelas <br>
│   ├── Tags.tsx            # Componente de tags <br>
│   └── Toast.tsx           # Componente de mensagem de toast <br>
├── pages/         # Páginas do Next.js <br>
├── styles/        # Estilos globais e estilos de componentes <br>
├── public/        # Arquivos estáticos públicos <br>
├── api/           # Lógica de chamadas de API <br>
├── utils/         # Utilitários e funções auxiliares <br>
└── ...

## Como executar o site

Para executar o site em sua própria máquina, siga as etapas abaixo:

1. Certifique-se de ter o Node.js instalado em sua máquina.

2. Clone o repositório do site a partir do GitHub.

3. Navegue até o diretório raiz do projeto e execute o comando `npm install` para instalar as dependências do projeto.

4. Após a instalação das dependências, execute o comando `npm run dev` para iniciar o servidor de desenvolvimento.

5. Acesse o site no seu navegador através do endereço `http://localhost:3000`.


## Prototipo
O prototipo deste projeto foi desenvolvido usando a ferramenta de design FIGMA, para visualizar clique [aqui](https://www.figma.com/file/hqQAxMhHzeF5O7zczrtRwm/Anime_views?type=design&node-id=0%3A1&t=ubB7uAXhHiWWVh7p-1).

## Licença
Este projeto está licenciado sob a Licença MIT.

## Conclusão

O site de animes desenvolvido com Next.js v13, Ant Design, TypeScript e a API Kitsu é uma plataforma que oferece uma experiência agradável para os amantes de animes. Com sua interface intuitiva, é possível visualizar informações detalhadas sobre os animes, realizar pesquisas específicas e explorar uma ampla variedade de títulos. A integração com a API Kitsu garante que os dados exibidos sejam sempre atualizados e precisos.
