/* ==========================================
   АВТОРИЗАЦІЯ
========================================== */
function startLogin() {
  document.getElementById('login-form').style.display = 'none';
  const loader = document.getElementById('login-loading');
  const log = document.getElementById('loading-log');
  const step = document.getElementById('loading-step');
  loader.style.display = 'block';

  const steps = [
    "Отримання ідентифікаційних даних з Дії...",
    "✅ Особу встановлено",
    "Синхронізація з ЄДБО (документи, НМТ)...",
    "✅ Знайдено Свідоцтво та сертифікат НМТ",
    "Запит до ЕСОЗ Helsi...",
    "✅ Довідка 086/о дійсна",
    "Перевірка в реєстрі Оберіг...",
    "✅ Військово-обліковий документ дійсний"
  ];

  let currentDelay = 0;
  steps.forEach((text, i) => {
    setTimeout(() => {
      if(!text.includes("✅")) step.innerText = text;
      const li = document.createElement('li');
      li.className = text.includes("✅") ? "text-green-600 font-bold" : "text-gray-600";
      li.innerText = text;
      log.appendChild(li);

      if(i === steps.length - 1) {
        setTimeout(() => {
          document.getElementById('login-screen').style.display = 'none';
          document.getElementById('cabinet-screen').style.display = 'flex';
          initSystem();
        }, 800);
      }
    }, currentDelay);
    currentDelay += 600;
  });
}

function logout() {
  document.getElementById('cabinet-screen').style.display = 'none';
  document.getElementById('login-screen').style.display = 'flex';
  document.getElementById('login-form').style.display = 'block';
  document.getElementById('login-loading').style.display = 'none';
  document.getElementById('loading-log').innerHTML = '';
}

function switchTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
  event.currentTarget.classList.add('active');
  document.getElementById('tab-' + tabId).classList.add('active');
}

/* ==========================================
   ІНІЦІАЛІЗАЦІЯ ТА ФІЛЬТРИ
========================================== */
function initSystem() {
  const regSelect = document.getElementById('flt-region');
  DB.regions.forEach(r => regSelect.add(new Option(r, r)));

  const sphereSelect = document.getElementById('flt-sphere');
  Object.entries(DB.spheres).forEach(([id, name]) => sphereSelect.add(new Option(`${id} ${name}`, id)));

  updateFilters();
  renderSpecialtyChoice();
}

/* ==========================================
   ВКЛАДКА "ВИБІР СПЕЦІАЛЬНОСТІ"
========================================== */
function renderSpecialtyChoice() {
  const container = document.getElementById('specialty-choice-container');
  container.innerHTML = '';

  Object.entries(DB.specialties).forEach(([specId, spec]) => {
    const offers = DB.offers.filter(o => o.spec === specId);
    if (offers.length === 0) return;

    const totalApplicants = offers.reduce((sum, o) => sum + o.academic.applicants, 0);
    const avgMinBudget = offers.reduce((sum, o) => sum + o.academic.minBudget, 0) / offers.length;
    const avgMinContract = offers.reduce((sum, o) => sum + o.academic.minContract, 0) / offers.length;
    const avgEmpRate = offers.reduce((sum, o) => sum + o.market.empRate, 0) / offers.length;
    const avgUnempRate = offers.reduce((sum, o) => sum + o.market.unempRate, 0) / offers.length;

    const professions = DB.professionStats[specId] || [];

    let professionsHtml = professions.map(p => `
      <tr class="border-b border-gray-100 last:border-none">
        <td class="py-2 pr-3 font-semibold text-gray-800">${p.name}</td>
        <td class="py-2 pr-3 text-center">${p.vacancies.toLocaleString()}</td>
        <td class="py-2 pr-3 text-center">${p.candidatesPerVacancy}</td>
        <td class="py-2 text-right font-bold text-edboPrimary">${p.salary.toLocaleString()} ₴</td>
      </tr>
    `).join('');

    container.innerHTML += `
      <div class="mui-paper overflow-hidden">
        <div class="p-5 border-b border-gray-200 bg-gray-50">
          <div class="text-xs font-bold text-edboPrimary uppercase tracking-wider mb-1">Спеціальність ${specId} | Галузь ${spec.sphere}: ${DB.spheres[spec.sphere]}</div>
          <h3 class="text-xl font-bold m-0 text-gray-800">${spec.name}</h3>
        </div>

        <div class="p-5 grid grid-cols-2 md:grid-cols-4 gap-4 border-b border-gray-100">
          <div>
            <div class="text-[10px] text-gray-500 uppercase">Кількість вступників (торік)</div>
            <div class="font-black text-lg text-gray-800">${totalApplicants.toLocaleString()}</div>
          </div>
          <div>
            <div class="text-[10px] text-gray-500 uppercase">Сер. бал (бюджет / контракт)</div>
            <div class="font-black text-lg text-edboPrimary">${avgMinBudget.toFixed(1)} / ${avgMinContract.toFixed(1)}</div>
          </div>
          <div>
            <div class="text-[10px] text-gray-500 uppercase">Працевлаштування за фахом</div>
            <div class="font-black text-lg text-green-700">${Math.round(avgEmpRate)}%</div>
          </div>
          <div>
            <div class="text-[10px] text-gray-500 uppercase">Не знайшли роботу за фахом</div>
            <div class="font-black text-lg ${avgUnempRate > 10 ? 'text-red-500' : 'text-gray-800'}">${Math.round(avgUnempRate)}%</div>
          </div>
        </div>

        <div class="p-5">
          <div class="text-[10px] font-black text-gray-400 uppercase mb-3">Можливі професії та статистика ринку праці</div>
          ${professions.length ? `
          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead>
                <tr class="text-[10px] text-gray-500 uppercase border-b border-gray-200">
                  <th class="text-left py-2 pr-3 font-bold">Професія</th>
                  <th class="text-center py-2 pr-3 font-bold">Кількість вакансій</th>
                  <th class="text-center py-2 pr-3 font-bold">Сер. к-сть кандидатів / вакансію</th>
                  <th class="text-right py-2 font-bold">Сер. заробітна плата</th>
                </tr>
              </thead>
              <tbody>${professionsHtml}</tbody>
            </table>
          </div>
          ` : '<div class="text-sm text-gray-500">Дані по професіях відсутні</div>'}
        </div>
      </div>
    `;
  });
}

