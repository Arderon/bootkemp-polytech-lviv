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
    "05": "Соціальні та поведінкові науки"
  },

  specialties: {
    "121": { name: "Інженерія програмного забезпечення", sphere: "12" },
    "122": { name: "Комп'ютерні науки", sphere: "12" },
    "124": { name: "Системний аналіз", sphere: "12" },
    "081": { name: "Право", sphere: "08" },
    "053": { name: "Психологія", sphere: "05" }
  },

  // Статистика ринку праці по конкретних професіях у межах спеціальності
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

let myApplications = [];
let expandedSpheres = new Set();
let expandedSpecs = new Set();
let selectedAppForSign = null;
let currentRenderData = {};
