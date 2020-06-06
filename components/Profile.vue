<template>
  <div id="Profile">
    <h2 v-if="!portugues"
      style="font-size: 2rem;
      font-weight: 400;
      line-height: 2.5rem;
      letter-spacing: 0;
      padding-bottom: 15px;
      text-align: start;"
    >Profile</h2>
    <h2 v-else
      style="font-size: 2rem;
      font-weight: 400;
      line-height: 2.5rem;
      letter-spacing: 0;
      padding-bottom: 15px;
      text-align: start;"
    >Perfil</h2>
    <cv-list v-if="!portugues">
      <cv-list-item><p>Development of Professional Web Sites driven for Search Engines Opimization.</p></cv-list-item>
      <cv-list-item><p>Professional with over 20 years experience on development & management of state-of-the-art Technologies ranging from services in the digital media industry (such as Playstation 2 & 3) up to system development for Financial groups(Bradesco financeira) & health care Institutions.</p></cv-list-item>
      <cv-list-item><p>Project management using Agile (SCRUM) methods & Framework ITIL v3.</p></cv-list-item>
      <cv-list-item><p>Relevant experience in web development (e-commerce & institutional platforms),SPAs, CRUDs, CMS, APIs (REST) & portfolios.</p></cv-list-item>
      <cv-list-item><p>Programming languages : Python 3, PHP, Javascript, Ruby, Typescript, Go, Dart & C#.</p></cv-list-item>
      <cv-list-item><p>
        Frameworks & IDEs:
        Angular 2+, React & Vue; Node JS, Rails 5, ASP.NET (Core & MVC), Django, JQuery, PyCharm, Eclipse & GeneXus; Ionic React Native & Flutter.
      </p></cv-list-item>
      <cv-list-item><p>Style & webdesign tools: Materialize, Material Design, Bootstrap & Carbon; Sass & Less; Adobe Fireworks & Photoshop.</p></cv-list-item>
      <cv-list-item><p>Database SQL construction & maintenance tools: MySQL, cPanel, DB2, PostgreSQL, PHPmyAdmin, SQLite & MSSQL Server; ORM techniques Django & Entity Framework ( .NET ) & NoSQL database with MongoDB & Cloudant.</p></cv-list-item>
      <cv-list-item><p>DevOps Management tools: Docker & Cloud Foundry; Kubernetes & Swarm.</p></cv-list-item>
    </cv-list>
    <cv-list v-else>
      <cv-list-item><p>Desenvolvimento de Web Sites Profissonais com enfase na Otimização para Ferramentas de Busca.</p></cv-list-item>
      <cv-list-item><p>Profissional com mais de 20 anos de experiência desenvolvendo e gerenciando Tecnologias de vanguarda desde serviços para indústria de mídias óticas (como Playstation 2 e 3) até o desenvolvimento de sistemas para instituições financeiras (Bradesco financeira) e sistemas de saúde.</p></cv-list-item>
      <cv-list-item><p>Gerenciamento de projetos utilizando métodos Agile (SCRUM) e Framework ITIL v3.</p></cv-list-item>
      <cv-list-item><p>Experiência relevante em desenvolvimento web (e-commerce e plataformas institucionais), SPAs, CRUDs, CMS, APIs (REST) e portfolios.</p></cv-list-item>
      <cv-list-item><p>Linguagens de Programação : Python 3, PHP, Javascript, Ruby, Typescript, Go, Dart & C#.</p></cv-list-item>
      <cv-list-item><p>
        Frameworks e IDEs:
        Angular 2+, React & Vue; Node JS, Rails 5, ASP.NET (Core & MVC), Django, JQuery, PyCharm, Eclipse & GeneXus; Ionic React Native & Flutter.
      </p></cv-list-item>
      <cv-list-item><p>Ferramentas de estilização & webdesign: Materialize, Material Design, Bootstrap & Carbon; Sass & Less. Adobe Fireworks & Photoshop.</p></cv-list-item>
      <cv-list-item><p>Ferramentas de manutenção e construção de Base de dados: SQL com MySQL, cPanel, DB2, PostgreSQL, PHPmyAdmin, SQLite & MSSQL Server; ORM com Django & Entity Framework ( .NET ) & NoSQL database com MongoDB & Cloudant.</p></cv-list-item>
      <cv-list-item><p>Ferramentas DevOps: Docker & Cloud Foundry; Kubernetes & Swarm.</p></cv-list-item>
    </cv-list>
  </div>
</template>
<script>
export default {
  name: "Profile",
  props: {
    portugues: {
      type: Boolean
    }
  }
};
</script>
<style>
#Profile {
  display: flex;
  justify-content: center;
  margin: 10px;
  padding-top: 15px;
  border-bottom-style: solid;
  border-bottom-color: black;
  border-bottom-width: 0.5px;
  padding-bottom: 15px;
}
@media screen and (max-width: 900px) {
  #Profile {
    display: block;
  }
}
</style>