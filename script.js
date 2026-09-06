const modules = [
  {
    icon: "01",
    title: "Business Ideas",
    time: "12 min",
    desc: "Turn a spark into a sharp, testable opportunity.",
    lesson:
      "Great ideas begin with a meaningful tension. Look for something people repeatedly struggle with, then ask why it matters now.",
    example:
      "A student notices campus food waste. The idea: a pre-order platform that sells surplus meals at a discount.",
    tips: "Start with a problem you understand. Keep the first version narrow.",
    quiz: "What makes an idea worth testing?",
    options: [
      "It sounds impressive",
      "It solves a real, repeated problem",
      "It has a clever name",
    ],
    answer: 1,
  },
  {
    icon: "02",
    title: "Customer Problems",
    time: "15 min",
    desc: "Find the human need hiding behind the symptom.",
    lesson:
      "Interview people about the last time the problem happened. Avoid pitching your solution. Listen for workarounds, emotion and cost.",
    example:
      "Instead of asking “Would you use this app?”, ask “How did you find a team for your last project?”",
    tips: "Past behavior is more reliable than future promises.",
    quiz: "What should a discovery interview focus on?",
    options: [
      "Your feature list",
      "A customer's past experience",
      "Your pricing",
    ],
    answer: 1,
  },
  {
    icon: "03",
    title: "Market Research",
    time: "18 min",
    desc: "Read the landscape and spot your opening.",
    lesson:
      "Market research combines direct conversations with signals from data. Map alternatives, audience size and the shift that creates timing.",
    example:
      "A quick competitor map reveals that existing waste apps serve restaurants, not university cafeterias.",
    tips: "Research to make a decision, not to collect endless facts.",
    quiz: "What is the best research outcome?",
    options: ["A thick report", "A clearer decision", "A list of competitors"],
    answer: 1,
  },
  {
    icon: "04",
    title: "Business Model Canvas",
    time: "20 min",
    desc: "See how your venture creates and captures value.",
    lesson:
      "The canvas puts customers, value, channels, relationships, revenue and costs on one page. It helps a team see assumptions together.",
    example:
      "The food platform serves students and cafeterias, with a small transaction fee paid by the cafeteria.",
    tips: "Treat every box as a hypothesis to test.",
    quiz: "What does a canvas help you do?",
    options: [
      "Make a logo",
      "Visualize the business system",
      "Avoid talking to users",
    ],
    answer: 1,
  },
  {
    icon: "05",
    title: "Value Proposition",
    time: "14 min",
    desc: "Explain why your solution earns attention.",
    lesson:
      "A strong value proposition names a specific customer, their job or pain, and the outcome you create better than the alternatives.",
    example:
      "“Affordable dinner for busy students, rescued from today's surplus, ready in two taps.”",
    tips: "Clarity beats cleverness. Remove every vague word.",
    quiz: "A value proposition should be...",
    options: ["Specific and outcome-led", "Long and technical", "For everyone"],
    answer: 0,
  },
  {
    icon: "06",
    title: "Marketing & Branding",
    time: "16 min",
    desc: "Build trust and a memorable point of view.",
    lesson:
      "Brand is the expectation people carry into an interaction. Marketing makes that expectation visible to the right people at the right moment.",
    example:
      "A weekly “Rescue tonight” story makes surplus food feel timely, useful and communal.",
    tips: "Choose one recognizable voice and repeat it consistently.",
    quiz: "What does a brand create?",
    options: [
      "Only a color palette",
      "A customer expectation",
      "A legal structure",
    ],
    answer: 1,
  },
  {
    icon: "07",
    title: "Pricing & Revenue",
    time: "17 min",
    desc: "Design an exchange that supports your mission.",
    lesson:
      "Price reflects value, willingness to pay and the costs required to deliver. Test a simple model before optimizing it.",
    example:
      "Students pay less than a meal deal; cafeterias pay a small fee because waste disposal costs more.",
    tips: "Ask what the alternative costs, not just what people wish to pay.",
    quiz: "Good early pricing is...",
    options: [
      "A testable hypothesis",
      "Permanent on day one",
      "Based only on competitors",
    ],
    answer: 0,
  },
  {
    icon: "08",
    title: "Finance Basics",
    time: "19 min",
    desc: "Make the numbers useful for decisions.",
    lesson:
      "Track revenue, direct costs, fixed costs and cash. A simple monthly view can reveal what must be true for the venture to survive.",
    example:
      "If each order earns $2 after direct costs and monthly fixed costs are $400, you need 200 orders to break even.",
    tips: "Know your unit economics before you chase scale.",
    quiz: "Break-even happens when...",
    options: [
      "Costs are zero",
      "Revenue covers total costs",
      "You get funding",
    ],
    answer: 1,
  },
  {
    icon: "09",
    title: "Startup Team Building",
    time: "13 min",
    desc: "Create a team with complementary energy.",
    lesson:
      "Early teams need trust, a shared why and different strengths. Make responsibilities explicit so passion turns into progress.",
    example:
      "One founder leads partnerships, another product, another community. Weekly check-ins keep the system honest.",
    tips: "Hire for ownership and learning speed, not just credentials.",
    quiz: "A healthy team needs...",
    options: [
      "Identical strengths",
      "Complementary strengths and trust",
      "One person doing everything",
    ],
    answer: 1,
  },
  {
    icon: "10",
    title: "Pitching",
    time: "15 min",
    desc: "Tell a focused story that moves people.",
    lesson:
      "A pitch is a journey: tension, insight, solution, proof and a clear ask. Make the audience feel the problem before you present the product.",
    example:
      "Open with one discarded meal and the student who could not afford dinner that night.",
    tips: "One memorable story beats ten disconnected facts.",
    quiz: "A strong pitch should end with...",
    options: ["More background", "A clear ask", "An apology"],
    answer: 1,
  },
  {
    icon: "11",
    title: "Leadership",
    time: "14 min",
    desc: "Move people toward a future they can own.",
    lesson:
      "Leadership is creating clarity, momentum and room for others to contribute. It is practiced in small decisions every day.",
    example:
      "A team lead turns a vague goal into a Friday experiment, owner and success signal.",
    tips: "Be direct about the goal, generous about the path.",
    quiz: "Leadership creates...",
    options: ["Clarity and ownership", "More meetings", "A perfect plan"],
    answer: 0,
  },
  {
    icon: "12",
    title: "Social Impact Business",
    time: "21 min",
    desc: "Measure progress for people and planet.",
    lesson:
      "Impact is not a slogan. Define who benefits, what changes and how you will know. Build the measurement into the model.",
    example:
      "Measure meals rescued, student savings and cafeteria waste avoided each month.",
    tips: "A viable business and meaningful impact can reinforce each other.",
    quiz: "Impact measurement should be...",
    options: [
      "An afterthought",
      "Built into the model",
      "Only a marketing claim",
    ],
    answer: 1,
  },
];
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
function setupNav() {
  const toggle = $(".menu-toggle"),
    nav = $(".nav");
  if (toggle)
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
  $$(".nav a").forEach((a) =>
    a.addEventListener("click", () => nav.classList.remove("open")),
  );
}
function reveal() {
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("revealed");
      }),
    { threshold: 0.12 },
  );
  $$("[data-reveal]").forEach((e) => observer.observe(e));
}
function counters() {
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target,
          target = +el.dataset.count;
        let n = 0;
        const step = Math.max(1, Math.ceil(target / 45));
        const run = () => {
          n = Math.min(target, n + step);
          el.textContent = n + (el.dataset.suffix || "");
          if (n < target) requestAnimationFrame(run);
        };
        run();
        observer.unobserve(el);
      }),
    { threshold: 0.6 },
  );
  $$("[data-count]").forEach((e) => observer.observe(e));
}
function tabs() {
  const tabs = $$(".tab"),
    cards = $$(".benefit-card");
  tabs.forEach((tab) =>
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      const filter = tab.dataset.filter;
      cards.forEach(
        (card) =>
          (card.style.display =
            filter === "all" || card.dataset.type === filter
              ? "block"
              : "none"),
      );
    }),
  );
}
function hub() {
  const grid = $(".modules");
  if (!grid) return;
  const completed = JSON.parse(localStorage.getItem("hultCompleted") || "[]");
  modules.forEach((m, i) => {
    const card = document.createElement("article");
    card.className =
      "module-card glass-card" + (completed.includes(i) ? " complete" : "");
    card.dataset.index = i;
    card.innerHTML = `<div class="icon-box">${m.icon}</div><h3>${m.title}</h3><p>${m.desc}</p><div class="module-meta"><span>${m.time}</span><span>Lesson + activity</span></div><button class="start-btn">Start Learning &rarr;</button>`;
    grid.appendChild(card);
  });
  updateProgress();
  grid.addEventListener("click", (e) => {
    const btn = e.target.closest(".start-btn");
    if (btn) openLesson(+btn.closest(".module-card").dataset.index);
  });
}
function updateProgress() {
  const completed = JSON.parse(localStorage.getItem("hultCompleted") || "[]");
  const percent = Math.round((completed.length / modules.length) * 100);
  const fill = $(".progress-fill"),
    number = $(".progress-number");
  if (fill) fill.style.width = percent + "%";
  if (number)
    number.textContent = `${completed.length} / ${modules.length} complete`;
}
function openLesson(index) {
  const m = modules[index],
    modal = $(".modal-wrap");
  modal.querySelector(".lesson-label").textContent =
    `Module ${m.icon} / ${m.time}`;
  modal.querySelector("h2").textContent = m.title;
  modal.querySelector(".lesson-content").innerHTML =
    `<div class="lesson-box"><h4>Core lesson</h4><p>${m.lesson}</p></div><div class="lesson-box"><h4>Practical example</h4><p>${m.example}</p></div><div class="lesson-box"><h4>Key tip</h4><p>${m.tips}</p></div><div class="lesson-box"><h4>Quick check</h4><p>${m.quiz}</p><div class="quiz-options">${m.options.map((o, i) => `<button class="quiz-option" data-answer="${i}" data-correct="${m.answer}">${o}</button>`).join("")}</div><p class="quiz-result" style="margin-top:10px;font-weight:700"></p></div>`;
  modal.dataset.index = index;
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}
function modal() {
  const wrap = $(".modal-wrap");
  if (!wrap) return;
  const close = () => {
    wrap.classList.remove("open");
    document.body.style.overflow = "";
  };
  $(".close-modal").addEventListener("click", close);
  wrap.addEventListener("click", (e) => {
    if (e.target === wrap) close();
    const option = e.target.closest(".quiz-option");
    if (option) {
      const correct = option.dataset.answer === option.dataset.correct;
      $$(".quiz-option").forEach((o) => (o.disabled = true));
      option.classList.add(correct ? "correct" : "wrong");
      const result = $(".quiz-result");
      result.textContent = correct
        ? "Correct. Nice work."
        : "Not quite. Revisit the core lesson and try again.";
      result.style.color = correct ? "#5e9f25" : "#c05c38";
      if (correct) {
        const index = +wrap.dataset.index,
          done = JSON.parse(localStorage.getItem("hultCompleted") || "[]");
        if (!done.includes(index)) {
          done.push(index);
          localStorage.setItem("hultCompleted", JSON.stringify(done));
          updateProgress();
          $$(".module-card")[index].classList.add("complete");
        }
      }
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}
setupNav();
reveal();
counters();
tabs();
hub();
modal();