function updateFilters() {
  const reg = document.getElementById('flt-region').value;
  const uniSelect = document.getElementById('flt-uni');

  while(uniSelect.options.length > 1) uniSelect.remove(1);

  Object.entries(DB.universities).forEach(([id, u]) => {
    if(reg === 'all' || u.region === reg) {
      uniSelect.add(new Option(u.name, id));
    }
  });
  renderAnalytics();
}

/* ==========================================
   АНАЛІТИКА ТА РЕНДЕР
========================================== */
function toggleSphere(id) { expandedSpheres.has(id) ? expandedSpheres.delete(id) : expandedSpheres.add(id); renderHTML(); }
function toggleSpec(id) { expandedSpecs.has(id) ? expandedSpecs.delete(id) : expandedSpecs.add(id); renderHTML(); }

function renderAnalytics() {
  const fReg = document.getElementById('flt-region').value;
  const fUni = document.getElementById('flt-uni').value;
  const fSphere = document.getElementById('flt-sphere').value;
  const sort = document.getElementById('flt-sort').value;

  // 1. Фільтруємо
  let filtered = DB.offers.filter(o => {
    const uni = DB.universities[o.uni];
    const spec = DB.specialties[o.spec];
    if (fReg !== 'all' && uni.region !== fReg) return false;
    if (fUni !== 'all' && o.uni !== fUni) return false;
    if (fSphere !== 'all' && spec.sphere !== fSphere) return false;
    return true;
  });

  // 2. Сортуємо пропозиції
  filtered.sort((a, b) => {
    if(sort === 'budgetAsc') return a.academic.minBudget - b.academic.minBudget;
    if(sort === 'budgetDesc') return b.academic.minBudget - a.academic.minBudget;
    if(sort === 'contractAsc') return a.academic.minContract - b.academic.minContract;
    if(sort === 'salaryDesc') return b.market.salary - a.market.salary;
    if(sort === 'empDesc') return b.market.empRate - a.market.empRate;
    return 0;
  });

  // 3. Групуємо (Сфера -> Спеціальність -> Пропозиції)
  const tree = {};
  filtered.forEach(o => {
    const specInfo = DB.specialties[o.spec];
    const sphId = specInfo.sphere;

    if(!tree[sphId]) tree[sphId] = { id: sphId, name: DB.spheres[sphId], specs: {}, allOffers: [] };
    if(!tree[sphId].specs[o.spec]) tree[sphId].specs[o.spec] = { id: o.spec, name: specInfo.name, offers: [] };

    tree[sphId].allOffers.push(o);
    tree[sphId].specs[o.spec].offers.push(o);
  });

  currentRenderData = tree;
  renderHTML();
}

