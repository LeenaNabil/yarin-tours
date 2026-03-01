
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


function saveTrips() { localStorage.setItem('yarinTrips', JSON.stringify(trips)); }
function savePackages() { localStorage.setItem('yarinPackages', JSON.stringify(packages)); }


function renderTrips() {
    const tbody = document.getElementById('trips-table-body');
    if (!tbody) return;
    tbody.innerHTML = '';
    trips.forEach((trip, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${trip.name}</td>
            <td>${trip.destination}</td>
            <td>${trip.duration}</td>
            <td>$${trip.price}</td>
            <td>${trip.seats}</td>
            <td>${trip.seatsLeft}</td>
            <td>
                <button class="action-btn edit-btn" onclick="editTrip(${trip.id})"><i class="fas fa-edit"></i></button>
                <button class="action-btn delete-btn" onclick="deleteTrip(${trip.id})"><i class="fas fa-trash"></i></button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function renderPackages() {
    const tbody = document.getElementById('packages-table-body');
    if (!tbody) return;
    tbody.innerHTML = '';
    packages.forEach((pkg, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${pkg.name}</td>
            <td>${pkg.destination}</td>
            <td>${pkg.duration}</td>
            <td>$${pkg.price}</td>
            <td>${pkg.seats}</td>
            <td>${pkg.seatsLeft}</td>
            <td>
                <button class="action-btn edit-btn" onclick="editPackage(${pkg.id})"><i class="fas fa-edit"></i></button>
                <button class="action-btn delete-btn" onclick="deletePackage(${pkg.id})"><i class="fas fa-trash"></i></button>
            </td>
        `;
        tbody.appendChild(row);
    });
}


function showSection(section) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    if (section === 'trips') {
        document.querySelector('.tab-btn').classList.add('active');
        document.getElementById('trips-section').style.display = 'block';
        document.getElementById('packages-section').style.display = 'none';
        renderTrips();
    } else {
        document.querySelectorAll('.tab-btn')[1].classList.add('active');
        document.getElementById('trips-section').style.display = 'none';
        document.getElementById('packages-section').style.display = 'block';
        renderPackages();
    }
}


function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

function isFileSizeValid(file, maxMB = 2) {
    return file.size <= maxMB * 1024 * 1024;
}

function setupImagePreview(fileInputId, previewContainerId) {
    const fileInput = document.getElementById(fileInputId);
    const previewContainer = document.getElementById(previewContainerId);
    if (!fileInput || !previewContainer) return;
    
    fileInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                previewContainer.innerHTML = `<img src="${e.target.result}" alt="معاينة">`;
                previewContainer.style.display = 'block';
            };
            reader.readAsDataURL(file);
        } else {
            previewContainer.innerHTML = '';
            previewContainer.style.display = 'none';
        }
    });
}

function addTripPathDay(value = '') {
    const container = document.getElementById('trip-path-container');
    if (!container) return;
    const div = document.createElement('div');
    div.className = 'path-day';
    div.innerHTML = `
        <input type="text" class="trip-path-input" placeholder="وصف اليوم" value="${value}">
        <button type="button" class="btn-remove-day" onclick="this.parentElement.remove()"><i class="fas fa-times"></i></button>
    `;
    container.appendChild(div);
}

function openAddTripModal() {
    document.getElementById('trip-modal-title').innerText = 'إضافة رحلة جديدة';
    document.getElementById('trip-id').value = '';
    document.getElementById('trip-name').value = '';
    document.getElementById('trip-destination').value = '';
    document.getElementById('trip-shortDescription').value = '';
    document.getElementById('trip-duration').value = '';
    document.getElementById('trip-price').value = '';
    document.getElementById('trip-seats').value = '';
    document.getElementById('trip-seatsLeft').value = '';
    
    
    document.getElementById('trip-image-url').value = '';
    document.getElementById('trip-image-file').value = '';
    document.getElementById('trip-image-preview').innerHTML = '';
    document.getElementById('trip-image-preview').style.display = 'none';
    
    document.getElementById('trip-description').value = '';
    document.getElementById('trip-startDate').value = '';
    document.getElementById('trip-endDate').value = '';
    document.getElementById('trip-path-container').innerHTML = '';
    addTripPathDay();
    addTripPathDay();
    addTripPathDay();
    document.getElementById('trip-modal').style.display = 'block';
}

function editTrip(id) {
    const trip = trips.find(t => t.id === id);
    if (!trip) return;
    document.getElementById('trip-modal-title').innerText = 'تعديل الرحلة';
    document.getElementById('trip-id').value = trip.id;
    document.getElementById('trip-name').value = trip.name;
    document.getElementById('trip-destination').value = trip.destination;
    document.getElementById('trip-shortDescription').value = trip.shortDescription || '';
    document.getElementById('trip-duration').value = trip.duration;
    document.getElementById('trip-price').value = trip.price;
    document.getElementById('trip-seats').value = trip.seats;
    document.getElementById('trip-seatsLeft').value = trip.seatsLeft;
    
   
    const preview = document.getElementById('trip-image-preview');
    if (trip.image) {
        preview.innerHTML = `<img src="${trip.image}" alt="معاينة">`;
        preview.style.display = 'block';
    } else {
        preview.innerHTML = '';
        preview.style.display = 'none';
    }
    
    document.getElementById('trip-image-url').value = (trip.image && !trip.image.startsWith('data:')) ? trip.image : '';
    document.getElementById('trip-image-file').value = '';
    
    document.getElementById('trip-description').value = trip.description;
    document.getElementById('trip-startDate').value = trip.startDate;
    document.getElementById('trip-endDate').value = trip.endDate;
    document.getElementById('trip-path-container').innerHTML = '';
    if (trip.path && trip.path.length) {
        trip.path.forEach(day => addTripPathDay(day));
    } else {
        addTripPathDay();
    }
    document.getElementById('trip-modal').style.display = 'block';
}

function deleteTrip(id) {
    if (confirm('هل أنت متأكد من حذف هذه الرحلة؟')) {
        trips = trips.filter(t => t.id !== id);
        saveTrips();
        renderTrips();
    }
}

function closeTripModal() {
    document.getElementById('trip-modal').style.display = 'none';
}


function addPackageFeature(value = '') {
    const container = document.getElementById('package-features-container');
    if (!container) return;
    const div = document.createElement('div');
    div.className = 'feature-item';
    div.innerHTML = `
        <input type="text" class="package-feature-input" placeholder="خدمة (مثال: تذاكر طيران)" value="${value}">
        <button type="button" class="btn-remove-day" onclick="this.parentElement.remove()"><i class="fas fa-times"></i></button>
    `;
    container.appendChild(div);
}

function openAddPackageModal() {
    document.getElementById('package-modal-title').innerText = 'إضافة بكج جديد';
    document.getElementById('package-id').value = '';
    document.getElementById('package-name').value = '';
    document.getElementById('package-destination').value = '';
    document.getElementById('package-shortDescription').value = '';
    document.getElementById('package-duration').value = '';
    document.getElementById('package-price').value = '';
    document.getElementById('package-seats').value = '';
    document.getElementById('package-seatsLeft').value = '';
    
    document.getElementById('package-image-url').value = '';
    document.getElementById('package-image-file').value = '';
    document.getElementById('package-image-preview').innerHTML = '';
    document.getElementById('package-image-preview').style.display = 'none';
    
    document.getElementById('package-description').value = '';
    document.getElementById('package-startDate').value = '';
    document.getElementById('package-endDate').value = '';
    document.getElementById('package-features-container').innerHTML = '';
    addPackageFeature();
    addPackageFeature();
    addPackageFeature();
    document.getElementById('package-modal').style.display = 'block';
}

function editPackage(id) {
    const pkg = packages.find(p => p.id === id);
    if (!pkg) return;
    document.getElementById('package-modal-title').innerText = 'تعديل البكج';
    document.getElementById('package-id').value = pkg.id;
    document.getElementById('package-name').value = pkg.name;
    document.getElementById('package-destination').value = pkg.destination;
    document.getElementById('package-shortDescription').value = pkg.shortDescription || '';
    document.getElementById('package-duration').value = pkg.duration;
    document.getElementById('package-price').value = pkg.price;
    document.getElementById('package-seats').value = pkg.seats;
    document.getElementById('package-seatsLeft').value = pkg.seatsLeft;
    
    const preview = document.getElementById('package-image-preview');
    if (pkg.image) {
        preview.innerHTML = `<img src="${pkg.image}" alt="معاينة">`;
        preview.style.display = 'block';
    } else {
        preview.innerHTML = '';
        preview.style.display = 'none';
    }
    
    document.getElementById('package-image-url').value = (pkg.image && !pkg.image.startsWith('data:')) ? pkg.image : '';
    document.getElementById('package-image-file').value = '';
    
    document.getElementById('package-description').value = pkg.description;
    document.getElementById('package-startDate').value = pkg.startDate;
    document.getElementById('package-endDate').value = pkg.endDate;
    document.getElementById('package-features-container').innerHTML = '';
    if (pkg.features && pkg.features.length) {
        pkg.features.forEach(f => addPackageFeature(f));
    } else {
        addPackageFeature();
    }
    document.getElementById('package-modal').style.display = 'block';
}

function deletePackage(id) {
    if (confirm('هل أنت متأكد من حذف هذا البكج؟')) {
        packages = packages.filter(p => p.id !== id);
        savePackages();
        renderPackages();
    }
}

function closePackageModal() {
    document.getElementById('package-modal').style.display = 'none';
}


document.getElementById('trip-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    try {
        const id = document.getElementById('trip-id').value;
        
       
        let imageValue = '';
        const fileInput = document.getElementById('trip-image-file');
        const urlInput = document.getElementById('trip-image-url');
        
        if (fileInput.files.length > 0) {
            const file = fileInput.files[0];
            if (!isFileSizeValid(file)) {
                alert('حجم الصورة كبير جداً. الحد الأقصى 2 ميجابايت.');
                return;
            }
            imageValue = await fileToBase64(file);
        } else if (urlInput.value.trim() !== '') {
            imageValue = urlInput.value.trim();
        } else {
          
            imageValue = '';
        }

        const pathInputs = document.querySelectorAll('.trip-path-input');
        const path = Array.from(pathInputs).map(input => input.value.trim()).filter(v => v !== '');

        const tripData = {
            id: id ? parseInt(id) : Date.now(),
            name: document.getElementById('trip-name').value.trim(),
            destination: document.getElementById('trip-destination').value.trim(),
            shortDescription: document.getElementById('trip-shortDescription').value.trim(),
            duration: document.getElementById('trip-duration').value.trim(),
            price: parseFloat(document.getElementById('trip-price').value),
            seats: parseInt(document.getElementById('trip-seats').value),
            seatsLeft: parseInt(document.getElementById('trip-seatsLeft').value),
            image: imageValue,
            description: document.getElementById('trip-description').value.trim(),
            startDate: document.getElementById('trip-startDate').value,
            endDate: document.getElementById('trip-endDate').value,
            path: path
        };

        if (id) {
            const index = trips.findIndex(t => t.id === parseInt(id));
            if (index !== -1) trips[index] = tripData;
        } else {
            trips.push(tripData);
        }

        saveTrips();
        renderTrips();
        closeTripModal();
    } catch (error) {
        console.error('خطأ في حفظ الرحلة:', error);
        alert('حدث خطأ أثناء حفظ الرحلة. يرجى المحاولة مرة أخرى.');
    }
});


document.getElementById('package-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    try {
        const id = document.getElementById('package-id').value;
        
        let imageValue = '';
        const fileInput = document.getElementById('package-image-file');
        const urlInput = document.getElementById('package-image-url');
        
        if (fileInput.files.length > 0) {
            const file = fileInput.files[0];
            if (!isFileSizeValid(file)) {
                alert('حجم الصورة كبير جداً. الحد الأقصى 2 ميجابايت.');
                return;
            }
            imageValue = await fileToBase64(file);
        } else if (urlInput.value.trim() !== '') {
            imageValue = urlInput.value.trim();
        } else {
            imageValue = '';
        }

        const featureInputs = document.querySelectorAll('.package-feature-input');
        const features = Array.from(featureInputs).map(input => input.value.trim()).filter(v => v !== '');

        const pkgData = {
            id: id ? parseInt(id) : Date.now(),
            name: document.getElementById('package-name').value.trim(),
            destination: document.getElementById('package-destination').value.trim(),
            shortDescription: document.getElementById('package-shortDescription').value.trim(),
            duration: document.getElementById('package-duration').value.trim(),
            price: parseFloat(document.getElementById('package-price').value),
            seats: parseInt(document.getElementById('package-seats').value),
            seatsLeft: parseInt(document.getElementById('package-seatsLeft').value),
            image: imageValue,
            description: document.getElementById('package-description').value.trim(),
            startDate: document.getElementById('package-startDate').value,
            endDate: document.getElementById('package-endDate').value,
            features: features
        };

        if (id) {
            const index = packages.findIndex(p => p.id === parseInt(id));
            if (index !== -1) packages[index] = pkgData;
        } else {
            packages.push(pkgData);
        }

        savePackages();
        renderPackages();
        closePackageModal();
    } catch (error) {
        console.error('خطأ في حفظ البكج:', error);
        alert('حدث خطأ أثناء حفظ البكج. يرجى المحاولة مرة أخرى.');
    }
});


window.addEventListener('click', function(e) {
    const tripModal = document.getElementById('trip-modal');
    const packageModal = document.getElementById('package-modal');
    if (e.target == tripModal) closeTripModal();
    if (e.target == packageModal) closePackageModal();
});


document.addEventListener('DOMContentLoaded', function() {
    renderTrips();
    renderPackages();
    showSection('trips');
    
   
    setupImagePreview('trip-image-file', 'trip-image-preview');
    setupImagePreview('package-image-file', 'package-image-preview');
});