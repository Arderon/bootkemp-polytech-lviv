/* ==========================================
   СИНТЕТИЧНА МАСИВНА БАЗА ДАНИХ
========================================== */
const USER_SCORE = 186.4;

const DB = {
  regions: ["м. Київ", "Львівська обл.", "Харківська обл."],

  universities: {
    "KNU": { name: "КНУ ім. Т. Шевченка", region: "м. Київ", type: "Національний", accred: "Акредитація А" },
    "KPI": { name: "КПІ ім. І. Сікорського", region: "м. Київ", type: "Національний", accred: "Акредитація А" },
    "LNU": { name: "ЛНУ ім. І. Франка", region: "Львівська обл.", type: "Національний", accred: "Акредитація А" },
    "LP": { name: "НУ «Львівська політехніка»", region: "Львівська обл.", type: "Національний", accred: "Акредитація А" },
    "KHNU": { name: "ХНУ ім. В. Каразіна", region: "Харківська обл.", type: "Національний", accred: "Акредитація В" }
  },

  spheres: {
    "12": "Інформаційні технології",
    "08": "Право",
    "05": "Соціальні та поведінкові науки",
    "07": "Управління та адміністрування",
    "01": "Освіта / Педагогіка",
    "22": "Охорона здоров'я",
    "02": "Культура і мистецтво",
    "13": "Механічна інженерія"
  },

  specialties: {
    "121": {
      name: "Інженерія програмного забезпечення",
      sphere: "12",
      description: "Підготовка фахівців з проєктування, розробки та супроводу програмних систем і застосунків.",
      subjects: ["Алгоритми та структури даних", "Об'єктно-орієнтоване програмування", "Веб-розробка", "Проєктування ПЗ", "Бази даних"]
    },
    "122": {
      name: "Комп'ютерні науки",
      sphere: "12",
      description: "Фундаментальна підготовка з інформатики, аналізу даних та розробки програмного забезпечення.",
      subjects: ["Дискретна математика", "Алгоритми та структури даних", "Штучний інтелект", "Комп'ютерні мережі", "Хмарні технології"]
    },
    "124": {
      name: "Системний аналіз",
      sphere: "12",
      description: "Підготовка фахівців з моделювання складних систем, аналізу даних і підтримки прийняття рішень.",
      subjects: ["Вища математика", "Системний аналіз", "Моделювання систем", "Python/R", "Нейромережі"]
    },
    "081": {
      name: "Право",
      sphere: "08",
      description: "Підготовка юристів для роботи в державних органах, бізнесі та правозахисній сфері.",
      subjects: ["Цивільне право", "Кримінальне право", "Конституційне право", "Адміністративне право", "Міжнародне право"]
    },
    "053": {
      name: "Психологія",
      sphere: "05",
      description: "Підготовка фахівців з дослідження психіки людини, діагностики та психологічного консультування.",
      subjects: ["Загальна психологія", "Психодіагностика", "Вікова психологія", "Консультування", "Соціальна психологія"]
    },
    "073": {
      name: "Менеджмент",
      sphere: "07",
      description: "Підготовка фахівців з управління організаціями, проєктами та бізнес-процесами.",
      subjects: ["Основи менеджменту", "Управління проєктами", "Маркетинг", "Фінансовий менеджмент", "Стратегічне управління"]
    },
    "071": {
      name: "Облік і оподаткування",
      sphere: "07",
      description: "Підготовка фахівців з бухгалтерського обліку, аудиту та податкового консультування.",
      subjects: ["Бухгалтерський облік", "Аудит", "Податкова система", "Фінансова звітність", "Економічний аналіз"]
    },
    "014": {
      name: "Середня освіта",
      sphere: "01",
      description: "Підготовка вчителів для закладів загальної середньої освіти.",
      subjects: ["Педагогіка", "Вікова психологія", "Методика викладання", "Шкільна гігієна", "Фахова дисципліна"]
    },
    "222": {
      name: "Медицина",
      sphere: "22",
      description: "Підготовка лікарів загальної практики з фундаментальною клінічною базою.",
      subjects: ["Анатомія людини", "Фізіологія", "Біохімія", "Фармакологія", "Терапія"]
    },
    "133": {
      name: "Галузеве машинобудування",
      sphere: "13",
      description: "Підготовка інженерів з проєктування, виробництва та обслуговування машин і механізмів.",
      subjects: ["Опір матеріалів", "Деталі машин", "CAD/CAM системи", "Матеріалознавство", "Технологія машинобудування"]
    }
  },

  // Динаміка ринку праці по конкретних професіях у межах спеціальності (2021-2025)
  professionYears: [2021, 2022, 2023, 2024, 2025],

  // Базові (поточні) показники професій. Історія по роках генерується нижче
  // за допомогою детермінованого псевдовипадкового шуму (унікального для кожної
  // професії), щоб графіки не були штучно гладкими й відрізнялись один від одного.
  professionStats: {
    "121": [
      { name: "Backend-розробник", vacancies: 2600, candidatesPerVacancy: 6, salary: 48000 },
      { name: "Frontend-розробник", vacancies: 2100, candidatesPerVacancy: 9, salary: 42000 },
      { name: "Мобільний розробник", vacancies: 900, candidatesPerVacancy: 7, salary: 44000 },
      { name: "QA-інженер", vacancies: 1200, candidatesPerVacancy: 5, salary: 32000 }
    ],
    "122": [
      { name: "Software Engineer", vacancies: 4500, candidatesPerVacancy: 8, salary: 45000 },
      { name: "Game Developer", vacancies: 700, candidatesPerVacancy: 11, salary: 38000 },
      { name: "Backend Developer", vacancies: 3200, candidatesPerVacancy: 6, salary: 40000 },
      { name: "DevOps-інженер", vacancies: 1400, candidatesPerVacancy: 4, salary: 55000 }
    ],
    "124": [
      { name: "Data Scientist", vacancies: 1200, candidatesPerVacancy: 10, salary: 55000 },
      { name: "System Architect", vacancies: 500, candidatesPerVacancy: 5, salary: 60000 },
      { name: "Data Analyst", vacancies: 1500, candidatesPerVacancy: 7, salary: 30000 },
      { name: "Business Analyst", vacancies: 900, candidatesPerVacancy: 8, salary: 34000 }
    ],
    "081": [
      { name: "Юрисконсульт", vacancies: 950, candidatesPerVacancy: 12, salary: 25000 },
      { name: "Адвокат", vacancies: 400, candidatesPerVacancy: 15, salary: 35000 },
      { name: "Нотаріус", vacancies: 120, candidatesPerVacancy: 20, salary: 40000 },
      { name: "Помічник судді", vacancies: 300, candidatesPerVacancy: 18, salary: 20000 }
    ],
    "053": [
      { name: "Клінічний психолог", vacancies: 700, candidatesPerVacancy: 6, salary: 24000 },
      { name: "HR-менеджер", vacancies: 1600, candidatesPerVacancy: 9, salary: 26000 },
      { name: "Шкільний психолог", vacancies: 500, candidatesPerVacancy: 4, salary: 16000 }
    ]
  },

  offers: [
    // 124 Системний аналіз
    { id: "o1", uni: "KPI", spec: "124",
      academic: { applicants: 1500, budgetPlaces: 120, minBudget: 182.5, minContract: 155.0, price: 45000, syllabus: "Вища математика, Нейромережі, Системна інженерія, C++" },
      market: { salary: 42000, empRate: 92, unempRate: 3, vacancies: 1200, jobs: ["Data Scientist", "System Architect"] } },
    { id: "o2", uni: "LNU", spec: "124",
      academic: { applicants: 850, budgetPlaces: 80, minBudget: 178.0, minContract: 145.0, price: 38000, syllabus: "Математичний аналіз, Моделювання систем, Python/R" },
      market: { salary: 35000, empRate: 88, unempRate: 4, vacancies: 800, jobs: ["Data Analyst", "Business Analyst"] } },

    // 122 Комп'ютерні науки
    { id: "o3", uni: "KNU", spec: "122",
      academic: { applicants: 2100, budgetPlaces: 150, minBudget: 188.0, minContract: 160.0, price: 48000, syllabus: "Алгоритми, Java/C#, Хмарні технології, Криптографія" },
      market: { salary: 45000, empRate: 90, unempRate: 5, vacancies: 4500, jobs: ["Software Engineer", "Game Developer"] } },
    { id: "o4", uni: "LP", spec: "122",
      academic: { applicants: 1900, budgetPlaces: 200, minBudget: 180.5, minContract: 150.0, price: 42000, syllabus: "ООП, Бази даних, Web-розробка, Архітектура ПК" },
      market: { salary: 40000, empRate: 87, unempRate: 6, vacancies: 3200, jobs: ["Backend Developer", "DevOps"] } },

    // 081 Право
    { id: "o5", uni: "KNU", spec: "081",
      academic: { applicants: 3200, budgetPlaces: 90, minBudget: 194.5, minContract: 165.0, price: 62000, syllabus: "Цивільне право, Кримінальне право, Міжнародне право" },
      market: { salary: 28000, empRate: 65, unempRate: 15, vacancies: 850, jobs: ["Юрисконсульт", "Адвокат", "Нотаріус"] } },
    { id: "o6", uni: "LNU", spec: "081",
      academic: { applicants: 2500, budgetPlaces: 75, minBudget: 191.0, minContract: 160.0, price: 52000, syllabus: "Конституційне право, Теорія держави, Адміністративне право" },
      market: { salary: 25000, empRate: 68, unempRate: 14, vacancies: 600, jobs: ["Помічник судді", "Юрисконсульт"] } },

    // 053 Психологія
    { id: "o7", uni: "KHNU", spec: "053",
      academic: { applicants: 1800, budgetPlaces: 60, minBudget: 185.0, minContract: 152.0, price: 39000, syllabus: "Психодіагностика, Загальна психологія, Консультування" },
      market: { salary: 22000, empRate: 75, unempRate: 10, vacancies: 1100, jobs: ["Клінічний психолог", "HR-менеджер"] } }
  ]
};

