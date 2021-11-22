export default () => {
  const container = document.createElement("div");
  container.classList.add("container");

  container.innerHTML = `
  <section class="page-section">
    
  <div class="header3" id="skills">
  <div class="hero-div center container">
    <h1 class="h1">Qual o perfil de um Analista QA?</h1>
    <div class="hero-btns animate__animated animate__fadeInUp animate__slow">
      <p class="textPrincipal">
      O Analista de Qualidade é o profissional responsável por atuar com auditorias 
      internas e externas, fazendo a elaboração de normas e procedimentos e não conformidades dos processos.
      </p>
      <p class="textPrincipal">
      Um Analista de Qualidade elabora e revisa manual de qualidade,
      procedimentos e instruções do trabalho visando à padronização dos processos de qualidade.
      </p>
      <p class="textPrincipal">
        <br>Além de conhecimentos técnicos sobre todo o processo de desenvolvimento de um software, tipos diferentes de testes e ferramentas e metodologias de automação de testes, validação de processos, etc — falarei sobre estas em outro artigo — , o analista 
        QA precisa ter características pessoais que são diferenciais para o sucesso de sua participação nesses projetos,como: ser detalhista,curioso,pensar como técnico e usuário,ser comunicativo,dentre outras caracteristicas.

      </p>
    </div>
  </div>
</div>
    </section>  
  `

  return container;
}