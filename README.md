# PrimeFlix

O PrimeFlix é uma aplicação web de catálogo de filmes que desenvolvi com React como projeto de aprendizado. Meu foco principal foi praticar a construção de interfaces dinâmicas, o uso do React Router DOM, o consumo de APIs externas e o estudo da documentação necessária para integrar uma aplicação a um serviço real. A ideia foi criar uma experiência simples, visual e objetiva para consultar filmes em cartaz, abrir uma página de detalhes e encontrar rapidamente informações relevantes sobre cada título.

Este projeto faz parte da minha evolução como estudante universitário e representa uma aplicação em que procurei ir além de uma tela estática. Eu trabalhei com componentes reutilizáveis, rotas, estados de carregamento, requisições assíncronas e integração com uma API real. Também mantive o código separado por responsabilidades, com páginas, componentes visuais, serviço de comunicação e arquivos de estilo próprios. Portanto, o objetivo principal do PrimeFlix é demonstrar meu processo de aprendizado e minha prática com React, React Router DOM e APIs, e não apresentar uma plataforma de streaming pronta para produção.

## Visão geral

Ao abrir a aplicação, o usuário encontra:

- Um cabeçalho fixo com a identidade do PrimeFlix e links de navegação.
- Um banner de destaque com uma chamada visual para um filme.
- A seção “Em Cartaz”, carregada dinamicamente com filmes retornados pela API.
- Cards com pôster e título de cada filme.
- Navegação para uma página individual de detalhes.
- Uma página de detalhes com pôster, imagem de fundo, sinopse e ações relacionadas ao filme.
- Um botão que direciona o usuário para uma busca do trailer no YouTube.
- Uma tela de carregamento enquanto os dados estão sendo consultados.

Meu objetivo foi criar uma base de aplicação que possa evoluir para uma plataforma de descoberta e organização de filmes, mantendo uma interface com identidade visual escura e foco no conteúdo cinematográfico.

## Funcionalidades implementadas

### Catálogo de filmes em cartaz

Na página inicial, a aplicação realiza uma requisição ao endpoint `movie/now_playing` da API do TMDB. Os resultados recebidos são armazenados no estado do componente e renderizados com o método `map`, transformando cada filme em um card visual.

Cada card apresenta:

- Pôster do filme.
- Título localizado.
- Imagem clicável.
- Navegação para a rota de detalhes usando o identificador do filme.

O catálogo é exibido em uma área horizontal com rolagem, o que permite acomodar vários filmes sem deixar a página excessivamente longa. Essa escolha também mantém a seção semelhante a uma prateleira de streaming e cria uma interação simples para o usuário.

### Página inicial

A página inicial reúne a parte mais visual do projeto. Ela possui:

- Banner com imagem de destaque.
- Título principal do banner.
- Botão de chamada para detalhes.
- Seção de filmes em cartaz.
- Renderização condicional entre carregamento e conteúdo.

O estado `status` controla se os dados ainda estão sendo carregados. Enquanto a resposta da API não chega, o componente `Loading` é exibido. Depois que os filmes são recebidos, a interface principal é renderizada.

### Detalhes de um filme

Ao clicar no pôster de um card, o usuário é direcionado para `/filme/:id`. O identificador presente na URL é obtido com `useParams`, e a aplicação consulta o endpoint correspondente do TMDB para carregar os dados completos daquele filme.

A página de detalhes mostra:

- Título do filme.
- Pôster em tamanho maior.
- Imagem de fundo usando o backdrop do filme.
- Sinopse em português.
- Botão “Ver Trailer”.
- Botão “Adicionar a Minha Lista”, preparado visualmente para uma futura funcionalidade de persistência.

Para destacar o conteúdo, a imagem de fundo recebe desfoque e redução de brilho. O pôster e as informações ficam posicionados sobre essa camada, criando uma composição visual mais próxima de uma página de streaming.

### Busca de trailer

O botão de trailer abre uma nova aba com uma busca no YouTube usando o título do filme. Neste momento, a aplicação não utiliza uma API específica de vídeos; ela monta uma URL de pesquisa com o nome do título para facilitar o acesso ao trailer.

### Navegação entre páginas