function renderHTML() {
  const container = document.getElementById('analytics-container');
  container.innerHTML = '';
  const isViewMode = document.getElementById('mode-view').checked;

  if(Object.keys(currentRenderData).length === 0) {
    container.innerHTML = '<div class="mui-paper p-8 text-center text-gray-500 font-bold">Нічого не знайдено за вашими критеріями</div>';
    return;
  }

  Object.values(currentRenderData).forEach(sphere => {
    // Агрегація для сфери
    const avgSal = sphere.allOffers.reduce((sum, o) => sum + o.market.salary, 0) / sphere.allOffers.length;
    const avgEmp = sphere.allOffers.reduce((sum, o) => sum + o.market.empRate, 0) / sphere.allOffers.length;

    let html = `
      <div class="mui-paper overflow-hidden p-0 mb-4 border border-gray-300">
        <div class="accordion-header p-4 flex flex-col md:flex-row justify-between md:items-center gap-4 bg-gray-50 border-b border-gray-200" onclick="toggleSphere('${sphere.id}')">
          <div>
            <div class="text-xs font-bold text-edboPrimary uppercase tracking-wider mb-1">Сфера / Галузь знань ${sphere.id}</div>
            <h3 class="text-xl font-bold m-0 text-gray-800">${sphere.name}</h3>
          </div>
          <div class="flex gap-4">
            <div class="text-right">
              <div class="text-[10px] text-gray-500 uppercase">Сер. Зарплата (ПФУ)</div>
              <div class="font-black text-lg text-edboPrimary">${Math.round(avgSal).toLocaleString()} ₴</div>
            </div>
            <div class="text-right border-l pl-4">
              <div class="text-[10px] text-gray-500 uppercase">Працевлашт. (ПФУ)</div>
              <div class="font-black text-lg text-green-700">${Math.round(avgEmp)}%</div>
            </div>
          </div>
        </div>

        <div class="${expandedSpheres.has(sphere.id) ? '' : 'hidden-block'}">
    `;

    Object.values(sphere.specs).forEach(spec => {
      const minBdg = Math.min(...spec.offers.map(o => o.academic.minBudget));

      html += `
        <div class="border-b border-gray-200 last:border-none bg-white">
          <div class="accordion-header p-3 pl-8 flex justify-between items-center bg-blue-50/30" onclick="toggleSpec('${spec.id}')">
            <div class="font-bold text-lg text-gray-800">${spec.id} ${spec.name} <span class="text-xs text-gray-500 font-normal ml-2">(${spec.offers.length} пропозицій)</span></div>
            <div class="text-xs font-bold text-gray-600">Мін. бал на бюджет: <span class="text-edboPrimary">${minBdg}</span></div>
          </div>

          <div class="${expandedSpecs.has(spec.id) ? '' : 'hidden-block'} p-4 pl-12 bg-white space-y-4">
      `;

      spec.offers.forEach(offer => {
        const uni = DB.universities[offer.uni];

        // Логіка кнопки "Подати заяву"
        let btnHtml = '';
        if (isViewMode) {
          btnHtml = `<button class="mui-btn mui-btn-primary" disabled>Подати заяву</button><div class="text-[10px] text-gray-500 mt-1">Режим огляду</div>`;
        } else {
          if (USER_SCORE >= offer.academic.minBudget) {
            btnHtml = `<button class="mui-btn bg-green-600 hover:bg-green-700 text-white" onclick="apply('${offer.id}')">Подати на БЮДЖЕТ</button><div class="text-[10px] text-green-700 mt-1 font-bold">Ваш бал (${USER_SCORE}) проходить!</div>`;
          } else if (USER_SCORE >= offer.academic.minContract) {
            btnHtml = `<button class="mui-btn bg-yellow-500 hover:bg-yellow-600 text-white" onclick="apply('${offer.id}')">Подати на КОНТРАКТ</button><div class="text-[10px] text-gray-500 mt-1">Бракує балів на бюджет</div>`;
          } else {
            btnHtml = `<button class="mui-btn" disabled>Недостатньо балів</button>`;
          }
        }

        html += `
            <div class="border border-gray-200 rounded-lg p-0 flex flex-col xl:flex-row overflow-hidden shadow-sm">
              <!-- Інформація про Універ -->
              <div class="flex-1 p-5">
                <div class="text-xs text-gray-500 mb-1">${uni.region} | ${uni.type} | ${uni.accred}</div>
                <h4 class="font-black text-xl text-edboPrimary m-0 mb-3">${uni.name}</h4>
                <div class="text-sm text-gray-700 mb-4 bg-gray-50 p-3 rounded border border-gray-100">
                  <b>Силабус програми:</b> ${offer.academic.syllabus}
                </div>
                <div class="flex gap-2 text-xs font-bold">
                  <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded">Бюджет: ${offer.academic.budgetPlaces} місць (від ${offer.academic.minBudget} б.)</span>
                  <span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Контракт: ${offer.academic.price.toLocaleString()} ₴/рік (від ${offer.academic.minContract} б.)</span>
                  <span class="bg-gray-100 text-gray-600 px-2 py-1 rounded">Конкурс торік: ${offer.academic.applicants} заяв</span>
                </div>
              </div>

              <!-- Аналітика ПФУ -->
              <div class="w-full xl:w-[320px] bg-gray-50 border-l border-gray-200 p-5 flex flex-col justify-between shrink-0">
                <div>
                  <div class="text-[10px] font-black text-gray-400 uppercase mb-3 border-b pb-1 flex justify-between">
                    <span>Статистика випускників</span>
                    <span class="text-edboPrimary">Дані ПФУ та ДЦЗ</span>
                  </div>
                  <div class="grid grid-cols-2 gap-3 mb-4">
                    <div><div class="text-[10px] text-gray-500">Середня ЗП</div><div class="font-black text-edboPrimary text-lg">${offer.market.salary.toLocaleString()} ₴</div></div>
                    <div><div class="text-[10px] text-gray-500">Вакансії в Україні</div><div class="font-black text-gray-800 text-lg">${offer.market.vacancies}</div></div>
                    <div><div class="text-[10px] text-gray-500">Працюють за фахом</div><div class="font-black text-green-600 text-lg">${offer.market.empRate}%</div></div>
                    <div><div class="text-[10px] text-gray-500">Не працевлаштовано</div><div class="font-black ${offer.market.unempRate > 10 ? 'text-red-500' : 'text-gray-800'} text-lg">${offer.market.unempRate}%</div></div>
                  </div>
                  <div class="text-[10px] text-gray-500 mb-1">Популярні посади:</div>
                  <div class="text-xs font-bold text-gray-700">${offer.market.jobs.join(', ')}</div>
                </div>
                <div class="mt-5 text-center">
                  ${btnHtml}
                </div>
              </div>
            </div>
        `;
      });
      html += `</div></div>`;
    });
    html += `</div></div>`;
    container.innerHTML += html;
  });
}

