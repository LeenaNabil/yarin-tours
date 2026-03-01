
let trips = JSON.parse(localStorage.getItem('yarinTrips')) || [
    { id: 1, name: "رحلة جورجيا الساحرة", destination: "جورجيا", shortDescription: "بلد الجبال الخضراء والطبيعة الخلابة، حيث تلتقي القوقاز بالبحر الأسود.", duration: "7 أيام", price: 500, seats: 15, seatsLeft: 8, image: "images/georgia.jpg", description: "استمتع بجمال الطبيعة الخلابة في جورجيا، وزيارة أجمل الأماكن السياحية.", startDate: "2025-06-01", endDate: "2025-06-07", path: ["اليوم الأول: الوصول والاستقبال في تبليسي", "اليوم الثاني: جولة في المدينة القديمة", "اليوم الثالث: رحلة إلى كازبيجي", "اليوم الرابع: زيارة باتومي على البحر الأسود", "اليوم الخامس: حديقة باتومي النباتية", "اليوم السادس: العودة إلى تبليسي", "اليوم السابع: مغادرة"] },
    { id: 2, name: "سحر اسطنبول", destination: "تركيا", shortDescription: "مدينة الأحلام حيث الشرق يلتقي بالغرب، تاريخ عريق ومآذن تروي قصصًا لا تُنسى.", duration: "5 أيام", price: 400, seats: 20, seatsLeft: 12, image: "images/istanbul.jpg", description: "رحلة إلى مدينة البوسفور الساحرة، تجمع بين التاريخ والثقافة والتسوق.", startDate: "2025-07-10", endDate: "2025-07-14", path: ["اليوم الأول: الوصول والاستقبال", "اليوم الثاني: آيا صوفيا والمسجد الأزرق", "اليوم الثالث: البازار الكبير ورحلة البوسفور", "اليوم الرابع: قصر توب كابي", "اليوم الخامس: مغادرة"] },
    { id: 3, name: "ماليزيا المدهشة", destination: "ماليزيا", shortDescription: "بلد التنوع الثقافي والطبيعي، غابات مطيرة وشواطئ استوائية وناطحات سحاب.", duration: "10 أيام", price: 800, seats: 10, seatsLeft: 4, image: "images/malaysia.jpg", description: "استكشف كوالالمبور وجزر لنكاوي الرائعة مع عائلتك.", startDate: "2025-08-05", endDate: "2025-08-14", path: ["اليوم الأول: الوصول إلى كوالالمبور", "اليوم الثاني: برج بتروناس وكهوف باتو", "اليوم الثالث: السفر إلى لنكاوي", "اليوم الرابع: رحلة بحرية", "اليوم الخامس: جزر لنكاوي", "اليوم السادس: العودة إلى كوالالمبور", "اليوم السابع: تسوق حر", "اليوم الثامن: حديقة الطيور", "اليوم التاسع: استجمام", "اليوم العاشر: مغادرة"] },
    { id: 4, name: "إيطاليا الكلاسيكية", destination: "إيطاليا", shortDescription: "مهد النهضة، حيث الفن والتاريخ والطعام الشهي في كل زاوية.", duration: "8 أيام", price: 950, seats: 12, seatsLeft: 5, image: "images/italy.jpg", description: "رحلة عبر التاريخ في روما وفلورنسا والبندقية.", startDate: "2025-09-01", endDate: "2025-09-08", path: ["اليوم الأول: الوصول إلى روما", "اليوم الثاني: الكولوسيوم والمنتدى الروماني", "اليوم الثالث: الفاتيكان", "اليوم الرابع: السفر إلى فلورنسا", "اليوم الخامس: فلورنسا التاريخية", "اليوم السادس: البندقية", "اليوم السابع: جندول في البندقية", "اليوم الثامن: مغادرة"] },
    { id: 5, name: "دبي الفاخرة", destination: "الإمارات", shortDescription: "مدينة المستقبل، حيث الفخامة والابتكار وسط الصحراء الذهبية.", duration: "6 أيام", price: 700, seats: 18, seatsLeft: 9, image: "images/dubai.jpg", description: "استمتع بأجواء الفخامة والتسوق في دبي، مع زيارة برج خليفة ودبي مول.", startDate: "2025-10-01", endDate: "2025-10-06", path: ["اليوم الأول: الوصول إلى دبي", "اليوم الثاني: برج خليفة ودبي مول", "اليوم الثالث: سفاري في الصحراء", "اليوم الرابع: دبي مارينا", "اليوم الخامس: يوم حر للتسوق", "اليوم السادس: مغادرة"] },
    { id: 6, name: "الأردن العريقة", destination: "الأردن", shortDescription: "أرض الحضارات، حيث البتراء الوردية ووادي القمر وصحراء لا متناهية.", duration: "5 أيام", price: 450, seats: 22, seatsLeft: 15, image: "images/jordan.jpg", description: "رحلة إلى البتراء والبحر الميت والعقبة، استمتع بالتاريخ والطبيعة.", startDate: "2025-11-01", endDate: "2025-11-05", path: ["اليوم الأول: الوصول إلى عمان", "اليوم الثاني: جرش والبتراء", "اليوم الثالث: وادي رم", "اليوم الرابع: البحر الميت والعقبة", "اليوم الخامس: مغادرة"] },
    { id: 7, name: "تايلاند الساحرة", destination: "تايلاند", shortDescription: "أرض الابتسامات، جزر استوائية ومعابد ذهبية ومأكولات لا تُقاوم.", duration: "9 أيام", price: 850, seats: 14, seatsLeft: 6, image: "images/thailand.jpg", description: "استمتع بشواطئ تايلاند الخلابة وثقافتها الغنية في بانكوك وبوكيت.", startDate: "2025-12-01", endDate: "2025-12-09", path: ["اليوم الأول: الوصول إلى بانكوك", "اليوم الثاني: القصور والمعابد", "اليوم الثالث: السفر إلى بوكيت", "اليوم الرابع: جزر بوكيت", "اليوم الخامس: رحلة بحرية", "اليوم السادس: استجمام", "اليوم السابع: العودة إلى بانكوك", "اليوم الثامن: تسوق", "اليوم التاسع: مغادرة"] },
    { id: 8, name: "المغرب الساحر", destination: "المغرب", shortDescription: "بلد الألوان والبهارات، حيث الصحراء والأطلس والمدن العتيقة.", duration: "7 أيام", price: 600, seats: 16, seatsLeft: 10, image: "images/morocco.jpg", description: "اكتشف سحر مراكش وفاس والصحراء المغربية.", startDate: "2026-01-10", endDate: "2026-01-16", path: ["اليوم الأول: الوصول إلى مراكش", "اليوم الثاني: جامع الفنا والقصور", "اليوم الثالث: رحلة إلى جبال الأطلس", "اليوم الرابع: الصحراء المغربية", "اليوم الخامس: فاس", "اليوم السادس: العودة إلى مراكش", "اليوم السابع: مغادرة"] }
];

