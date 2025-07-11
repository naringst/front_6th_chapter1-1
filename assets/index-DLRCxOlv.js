(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e){if(t.type!==`childList`)continue;for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();const e=`modulepreload`,t=function(e){return`/front_6th_chapter1-1/`+e},n={},r=function(r,i,a){let o=Promise.resolve();if(i&&i.length>0){let r=function(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))},s=document.getElementsByTagName(`link`),c=document.querySelector(`meta[property=csp-nonce]`),l=c?.nonce||c?.getAttribute(`nonce`);o=r(i.map(r=>{if(r=t(r,a),r in n)return;n[r]=!0;let i=r.endsWith(`.css`),o=i?`[rel="stylesheet"]`:``,c=!!a;if(c)for(let e=s.length-1;e>=0;e--){let t=s[e];if(t.href===r&&(!i||t.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${r}"]${o}`))return;let u=document.createElement(`link`);if(u.rel=i?`stylesheet`:e,i||(u.as=`script`),u.crossOrigin=``,u.href=r,l&&u.setAttribute(`nonce`,l),document.head.appendChild(u),i)return new Promise((e,t)=>{u.addEventListener(`load`,e),u.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${r}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(e=>{for(let t of e||[]){if(t.status!==`rejected`)continue;s(t.reason)}return r().catch(s)})};async function i(e={}){let{limit:t=20,search:n=``,category1:r=``,category2:i=``,sort:a=`price_asc`}=e,o=e.current??e.page??1,s=new URLSearchParams({page:o.toString(),limit:t.toString(),...n&&{search:n},...r&&{category1:r},...i&&{category2:i},sort:a}),c=await fetch(`/api/products?${s}`);return await c.json()}async function a(e){let t=await fetch(`/api/products/${e}`);return await t.json()}async function o(){let e=await fetch(`/api/categories`);return await e.json()}async function s(e,t=20){if(!e||!e.category2)return[];let{products:n}=await i({category2:e.category2,limit:t});return n.filter(t=>t.productId!==e.productId).slice(0,t)}const c=({cart:e,isProductDetail:t=!1})=>`
      <header class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-md mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
         
            ${t?`<div class="flex items-center space-x-3">
  <button onclick="window.history.back()" class="p-2 text-gray-700 hover:text-gray-900 transition-colors">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
    </svg>
  </button>
  <h1 class="text-lg font-bold text-gray-900">상품 상세</h1>
</div>
`:`<h1 class="text-xl font-bold text-gray-900"><a href="/" data-link="">쇼핑몰</a></h1>`}
        
          <div class="flex items-center space-x-2">
            <!-- 장바구니 아이콘 -->
            <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
              </svg>
                <!-- 🔴 빨간 동그라미 배지 -->
      ${e.length>0?`<span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">${[...new Set(e.map(e=>e.productId))].length}</span>`:``}
            </button>
          </div>
        </div>
      </div>
    </header>
    `,l=({search:e})=>`<div class="mb-4">
        <div class="relative">
          <input type="text" id="search-input" placeholder="상품명을 검색해보세요..." value="${e||``}" class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg
                      focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
      </div>
  
  `,u=e=>`
         <button data-category1="${e}" class="category1-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors
                   bg-white border-gray-300 text-gray-700 hover:bg-gray-50">
                  ${e}
                </button>
      `,d=(e,t)=>`
        <button data-category2="${e}" class="category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors
                   ${t===e?`bg-blue-100 border-blue-300 text-blue-800`:`bg-white border-gray-300 text-gray-700 hover:bg-gray-50`}">
                  ${e}
                </button>
      `,f=({categoryList:e,selectedCategory1:t,selectedCategory2:n,loading:r})=>`       <div class="space-y-2">
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600">카테고리:</label>
            <button data-breadcrumb="reset" class="breadcrumb-reset-btn text-xs hover:text-blue-800 hover:underline">전체</button>
             ${t?`<span class="text-xs text-gray-500">&gt;</span>
               <button data-breadcrumb="category1" data-category1="${t}" class="breadcrumb-category1-btn text-xs hover:text-blue-800 hover:underline">${t}</button>`:``}
                  ${n?`<span class="text-xs text-gray-500">&gt;</span>
               <span class="text-xs text-gray-600 cursor-default">${n}</span>`:``}
          </div>
          <!-- 1depth 카테고리 -->
          ${r?` <div class="flex flex-wrap gap-2">
            <div class="text-sm text-gray-500 italic">카테고리 로딩 중...</div>
          </div>`:t?`<div class="space-y-2">
                  <div class="flex flex-wrap gap-2">
                    ${e.map(e=>d(e,n)).join(``)}
                  </div>
                </div>`:`<div class="flex flex-wrap gap-2">
                    ${e.map(e=>u(e)).join(``)}
                  </div>`}
     
        </div>
  
  `,p=({productCount:e})=>`<div class="flex items-center gap-2">
              <label class="text-sm text-gray-600">개수:</label>
              <select id="limit-select"
                      class="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                <option value="10" ${e===10?`selected`:``}>
                  10개
                </option>
                <option value="20" ${e===20?`selected`:``}>
                  20개
                </option>
                <option value="50" ${e===50?`selected`:``}>
                  50개
                </option>
                <option value="100" ${e===100?`selected`:``}>
                  100개
                </option>
              </select>
            </div>
    
    `,m=({sort:e})=>`
  
              <div class="flex items-center gap-2">
              <label class="text-sm text-gray-600">정렬:</label>
              <select id="sort-select" class="text-sm border border-gray-300 rounded px-2 py-1
                           focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                <option value="price_asc" ${e===`price_asc`?`selected`:``}>가격 낮은순</option>
                <option value="price_desc" ${e===`price_desc`?`selected`:``}>가격 높은순</option>
                <option value="name_asc" ${e===`name_asc`?`selected`:``}>이름순</option>
                <option value="name_desc" ${e===`name_desc`?`selected`:``}>이름 역순</option>
              </select>
            </div>
    
    `,h=()=>`
  <footer class="bg-white shadow-sm sticky top-0 z-40">
    <div class="max-w-md mx-auto py-8 text-center text-gray-500">
      <p>© 2025 항해플러스 프론트엔드 쇼핑몰</p>
    </div>
  </footer>
  
  `,g=()=>`<div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
              <div class="aspect-square bg-gray-200"></div>
              <div class="p-3">
                <div class="h-4 bg-gray-200 rounded mb-2"></div>
                <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
                <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
                <div class="h-8 bg-gray-200 rounded"></div>
              </div>
            </div>`,_=Array.from({length:4},()=>g()),v=e=>` <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden product-card"
                 data-product-id="${e.productId}">
              <!-- 상품 이미지 -->
              <div class="aspect-square bg-gray-100 overflow-hidden cursor-pointer product-image">
                <img src="${e.image}"
                     alt="${e.title}"
                     class="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                     loading="lazy">
              </div>
              <!-- 상품 정보 -->
              <div class="p-3">
                <div class="cursor-pointer product-info mb-3">
                  <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                    ${e.title}
                  </h3>
                  <p class="text-xs text-gray-500 mb-2">${e.brand}</p>
                  <p class="text-lg font-bold text-gray-900">
                    ${Number(e.lprice).toLocaleString()}원
                  </p>
                </div>
                <!-- 장바구니 버튼 -->
                <button class="w-full bg-blue-600 text-white text-sm py-2 px-3 rounded-md
                       hover:bg-blue-700 transition-colors add-to-cart-btn" data-product-id="${e.productId}">
                  장바구니 담기
                </button>
              </div>
            </div>
    `,ee=()=>`
       <div class="text-center py-4">
            <div class="inline-flex items-center">
              <svg class="animate-spin h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" 
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span class="text-sm text-gray-600">상품을 불러오는 중...</span>
            </div>
          </div>
    `,y=({products:e,loading:t,total:n,hasNext:r})=>`
      <div class="mb-6">
      <div>
      ${t?``:`<div class="mb-4 text-sm text-gray-600">총 <span class="font-medium text-gray-900">${n}개</span>의 상품</div>`}
        <!-- 상품 그리드 -->
        <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
          <!-- 로딩 스켈레톤 -->
          ${t&&e.length===0?_.join(``):e.map(e=>v(e)).join(``)}
        </div>
        <!-- 무한 스크롤 감지 요소 -->
        <div id="scroll-sentinel"></div>
        ${r?ee():``}
      </div>
    </div>
  `,b=({products:e=[],total:t=0,loading:n=!1,categories:r={},productCount:i=20,hasNext:a=!1,sort:o=`price_asc`,cart:s=[],selectedCategory1:u=null,selectedCategory2:d=null,search:g=``})=>{let _=Object.keys(r);return`
<div class="min-h-screen bg-gray-50">
 ${c({cart:s})}
  <main class="max-w-md mx-auto px-4 py-4">
    <!-- 검색 및 필터 -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
      <!-- 검색창 -->
      ${l({search:g})}

      <!-- 필터 옵션 -->
      <div class="space-y-3">
        <!-- 카테고리 필터 -->
        ${f({categoryList:_,selectedCategory1:u,selectedCategory2:d,loading:n})}
        <!-- 기존 필터들 -->
        <div class="flex gap-2 items-center justify-between">
          ${p({productCount:i})}
          ${m({sort:o})}
        </div>
      </div>
    </div>
    <!-- 상품 목록 -->
    ${y({products:e,loading:n,total:t,hasNext:a})}
  </main>
  ${h()}
</div>
`},x=({product:e,cart:t=[],relatedProducts:n=[]})=>e?`
    <div class="min-h-screen bg-gray-50">
      ${c({cart:t,isProductDetail:!0})}
      <main class="max-w-md mx-auto px-4 py-4">
        <!-- 브레드크럼 -->
        <nav class="mb-4">
          <div class="flex items-center space-x-2 text-sm text-gray-600">
            <button class="breadcrumb-home hover:text-blue-600 transition-colors">홈</button>
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <span class="text-gray-500">${e.category1}</span>
            ${e.category2?`
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <span class="text-gray-500">${e.category2}</span>
            `:``}
          </div>
        </nav>

        <!-- 상품 상세 정보 -->
        <div class="bg-white rounded-lg shadow-sm mb-6">
          <!-- 상품 이미지 -->
          <div class="p-4">
            <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
              <img src="${e.image}" 
                   alt="${e.title}" 
                   class="w-full h-full object-cover product-detail-image">
            </div>
            
            <!-- 상품 정보 -->
            <div>
              <p class="text-sm text-gray-600 mb-1">${e.mallName||``}</p>
              <h1 class="text-xl font-bold text-gray-900 mb-3">${e.title}</h1>
              
              <!-- 평점 및 리뷰 (임시 데이터) -->
              <div class="flex items-center mb-3">
                <div class="flex items-center">
                  ${Array.from({length:5},(e,t)=>`
                    <svg class="w-4 h-4 ${t<4?`text-yellow-400`:`text-gray-300`}" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  `).join(``)}
                </div>
                <span class="ml-2 text-sm text-gray-600">4.0 (${Math.floor(Math.random()*1e3)}개 리뷰)</span>
              </div>
              
              <!-- 가격 -->
              <div class="mb-4">
                <span class="text-2xl font-bold text-blue-600">${e.lprice}원</span>
              </div>
              
              <!-- 재고 (임시) -->
              <div class="text-sm text-gray-600 mb-4">
                재고 ${Math.floor(Math.random()*200)+50}개
              </div>
              
              <!-- 설명 -->
              <div class="text-sm text-gray-700 leading-relaxed mb-6">
                ${e.title}에 대한 상세 설명입니다. 브랜드의 우수한 품질을 자랑하는 상품으로, 고객 만족도가 높은 제품입니다.
              </div>
            </div>
          </div>
          
          <!-- 수량 선택 및 액션 -->
          <div class="border-t border-gray-200 p-4">
            <div class="flex items-center justify-between mb-4">
              <span class="text-sm font-medium text-gray-900">수량</span>
              <div class="flex items-center">
                <button id="quantity-decrease" class="w-8 h-8 flex items-center justify-center border border-gray-300 
                   rounded-l-md bg-gray-50 hover:bg-gray-100">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                  </svg>
                </button>
                <input type="number" id="quantity-input" value="1" min="1" max="100" 
                       class="w-16 h-8 text-center text-sm border-t border-b border-gray-300 
                       focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                <button id="quantity-increase" class="w-8 h-8 flex items-center justify-center border border-gray-300 
                   rounded-r-md bg-gray-50 hover:bg-gray-100">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                  </svg>
                </button>
              </div>
            </div>
            
            <!-- 액션 버튼 -->
            <button id="add-to-cart-btn" data-product-id="${e.productId}" 
                    class="w-full bg-blue-600 text-white py-3 px-4 rounded-md 
                    hover:bg-blue-700 transition-colors font-medium">
              장바구니 담기
            </button>
          </div>
        </div>

        <!-- 상품 목록으로 이동 -->
        <div class="mb-6">
          <button class="block w-full text-center bg-gray-100 text-gray-700 py-3 px-4 rounded-md 
            hover:bg-gray-200 transition-colors go-to-product-list">
            상품 목록으로 돌아가기
          </button>
        </div>

        <!-- 관련 상품 -->
        ${n.length>0?`
          <div class="bg-white rounded-lg shadow-sm">
            <div class="p-4 border-b border-gray-200">
              <h2 class="text-lg font-bold text-gray-900">관련 상품</h2>
              <p class="text-sm text-gray-600">같은 카테고리의 다른 상품들</p>
            </div>
            <div class="p-4">
              <div class="grid grid-cols-2 gap-3 responsive-grid">
                ${n.map(e=>`
                  <div class="bg-gray-50 rounded-lg p-3 related-product-card cursor-pointer" 
                       data-product-id="${e.productId}">
                    <div class="aspect-square bg-white rounded-md overflow-hidden mb-2">
                      <img src="${e.image}" 
                           alt="${e.title}" 
                           class="w-full h-full object-cover" loading="lazy">
                    </div>
                    <h3 class="text-sm font-medium text-gray-900 mb-1 line-clamp-2">${e.title}</h3>
                    <p class="text-sm font-bold text-blue-600">${Number(e.lprice).toLocaleString()}원</p>
                  </div>
                `).join(``)}
              </div>
            </div>
          </div>
        `:``}
      </main>
      ${h()}
    </div>
  `:`
      <div class="min-h-screen bg-gray-50 flex items-center justify-center">
        <div class="text-center">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">상품을 찾을 수 없습니다</h2>
          <button onclick="history.back()" class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            이전 페이지로 돌아가기
          </button>
        </div>
      </div>
    `,S=()=>`
   <main class="max-w-md mx-auto px-4 py-4">
  <div class="text-center my-4 py-20 shadow-md p-6 bg-white rounded-lg">
  <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#4285f4;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#1a73e8;stop-opacity:1" />
      </linearGradient>
      <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="2" stdDeviation="8" flood-color="#000000" flood-opacity="0.1"/>
      </filter>
    </defs>
    
    <!-- 404 Numbers -->
    <text x="160" y="85" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="48" font-weight="600" fill="url(#blueGradient)" text-anchor="middle">404</text>
    
    <!-- Icon decoration -->
    <circle cx="80" cy="60" r="3" fill="#e8f0fe" opacity="0.8"/>
    <circle cx="240" cy="60" r="3" fill="#e8f0fe" opacity="0.8"/>
    <circle cx="90" cy="45" r="2" fill="#4285f4" opacity="0.5"/>
    <circle cx="230" cy="45" r="2" fill="#4285f4" opacity="0.5"/>
    
    <!-- Message -->
    <text x="160" y="110" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="14" font-weight="400" fill="#5f6368" text-anchor="middle">페이지를 찾을 수 없습니다</text>
    
    <!-- Subtle bottom accent -->
    <rect x="130" y="130" width="60" height="2" rx="1" fill="url(#blueGradient)" opacity="0.3"/>
  </svg>
  
  <a href="/" data-link class="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">홈으로</a>
</div>
</main>
  `,C=({cart:e,selectedCartItems:t=[]})=>{let n=e.reduce((e,t)=>{let n=e.find(e=>e.productId===t.productId);return n?n.count++:e.push({...t,count:1}),e},[]),r=n.reduce((e,t)=>e+Number(t.lprice)*t.count,0),i=n.filter(e=>t.includes(e.productId)),a=i.reduce((e,t)=>e+Number(t.lprice)*t.count,0),o=n.length>0&&n.every(e=>t.includes(e.productId));return`
    <div class="fixed inset-0 z-50 overflow-y-auto cart-modal">
      <!-- 배경 오버레이 -->
      <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity cart-modal-overlay"></div>
      <!-- 모달 컨테이너 -->
      <div class="flex min-h-full items-end justify-center p-0 sm:items-center sm:p-4">
        <div class="relative bg-white rounded-t-lg sm:rounded-lg shadow-xl w-full max-w-md sm:max-w-lg max-h-[90vh] overflow-hidden">
          <!-- 헤더 -->
          <div class="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
            <h2 class="text-lg font-bold text-gray-900 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
              </svg>
              장바구니 
              <span class="text-sm font-normal text-gray-600 ml-1">(${n.length})</span>
            </h2>

            
            <button id='cart-modal-close-btn' class="modal-close-btn text-gray-400 hover:text-gray-600 p-1">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
                <!-- 전체 선택 섹션 -->
      <div class="p-4 border-b border-gray-200 bg-gray-50">
        <label class="flex items-center text-sm text-gray-700">
          <input type="checkbox" id="cart-modal-select-all-checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-2" ${o?`checked`:``}>
          전체선택 (${n.length})개
        </label>
      </div>
          <!-- 컨텐츠 -->
          <div class="flex flex-col max-h-[calc(90vh-120px)]">
            ${n.length===0?`
                <!-- 빈 장바구니 -->
                <div class="flex-1 flex items-center justify-center p-8">
                  <div class="text-center">
                    <div class="text-gray-400 mb-4">
                      <svg class="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
                      </svg>
                    </div>
                    <h3 class="text-lg font-medium text-gray-900 mb-2">장바구니가 비어있습니다</h3>
                    <p class="text-gray-600">원하는 상품을 담아보세요!</p>
                  </div>
                </div>
                `:`
                <!-- 상품 목록 -->
                <div class="flex-1 overflow-y-auto p-4">
                  <div class="space-y-3">
                    ${n.map(e=>`
                      <div class="flex items-center py-3 border-b border-gray-100 cart-item" data-product-id="${e.productId}">
            <!-- 선택 체크박스 -->
            <label class="flex items-center mr-3">
              <input type="checkbox" class="cart-item-checkbox w-4 h-4 text-blue-600 border-gray-300 rounded 
            focus:ring-blue-500" data-product-id="${e.productId}" ${t.includes(e.productId)?`checked`:``}>
            </label>
            <!-- 상품 이미지 -->
            <div class="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden mr-3 flex-shrink-0">
              <img src="${e.image}" alt="${e.title}" class="w-full h-full object-cover cursor-pointer cart-item-image" data-product-id="${e.productId}">
            </div>
            <!-- 상품 정보 -->
            <div class="flex-1 min-w-0">
              <h4 class="text-sm font-medium text-gray-900 truncate cursor-pointer cart-item-title" data-product-id="${e.productId}">
            ${e.title}
              </h4>
              <p class="text-sm text-gray-600 mt-1">
                ${e.lprice}원
              </p>
              <!-- 수량 조절 -->
              <div class="flex items-center mt-2">
                <button class="quantity-decrease-btn w-7 h-7 flex items-center justify-center 
             border border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100" data-product-id="${e.productId}">
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                  </svg>
                </button>
                <input type="number" value="${e.count}" min="1" class="quantity-input w-12 h-7 text-center text-sm border-t border-b 
            border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500" disabled="" data-product-id="${e.productId}">
                <button class="quantity-increase-btn w-7 h-7 flex items-center justify-center 
             border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100" data-product-id="${e.productId}">
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                  </svg>
                </button>
              </div>
            </div>
            <!-- 가격 및 삭제 -->
            <div class="text-right ml-3">
              <p class="text-sm font-medium text-gray-900">
                ${Number(e.lprice)*e.count}원
              </p>
              <button class="cart-item-remove-btn mt-1 text-xs text-red-600 hover:text-red-800" data-product-id="${e.productId}">
                삭제
              </button>
            </div>
          </div>
                    `).join(``)}
                  </div>
                </div>
       <!-- 하단 액션 -->
    <div class="sticky bottom-0 bg-white border-t border-gray-200 p-4">
      ${i.length>0?`
      <!-- 선택된 아이템 정보 -->
      <div class="flex justify-between items-center mb-3 text-sm">
        <span class="text-gray-600">선택한 상품 (${i.length}개)</span>
        <span class="font-medium">${a}원</span>
      </div>
      `:``}
      <!-- 총 금액 -->
      <div class="flex justify-between items-center mb-4">
        <span class="text-lg font-bold text-gray-900">총 금액</span>
        <span class="text-xl font-bold text-blue-600">${r}원</span>
      </div>
      <!-- 액션 버튼들 -->
      <div class="space-y-2">
      ${i.length>0?` <button id="cart-modal-remove-selected-btn" class="w-full bg-red-600 text-white py-2 px-4 rounded-md 
                   hover:bg-red-700 transition-colors text-sm">
          선택한 상품 삭제 (${i.length}개)
        </button> `:``}
        <div class="flex gap-2">
          <button id="cart-modal-clear-cart-btn" class="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md 
                   hover:bg-gray-700 transition-colors text-sm">
            전체 비우기
          </button>
          <button id="cart-modal-checkout-btn" class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md 
                   hover:bg-blue-700 transition-colors text-sm">
            구매하기
          </button>
        </div>
      </div>
    </div>
                `}
          </div>
        </div>
      </div>
    </div>
  `},w=`shopping_cart`,T=`shopping_cart_selected`;function E(e,t){try{localStorage.setItem(w,JSON.stringify(e)),localStorage.setItem(T,JSON.stringify(t))}catch(e){console.warn(`Failed to save cart to localStorage:`,e)}}function D(){try{let e=localStorage.getItem(w),t=localStorage.getItem(T);return{cart:e?JSON.parse(e):[],selectedCartItems:t?JSON.parse(t):[]}}catch(e){return console.warn(`Failed to load cart from localStorage:`,e),{cart:[],selectedCartItems:[]}}}function O(e){let t=e.cart.reduce((e,t)=>{let n=e.find(e=>e.productId===t.productId);return n?n.count++:e.push({...t,count:1}),e},[]),n=t.reduce((e,t)=>e+Number(t.lprice)*t.count,0),r=document.querySelector(`.text-xl.font-bold.text-blue-600`);r&&(r.textContent=`${n.toLocaleString()}원`)}function k(e){let t=document.querySelector(`#cart-icon-btn span`),n=[...new Set(e.cart.map(e=>e.productId))].length;if(n>0)if(t)t.textContent=n;else{let e=document.querySelector(`#cart-icon-btn`);if(e){let t=document.createElement(`span`);t.className=`absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center`,t.textContent=n,e.appendChild(t)}}else t&&t.remove()}function A(e,t){P&&(document.removeEventListener(`click`,P),P=null),F&&(document.removeEventListener(`keydown`,F),F=null);let n=document.querySelector(`.cart-modal`);n&&n.remove();let r=C({cart:e.cart,selectedCartItems:e.selectedCartItems});document.querySelector(`#modal-root`).insertAdjacentHTML(`beforeend`,r),I(e,{renderCartModal:A,showToast:t})}function j({modalClickHandler:e,modalKeydownHandler:t}){let n=document.querySelector(`.cart-modal`);n&&(n.remove(),e&&document.removeEventListener(`click`,e),t&&document.removeEventListener(`keydown`,t))}function M(e,t,{renderCartModal:n,showToast:r}){let i=t.cart.findIndex(t=>t.productId===e);i!==-1&&(t.cart.splice(i,1),t.selectedCartItems=t.selectedCartItems.filter(t=>t!==e),E(t.cart,t.selectedCartItems),k(t),document.querySelector(`.cart-modal`)&&n(t,r),r({type:`delete`}))}function te(e,t){let n=t.cart.find(t=>t.productId===e);if(n){t.cart.push({...n}),E(t.cart,t.selectedCartItems);let r=document.querySelector(`.quantity-input[data-product-id="${e}"]`);if(r){let e=parseInt(r.value)+1;r.value=e;let i=r.closest(`.cart-item`),a=i.querySelector(`.text-right .text-sm.font-medium`);if(a){let t=parseInt(n.lprice);a.textContent=`${(t*e).toLocaleString()}원`}O(t),k(t)}}}function ne(e,t,{renderCartModal:n,showToast:r}){let i=t.cart.findIndex(t=>t.productId===e);if(i!==-1){let a=t.cart[i];t.cart.splice(i,1),E(t.cart,t.selectedCartItems);let o=document.querySelector(`.quantity-input[data-product-id="${e}"]`);if(o){let e=parseInt(o.value)-1;if(e>0){o.value=e;let n=o.closest(`.cart-item`),r=n.querySelector(`.text-right .text-sm.font-medium`);if(r){let t=parseInt(a.lprice);r.textContent=`${(t*e).toLocaleString()}원`}O(t),k(t)}else n(t,r)}}}function re(e,t,{renderCartModal:n,showToast:r}){let i=t.selectedCartItems.indexOf(e);i===-1?t.selectedCartItems.push(e):t.selectedCartItems.splice(i,1),E(t.cart,t.selectedCartItems),document.querySelector(`.cart-modal`)&&n(t,r)}function N(e,{renderCartModal:t,showToast:n}){if(document.querySelector(`.cart-modal`))return;let r=C({cart:e.cart,selectedCartItems:e.selectedCartItems});document.querySelector(`#modal-root`).insertAdjacentHTML(`beforeend`,r),I(e,{renderCartModal:t,showToast:n})}let P=null,F=null;function I(e,{renderCartModal:t,showToast:n}){let r=document.querySelector(`.cart-modal`);r&&(P&&document.removeEventListener(`click`,P),F&&document.removeEventListener(`keydown`,F),P=r=>{if(r.target.matches(`.cart-item-checkbox`)){let i=r.target.dataset.productId;re(i,e,{renderCartModal:t,showToast:n});return}if(r.target.matches(`#cart-modal-select-all-checkbox`)){let r=[...new Set(e.cart.map(e=>e.productId))],i=r.every(t=>e.selectedCartItems.includes(t));i?e.selectedCartItems=[]:e.selectedCartItems=r,E(e.cart,e.selectedCartItems),t(e,n);return}if(r.target.matches(`.quantity-increase-btn`)||r.target.closest(`.quantity-increase-btn`)){let t=r.target.matches(`.quantity-increase-btn`)?r.target:r.target.closest(`.quantity-increase-btn`),n=t.dataset.productId;te(n,e);return}if(r.target.matches(`.quantity-decrease-btn`)||r.target.closest(`.quantity-decrease-btn`)){let i=r.target.matches(`.quantity-decrease-btn`)?r.target:r.target.closest(`.quantity-decrease-btn`),a=i.dataset.productId;ne(a,e,{renderCartModal:t,showToast:n});return}if(r.target.matches(`.cart-item-remove-btn`)){let i=r.target.dataset.productId;M(i,e,{renderCartModal:t,showToast:n});return}if(r.target.matches(`#cart-modal-remove-selected-btn`)){let r=[...e.selectedCartItems];r.forEach(t=>{e.cart=e.cart.filter(e=>e.productId!==t)}),e.selectedCartItems=[],E(e.cart,e.selectedCartItems),k(e),t(e,n);return}if(r.target.matches(`#cart-modal-clear-cart-btn`)){e.cart=[],e.selectedCartItems=[],E(e.cart,e.selectedCartItems),k(e),t(e,n);return}let i=document.querySelectorAll(`.modal-close-btn`);for(let e of i)if(r.target===e||e.contains(r.target)){j({modalClickHandler:P,modalKeydownHandler:F});return}r.target.matches(`.cart-modal-overlay`)&&j({modalClickHandler:P,modalKeydownHandler:F})},F=e=>{e.key===`Escape`&&j({modalClickHandler:P,modalKeydownHandler:F})},document.addEventListener(`click`,P),document.addEventListener(`keydown`,F))}var L=class{constructor(){this.routes=new Map,this.currentRoute=null,this.basePath=`/front_6th_chapter1-1`,window.addEventListener(`popstate`,()=>{this.handleRouteChange(this.getRelativePath(location.pathname),!1)})}getRelativePath(e){if(this.basePath&&e.startsWith(this.basePath)){let t=e.slice(this.basePath.length);return t===``||t===`/`?`/`:t}return e}getAbsolutePath(e){return this.basePath+e}addRoute(e,t){this.routes.set(e,t)}navigate(e,t=!0){if(t){let t=this.getAbsolutePath(e);history.pushState(null,``,t)}this.handleRouteChange(e)}handleRouteChange(e,t=!0){if(this.currentRoute=e,this.routes.has(e)){this.routes.get(e)();return}for(let[t,n]of this.routes){let r=this.matchRoute(t,e);if(r){n(r.params);return}}if(this.routes.has(`404`)){if(t){let t=this.getAbsolutePath(e);history.pushState(null,``,t)}this.routes.get(`404`)();return}console.warn(`Route not found:`,e),this.navigate(`/`,!1)}matchRoute(e,t){let n=e.split(`/`),r=t.split(`/`);if(n.length!==r.length)return null;let i={};for(let e=0;e<n.length;e++){let t=n[e],a=r[e];if(t.startsWith(`:`)){let e=t.slice(1);i[e]=a}else if(t!==a)return null}return{params:i}}getCurrentPath(){return this.currentRoute||this.getRelativePath(location.pathname)}};const R=new L;function z(e){let t=new URL(window.location),n=[`limit`,`page`,`sort`,`search`,`category1`,`category2`];n.forEach(e=>t.searchParams.delete(e)),Object.entries(e).forEach(([e,n])=>{n!=null&&n!==``&&t.searchParams.set(e,n)}),window.history.pushState({},``,t.toString())}function B(){let e=window.location.pathname,t=e.match(/^\/search=(.+)$/);return t?decodeURIComponent(t[1]):``}function V(){let e=B();e?G.search=e:window.location.pathname===`/`&&(G.search=``);let t=new URLSearchParams(window.location.search),n=t.get(`sort`);n&&[`price_asc`,`price_desc`,`name_asc`,`name_desc`].includes(n)&&(G.sort=n);let r=t.get(`limit`);r&&[`10`,`20`,`50`,`100`].includes(r)&&(G.productCount=parseInt(r));let i=t.get(`page`);i&&parseInt(i)>0&&(G.page=parseInt(i));let a=t.get(`category1`);a&&(G.selectedCategory1=a);let o=t.get(`category2`);o&&(G.selectedCategory2=o);let s=t.get(`search`);s&&!e&&(G.search=s)}const H=()=>r(async()=>{let{worker:e}=await import(`./browser-CcyfQrG1.js`);return{worker:e}},[]).then(({worker:e})=>{let t=`/front_6th_chapter1-1`,n=`${t}/mockServiceWorker.js`;return e.start({serviceWorker:{url:n},onUnhandledRequest:`bypass`})}),{cart:U,selectedCartItems:W}=D();let G={products:[],total:0,loading:!1,categories:{},productCount:20,page:1,hasNext:!1,hasPrev:!1,sort:`price_asc`,cart:U,selectedCartItems:W,search:``,selectedCategory1:null,selectedCategory2:null};function K(){document.body.querySelector(`#root`).innerHTML=b(G),he()}async function q(e){let t=G.products.find(t=>t.productId===e);if(!t)try{t=await a(e)}catch(e){console.warn(`Product not found, redirecting to home, error: `,e),R.navigate(`/`);return}document.body.querySelector(`#root`).innerHTML=x({product:t,cart:G.cart,relatedProducts:[]});let n=await s(t,20);document.body.querySelector(`#root`).innerHTML=x({product:t,cart:G.cart,relatedProducts:n})}async function ie(){V(),G.loading=!0,J(),K();let[{products:e,pagination:{page:t,total:n,hasNext:r,hasPrev:a}},s]=await Promise.all([i({limit:G.productCount,sort:G.sort,search:G.search,category1:G.selectedCategory1,category2:G.selectedCategory2,page:G.page}),o()]);if(G.total=n,G.products=e,G.page=t,G.hasNext=r,G.hasPrev=a,G.selectedCategory1){let e=s[G.selectedCategory1];G.categories=e||{}}else G.categories=s;G.loading=!1,R.handleRouteChange(R.getRelativePath(location.pathname),!1)}function J(){let e=()=>{G.products.length>0&&(G.loading=!1),K()};R.addRoute(`/`,e),R.basePath&&R.addRoute(R.basePath+`/`,e),R.addRoute(`/search=:searchTerm`,e=>{let t=decodeURIComponent(e.searchTerm);de(t)}),R.addRoute(`/product/:productId`,async e=>{await q(e.productId)}),R.addRoute(`404`,()=>{document.body.querySelector(`#root`).innerHTML=S({cart:G.cart})})}function Y(){document.addEventListener(`change`,async e=>{e.target.matches(`#limit-select`)&&fe(Number(e.target.value)),e.target.matches(`#sort-select`)&&pe(e.target.value)}),document.addEventListener(`click`,e=>{if(e.target.matches(`.add-to-cart-btn`)){let t=e.target.dataset.productId,n=document.querySelector(`#quantity-input`),r=n&&parseInt(n.value)||1;Z(t,r),Q({type:`add`})}if(e.target.matches(`.category1-filter-btn`)){let t=e.target.dataset.category1;oe(t)}if(e.target.matches(`.category2-filter-btn`)){let t=e.target.dataset.category2;se(t)}if((e.target.matches(`.category-reset-btn`)||e.target.matches(`.breadcrumb-reset-btn`))&&ce(),e.target.matches(`.breadcrumb-category1-btn`)){let t=e.target.dataset.category1;le(t)}let t=document.querySelector(`#cart-icon-btn`);t&&(e.target===t||t.contains(e.target))&&N(G,{renderCartModal:A,showToast:Q})}),document.addEventListener(`keydown`,e=>{if(e.key===`Enter`&&e.target.matches(`#search-input`)){let t=e.target.value;ue(t)}})}function X(e){R.navigate(`/product/${e}`)}function ae(){document.addEventListener(`click`,e=>{if(e.target.matches(`.add-to-cart-btn`)||e.target.closest(`.add-to-cart-btn`))return;if(e.target.matches(`#add-to-cart-btn`)){let t=e.target.dataset.productId,n=document.querySelector(`#quantity-input`),r=n&&parseInt(n.value)||1;Z(t,r),Q({type:`add`});return}let t=e.target.closest(`.product-card`);if(t){let e=t.dataset.productId;X(e);return}let n=e.target.closest(`.related-product-card`);if(n){let e=n.dataset.productId;X(e);return}if(e.target.matches(`.breadcrumb-home`)||e.target.matches(`.go-to-product-list`)){R.navigate(`/`);return}if(e.target.matches(`a[href="/"]`)){e.preventDefault(),R.navigate(`/`);return}if(e.target.matches(`#quantity-decrease`)||e.target.closest(`#quantity-decrease`)){let e=document.querySelector(`#quantity-input`);if(e){let t=parseInt(e.value);t>1&&(e.value=t-1)}return}if(e.target.matches(`#quantity-increase`)||e.target.closest(`#quantity-increase`)){let e=document.querySelector(`#quantity-input`);if(e){let t=parseInt(e.value),n=parseInt(e.max)||100;t<n&&(e.value=t+1)}return}})}async function oe(e){G.selectedCategory1=e,G.selectedCategory2=null,G.page=1,z({limit:G.productCount,page:G.page,sort:G.sort,search:G.search,category1:G.selectedCategory1,category2:G.selectedCategory2}),G.loading=!0;let[{products:t,pagination:n},r]=await Promise.all([i({limit:G.productCount,sort:G.sort,search:G.search,category1:G.selectedCategory1,category2:G.selectedCategory2,page:G.page}),o()]),a=r[e];G.categories=a,G.products=t,G.page=n.page,G.hasNext=n.hasNext,G.hasPrev=n.hasPrev,G.loading=!1,G.total=n.total,K()}async function se(e){G.selectedCategory2=e,G.page=1,z({limit:G.productCount,page:G.page,sort:G.sort,search:G.search,category1:G.selectedCategory1,category2:G.selectedCategory2}),G.loading=!0;let{products:t,pagination:{total:n,page:r,hasNext:a,hasPrev:o}}=await i({limit:G.productCount,sort:G.sort,search:G.search,category1:G.selectedCategory1,category2:e,page:G.page});G.products=t,G.total=n,G.page=r,G.hasNext=a,G.hasPrev=o,G.loading=!1,K()}async function ce(){G.selectedCategory1=null,G.selectedCategory2=null,G.page=1,z({limit:G.productCount,page:G.page,sort:G.sort,search:G.search,category1:G.selectedCategory1,category2:G.selectedCategory2}),G.loading=!0;let[{products:e,pagination:t},n]=await Promise.all([i({limit:G.productCount,sort:G.sort,search:G.search,page:G.page}),o()]);G.products=e,G.categories=n,G.page=t.page,G.hasNext=t.hasNext,G.hasPrev=t.hasPrev,G.total=t.total,G.loading=!1,K()}async function le(e){G.selectedCategory1=e,G.selectedCategory2=null,G.page=1,z({limit:G.productCount,page:G.page,sort:G.sort,search:G.search,category1:G.selectedCategory1,category2:G.selectedCategory2}),G.loading=!0;let[{products:t,pagination:n},r]=await Promise.all([i({limit:G.productCount,sort:G.sort,search:G.search,category1:G.selectedCategory1,page:G.page}),o()]),a=r[e];G.categories=a,G.products=t,G.page=n.page,G.hasNext=n.hasNext,G.hasPrev=n.hasPrev,G.loading=!1,G.total=n.total,K()}async function ue(e){G.search=e,G.page=1,z({limit:G.productCount,page:G.page,sort:G.sort,search:G.search,category1:G.selectedCategory1,category2:G.selectedCategory2}),G.loading=!0;let{products:t,pagination:n}=await i({limit:G.productCount,sort:G.sort,search:G.search,category1:G.selectedCategory1,category2:G.selectedCategory2,page:G.page});G.products=t,G.page=n.page,G.hasNext=n.hasNext,G.hasPrev=n.hasPrev,G.loading=!1,G.total=n.total,K()}async function de(e){G.search=e,G.page=1,G.loading=!0,K();let{products:t,pagination:n}=await i({limit:G.productCount,sort:G.sort,search:G.search,page:G.page});G.products=t,G.page=n.page,G.hasNext=n.hasNext,G.hasPrev=n.hasPrev,G.loading=!1,G.total=n.total,K()}function Z(e,t=1){let n=G.products.find(t=>t.productId===e);if(n){for(let e=0;e<t;e++)G.cart.push(n);E(G.cart,G.selectedCartItems)}let r=R.getCurrentPath();r.startsWith(`/product/`)?R.handleRouteChange(r,!1):K()}function Q({type:e=`add`}){var t;let n={add:{bg:`bg-green-600`,message:`장바구니에 추가되었습니다`,icon:`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>`},delete:{bg:`bg-blue-600`,message:`선택한 상품들이 삭제되었습니다`,icon:`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>`},error:{bg:`bg-red-600`,message:`오류가 발생했습니다.`,icon:`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>`}},{bg:r,message:i,icon:a}=n[e],o=`
    <div class="toast-container fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div class="${r} text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm">
        <div class="flex-shrink-0">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            ${a}
          </svg>
        </div>
        <p class="text-sm font-medium">${i}</p>
        <button class="toast-close-btn flex-shrink-0 ml-2 text-white hover:text-gray-200">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
  `,s=document.getElementById(`root`)||document.body;s.insertAdjacentHTML(`beforeend`,o);let c=document.querySelector(`.toast-container:last-child`);setTimeout(()=>{c?.remove()},3e3),c==null||(t=c.querySelector(`.toast-close-btn`))==null||t.addEventListener(`click`,()=>{c.remove()})}async function fe(e){G.productCount=e,G.page=1,G.loading=!0,z({limit:G.productCount,page:G.page,sort:G.sort,search:G.search,category1:G.selectedCategory1,category2:G.selectedCategory2}),K();let{products:t,pagination:{total:n}}=await i({limit:G.productCount,sort:G.sort,search:G.search,category1:G.selectedCategory1,category2:G.selectedCategory2,page:G.page});G.products=t,G.total=n,G.loading=!1,K()}async function pe(e){G.sort=e,G.page=1,G.loading=!0,z({limit:G.productCount,page:G.page,sort:G.sort,search:G.search,category1:G.selectedCategory1,category2:G.selectedCategory2});let{products:t,pagination:{total:n}}=await i({limit:G.productCount,sort:e,search:G.search,category1:G.selectedCategory1,category2:G.selectedCategory2,page:G.page});G.products=t,G.total=n,G.loading=!1,K()}let $=null;async function me(){if(G.loading||!G.hasNext)return;G.loading=!0,K();let e=await i({limit:G.productCount,page:G.page+1,sort:G.sort,search:G.search,category1:G.selectedCategory1,category2:G.selectedCategory2});G.products=[...G.products,...e.products],G.hasNext=e.pagination.hasNext,G.hasPrev=e.pagination.hasPrev,G.page=e.pagination.page,G.loading=!1,z({limit:G.productCount,page:G.page,sort:G.sort,search:G.search,category1:G.selectedCategory1,category2:G.selectedCategory2}),K()}function he(){$&&$.disconnect();let e=e=>{e.forEach(e=>{e.isIntersecting&&G.hasNext&&!G.loading&&(console.log(`무한스크롤 트리거됨`,G.page),me())})};$=new IntersectionObserver(e);let t=document.getElementById(`scroll-sentinel`);t&&$.observe(t)}function ge(){window.addEventListener(`popstate`,()=>{R.handleRouteChange(location.pathname,!1)})}H().then(()=>{ie(),Y(),ae(),ge()});