/* ==========================================
   ПОДАЧА ЗАЯВИ ТА ЗАРАХУВАННЯ
========================================== */
function apply(offerId) {
  const offer = DB.offers.find(o => o.id === offerId);
  const uni = DB.universities[offer.uni];
  const spec = DB.specialties[offer.spec];

  const budgetPass = USER_SCORE >= offer.academic.minBudget;
  const status = budgetPass ? 'Рекомендовано (Бюджет)' : 'Допущено (Контракт)';

  myApplications.push({ id: offerId, uniName: uni.name, specName: `${offer.spec} ${spec.name}`, status: status });
  renderMyApps();

  switchTab('vstup');
  alert(`Заяву успішно подано!\n\nВи одразу пройшли верифікацію завдяки Дії. Паперові копії документів везти до приймальної комісії не потрібно.`);
}

function renderMyApps() {
  const container = document.getElementById('my-apps-container');
  if(myApplications.length === 0) return;

  container.innerHTML = '';
  myApplications.forEach(app => {
    container.innerHTML += `
      <div class="mui-paper p-5 border-2 border-green-500 bg-green-50/30 flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <span class="bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs font-bold uppercase mb-2 inline-block">${app.status}</span>
          <h4 class="font-black text-lg text-gray-800 m-0">${app.uniName}</h4>
          <p class="text-gray-600 text-sm m-0 mt-1">${app.specName}</p>
        </div>
        <button class="mui-btn mui-btn-primary !bg-black hover:!bg-gray-800 flex items-center gap-2 whitespace-nowrap" onclick="openModal('${app.id}')">
          Оформити зарахування (Без паперів)
        </button>
      </div>
    `;
  });
}

function openModal(id) {
  selectedAppForSign = id;
  const app = myApplications.find(a => a.id === id);
  document.getElementById('modal-app-details').innerText = `${app.specName} | ${app.uniName}`;
  document.getElementById('modal-sign').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal-sign').style.display = 'none';
  selectedAppForSign = null;
}

function confirmSign() {
  alert("Договір успішно підписано Дія.Підписом!\n\nВи офіційно зараховані. Дані передано в університет.");
  closeModal();

  const container = document.getElementById('my-apps-container');
  container.innerHTML = container.innerHTML.replace(
    /<button.*?Оформити зарахування.*?<\/button>/s,
    '<div class="text-green-700 font-black text-right">✓ ЗАРАХОВАНО. Договір підписано електронно</div>'
  );
}