Utilizei o React Router DOM para organizar a navegação sem recarregar toda a aplicação. As rotas planejadas no projeto são:

| Rota | Página | Responsabilidade |
| --- | --- | --- |
| `/` | Home | Exibe o banner e o catálogo de filmes em cartaz |
| `/filme/:id` | Filme | Exibe os dados detalhados de um filme específico |

O componente `Header` permanece disponível nas páginas e utiliza links de navegação para permitir que o usuário volte para a página inicial.

### Estado de carregamento

O componente `Loading` apresenta um indicador visual enquanto as requisições assíncronas estão em andamento. Eu preferi separar esse indicador em um componente próprio para que ele possa ser reutilizado em outras páginas ou estados da aplicação no futuro.

## Integração com a API do TMDB

O PrimeFlix utiliza a API do **The Movie Database (TMDB)** como fonte de dados dos filmes. A integração foi feita com Axios, a partir de uma instância configurada com a URL base:

```text
https://api.themoviedb.org/3/
```

Para construir essa integração, foi necessário consultar e ler a documentação oficial da API do TMDB. Esse estudo foi importante para entender:

- Qual endpoint deveria ser utilizado para obter filmes em cartaz.
- Como consultar os detalhes de um filme a partir do seu ID.
- Como enviar a chave de acesso e o idioma como parâmetros.
- Como interpretar a estrutura da resposta e a propriedade `results`.
- Como montar as URLs das imagens de pôster e backdrop.
- Como solicitar os textos em português brasileiro com `language=pt-BR`.

Os principais endpoints usados são:

```text
GET /movie/now_playing
GET /movie/{id}
```

As imagens são carregadas a partir dos caminhos fornecidos pelo TMDB, usando os domínios de imagens da plataforma. A aplicação combina o caminho retornado, como `poster_path` ou `backdrop_path`, com o tamanho desejado para apresentar cada imagem.

Em uma versão de produção, eu ainda pretendo mover a chave da API para uma variável de ambiente. Dessa forma, a configuração sensível não ficaria diretamente no código-fonte do cliente.

## Tecnologias e ferramentas

### Linguagens

- **JavaScript**: linguagem principal usada na lógica da aplicação, nos componentes, nas requisições e no controle de estado.
- **HTML, por meio de JSX**: utilizado para estruturar a interface dentro dos componentes React.
- **CSS**: utilizado para criar o layout, o tema escuro, o banner, os cards, o indicador de carregamento e os efeitos de interação.

### Bibliotecas e ferramentas

- **React**: biblioteca utilizada para construir a interface baseada em componentes.
- **React DOM**: utilizado para montar a aplicação no elemento raiz do documento.
- **React Router DOM**: utilizado para criar as rotas da aplicação e navegar entre páginas sem recarregamento completo.
- **Axios**: utilizado para realizar as requisições HTTP para a API do TMDB.
- **Create React App / react-scripts**: utilizado como base de configuração para desenvolvimento, build e execução do projeto.
- **TMDB API**: fonte externa de filmes, sinopses, identificadores, pôsteres e imagens de fundo.
- **Git**: utilizado para versionar o projeto e acompanhar sua evolução.
- **npm**: utilizado para instalar dependências e executar os scripts de desenvolvimento e produção.

## Organização do projeto

```text
src/
├── Components/
│   ├── filme.js       # Card reutilizável de filme
│   ├── header.js      # Cabeçalho e navegação
│   └── loading.js     # Indicador de carregamento
├── pages/
│   ├── Home/
│   │   ├── index.js   # Catálogo de filmes em cartaz
│   │   └── home.css   # Estilos da página inicial
│   ├── Filme/
│   │   ├── index.js   # Detalhes de um filme
│   │   └── filme.css  # Estilos da página de detalhes
├── Services/
│   └── api.js         # Instância Axios para comunicação com o TMDB
├── index.css          # Estilos globais
├── index.js           # Ponto de entrada da aplicação
└── routes.js          # Configuração das rotas
```

Essa separação me ajuda a manter os arquivos mais fáceis de entender e a localizar cada responsabilidade. Os componentes representam partes reutilizáveis da interface, as páginas representam telas completas e o serviço concentra a configuração da comunicação com a API.

