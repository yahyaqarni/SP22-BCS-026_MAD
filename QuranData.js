const surahNames = [
    { english: "Al-Fatihah", arabic: "الفاتحة" },
    { english: "Al-Baqarah", arabic: "البقرة" },
    { english: "Al-Imran", arabic: "آل عمران" },
    { english: "An-Nisa", arabic: "النساء" },
    { english: "Al-Maidah", arabic: "المائدة" },
    { english: "Al-An'am", arabic: "الأنعام" },
    { english: "Al-A'raf", arabic: "الأعراف" },
    { english: "Al-Anfal", arabic: "الأنفال" },
    { english: "At-Tawbah", arabic: "التوبة" },
    { english: "Yunus", arabic: "يونس" },
    { english: "Hud", arabic: "هود" },
    { english: "Yusuf", arabic: "يوسف" },
    { english: "Ar-Ra'd", arabic: "الرعد" },
    { english: "Ibrahim", arabic: "إبراهيم" },
    { english: "Al-Hijr", arabic: "الحجر" },
    { english: "An-Nahl", arabic: "النحل" },
    { english: "Al-Isra", arabic: "الإسراء" },
    { english: "Al-Kahf", arabic: "الكهف" },
    { english: "Maryam", arabic: "مريم" },
    { english: "Ta-Ha", arabic: "طه" },
    { english: "Al-Anbiya", arabic: "الأنبياء" },
    { english: "Al-Hajj", arabic: "الحج" },
    { english: "Al-Mu'minun", arabic: "المؤمنون" },
    { english: "An-Nur", arabic: "النور" },
    { english: "Al-Furqan", arabic: "الفرقان" },
    { english: "Ash-Shu'ara", arabic: "الشعراء" },
    { english: "An-Naml", arabic: "النمل" },
    { english: "Al-Qasas", arabic: "القصص" },
    { english: "Al-Ankabut", arabic: "العنكبوت" },
    { english: "Ar-Rum", arabic: "الروم" },
    { english: "Luqman", arabic: "لقمان" },
    { english: "As-Sajda", arabic: "السجدة" },
    { english: "Al-Ahzab", arabic: "الأحزاب" },
    { english: "Saba", arabic: "سبأ" },
    { english: "Fatir", arabic: "فاطر" },
    { english: "Ya-Sin", arabic: "يس" },
    { english: "As-Saffat", arabic: "الصافات" },
    { english: "Sad", arabic: "ص" },
    { english: "Az-Zumar", arabic: "الزمر" },
    { english: "Ghafir", arabic: "غافر" },
    { english: "Fussilat", arabic: "فصلت" },
    { english: "Ash-Shura", arabic: "الشورى" },
    { english: "Az-Zukhruf", arabic: "الزخرف" },
    { english: "Ad-Dukhan", arabic: "الدخان" },
    { english: "Al-Jathiyah", arabic: "الجاثية" },
    { english: "Al-Ahqaf", arabic: "الأحقاف" },
    { english: "Muhammad", arabic: "محمد" },
    { english: "Al-Fath", arabic: "الفتح" },
    { english: "Al-Hujurat", arabic: "الحجرات" },
    { english: "Qaf", arabic: "ق" },
    { english: "Adh-Dhariyat", arabic: "الذاريات" },
    { english: "At-Tur", arabic: "الطور" },
    { english: "An-Najm", arabic: "النجم" },
    { english: "Al-Qamar", arabic: "القمر" },
    { english: "Ar-Rahman", arabic: "الرحمن" },
    { english: "Al-Waqi'ah", arabic: "الواقعة" },
    { english: "Al-Hadid", arabic: "الحديد" },
    { english: "Al-Mujadila", arabic: "المجادلة" },
    { english: "Al-Hashr", arabic: "الحشر" },
    { english: "Al-Mumtahina", arabic: "الممتحنة" },
    { english: "As-Saff", arabic: "الصف" },
    { english: "Al-Jumu'ah", arabic: "الجمعة" },
    { english: "Al-Munafiqun", arabic: "المنافقون" },
    { english: "At-Taghabun", arabic: "التغابن" },
    { english: "At-Talaq", arabic: "الطلاق" },
    { english: "At-Tahrim", arabic: "التحريم" },
    { english: "Al-Mulk", arabic: "الملك" },
    { english: "Al-Qalam", arabic: "القلم" },
    { english: "Al-Haqqah", arabic: "الحاقة" },
    { english: "Al-Ma'arij", arabic: "المعارج" },
    { english: "Nuh", arabic: "نوح" },
    { english: "Al-Jinn", arabic: "الجن" },
    { english: "Al-Muzzammil", arabic: "المزمل" },
    { english: "Al-Muddathir", arabic: "المدثر" },
    { english: "Al-Qiyamah", arabic: "القيامة" },
    { english: "Al-Insan", arabic: "الإنسان" },
    { english: "Al-Mursalat", arabic: "المرسلات" },
    { english: "An-Naba", arabic: "النبأ" },
    { english: "An-Nazi'at", arabic: "النازعات" },
    { english: "'Abasa", arabic: "عبس" },
    { english: "At-Takwir", arabic: "التكوير" },
    { english: "Al-Infitar", arabic: "الإنفطار" },
    { english: "Al-Mutaffifin", arabic: "المطففين" },
    { english: "Al-Inshiqaq", arabic: "الإنشقاق" },
    { english: "Al-Buruj", arabic: "البروج" },
    { english: "At-Tariq", arabic: "الطارق" },
    { english: "Al-A'la", arabic: "الأعلى" },
    { english: "Al-Ghashiyah", arabic: "الغاشية" },
    { english: "Al-Fajr", arabic: "الفجر" },
    { english: "Al-Balad", arabic: "البلد" },
    { english: "Ash-Shams", arabic: "الشمس" },
    { english: "Al-Layl", arabic: "الليل" },
    { english: "Ad-Duha", arabic: "الضحى" },
    { english: "Ash-Sharh", arabic: "الشرح" },
    { english: "At-Tin", arabic: "التين" },
    { english: "Al-'Alaq", arabic: "العلق" },
    { english: "Al-Qadr", arabic: "القدر" },
    { english: "Al-Bayyinah", arabic: "البينة" },
    { english: "Az-Zalzalah", arabic: "الزلزلة" },
    { english: "Al-'Adiyat", arabic: "العاديات" },
    { english: "Al-Qari'ah", arabic: "القارعة" },
    { english: "At-Takathur", arabic: "التكاثر" },
    { english: "Al-'Asr", arabic: "العصر" },
    { english: "Al-Humazah", arabic: "الهمزة" },
    { english: "Al-Fil", arabic: "الفيل" },
    { english: "Quraish", arabic: "قريش" },
    { english: "Al-Ma'un", arabic: "الماعون" },
    { english: "Al-Kawthar", arabic: "الكوثر" },
    { english: "Al-Kafirun", arabic: "الكافرون" },
    { english: "An-Nasr", arabic: "النصر" },
    { english: "Al-Masad", arabic: "المسد" },
    { english: "Al-Ikhlas", arabic: "الإخلاص" },
    { english: "Al-Falaq", arabic: "الفلق" },
    { english: "An-Nas", arabic: "الناس" }
];

