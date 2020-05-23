<template>
  <div id="Education">
    <h2 v-if="!portugues"
      style="font-size: 2rem;
      font-weight: 400;
      line-height: 2.5rem;
      letter-spacing: 0;
      padding-bottom: 15px;
      text-align: start;"
    >Education</h2>
    <h2 v-if="portugues"
      style="font-size: 2rem;
      font-weight: 400;
      line-height: 2.5rem;
      letter-spacing: 0;
      padding-bottom: 15px;
      text-align: start;"
    >Educação Acadêmica e Capacitação</h2>
    <cv-list v-if="!portugues">
      <p>Degrees</p>
      <cv-list-item><p>UNIVESP (UNIVERSIDADE VIRTUAL DO ESTADO DE SÃO PAULO) - Computer engineering – current 2017/2022.</p></cv-list-item>
      <cv-list-item><p>UNIP – Bachelor of Business Administration – 2007 / 2010.</p></cv-list-item>
      <cv-list-item><p>E.T.E. Horacio Augusto da Silveira – Electronics Technician – completion in 1994.</p></cv-list-item>
      <br><br>
      <cv-list-item><p>
        <cv-link class="acclaim-link"
          href="https://www.youracclaim.com/users/leonardo-neves.6260e18d/badges"
        >IBM Acclaim certifications</cv-link>
      </p></cv-list-item>
    </cv-list>
    <cv-list v-else>
      <p>Graduação</p>
      <cv-list-item><p>UNIVESP (UNIVERSIDADE VIRTUAL DO ESTADO DE SÃO PAULO) – Engenharia da Computação – conclusão em 2022.</p></cv-list-item>
      <cv-list-item><p>UNIP – Bacharelado em Administração de Empresas – 2007 / 2010.</p></cv-list-item>
      <cv-list-item><p>E.T.E. Horacio Augusto da Silveira – Técnico em Eletrônica – conclusão em 2004.</p></cv-list-item>
      <br><br>
      <cv-list-item><p>
        <cv-link class="acclaim-link"
          href="https://www.youracclaim.com/users/leonardo-neves.6260e18d/badges"
        >IBM Acclaim certifications</cv-link>
      </p></cv-list-item>
    </cv-list>
    <cv-list>
      <p v-if="!portugues">Certifications</p>
      <p v-else>Certificações</p>
      <cv-list-item><p>Vue JS 2 Guia completo – COD3R (2020).</p></cv-list-item>
      <cv-list-item><p>Curso de SEO 2020 – Mirago (2020).</p></cv-list-item>
      <cv-list-item><p>Nuxt JS – Academind (2020).</p></cv-list-item>
      <cv-list-item><p>Python & Django with Visual Studio 2017– Microsoft Virtual Academy (2019).</p></cv-list-item>
      <cv-list-item><p>ASP.NET Core 2.0 (Beginner – Intermediate – Advanced) - Microsoft Virtual Academy (2019).</p></cv-list-item>
      <cv-list-item><p>ITIL v3 – Fundação Bradesco – (2018).</p></cv-list-item>
      <cv-list-item><p>Project management – Veduca – USP – (2018).</p></cv-list-item>
      <cv-list-item><p>Team management –FM2S – (2018).</p></cv-list-item>
      <cv-list-item><p>SCRUM fundamentals (SFC) – UDEMY (2018).</p></cv-list-item>
      <cv-list-item><p>ASP.NET MVC 5 – Microsoft Virtual Academy (2018).</p></cv-list-item>
      <cv-list-item><p>Python 3 Complete – UDEMY (2018).</p></cv-list-item>
      <cv-list-item><p>Rails 5, Angular6, NativeScript – UDEMY (2018).</p></cv-list-item>
      <cv-list-item><p>Databases for Developers – Oracle (2018).</p></cv-list-item>
      <cv-list-item><p>Complete Webmaster Front-End –Danki Code (2018).</p></cv-list-item>
    </cv-list>
  </div>
</template>
<script>
export default {
  name: "Education",
  props: {
    portugues: {
      type: Boolean
    }
  }
}
</script>
<style>
#Education {
  display: flex;
  justify-content: center;
  margin: 10px;
  padding-top: 15px;
  border-bottom-style: solid;
  border-bottom-color: black;
  border-bottom-width: 0.5px;
  padding-bottom: 15px;
}

.acclaim-link {
  text-decoration: none;
  color: blue
}

.acclaim-link:hover {
  text-decoration: none;
  color: blue
}
@media screen and (max-width: 900px) {
  #Education {
    display: block;
  }
}
.cv-list {
  padding: 25px;
}
</style>