## Como executar localmente

### Pré-requisitos

Antes de iniciar, é necessário ter instalado:

- Node.js.
- npm.
- Uma chave de acesso da API do TMDB.

### Instalação

Clone o repositório e acesse a pasta do projeto:

```bash
git clone <https://github.com/Dev-theusma-lo/Projeto-Prime-Flix>
cd prime-flix
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm start
```

Depois disso, a aplicação ficará disponível no endereço indicado pelo Create React App, normalmente `http://localhost:3000`.

Para gerar uma versão otimizada para produção:

```bash
npm run build
```

## Decisões de implementação

Eu escolhi usar componentes funcionais e Hooks do React, principalmente `useState` para controlar os dados e o estado de carregamento e `useEffect` para disparar as chamadas à API quando as páginas são carregadas.

Também optei por manter o serviço Axios separado dos componentes. Mesmo sendo uma aplicação pequena, essa decisão facilita uma futura expansão para novos endpoints, como busca por título, filmes populares, gêneros e avaliações, sem espalhar configurações de requisição pela interface.

No visual, utilizei um tema escuro com destaque em vermelho para aproximar a identidade do projeto de plataformas de entretenimento. O layout dos detalhes usa a imagem de fundo do próprio filme, com blur e brilho reduzido, para manter a legibilidade do texto sem perder o contexto visual.

## Pontos que ainda quero evoluir

O projeto está em desenvolvimento e algumas partes já estão estruturadas para receber novas funcionalidades. Entre os próximos passos, estão:

1. **Salvar filmes no LocalStorage após a consulta**
   - Armazenar no navegador os filmes consultados, evitando requisições desnecessárias em determinados cenários.
   - Recuperar os dados salvos quando a aplicação for aberta novamente.
   - Avaliar uma estratégia de atualização para que o conteúdo não fique desatualizado por tempo indefinido.

2. **Adicionar uma lista “Desejo Assistir” ligada ao LocalStorage**
   - Fazer o botão “Adicionar a Minha Lista” realmente persistir o filme selecionado.
   - Criar uma página ou seção para listar os filmes salvos.
   - Permitir adicionar e remover títulos.
   - Impedir duplicidades usando o ID único de cada filme.

Também considero como evoluções importantes:

- Criar uma rota de erro para páginas inexistentes.
- Melhorar a responsividade para telas menores.

## Aprendizados

Com este projeto, pratiquei a criação de uma aplicação React que depende de dados externos e precisa lidar com diferentes momentos da experiência do usuário, como carregamento, navegação e exibição de conteúdo dinâmico. O aprendizado central foi entender como o React organiza uma interface em componentes e como o React Router DOM permite conectar diferentes páginas por meio de rotas.

Também aprendi que consumir uma API não envolve apenas fazer uma requisição: é necessário estudar a documentação, compreender os endpoints e parâmetros disponíveis, validar o formato da resposta e adaptar os dados para a interface. Por isso, a integração com o TMDB foi uma parte importante do projeto: precisei consultar a documentação oficial para entender como buscar filmes em cartaz, consultar detalhes por ID, solicitar o idioma português e utilizar corretamente os caminhos das imagens.

Além da parte técnica, o projeto reforçou a importância de organizar o código pensando em manutenção. Mesmo sendo uma aplicação de estudo, procurei criar uma estrutura que facilite a adição de novas telas e funcionalidades. A minha intenção é continuar evoluindo o PrimeFlix como um projeto de portfólio e usar cada melhoria para demonstrar meu raciocínio, minha capacidade de aprender novas ferramentas e meu cuidado com a experiência de quem utiliza a aplicação.

## Status do projeto

O catálogo e a página de detalhes estão implementados como base principal da aplicação. A persistência no navegador, a lista “Desejo Assistir” e o tratamento completo de erros fazem parte do roteiro de melhorias futuras. O PrimeFlix continua sendo principalmente um projeto de estudo e portfólio para consolidar meus conhecimentos em React, React Router DOM e integração com APIs documentadas.

## Observação: Este arquivo README.md foi feito com auxílio de Inteligência Artificial, porém seu conteúdo foi adaptado e é verídico e coerente com o projeto.
