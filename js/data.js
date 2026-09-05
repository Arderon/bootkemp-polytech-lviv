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
    }
  },

  // Динаміка ринку праці по конкретних професіях у межах спеціальності (2021-2025)
  professionYears: [2021, 2022, 2023, 2024, 2025],

  // Динаміка відображає реальний контекст ринку: спад 2022 р. (початок повномасштабної
  // війни) по-різному вплинув на галузі — ІТ швидко відновилося за рахунок іноземних
  // замовлень, юриспруденція просіла через призупинення судів і нотаріату,
  // а попит на психологів навпаки різко зріс.
  professionStats: {
    "121": [
      { name: "Backend-розробник", history: [
        { vacancies: 2200, candidatesPerVacancy: 7, salary: 32000 },
        { vacancies: 1900, candidatesPerVacancy: 9, salary: 33000 },
        { vacancies: 2300, candidatesPerVacancy: 7, salary: 39000 },
        { vacancies: 2500, candidatesPerVacancy: 6, salary: 44000 },
        { vacancies: 2600, candidatesPerVacancy: 6, salary: 48000 }
      ] },
      { name: "Frontend-розробник", history: [
        { vacancies: 1800, candidatesPerVacancy: 10, salary: 28000 },
        { vacancies: 1500, candidatesPerVacancy: 13, salary: 29000 },
        { vacancies: 1750, candidatesPerVacancy: 11, salary: 34000 },
        { vacancies: 1950, candidatesPerVacancy: 10, salary: 38000 },
        { vacancies: 2100, candidatesPerVacancy: 9, salary: 42000 }
      ] },
      { name: "Мобільний розробник", history: [
        { vacancies: 750, candidatesPerVacancy: 8, salary: 30000 },
        { vacancies: 600, candidatesPerVacancy: 10, salary: 31000 },
        { vacancies: 720, candidatesPerVacancy: 8, salary: 36000 },
        { vacancies: 820, candidatesPerVacancy: 7, salary: 40000 },
        { vacancies: 900, candidatesPerVacancy: 7, salary: 44000 }
      ] },
      { name: "QA-інженер", history: [
        { vacancies: 1000, candidatesPerVacancy: 6, salary: 22000 },
        { vacancies: 850, candidatesPerVacancy: 8, salary: 23000 },
        { vacancies: 1000, candidatesPerVacancy: 6, salary: 27000 },
        { vacancies: 1100, candidatesPerVacancy: 5, salary: 30000 },
        { vacancies: 1200, candidatesPerVacancy: 5, salary: 32000 }
      ] }
    ],
    "122": [
      { name: "Software Engineer", history: [
        { vacancies: 3800, candidatesPerVacancy: 9, salary: 31000 },
        { vacancies: 3300, candidatesPerVacancy: 12, salary: 32000 },
        { vacancies: 3900, candidatesPerVacancy: 9, salary: 38000 },
        { vacancies: 4200, candidatesPerVacancy: 8, salary: 42000 },
        { vacancies: 4500, candidatesPerVacancy: 8, salary: 45000 }
      ] },
      { name: "Game Developer", history: [
        { vacancies: 600, candidatesPerVacancy: 12, salary: 25000 },
        { vacancies: 420, candidatesPerVacancy: 17, salary: 24000 },
        { vacancies: 520, candidatesPerVacancy: 14, salary: 29000 },
        { vacancies: 620, candidatesPerVacancy: 12, salary: 34000 },
        { vacancies: 700, candidatesPerVacancy: 11, salary: 38000 }
      ] },
      { name: "Backend Developer", history: [
        { vacancies: 2700, candidatesPerVacancy: 8, salary: 27000 },
        { vacancies: 2300, candidatesPerVacancy: 10, salary: 28000 },
        { vacancies: 2800, candidatesPerVacancy: 7, salary: 33000 },
        { vacancies: 3000, candidatesPerVacancy: 6, salary: 37000 },
        { vacancies: 3200, candidatesPerVacancy: 6, salary: 40000 }
      ] },
      { name: "DevOps-інженер", history: [
        { vacancies: 1100, candidatesPerVacancy: 5, salary: 37000 },
        { vacancies: 950, candidatesPerVacancy: 6, salary: 39000 },
        { vacancies: 1150, candidatesPerVacancy: 5, salary: 46000 },
        { vacancies: 1300, candidatesPerVacancy: 4, salary: 51000 },
        { vacancies: 1400, candidatesPerVacancy: 4, salary: 55000 }
      ] }
    ],
    "124": [
      { name: "Data Scientist", history: [
        { vacancies: 900, candidatesPerVacancy: 12, salary: 35000 },
        { vacancies: 750, candidatesPerVacancy: 15, salary: 37000 },
        { vacancies: 950, candidatesPerVacancy: 12, salary: 44000 },
        { vacancies: 1080, candidatesPerVacancy: 11, salary: 50000 },
        { vacancies: 1200, candidatesPerVacancy: 10, salary: 55000 }
      ] },
      { name: "System Architect", history: [
        { vacancies: 400, candidatesPerVacancy: 6, salary: 41000 },
        { vacancies: 340, candidatesPerVacancy: 8, salary: 43000 },
        { vacancies: 420, candidatesPerVacancy: 6, salary: 50000 },
        { vacancies: 460, candidatesPerVacancy: 5, salary: 55000 },
        { vacancies: 500, candidatesPerVacancy: 5, salary: 60000 }
      ] },
      { name: "Data Analyst", history: [
        { vacancies: 1150, candidatesPerVacancy: 8, salary: 20000 },
        { vacancies: 980, candidatesPerVacancy: 10, salary: 21000 },
        { vacancies: 1200, candidatesPerVacancy: 8, salary: 25000 },
        { vacancies: 1350, candidatesPerVacancy: 7, salary: 28000 },
        { vacancies: 1500, candidatesPerVacancy: 7, salary: 30000 }
      ] },
      { name: "Business Analyst", history: [
        { vacancies: 700, candidatesPerVacancy: 9, salary: 23000 },
        { vacancies: 560, candidatesPerVacancy: 12, salary: 24000 },
        { vacancies: 700, candidatesPerVacancy: 9, salary: 28000 },
        { vacancies: 800, candidatesPerVacancy: 8, salary: 31000 },
        { vacancies: 900, candidatesPerVacancy: 8, salary: 34000 }
      ] }
    ],
    "081": [
      { name: "Юрисконсульт", history: [
        { vacancies: 1050, candidatesPerVacancy: 11, salary: 17000 },
        { vacancies: 650, candidatesPerVacancy: 18, salary: 16500 },
        { vacancies: 750, candidatesPerVacancy: 15, salary: 19000 },
        { vacancies: 850, candidatesPerVacancy: 13, salary: 22000 },
        { vacancies: 950, candidatesPerVacancy: 12, salary: 25000 }
      ] },
      { name: "Адвокат", history: [
        { vacancies: 450, candidatesPerVacancy: 13, salary: 29000 },
        { vacancies: 280, candidatesPerVacancy: 21, salary: 27000 },
        { vacancies: 330, candidatesPerVacancy: 18, salary: 30000 },
        { vacancies: 370, candidatesPerVacancy: 16, salary: 33000 },
        { vacancies: 400, candidatesPerVacancy: 15, salary: 35000 }
      ] },
      { name: "Нотаріус", history: [
        { vacancies: 140, candidatesPerVacancy: 17, salary: 34000 },
        { vacancies: 70, candidatesPerVacancy: 28, salary: 32000 },
        { vacancies: 90, candidatesPerVacancy: 24, salary: 35000 },
        { vacancies: 105, candidatesPerVacancy: 22, salary: 38000 },
        { vacancies: 120, candidatesPerVacancy: 20, salary: 40000 }
      ] },
      { name: "Помічник судді", history: [
        { vacancies: 340, candidatesPerVacancy: 15, salary: 16000 },
        { vacancies: 190, candidatesPerVacancy: 24, salary: 15500 },
        { vacancies: 230, candidatesPerVacancy: 21, salary: 17000 },
        { vacancies: 270, candidatesPerVacancy: 19, salary: 18500 },
        { vacancies: 300, candidatesPerVacancy: 18, salary: 20000 }
      ] }
    ],
    "053": [
      { name: "Клінічний психолог", history: [
        { vacancies: 420, candidatesPerVacancy: 8, salary: 15000 },
        { vacancies: 600, candidatesPerVacancy: 6, salary: 18000 },
        { vacancies: 650, candidatesPerVacancy: 6, salary: 21000 },
        { vacancies: 680, candidatesPerVacancy: 6, salary: 23000 },
        { vacancies: 700, candidatesPerVacancy: 6, salary: 24000 }
      ] },
      { name: "HR-менеджер", history: [
        { vacancies: 1400, candidatesPerVacancy: 10, salary: 18000 },
        { vacancies: 900, candidatesPerVacancy: 15, salary: 17000 },
        { vacancies: 1250, candidatesPerVacancy: 11, salary: 21000 },
        { vacancies: 1450, candidatesPerVacancy: 10, salary: 24000 },
        { vacancies: 1600, candidatesPerVacancy: 9, salary: 26000 }
      ] },
      { name: "Шкільний психолог", history: [
        { vacancies: 380, candidatesPerVacancy: 5, salary: 11000 },
        { vacancies: 460, candidatesPerVacancy: 4, salary: 12000 },
        { vacancies: 480, candidatesPerVacancy: 4, salary: 13500 },
        { vacancies: 490, candidatesPerVacancy: 4, salary: 15000 },
        { vacancies: 500, candidatesPerVacancy: 4, salary: 16000 }
      ] }
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
