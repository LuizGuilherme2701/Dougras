const questions = [
  {
    q: "Por que a família de Fabiano deixa o lugar onde vivia no início da obra?",
    a: ["Porque queria morar na cidade", "Por causa da seca e da falta de condições para sobreviver", "Porque Fabiano perdeu o emprego na cidade", "Porque os meninos foram expulsos da escola"],
    c: 1,
    f: "A seca provoca a retirada da família em busca de água, comida e abrigo."
  },
  {
    q: "Qual é o trabalho de Fabiano quando a família passa a viver na fazenda?",
    a: ["Professor", "Comerciante", "Vaqueiro", "Soldado"],
    c: 2,
    f: "Fabiano consegue trabalho como vaqueiro e passa a cuidar dos animais da fazenda."
  },
  {
    q: "O que a personagem Sinhá Vitória deseja para a família?",
    a: ["Uma vida mais estável e um futuro diferente para os filhos", "Que Fabiano abandone o trabalho", "Que a família volte imediatamente para a seca", "Que os meninos parem de fazer perguntas"],
    c: 0,
    f: "Sinhá Vitória mantém o sonho de melhorar de vida e imagina os filhos estudando."
  },
  {
    q: "Como Baleia é apresentada na narrativa?",
    a: ["Como um animal sem importância", "Como uma ameaça para a família", "Como parte da família, com sentimentos e pensamentos destacados", "Como dona da fazenda"],
    c: 2,
    f: "Baleia tem papel afetivo e ganha destaque por meio de sua vida interior."
  },
  {
    q: "O que o soldado amarelo representa para Fabiano?",
    a: ["Uma amizade importante", "Uma autoridade que o humilha e exerce violência", "Um parente distante", "Um trabalhador da fazenda"],
    c: 1,
    f: "O episódio da cadeia mostra a violência e a desigualdade na relação com a autoridade."
  },
  {
    q: "Qual característica de linguagem combina com a construção de Fabiano?",
    a: ["Longos discursos políticos", "Muitos diálogos eruditos", "Poucas palavras e dificuldade para se expressar", "Uso constante de cartas"],
    c: 2,
    f: "A dificuldade de linguagem de Fabiano está ligada à sua falta de escolaridade e à sua condição social."
  },
  {
    q: "Em qual contexto literário a obra costuma ser estudada?",
    a: ["Arcadismo", "Romantismo", "Segunda fase do Modernismo brasileiro", "Simbolismo"],
    c: 2,
    f: "Vidas Secas integra o chamado Romance de 30, associado à segunda fase modernista."
  },
  {
    q: "Qual crítica aparece com força em Vidas Secas?",
    a: ["A crítica à vida urbana moderna", "A desigualdade social e a exploração", "A rejeição da ciência", "A defesa da guerra"],
    c: 1,
    f: "A obra mostra relações desiguais de poder, pobreza e exploração."
  },
  {
    q: "O que acontece no final da obra?",
    a: ["A família se torna dona da fazenda", "A família permanece para sempre no mesmo lugar", "A família parte novamente, levando esperança de uma vida diferente", "Fabiano vai estudar na cidade"],
    c: 2,
    f: "A família abandona a fazenda e segue para o sul, imaginando um futuro diferente."
  },
  {
    q: "Qual é uma reflexão possível a partir da obra?",
    a: ["Problemas sociais não afetam as escolhas das pessoas", "A pobreza é apenas resultado de decisões individuais", "Condições sociais e econômicas podem limitar oportunidades e escolhas", "A seca aparece somente como paisagem"],
    c: 2,
    f: "A narrativa relaciona ambiente, pobreza, poder e falta de oportunidades."
  }
];

const quizArea = document.getElementById('quizArea');
const quizResult = document.getElementById('quizResult');
let score = 0;
let answered = 0;

questions.forEach((item, index) => {
  const card = document.createElement('article');
  card.className = 'question-card';
  card.innerHTML = `<h3>${index + 1}. ${item.q}</h3><div class="options"></div><p class="feedback">${item.f}</p>`;
  const options = card.querySelector('.options');
  const feedback = card.querySelector('.feedback');

  item.a.forEach((answer, i) => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.textContent = answer;
    btn.addEventListener('click', () => {
      if (card.dataset.done) return;
      card.dataset.done = 'true';
      answered++;
      [...options.children].forEach(b => b.disabled = true);
      if (i === item.c) {
        btn.classList.add('correct');
        score++;
      } else {
        btn.classList.add('wrong');
        options.children[item.c].classList.add('correct');
      }
      feedback.classList.add('show');
      if (answered === questions.length) {
        quizResult.hidden = false;
        quizResult.textContent = `Resultado: ${score}/${questions.length} acertos. ${score >= 8 ? 'Excelente domínio da obra!' : score >= 5 ? 'Bom resultado! Revise os pontos em que teve dúvida.' : 'Vale revisar o resumo e as temáticas antes de tentar novamente.'}`;
        quizResult.scrollIntoView({behavior:'smooth', block:'center'});
      }
    });
    options.appendChild(btn);
  });

  quizArea.appendChild(card);
});

const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
menuBtn.addEventListener('click', () => menu.classList.toggle('open'));
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => menu.classList.remove('open')));