let packages = JSON.parse(localStorage.getItem('yarinPackages')) || [
    {
        id: 101,
        name: "بكج جورجيا المميز",
        destination: "جورجيا",
        shortDescription: "استمتع بأجمل معالم جورجيا في بكج متكامل يشمل الطيران والفنادق والجولات.",
        duration: "7 أيام / 6 ليال",
        price: 850,
        image: "images/package-georgia.jpg",
        description: "بكج شامل لقضاء عطلة لا تنسى في جورجيا، يشمل زيارة تبليسي، كازبيجي، باتومي.",
        features: [
            "تذاكر طيران ذهاب وعودة",
            "إقامة في فنادق 4 نجوم",
            "وجبات فطور يومي",
            "جولات سياحية مع مرشد",
            "المواصلات الداخلية",
            "دخول المتاحف والمواقع السياحية"
        ],
        startDate: "2025-06-01",
        endDate: "2025-06-07",
        seats: 20,
        seatsLeft: 15
    },
    {
        id: 102,
        name: "بكج اسطنبول الرومانسي",
        destination: "تركيا",
        shortDescription: "بكج مثالي للأزواج في مدينة البوسفور الساحرة مع عشاء رومانسي.",
        duration: "5 أيام / 4 ليال",
        price: 650,
        image: "images/package-istanbul.jpg",
        description: "استمتع بأجواء اسطنبول الرومانسية مع جولات خاصة وأجمل المطاعم.",
        features: [
            "تذاكر طيران",
            "فندق 5 نجوم مع إطلالة بحرية",
            "عشاء رومانسي على البوسفور",
            "جولة في آيا صوفيا وقصر توب كابي",
            "رحلة تسوق في البازار الكبير"
        ],
        startDate: "2025-07-10",
        endDate: "2025-07-14",
        seats: 15,
        seatsLeft: 8
    },
    {
        id: 103,
        name: "بكج ماليزيا العائلي",
        destination: "ماليزيا",
        shortDescription: "بكج عائلي ممتع في كوالالمبور ولنكاوي مع أنشطة للأطفال.",
        duration: "10 أيام / 9 ليال",
        price: 1200,
        image: "images/package-malaysia.jpg",
        description: "استمتعوا مع عائلتكم بأجمل المنتجعات والجزر الماليزية.",
        features: [
            "تذاكر طيران",
            "فنادق عائلية",
            "تذاكر دخول حديقة الطيور",
            "رحلة بحرية في لنكاوي",
            "جولة في برج بتروناس",
            "جميع الوجبات"
        ],
        startDate: "2025-08-05",
        endDate: "2025-08-14",
        seats: 25,
        seatsLeft: 20
    }
];


