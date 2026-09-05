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
      { name: "Backend-розробник", description: "Розробляє серверну логіку, API та бази даних, які лежать в основі застосунків.", vacancies: 2600, candidatesPerVacancy: 6, salary: 48000 },
      { name: "Frontend-розробник", description: "Створює інтерфейси сайтів і застосунків, з якими безпосередньо взаємодіє користувач.", vacancies: 2100, candidatesPerVacancy: 9, salary: 42000 },
      { name: "Мобільний розробник", description: "Пише застосунки для iOS та Android.", vacancies: 900, candidatesPerVacancy: 7, salary: 44000 },
      { name: "QA-інженер", description: "Тестує програмне забезпечення та стежить за якістю продукту перед випуском.", vacancies: 1200, candidatesPerVacancy: 5, salary: 32000 }
    ],
    "122": [
      { name: "Software Engineer", description: "Проєктує та розробляє програмне забезпечення для різних платформ і галузей.", vacancies: 4500, candidatesPerVacancy: 8, salary: 45000 },
      { name: "Game Developer", description: "Розробляє ігрову логіку, механіки та графіку для відеоігор.", vacancies: 700, candidatesPerVacancy: 11, salary: 38000 },
      { name: "Backend Developer", description: "Відповідає за серверну частину застосунків та їх взаємодію з базами даних.", vacancies: 3200, candidatesPerVacancy: 6, salary: 40000 },
      { name: "DevOps-інженер", description: "Автоматизує розгортання, налаштовує інфраструктуру та хмарні сервіси.", vacancies: 1400, candidatesPerVacancy: 4, salary: 55000 }
    ],
    "124": [
      { name: "Data Scientist", description: "Аналізує великі масиви даних і будує моделі машинного навчання для прогнозів.", vacancies: 1200, candidatesPerVacancy: 10, salary: 55000 },
      { name: "System Architect", description: "Проєктує архітектуру складних інформаційних систем.", vacancies: 500, candidatesPerVacancy: 5, salary: 60000 },
      { name: "Data Analyst", description: "Обробляє та інтерпретує дані для підтримки бізнес-рішень.", vacancies: 1500, candidatesPerVacancy: 7, salary: 30000 },
      { name: "Business Analyst", description: "Аналізує бізнес-процеси та формулює вимоги до ІТ-рішень.", vacancies: 900, candidatesPerVacancy: 8, salary: 34000 }
    ],
    "081": [
      { name: "Юрисконсульт", description: "Супроводжує правові питання компанії та готує договори і документи.", vacancies: 950, candidatesPerVacancy: 12, salary: 25000 },
      { name: "Адвокат", description: "Представляє інтереси клієнтів у судах та надає правову допомогу.", vacancies: 400, candidatesPerVacancy: 15, salary: 35000 },
      { name: "Нотаріус", description: "Посвідчує правочини та документи, забезпечуючи їх юридичну силу.", vacancies: 120, candidatesPerVacancy: 20, salary: 40000 },
      { name: "Помічник судді", description: "Допомагає судді готувати справи та оформлювати судові рішення.", vacancies: 300, candidatesPerVacancy: 18, salary: 20000 }
    ],
    "053": [
      { name: "Клінічний психолог", description: "Діагностує та консультує людей з психологічними та психоемоційними труднощами.", vacancies: 700, candidatesPerVacancy: 6, salary: 24000 },
      { name: "HR-менеджер", description: "Займається підбором, адаптацією та розвитком персоналу компанії.", vacancies: 1600, candidatesPerVacancy: 9, salary: 26000 },
      { name: "Шкільний психолог", description: "Супроводжує психологічний розвиток та адаптацію учнів у школі.", vacancies: 500, candidatesPerVacancy: 4, salary: 16000 }
    ],
    "073": [
      { name: "Проєктний менеджер", description: "Планує, координує та контролює виконання бізнес-проєктів.", vacancies: 1300, candidatesPerVacancy: 9, salary: 32000 },
      { name: "Маркетолог", description: "Досліджує ринок і розробляє стратегії просування продуктів та послуг.", vacancies: 1600, candidatesPerVacancy: 10, salary: 24000 },
      { name: "Менеджер із логістики", description: "Організовує постачання, складський облік та транспортування товарів.", vacancies: 900, candidatesPerVacancy: 8, salary: 26000 },
      { name: "Офіс-менеджер", description: "Забезпечує адміністративну підтримку та організацію роботи офісу.", vacancies: 700, candidatesPerVacancy: 6, salary: 18000 }
    ],
    "071": [
      { name: "Бухгалтер", description: "Веде фінансовий облік підприємства та готує звітність.", vacancies: 2200, candidatesPerVacancy: 7, salary: 23000 },
      { name: "Аудитор", description: "Перевіряє фінансову звітність компаній на відповідність законодавству.", vacancies: 500, candidatesPerVacancy: 11, salary: 29000 },
      { name: "Податковий консультант", description: "Консультує бізнес з питань оподаткування та податкової оптимізації.", vacancies: 400, candidatesPerVacancy: 9, salary: 27000 },
      { name: "Фінансовий аналітик", description: "Аналізує фінансові показники компанії для прийняття управлінських рішень.", vacancies: 800, candidatesPerVacancy: 10, salary: 25000 }
    ],
    "014": [
      { name: "Вчитель початкових класів", description: "Навчає та виховує учнів початкової школи.", vacancies: 1800, candidatesPerVacancy: 5, salary: 15000 },
      { name: "Вчитель-предметник", description: "Викладає окремий шкільний предмет учням середньої та старшої школи.", vacancies: 2000, candidatesPerVacancy: 6, salary: 16000 },
      { name: "Класний керівник", description: "Координує виховну роботу та супроводжує клас упродовж навчання.", vacancies: 1200, candidatesPerVacancy: 4, salary: 14000 },
      { name: "Методист", description: "Розробляє навчальні програми та методичні матеріали для закладів освіти.", vacancies: 300, candidatesPerVacancy: 8, salary: 17000 }
    ],
    "222": [
      { name: "Лікар загальної практики", description: "Надає первинну медичну допомогу пацієнтам різного віку.", vacancies: 2200, candidatesPerVacancy: 14, salary: 32000 },
      { name: "Педіатр", description: "Спеціалізується на лікуванні та профілактиці захворювань у дітей.", vacancies: 1300, candidatesPerVacancy: 12, salary: 30000 },
      { name: "Хірург", description: "Проводить оперативні втручання для лікування захворювань і травм.", vacancies: 700, candidatesPerVacancy: 18, salary: 45000 },
      { name: "Сімейний лікар", description: "Здійснює комплексний медичний нагляд за пацієнтом і його родиною.", vacancies: 1900, candidatesPerVacancy: 13, salary: 31000 }
    ],
    "133": [
      { name: "Інженер-конструктор", description: "Розробляє креслення та конструкції механізмів і машин.", vacancies: 950, candidatesPerVacancy: 8, salary: 27000 },
      { name: "Інженер-технолог", description: "Розробляє та впроваджує технологічні процеси виробництва.", vacancies: 700, candidatesPerVacancy: 9, salary: 25000 },
      { name: "Інженер-механік", description: "Обслуговує, налагоджує та ремонтує промислове обладнання.", vacancies: 800, candidatesPerVacancy: 7, salary: 25000 },
      { name: "CAD-конструктор", description: "Створює 3D-моделі та технічну документацію за допомогою САПР.", vacancies: 400, candidatesPerVacancy: 10, salary: 23000 }
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
      market: { salary: 22000, empRate: 75, unempRate: 10, vacancies: 1100, jobs: ["Клінічний психолог", "HR-менеджер"] } },

    // 073 Менеджмент
    { id: "o8", uni: "KNU", spec: "073",
      academic: { applicants: 1400, budgetPlaces: 70, minBudget: 175.0, minContract: 140.0, price: 40000, syllabus: "Основи менеджменту, Маркетинг, Управління проєктами, Бізнес-аналітика" },
      market: { salary: 26000, empRate: 78, unempRate: 9, vacancies: 1300, jobs: ["Проєктний менеджер", "Маркетолог"] } },
    { id: "o9", uni: "LP", spec: "073",
      academic: { applicants: 1100, budgetPlaces: 90, minBudget: 170.0, minContract: 135.0, price: 36000, syllabus: "Стратегічний менеджмент, Логістика, Управління персоналом" },
      market: { salary: 24000, empRate: 75, unempRate: 10, vacancies: 1000, jobs: ["Менеджер із логістики", "Офіс-менеджер"] } },

    // 071 Облік і оподаткування
    { id: "o10", uni: "KNU", spec: "071",
      academic: { applicants: 900, budgetPlaces: 60, minBudget: 172.0, minContract: 138.0, price: 38000, syllabus: "Бухгалтерський облік, Аудит, Податкова система, Фінансова звітність" },
      market: { salary: 23000, empRate: 80, unempRate: 8, vacancies: 900, jobs: ["Бухгалтер", "Аудитор"] } },
    { id: "o11", uni: "KHNU", spec: "071",
      academic: { applicants: 700, budgetPlaces: 55, minBudget: 168.0, minContract: 132.0, price: 34000, syllabus: "Фінансовий облік, Економічний аналіз, Податкове право" },
      market: { salary: 21000, empRate: 77, unempRate: 9, vacancies: 750, jobs: ["Бухгалтер", "Податковий консультант"] } },

    // 014 Середня освіта
    { id: "o12", uni: "LNU", spec: "014",
      academic: { applicants: 800, budgetPlaces: 100, minBudget: 160.0, minContract: 120.0, price: 28000, syllabus: "Педагогіка, Вікова психологія, Методика викладання, Фахова дисципліна" },
      market: { salary: 15000, empRate: 70, unempRate: 8, vacancies: 1800, jobs: ["Вчитель", "Класний керівник"] } },
    { id: "o13", uni: "KHNU", spec: "014",
      academic: { applicants: 650, budgetPlaces: 85, minBudget: 158.0, minContract: 118.0, price: 26000, syllabus: "Дидактика, Шкільна гігієна, Інклюзивна освіта" },
      market: { salary: 14000, empRate: 68, unempRate: 9, vacancies: 1500, jobs: ["Вчитель початкових класів", "Методист"] } },

    // 222 Медицина
    { id: "o14", uni: "KNU", spec: "222",
      academic: { applicants: 4200, budgetPlaces: 110, minBudget: 195.0, minContract: 170.0, price: 75000, syllabus: "Анатомія людини, Фізіологія, Біохімія, Фармакологія, Терапія" },
      market: { salary: 32000, empRate: 94, unempRate: 2, vacancies: 2200, jobs: ["Лікар загальної практики", "Педіатр"] } },
    { id: "o15", uni: "LNU", spec: "222",
      academic: { applicants: 3600, budgetPlaces: 95, minBudget: 192.5, minContract: 165.0, price: 68000, syllabus: "Патофізіологія, Хірургія, Внутрішня медицина" },
      market: { salary: 30000, empRate: 92, unempRate: 3, vacancies: 1900, jobs: ["Сімейний лікар", "Хірург"] } },

    // 133 Галузеве машинобудування
    { id: "o16", uni: "KPI", spec: "133",
      academic: { applicants: 600, budgetPlaces: 80, minBudget: 165.0, minContract: 130.0, price: 37000, syllabus: "Опір матеріалів, Деталі машин, CAD/CAM системи, Матеріалознавство" },
      market: { salary: 27000, empRate: 82, unempRate: 7, vacancies: 950, jobs: ["Інженер-конструктор", "Інженер-технолог"] } },
    { id: "o17", uni: "LP", spec: "133",
      academic: { applicants: 520, budgetPlaces: 70, minBudget: 162.0, minContract: 125.0, price: 34000, syllabus: "Технологія машинобудування, Гідравліка, Автоматизація виробництва" },
      market: { salary: 25000, empRate: 80, unempRate: 8, vacancies: 800, jobs: ["Інженер-механік", "CAD-конструктор"] } }
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
