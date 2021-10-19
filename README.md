# e-Portifolio

Deve ser bem notório que sou iniciante na área de programação e portanto, assumo minhas deficiências, e asseguro que o intuito da edição desse README, é um 
enorme passo que estou dando rumo ao aperfeiçoamento das minhas práticas dentro do universo da programação.
Percebi a alguns dias que tenho muita dificuldade com a documentação do que faço, e por isso, me desafiei a construir um README com a maior riqueza de detalhes que eu conseguir!

# Vamos lá!

   Como primeiro passo, decidi atualizar meu portfolio, mesmo a versão 0.1 tendo acabado de sair do forno!
    Também desenvolvida em REACT, utilizando o NEXT.JS, a intenção foi de consolidar o aprendizado acerca dessas tecnologias, visto que venho almejando 
um futuro, desenvolvendo com essas ferramentas, ao menos no início da minha carreira como desenvolvedor frontend.

### Sobre esse projeto!

 Como já mencionado algumas linhas atrás, é um projeto desenvolvido utilizando  React | Next js | TypeScript | Tailwind.
Não domino nehuma dessas tecnologias (AINDA), mas é exatamente essa a meta, desenvolvendo alguns projetos utilizando-me dessas ferramentas.
  Como objetivo secundário, essa documentação que se inicia aqui, deverá servir-me de base de estudos futuramente,  onde poderei rever o passo a passo dado rumo à finalização dessa empreitada.
Espero finalizá-la, com muito mais entendimento do funcianamento dessas tecnologias envolvidas nessa construção, que servirá, futuramente como base para outras aplicações, e quem sabe, uma atualização da qual, facilitará o processo de construção de algo semelhante de forma automatizada.
  Dito essas coisas, vamos para o que realmente importa: O passo a passo!

<!--ts-->
* [Tecnologias](#tecnologias)
![Badge](https://img.shields.io/badge/React.Js-Next.Js-blue)
<!--te-->



# Setup do projeto:
##### Nesta parte do projeto, vou procurar deixar os links utilizados, bem como os comandos digitados no meu termial, além é claro das dependências que forem sendo instaladas.
 
#### Features
<!-- ts -->
 * [Setup](#Setup)


Como qualquer outro projeto em Next, utlizamos o comando básico de criação de projetos:
após devidamente criado o diretório onde vc deseja criar o seu projeto, abra um terminal, navegue até o diretório e digite:
 - npx create-next-app <"nome-do-seu-projeto">
 Em seguida, vá para a pasta criada pelo Next:
 - cd pasta-do-projeto/
 Agora vc pode arrsatar a pasta do projeto para dentro do seu editor de texto (no meu caso uso o VsCode), ou digitar code . no terminal.

 A estrutura das pastas seguem o padrão do Next.Js.
  * [modificações](#modificações)
   - Dentro da pasta pages, mudamos as extensções dos arquivos para .tsx
   - Dentro da pasta api mudamos hello.js para hello.ts
   -  Removemos o arquivo Home.module.css
   -  Apagamos todo o conteúdo da pasta index.tsx e criamos um novo conteúdo utilizando a extensão VS Code ES7 React/Redux/React-Native/JS snippets utilizando o comando _race (dentro do arquivo index.tsx)
      * [TypeScript](#TypeScript)
       Para instalação do Typescript e suas libs execute o comando:
       --> **yarn add --dev typescript @types/react @types/node**
        !Se não estiver utilizando o yarn como gerenciador de pacotes, use 
        --> **npm install -D typescript @types/react @types/node**
      *  * [Tailwind](#Tailwind)
       Foi utilizado o <a href="https://tailwindcss.com/">tailwindcss</a> em nossa aplicação, então é necessário a instalação e configuração do mesmo. Para tal, utilizamos a documentação que você pode acessar neste link:
       <a href="https://tailwindcss.com/docs/guides/nextjs" >https://tailwindcss.com/docs/guides/nextjs </a>
         * Instale o Tailwind via npm:
         **npm install -D tailwindcss@latest postcss@latest autoprefixer@latest**
         Se a versão do Next for inferior à Next.js v10 consulte a <a href="https://tailwindcss.com/docs/guides/nextjs"> documentação </a>

           - feito isso, é hora de gerar o arquivo de configuração do tailwind.
           para isso no terminal digite: **npx tailwindcss init -p** e com isso foram gerados os arquivos arquivos tailwind.config.js e postcss.config.js
           consulte a documentação para comfigurar o arquivo tailwind.config.js
            Essa linha deve ser adicionada dentro do array purge:
            purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
            
            Neste ponto, criamos na raiz do projeto a pasta components

            Siga esse caminho: ./styles/globals.css apague todo o conteúdo do arquivo e substitua por:

            @tailwind base;
            @tailwind components;
            @tailwind utilities;

            Vá para o arquivo index.tsx na pasta pages, apague o conteúdo e crie uma função padrão do react, ou instale a exten~sao citada no início deste README e digite **_rafce**  e a estrutura será craida automaticamente.
         
           Dentro da div nesse arquivo, coloque uma tag h1 e digite algo como "Olá mundo!"

           Se sua aplicação já estiver rodando, desligue-a e novamente digite no terminal **npm run dev** ou **yarn dev** se estiver utilizando o yarn

           Abra seu navegador e digite http://localhost:3000 

           ### Observação:

            ! O primeiro problema que encontrei durante a execução desse projeto está relacionado ao webpack 5 que é um empacotador de módulos estáticos para aplicações JavaScript modernas. Ao processar a aplicação o webpack gera um gráfico que mapeia cada módulo e suas dependências e gera um ou mais pacotes.
            leia mais em <a href="https://medium.com/rocketseat/entendendo-e-dominando-o-webpack-4b2e8b3e02da">Entendendo os conceitos do webpack</a>
             [ x ] Como resolvi:
              - Simplesmente, para a aplicação, apague a pasta .next do deu projeto e restart novamente usando npm ou yarn dev. **PRONTO! SIMPLESMENTE FUNCIONOU**


           # Sidebar

           * [SideBar](#Saidebar)

            - Como utilizamos o Bootstrap durante o desenvolvimento, sugiro a análise do código no <a href="#">GitHub</a>
           



           <hr >
           <hr >






 <!-- ts -->



#### Algo que você pode, e deveria, fazer para já ir se acostumando, é seguir também a DOCUMENTAÇÃO do <a href="https://nextjs.org/learn/basics/create-nextjs-app/set'up">Next.Js</a> •
'
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