function displayDestinations() {
    const container = document.getElementById('destinations-container');
    if (!container) return;
    const tripsToShow = trips.slice(0, 8);
    container.innerHTML = tripsToShow.map(trip => createSimpleTripCard(trip)).join('');
}

function displayAllTrips() {
    const container = document.getElementById('all-trips-container');
    if (!container) return;
    const params = new URLSearchParams(window.location.search);
    const destFilter = params.get('destination');
    let filteredTrips = trips;
    if (destFilter) filteredTrips = trips.filter(t => t.destination === destFilter);
    container.innerHTML = filteredTrips.map(trip => createFullTripCard(trip)).join('');
}

function createSimpleTripCard(trip) {
    return `
        <div class="trip-card" data-id="${trip.id}">
            <img src="${trip.image}" alt="${trip.name}">
            <div class="info">
                <h3>${trip.name}</h3>
                <p class="short-description">${trip.shortDescription || ''}</p>
                <button onclick="viewTripDetails(${trip.id})">عرض التفاصيل</button>
            </div>
        </div>
    `;
}

function createFullTripCard(trip) {
    return `
        <div class="trip-card" data-id="${trip.id}">
            <img src="${trip.image}" alt="${trip.name}">
            <div class="info">
                <h3>${trip.name}</h3>
                <p class="short-description">${trip.shortDescription || ''}</p>
                <p>المدة: ${trip.duration}</p>
                <p class="price">$${trip.price}</p>
                <p>مقاعد متبقية: <span class="seats-left-${trip.id}">${trip.seatsLeft}</span></p>
                <button onclick="viewTripDetails(${trip.id})">عرض التفاصيل</button>
            </div>
        </div>
    `;
}

function viewTripDetails(id) {
    window.location.href = `trip-details.html?id=${id}`;
}

function displayTripDetails() {
    const params = new URLSearchParams(window.location.search);
    const tripId = parseInt(params.get('id'));
    const trip = trips.find(t => t.id === tripId);
    const container = document.getElementById('trip-details');
    if (!trip) {
        container.innerHTML = '<p>الرحلة غير موجودة</p>';
        return;
    }
    const timelineHTML = trip.path.map((day, index) => `
        <div class="timeline-day">
            <div class="day-title">اليوم ${index + 1}</div>
            <div class="day-desc">${day}</div>
        </div>
    `).join('');
    container.innerHTML = `
        <h2>${trip.name}</h2>
        <img src="${trip.image}" alt="${trip.name}">
        <div class="details-info">
            <p><strong>الوصف:</strong> ${trip.description}</p>
            <p><strong>الوجهة:</strong> ${trip.destination}</p>
            <p><strong>المدة:</strong> ${trip.duration}</p>
            <p><strong>السعر:</strong> $${trip.price}</p>
            <p><strong>المقاعد المتبقية:</strong> <span id="seats-left-detail">${trip.seatsLeft}</span></p>
            <p><strong>تاريخ الانطلاق:</strong> ${trip.startDate}</p>
            <p><strong>تاريخ العودة:</strong> ${trip.endDate}</p>
            <p><strong>مسار الرحلة:</strong></p>
            <div class="trip-timeline">${timelineHTML}</div>
            <div class="buttons">
                <button class="btn-whatsapp" onclick="whatsappInquiry(${trip.id})"><i class="fab fa-whatsapp"></i> استفسار واتساب</button>
                <button class="btn-book" onclick="openBookingModal(${trip.id})"><i class="fas fa-calendar-check"></i> احجز الآن</button>
            </div>
        </div>
    `;
}