/* ==========================================
   ГЕНЕРАЦІЯ РАНДОМІЗОВАНОЇ ІСТОРІЇ ПО РОКАХ
========================================== */
function seedFromString(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
  }
  return h >>> 0;
}

function mulberry32(seed) {
  let a = seed;
  return function() {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Генерує "живу" історію по роках: рухається від фінального (поточного) значення
// назад у часі, застосовуючи випадкові (але детерміновані для кожної професії) коливання.
function generateProfessionHistory(seedName, finalSalary, finalVacancies, finalCpv, years) {
  const rand = mulberry32(seedFromString(seedName));
  const points = [{ salary: finalSalary, vacancies: finalVacancies, candidatesPerVacancy: finalCpv }];

  let salary = finalSalary, vacancies = finalVacancies, cpv = finalCpv;
  for (let i = 1; i < years.length; i++) {
    const salaryFactor = 0.78 + rand() * 0.18;   // зарплата зазвичай нижча в минулому, з шумом
    const vacFactor = 0.55 + rand() * 0.55;       // вакансії можуть як зростати, так і падати
    const cpvFactor = 0.65 + rand() * 0.65;       // конкуренція теж коливається

    salary = Math.max(8000, Math.round((salary * salaryFactor) / 500) * 500);
    vacancies = Math.max(30, Math.round(vacancies * vacFactor));
    cpv = Math.max(2, Math.round(cpv * cpvFactor));

    points.push({ salary, vacancies, candidatesPerVacancy: cpv });
  }

  return points.reverse();
}

Object.entries(DB.professionStats).forEach(([specId, professions]) => {
  professions.forEach(p => {
    p.history = generateProfessionHistory(`${specId}-${p.name}`, p.salary, p.vacancies, p.candidatesPerVacancy, DB.professionYears);
  });
});

let myApplications = [];
let expandedSpheres = new Set();
let expandedSpecs = new Set();
let selectedAppForSign = null;
let currentRenderData = {};