const juzNames = [
    { english: 'Juz\' 1: Al-Fatihah', arabic: 'الفاتحة' },
    { english: 'Juz\' 2: Al-Baqarah', arabic: 'البقرة' },
    { english: 'Juz\' 3: Aal-E-Imran', arabic: 'آل عمران' },
    { english: 'Juz\' 4: An-Nisa', arabic: 'النساء' },
    { english: 'Juz\' 5: Al-Maidah', arabic: 'المائدة' },
    { english: 'Juz\' 6: Al-An\'am', arabic: 'الأنعام' },
    { english: 'Juz\' 7: Al-A\'raf', arabic: 'الأعراف' },
    { english: 'Juz\' 8: Al-Anfal', arabic: 'الأنفال' },
    { english: 'Juz\' 9: At-Tawbah', arabic: 'التوبة' },
    { english: 'Juz\' 10: Yunus', arabic: 'يونس' },
    { english: 'Juz\' 11: Hud', arabic: 'هود' },
    { english: 'Juz\' 12: Yusuf', arabic: 'يوسف' },
    { english: 'Juz\' 13: Ar-Ra\'d', arabic: 'الرعد' },
    { english: 'Juz\' 14: Ibrahim', arabic: 'إبراهيم' },
    { english: 'Juz\' 15: Al-Hijr', arabic: 'الحجر' },
    { english: 'Juz\' 16: An-Nahl', arabic: 'النحل' },
    { english: 'Juz\' 17: Al-Isra', arabic: 'الإسراء' },
    { english: 'Juz\' 18: Al-Kahf', arabic: 'الكهف' },
    { english: 'Juz\' 19: Maryam', arabic: 'مريم' },
    { english: 'Juz\' 20: Ta-Ha', arabic: 'طه' },
    { english: 'Juz\' 21: Al-Anbiya', arabic: 'الأنبياء' },
    { english: 'Juz\' 22: Al-Hajj', arabic: 'الحج' },
    { english: 'Juz\' 23: Al-Mu\'minun', arabic: 'المؤمنون' },
    { english: 'Juz\' 24: An-Nur', arabic: 'النور' },
    { english: 'Juz\' 25: Al-Furqan', arabic: 'الفرقان' },
    { english: 'Juz\' 26: Ash-Shu\'ara', arabic: 'الشعراء' },
    { english: 'Juz\' 27: An-Naml', arabic: 'النمل' },
    { english: 'Juz\' 28: Al-Qasas', arabic: 'القصص' },
    { english: 'Juz\' 29: Al-Ankabut', arabic: 'العنكبوت' },
    { english: 'Juz\' 30: Ar-Rum', arabic: 'الروم' },
  ];
  


