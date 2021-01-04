# FastSite - Sites
FastSite is a no-code tool to generate content-driven websites. It leverages the power of modern JAMStack and cloud-native technologies. 

**Stack:** 

| Layer     | Technology                   | Provider        |
| --------- | ---------------------------- | --------------- |
| Front-end | SPA/ SPA-SSR/ Static website | Netlify/ Vercel |
| Back-end  | Serverless Functions         | Netlify/ Vercel |
| Database  | Cloud-native NoSQL DB        | DataStax Astra  |

**Architecture**: 

FastSite consists of two sub-systems: 

1. FastSite-Console - [Code](https://github.com/mtalwadiya/fastsite-console) - [Demo](https://fastsite-console.netlify.app/) 
2. FastSite-Sites - There are 3 variants: 
   1. SPA (Client-side rendering)  - [Code](https://github.com/mtalwadiya/fastsite-sites) - [Demo](https://fastsite-sites.netlify.app/books)  -  (This project)
   2. SPA-SSR (Server-side rendering) - [Code](https://github.com/mtalwadiya/fastsite-sites-ssr/tree/master) - [Demo](https://fastsite-sites.vercel.app/)  
   3. Static website (Static build-time rendering) - [Code](https://github.com/mtalwadiya/fastsite-sites-ssr/tree/static) - [Demo](https://fastsite-sites-5pn643pvq.vercel.app/)  

![](https://drive.google.com/uc?id=1UgJPvB2SD_6jbL8sOUFoasRvfhv0sNuI)



 # How to setup 

To get the project running, clone this repository and follow these steps:

- Install Netlify CLI:
```
npm install netlify-cli -g
```

- Install all the project's dependencies:
```
npm i
```

- Enter the values in `.env` file for below variables: 
DataStax Astra connection details: 
```
ASTRA_DB_ID
ASTRA_DB_REGION
ASTRA_DB_USERNAME
ASTRA_DB_KEYSPACE
ASTRA_DB_PASSWORD
```

- Run the project locally:
```
netlify dev
```

- Build the project: 
```
npm run build
```

- Deploy: 
```
netlify deploy -p 
```

 