function displayFeaturedPackages() {
    const container = document.getElementById('featured-packages-container');
    if (!container) return;
    const featured = packages.slice(0, 4);
    container.innerHTML = featured.map(pkg => createPackageCard(pkg)).join('');
}

function displayAllPackages() {
    const container = document.getElementById('all-packages-container');
    if (!container) return;
    container.innerHTML = packages.map(pkg => createPackageCard(pkg)).join('');
}

function createPackageCard(pkg) {
    return `
        <div class="package-card" data-id="${pkg.id}">
            <img src="${pkg.image}" alt="${pkg.name}">
            <div class="info">
                <h3>${pkg.name}</h3>
                <p class="short-description">${pkg.shortDescription}</p>
                <p class="duration">${pkg.duration}</p>
                <p class="price">$${pkg.price}</p>
                <ul class="features">
                    ${pkg.features.slice(0, 3).map(f => `<li><i class="fas fa-check-circle"></i> ${f}</li>`).join('')}
                    ${pkg.features.length > 3 ? '<li>... والمزيد</li>' : ''}
                </ul>
                <p>مقاعد متبقية: <span class="seats-left-${pkg.id}">${pkg.seatsLeft}</span></p>
                <button onclick="viewPackageDetails(${pkg.id})">عرض التفاصيل</button>
            </div>
        </div>
    `;
}

function viewPackageDetails(id) {
    window.location.href = `package-details.html?id=${id}`;
}

function displayPackageDetails() {
    const params = new URLSearchParams(window.location.search);
    const pkgId = parseInt(params.get('id'));
    const pkg = packages.find(p => p.id === pkgId);
    const container = document.getElementById('package-details');
    if (!pkg) {
        container.innerHTML = '<p>البكج غير موجود</p>';
        return;
    }

    const featuresList = pkg.features.map(f => `<li><i class="fas fa-check-circle"></i> ${f}</li>`).join('');

    container.innerHTML = `
        <h2>${pkg.name}</h2>
        <img src="${pkg.image}" alt="${pkg.name}">
        <div class="package-meta">
            <span class="meta-item"><i class="fas fa-calendar-alt"></i> ${pkg.duration}</span>
            <span class="meta-item"><i class="fas fa-users"></i> متبقي ${pkg.seatsLeft} مقعد</span>
        </div>
        <div class="details-info">
            <p><strong>الوصف:</strong> ${pkg.description}</p>
            <p><strong>الوجهة:</strong> ${pkg.destination}</p>
            <p><strong>تاريخ الانطلاق:</strong> ${pkg.startDate}</p>
            <p><strong>تاريخ العودة:</strong> ${pkg.endDate}</p>
            <p><strong>السعر الإجمالي:</strong> $${pkg.price} للشخص</p>
        </div>
        <div class="features-list">
            <h3>الخدمات المضمنة</h3>
            <ul>${featuresList}</ul>
        </div>
        <div class="buttons">
            <button class="btn-whatsapp" onclick="whatsappPackageInquiry(${pkg.id})"><i class="fab fa-whatsapp"></i> استفسار واتساب</button>
            <button class="btn-book" onclick="openPackageBookingModal(${pkg.id})"><i class="fas fa-calendar-check"></i> احجز الآن</button>
        </div>
    `;
}

function whatsappInquiry(tripId) {
    const trip = trips.find(t => t.id === tripId);
    const message = `أريد الاستفسار عن رحلة: ${trip.name}`;
    const phone = '966500000000';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}

function whatsappPackageInquiry(pkgId) {
    const pkg = packages.find(p => p.id === pkgId);
    const message = `أريد الاستفسار عن البكج السياحي: ${pkg.name}`;
    const phone = '966500000000';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}