// Array of details of respective surahs
const surahDetails = [
    { ayahs: 7, rukus: 1, revelationType: "Meccan" },
    { ayahs: 286, rukus: 40, revelationType: "Medinan" },
    { ayahs: 200, rukus: 20, revelationType: "Medinan" },
    { ayahs: 176, rukus: 24, revelationType: "Medinan" },
    { ayahs: 120, rukus: 16, revelationType: "Medinan" },
    { ayahs: 165, rukus: 20, revelationType: "Meccan" },
    { ayahs: 206, rukus: 24, revelationType: "Meccan" },
    { ayahs: 75, rukus: 10, revelationType: "Medinan" },
    { ayahs: 129, rukus: 16, revelationType: "Medinan" },
    { ayahs: 109, rukus: 11, revelationType: "Meccan" },
    { ayahs: 123, rukus: 10, revelationType: "Meccan" },
    { ayahs: 111, rukus: 12, revelationType: "Meccan" },
    { ayahs: 43, rukus: 6, revelationType: "Medinan" },
    { ayahs: 52, rukus: 7, revelationType: "Meccan" },
    { ayahs: 99, rukus: 6, revelationType: "Meccan" },
    { ayahs: 128, rukus: 16, revelationType: "Meccan" },
    { ayahs: 111, rukus: 12, revelationType: "Meccan" },
    { ayahs: 110, rukus: 12, revelationType: "Meccan" },
    { ayahs: 98, rukus: 8, revelationType: "Meccan" },
    { ayahs: 135, rukus: 8, revelationType: "Meccan" },
    { ayahs: 112, rukus: 7, revelationType: "Meccan" },
    { ayahs: 78, rukus: 8, revelationType: "Medinan" },
    { ayahs: 118, rukus: 6, revelationType: "Medinan" },
    { ayahs: 64, rukus: 9, revelationType: "Meccan" },
    { ayahs: 77, rukus: 11, revelationType: "Meccan" },
    { ayahs: 227, rukus: 10, revelationType: "Meccan" },
    { ayahs: 93, rukus: 7, revelationType: "Meccan" },
    { ayahs: 88, rukus: 6, revelationType: "Medinan" },
    { ayahs: 69, rukus: 11, revelationType: "Meccan" },
    { ayahs: 60, rukus: 20, revelationType: "Meccan" },
    { ayahs: 34, rukus: 9, revelationType: "Meccan" },
    { ayahs: 30, rukus: 6, revelationType: "Meccan" },
    { ayahs: 73, rukus: 3, revelationType: "Meccan" },
    { ayahs: 54, rukus: 6, revelationType: "Meccan" },
    { ayahs: 45, rukus: 5, revelationType: "Meccan" },
    { ayahs: 83, rukus: 7, revelationType: "Meccan" },
    { ayahs: 182, rukus: 5, revelationType: "Meccan" },
    { ayahs: 88, rukus: 5, revelationType: "Meccan" },
    { ayahs: 75, rukus: 8, revelationType: "Medinan" },
    { ayahs: 85, rukus: 5, revelationType: "Meccan" },
    { ayahs: 54, rukus: 5, revelationType: "Meccan" },
    { ayahs: 53, rukus: 5, revelationType: "Meccan" },
    { ayahs: 89, rukus: 5, revelationType: "Meccan" },
    { ayahs: 59, rukus: 8, revelationType: "Medinan" },
    { ayahs: 37, rukus: 3, revelationType: "Meccan" },
    { ayahs: 35, rukus: 4, revelationType: "Meccan" },
    { ayahs: 38, rukus: 3, revelationType: "Meccan" },
    { ayahs: 29, rukus: 3, revelationType: "Meccan" },
    { ayahs: 18, rukus: 4, revelationType: "Meccan" },
    { ayahs: 45, rukus: 4, revelationType: "Meccan" },
    { ayahs: 60, rukus: 3, revelationType: "Meccan" },
    { ayahs: 49, rukus: 4, revelationType: "Meccan" },
    { ayahs: 62, rukus: 3, revelationType: "Meccan" },
    { ayahs: 55, rukus: 3, revelationType: "Meccan" },
    { ayahs: 78, rukus: 3, revelationType: "Meccan" },
    { ayahs: 96, rukus: 3, revelationType: "Meccan" },
    { ayahs: 29, rukus: 2, revelationType: "Meccan" },
    { ayahs: 22, rukus: 2, revelationType: "Meccan" },
    { ayahs: 24, rukus: 2, revelationType: "Meccan" },
    { ayahs: 13, rukus: 2, revelationType: "Meccan" },
    { ayahs: 14, rukus: 2, revelationType: "Meccan" },
    { ayahs: 11, rukus: 2, revelationType: "Meccan" },
    { ayahs: 11, rukus: 2, revelationType: "Meccan" },
    { ayahs: 18, rukus: 2, revelationType: "Meccan" },
    { ayahs: 12, rukus: 2, revelationType: "Meccan" },
    { ayahs: 12, rukus: 1, revelationType: "Meccan" },
    { ayahs: 30, rukus: 2, revelationType: "Meccan" },
    { ayahs: 52, rukus: 1, revelationType: "Meccan" },
    { ayahs: 52, rukus: 1, revelationType: "Meccan" },
    { ayahs: 44, rukus: 1, revelationType: "Meccan" },
    { ayahs: 28, rukus: 1, revelationType: "Meccan" },
    { ayahs: 28, rukus: 1, revelationType: "Meccan" },
    { ayahs: 20, rukus: 1, revelationType: "Meccan" },
    { ayahs: 56, rukus: 1, revelationType: "Meccan" },
    { ayahs: 40, rukus: 1, revelationType: "Meccan" },
    { ayahs: 31, rukus: 1, revelationType: "Meccan" },
    { ayahs: 50, rukus: 1, revelationType: "Meccan" },
    { ayahs: 40, rukus: 1, revelationType: "Meccan" },
    { ayahs: 46, rukus: 1, revelationType: "Meccan" },
    { ayahs: 42, rukus: 1, revelationType: "Meccan" },
    { ayahs: 29, rukus: 1, revelationType: "Meccan" },
    { ayahs: 19, rukus: 1, revelationType: "Meccan" },
    { ayahs: 36, rukus: 1, revelationType: "Meccan" },
    { ayahs: 25, rukus: 1, revelationType: "Meccan" },
    { ayahs: 22, rukus: 1, revelationType: "Meccan" },
    { ayahs: 17, rukus: 1, revelationType: "Meccan" },
    { ayahs: 19, rukus: 1, revelationType: "Meccan" },
    { ayahs: 26, rukus: 1, revelationType: "Meccan" },
    { ayahs: 30, rukus: 1, revelationType: "Meccan" },
    { ayahs: 20, rukus: 1, revelationType: "Meccan" },
    { ayahs: 15, rukus: 1, revelationType: "Meccan" },
    { ayahs: 21, rukus: 1, revelationType: "Meccan" }
];

export default {surahNames, surahDetails, juzNames};