let currentTripId = null;
let currentPackageId = null;

function openBookingModal(id) {
   
    const trip = trips.find(t => t.id === id);
    if (trip) {
        currentTripId = id;
        currentPackageId = null;
        const seatsSpan = document.querySelector('#seats-left span');
        if (seatsSpan) seatsSpan.textContent = trip.seatsLeft;
    } else {
        const pkg = packages.find(p => p.id === id);
        if (pkg) {
            currentPackageId = id;
            currentTripId = null;
            const seatsSpan = document.querySelector('#seats-left span');
            if (seatsSpan) seatsSpan.textContent = pkg.seatsLeft;
        }
    }
    const modal = document.getElementById('booking-modal');
    if (modal) modal.style.display = 'block';
}

function openPackageBookingModal(id) {
    currentPackageId = id;
    currentTripId = null;
    const pkg = packages.find(p => p.id === id);
    const modal = document.getElementById('booking-modal');
    if (!modal) return;
    modal.style.display = 'block';
    const seatsSpan = document.querySelector('#seats-left span');
    if (seatsSpan) seatsSpan.textContent = pkg.seatsLeft;
}

function closeModal() {
    const modal = document.getElementById('booking-modal');
    if (modal) modal.style.display = 'none';
}

function updateSeatsDisplay(id, type) {
    if (type === 'trip') {
        const trip = trips.find(t => t.id === id);
        document.querySelectorAll(`.seats-left-${id}`).forEach(span => span.textContent = trip.seatsLeft);
        const detailSeats = document.getElementById('seats-left-detail');
        if (detailSeats) detailSeats.textContent = trip.seatsLeft;
    } else if (type === 'package') {
        const pkg = packages.find(p => p.id === id);
        document.querySelectorAll(`.seats-left-${id}`).forEach(span => span.textContent = pkg.seatsLeft);
    }
}


function initSlider() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    const dots = document.querySelectorAll('.slider-dot');
    
    if (!slides.length) return;
    
    let current = 0;
    const total = slides.length;
    
    function goToSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        current = index;
    }
    
    function nextSlide() {
        let newIndex = current + 1;
        if (newIndex >= total) newIndex = 0;
        goToSlide(newIndex);
    }
    
    function prevSlide() {
        let newIndex = current - 1;
        if (newIndex < 0) newIndex = total - 1;
        goToSlide(newIndex);
    }
    
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });
    
    setInterval(nextSlide, 6000);
}

document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('destinations-container')) displayDestinations();
    if (document.getElementById('featured-packages-container')) displayFeaturedPackages();
    if (document.getElementById('all-packages-container')) displayAllPackages();
    if (document.getElementById('all-trips-container')) displayAllTrips();
    if (document.getElementById('trip-details')) displayTripDetails();
    if (document.getElementById('package-details')) displayPackageDetails();

    initSlider();

    
    const modal = document.getElementById('booking-modal');
    const closeBtn = document.querySelector('.close');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', e => { if (e.target == modal) closeModal(); });

    
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const passengers = parseInt(document.getElementById('passengers').value);
            
            if (currentTripId) {
                const trip = trips.find(t => t.id === currentTripId);
                if (passengers > trip.seatsLeft) {
                    alert('عذراً، عدد المقاعد المتبقية أقل من طلبك');
                    return;
                }
                trip.seatsLeft -= passengers;
                updateSeatsDisplay(trip.id, 'trip');
                alert(`تم حجز الرحلة بنجاح! سيتم توجيهك إلى بوابة الدفع (المبلغ: $${trip.price * passengers})`);
            } else if (currentPackageId) {
                const pkg = packages.find(p => p.id === currentPackageId);
                if (passengers > pkg.seatsLeft) {
                    alert('عذراً، عدد المقاعد المتبقية أقل من طلبك');
                    return;
                }
                pkg.seatsLeft -= passengers;
                updateSeatsDisplay(pkg.id, 'package');
                alert(`تم حجز البكج بنجاح! سيتم توجيهك إلى بوابة الدفع (المبلغ: $${pkg.price * passengers})`);
            }
            closeModal();
        });
    }
});