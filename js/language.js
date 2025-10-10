/* 
=========================================
iDigital - Language Switching System
=========================================
Multi-language support with localStorage persistence
*/

// Language translations
const translations = {
    en: {
        // Navigation
        'nav-services': 'Services',
        'nav-technologies': 'Technologies',
        'nav-industries': 'Industries',
        'nav-about': 'About',
        'nav-contact': 'Contact',
        'nav-get-quote': 'Get Quote',
        
        // Services dropdown
        'services-development': 'Development Services',
        'services-windows': 'Windows App Development',
        'services-mac': 'Mac App Development',
        'services-mobile': 'Mobile Apps (iOS/Android)',
        'services-web': 'Web Applications',
        'services-backend': 'Backend Development',
        'services-frontend': 'Frontend Development',
        'services-infrastructure': 'Infrastructure & Cloud',
        'services-database': 'Database Solutions',
        'services-cloud': 'Cloud Services',
        'services-devops': 'DevOps & CI/CD',
        'services-architecture': 'System Architecture',
        'services-emerging': 'Emerging Technologies',
        'services-ai': 'AI Services & ML',
        'services-iot': 'IoT Solutions',
        'services-blockchain': 'Blockchain Development',
        'services-arvr': 'AR/VR Development',
        'services-security': 'Security & Quality',
        'services-secure-coding': 'Secure Coding Practices',
        'services-audits': 'Security Audits',
        'services-penetration': 'Penetration Testing',
        'services-reviews': 'Code Reviews',
        
        // Home page
        'hero-title': 'Transform Your Vision Into Reality',
        'hero-subtitle': 'GSA Approved Contractor | DOD Active Approval | Full-stack development, AI services, and security auditing for modern businesses. From concept to deployment, we build secure, scalable applications that drive growth.',
        'hero-cta-primary': 'Start Your Project',
        'hero-cta-secondary': 'View Portfolio',
        
        // Services section
        'services-title': 'Our Services',
        'services-subtitle': 'Comprehensive digital solutions tailored to your business needs',
        
        // Technologies section
        'tech-title': 'Cutting-Edge Technology Stack',
        'tech-subtitle': 'We leverage the latest technologies and frameworks to build robust, scalable solutions',
        
        // Why Choose section
        'why-choose-title': 'Why Choose iDigital?',
        'why-choose-subtitle': 'We combine technical expertise with business acumen to deliver exceptional results',
        
        // Footer
        'footer-copyright': '2025 iDigital. All rights reserved.',
        'footer-privacy': 'Privacy Policy',
        'footer-terms': 'Terms of Service',
        'footer-contact-info': 'Contact Info',
        'footer-global-presence': 'Global presence across 10 countries',
        
        // Contact page
        'contact-title': 'Contact Us',
        'contact-subtitle': 'Ready to start your project? Get in touch with our team.',
        'contact-form-name': 'Full Name',
        'contact-form-email': 'Email Address',
        'contact-form-company': 'Company Name',
        'contact-form-phone': 'Phone Number',
        'contact-form-service': 'Service Needed',
        'contact-form-budget': 'Project Budget',
        'contact-form-timeline': 'Timeline',
        'contact-form-message': 'Tell us about your project, goals, and requirements...',
        'contact-form-newsletter': 'Subscribe to our newsletter for tech insights and updates',
        'contact-form-privacy': 'I agree to the Privacy Policy and Terms of Service',
        'contact-form-submit': 'Send Message',
        
        // About page
        'about-title': 'About iDigital',
        'about-subtitle': 'We\'re a team of passionate technologists dedicated to transforming businesses through secure, innovative digital solutions.',
        'about-mission-title': 'Our Mission',
        'about-expertise-title': 'Full-Stack AI Expertise'
    },
    
    ar: {
        // Navigation
        'nav-services': 'الخدمات',
        'nav-technologies': 'التقنيات',
        'nav-industries': 'الصناعات',
        'nav-about': 'حولنا',
        'nav-contact': 'اتصل بنا',
        'nav-get-quote': 'احصل على عرض سعر',
        
        // Home page
        'hero-title': 'حول رؤيتك إلى واقع',
        'hero-subtitle': 'مقاول معتمد من GSA | موافقة نشطة من DOD | تطوير متكامل، خدمات الذكاء الاصطناعي، ومراجعة الأمان للشركات الحديثة.',
        'hero-cta-primary': 'ابدأ مشروعك',
        'hero-cta-secondary': 'عرض الأعمال',
        
        // Services section
        'services-title': 'خدماتنا',
        'services-subtitle': 'حلول رقمية شاملة مصممة خصيصاً لاحتياجات عملك',
        
        // Technologies section
        'tech-title': 'مجموعة التقنيات المتطورة',
        'tech-subtitle': 'نستخدم أحدث التقنيات والأطر لبناء حلول قوية وقابلة للتوسع',
        
        // Why Choose section
        'why-choose-title': 'لماذا تختار iDigital؟',
        'why-choose-subtitle': 'نجمع بين الخبرة التقنية والفطنة التجارية لتقديم نتائج استثنائية',
        
        // Footer
        'footer-copyright': '2025 iDigital. جميع الحقوق محفوظة.',
        'footer-privacy': 'سياسة الخصوصية',
        'footer-terms': 'شروط الخدمة',
        'footer-contact-info': 'معلومات الاتصال',
        'footer-global-presence': 'حضور عالمي في 10 دول',
        
        // Contact page
        'contact-title': 'اتصل بنا',
        'contact-subtitle': 'مستعد لبدء مشروعك؟ تواصل مع فريقنا.',
        'contact-form-name': 'الاسم الكامل',
        'contact-form-email': 'عنوان البريد الإلكتروني',
        'contact-form-company': 'اسم الشركة',
        'contact-form-phone': 'رقم الهاتف',
        'contact-form-service': 'الخدمة المطلوبة',
        'contact-form-budget': 'ميزانية المشروع',
        'contact-form-timeline': 'الجدول الزمني',
        'contact-form-message': 'أخبرنا عن مشروعك وأهدافك ومتطلباتك...',
        'contact-form-newsletter': 'اشترك في نشرتنا الإخبارية للحصول على رؤى تقنية وتحديثات',
        'contact-form-privacy': 'أوافق على سياسة الخصوصية وشروط الخدمة',
        'contact-form-submit': 'إرسال الرسالة',
        
        // About page
        'about-title': 'حول iDigital',
        'about-subtitle': 'نحن فريق من التقنيين المتحمسين المكرسين لتحويل الأعمال من خلال الحلول الرقمية الآمنة والمبتكرة.',
        'about-mission-title': 'مهمتنا',
        'about-expertise-title': 'خبرة الذكاء الاصطناعي المتكاملة'
    },
    
    es: {
        // Navigation
        'nav-services': 'Servicios',
        'nav-technologies': 'Tecnologías',
        'nav-industries': 'Industrias',
        'nav-about': 'Acerca de',
        'nav-contact': 'Contacto',
        'nav-get-quote': 'Obtener Cotización',
        
        // Home page
        'hero-title': 'Transforma Tu Visión en Realidad',
        'hero-subtitle': 'Contratista Aprobado por GSA | Aprobación Activa del DOD | Desarrollo full-stack, servicios de IA y auditoría de seguridad para empresas modernas.',
        'hero-cta-primary': 'Inicia Tu Proyecto',
        'hero-cta-secondary': 'Ver Portafolio',
        
        // Services section
        'services-title': 'Nuestros Servicios',
        'services-subtitle': 'Soluciones digitales integrales adaptadas a las necesidades de tu negocio',
        
        // Technologies section
        'tech-title': 'Stack Tecnológico de Vanguardia',
        'tech-subtitle': 'Aprovechamos las últimas tecnologías y frameworks para construir soluciones robustas y escalables',
        
        // Why Choose section
        'why-choose-title': '¿Por Qué Elegir iDigital?',
        'why-choose-subtitle': 'Combinamos experiencia técnica con perspicacia empresarial para entregar resultados excepcionales',
        
        // Footer
        'footer-copyright': '2025 iDigital. Todos los derechos reservados.',
        'footer-privacy': 'Política de Privacidad',
        'footer-terms': 'Términos de Servicio',
        'footer-contact-info': 'Información de Contacto',
        'footer-global-presence': 'Presencia global en 10 países',
        
        // Contact page
        'contact-title': 'Contáctanos',
        'contact-subtitle': '¿Listo para comenzar tu proyecto? Ponte en contacto con nuestro equipo.',
        'contact-form-name': 'Nombre Completo',
        'contact-form-email': 'Dirección de Correo',
        'contact-form-company': 'Nombre de la Empresa',
        'contact-form-phone': 'Número de Teléfono',
        'contact-form-service': 'Servicio Necesario',
        'contact-form-budget': 'Presupuesto del Proyecto',
        'contact-form-timeline': 'Cronograma',
        'contact-form-message': 'Cuéntanos sobre tu proyecto, objetivos y requisitos...',
        'contact-form-newsletter': 'Suscríbete a nuestro boletín para insights técnicos y actualizaciones',
        'contact-form-privacy': 'Acepto la Política de Privacidad y Términos de Servicio',
        'contact-form-submit': 'Enviar Mensaje',
        
        // About page
        'about-title': 'Acerca de iDigital',
        'about-subtitle': 'Somos un equipo de tecnólogos apasionados dedicados a transformar negocios a través de soluciones digitales seguras e innovadoras.',
        'about-mission-title': 'Nuestra Misión',
        'about-expertise-title': 'Experiencia Full-Stack en IA'
    },
    
    ru: {
        // Navigation
        'nav-services': 'Услуги',
        'nav-technologies': 'Технологии',
        'nav-industries': 'Отрасли',
        'nav-about': 'О нас',
        'nav-contact': 'Контакты',
        'nav-get-quote': 'Получить Предложение',
        
        // Home page
        'hero-title': 'Превратите Ваше Видение в Реальность',
        'hero-subtitle': 'Одобренный подрядчик GSA | Активное одобрение DOD | Полный цикл разработки, услуги ИИ и аудит безопасности для современного бизнеса.',
        'hero-cta-primary': 'Начать Проект',
        'hero-cta-secondary': 'Посмотреть Портфолио',
        
        // Services section
        'services-title': 'Наши Услуги',
        'services-subtitle': 'Комплексные цифровые решения, адаптированные под потребности вашего бизнеса',
        
        // Technologies section
        'tech-title': 'Передовой Технологический Стек',
        'tech-subtitle': 'Мы используем новейшие технологии и фреймворки для создания надежных, масштабируемых решений',
        
        // Why Choose section
        'why-choose-title': 'Почему Выбирают iDigital?',
        'why-choose-subtitle': 'Мы сочетаем техническую экспертизу с деловой проницательностью для достижения исключительных результатов',
        
        // Footer
        'footer-copyright': '2025 iDigital. Все права защищены.',
        'footer-privacy': 'Политика Конфиденциальности',
        'footer-terms': 'Условия Обслуживания',
        'footer-contact-info': 'Контактная Информация',
        'footer-global-presence': 'Глобальное присутствие в 10 странах',
        
        // Contact page
        'contact-title': 'Свяжитесь с Нами',
        'contact-subtitle': 'Готовы начать проект? Свяжитесь с нашей командой.',
        'contact-form-name': 'Полное Имя',
        'contact-form-email': 'Адрес Электронной Почты',
        'contact-form-company': 'Название Компании',
        'contact-form-phone': 'Номер Телефона',
        'contact-form-service': 'Необходимая Услуга',
        'contact-form-budget': 'Бюджет Проекта',
        'contact-form-timeline': 'Временные Рамки',
        'contact-form-message': 'Расскажите нам о вашем проекте, целях и требованиях...',
        'contact-form-newsletter': 'Подпишитесь на нашу рассылку для получения технических insights и обновлений',
        'contact-form-privacy': 'Я согласен с Политикой Конфиденциальности и Условиями Обслуживания',
        'contact-form-submit': 'Отправить Сообщение',
        
        // About page
        'about-title': 'О iDigital',
        'about-subtitle': 'Мы команда увлеченных технологов, посвятивших себя трансформации бизнеса через безопасные, инновационные цифровые решения.',
        'about-mission-title': 'Наша Миссия',
        'about-expertise-title': 'Экспертиза Full-Stack ИИ'
    },
    
    tr: {
        // Navigation
        'nav-services': 'Hizmetler',
        'nav-technologies': 'Teknolojiler',
        'nav-industries': 'Endüstriler',
        'nav-about': 'Hakkımızda',
        'nav-contact': 'İletişim',
        'nav-get-quote': 'Teklif Al',
        
        // Home page
        'hero-title': 'Vizyonunuzu Gerçeğe Dönüştürün',
        'hero-subtitle': 'GSA Onaylı Yüklenici | DOD Aktif Onayı | Modern işletmeler için full-stack geliştirme, AI hizmetleri ve güvenlik denetimi.',
        'hero-cta-primary': 'Projenizi Başlatın',
        'hero-cta-secondary': 'Portföyü Görüntüle',
        
        // Services section
        'services-title': 'Hizmetlerimiz',
        'services-subtitle': 'İş ihtiyaçlarınıza göre özelleştirilmiş kapsamlı dijital çözümler',
        
        // Technologies section
        'tech-title': 'Son Teknoloji Yığını',
        'tech-subtitle': 'Sağlam, ölçeklenebilir çözümler oluşturmak için en son teknolojileri ve frameworkleri kullanıyoruz',
        
        // Why Choose section
        'why-choose-title': 'Neden iDigital?',
        'why-choose-subtitle': 'Olağanüstü sonuçlar sunmak için teknik uzmanlığı iş zekası ile birleştiriyoruz',
        
        // Footer
        'footer-copyright': '2025 iDigital. Tüm hakları saklıdır.',
        'footer-privacy': 'Gizlilik Politikası',
        'footer-terms': 'Hizmet Şartları',
        'footer-contact-info': 'İletişim Bilgileri',
        'footer-global-presence': '10 ülkede küresel varlık',
        
        // Contact page
        'contact-title': 'İletişime Geçin',
        'contact-subtitle': 'Projenizi başlatmaya hazır mısınız? Ekibimizle iletişime geçin.',
        'contact-form-name': 'Tam İsim',
        'contact-form-email': 'E-posta Adresi',
        'contact-form-company': 'Şirket Adı',
        'contact-form-phone': 'Telefon Numarası',
        'contact-form-service': 'Gerekli Hizmet',
        'contact-form-budget': 'Proje Bütçesi',
        'contact-form-timeline': 'Zaman Çizelgesi',
        'contact-form-message': 'Projeniz, hedefleriniz ve gereksinimleriniz hakkında bize anlatın...',
        'contact-form-newsletter': 'Teknik içgörüler ve güncellemeler için bültenimize abone olun',
        'contact-form-privacy': 'Gizlilik Politikası ve Hizmet Şartlarını kabul ediyorum',
        'contact-form-submit': 'Mesaj Gönder',
        
        // About page
        'about-title': 'iDigital Hakkında',
        'about-subtitle': 'Güvenli, yenilikçi dijital çözümler aracılığıyla işletmeleri dönüştürmeye adanmış tutkulu teknologlar ekibiyiz.',
        'about-mission-title': 'Misyonumuz',
        'about-expertise-title': 'Full-Stack AI Uzmanlığı'
    },
    
    pt: {
        // Navigation
        'nav-services': 'Serviços',
        'nav-technologies': 'Tecnologias',
        'nav-industries': 'Indústrias',
        'nav-about': 'Sobre',
        'nav-contact': 'Contato',
        'nav-get-quote': 'Obter Orçamento',
        
        // Home page
        'hero-title': 'Transforme Sua Visão em Realidade',
        'hero-subtitle': 'Contratante Aprovado GSA | Aprovação Ativa DOD | Desenvolvimento full-stack, serviços de IA e auditoria de segurança para empresas modernas.',
        'hero-cta-primary': 'Iniciar Projeto',
        'hero-cta-secondary': 'Ver Portfólio',
        
        // Services section
        'services-title': 'Nossos Serviços',
        'services-subtitle': 'Soluções digitais abrangentes adaptadas às necessidades do seu negócio',
        
        // Technologies section
        'tech-title': 'Stack Tecnológico de Ponta',
        'tech-subtitle': 'Aproveitamos as mais recentes tecnologias e frameworks para construir soluções robustas e escaláveis',
        
        // Why Choose section
        'why-choose-title': 'Por Que Escolher iDigital?',
        'why-choose-subtitle': 'Combinamos expertise técnica com perspicácia empresarial para entregar resultados excepcionais',
        
        // Footer
        'footer-copyright': '2025 iDigital. Todos os direitos reservados.',
        'footer-privacy': 'Política de Privacidade',
        'footer-terms': 'Termos de Serviço',
        'footer-contact-info': 'Informações de Contato',
        'footer-global-presence': 'Presença global em 10 países',
        
        // Contact page
        'contact-title': 'Entre em Contato',
        'contact-subtitle': 'Pronto para iniciar seu projeto? Entre em contato com nossa equipe.',
        'contact-form-name': 'Nome Completo',
        'contact-form-email': 'Endereço de Email',
        'contact-form-company': 'Nome da Empresa',
        'contact-form-phone': 'Número de Telefone',
        'contact-form-service': 'Serviço Necessário',
        'contact-form-budget': 'Orçamento do Projeto',
        'contact-form-timeline': 'Cronograma',
        'contact-form-message': 'Conte-nos sobre seu projeto, objetivos e requisitos...',
        'contact-form-newsletter': 'Inscreva-se em nossa newsletter para insights técnicos e atualizações',
        'contact-form-privacy': 'Concordo com a Política de Privacidade e Termos de Serviço',
        'contact-form-submit': 'Enviar Mensagem',
        
        // About page
        'about-title': 'Sobre iDigital',
        'about-subtitle': 'Somos uma equipe de tecnólogos apaixonados dedicados a transformar negócios através de soluções digitais seguras e inovadoras.',
        'about-mission-title': 'Nossa Missão',
        'about-expertise-title': 'Expertise Full-Stack em IA'
    },
    
    ka: {
        // Navigation
        'nav-services': 'სერვისები',
        'nav-technologies': 'ტექნოლოგიები',
        'nav-industries': 'ინდუსტრიები',
        'nav-about': 'ჩვენს შესახებ',
        'nav-contact': 'კონტაქტი',
        'nav-get-quote': 'შეთავაზება',
        
        // Home page
        'hero-title': 'გადააქციეთ თქვენი ხედვა რეალობად',
        'hero-subtitle': 'GSA დამტკიცებული კონტრაქტორი | DOD აქტიური დამტკიცება | სრული სტეკის განვითარება, AI სერვისები და უსაფრთხოების აუდიტი თანამედროვე ბიზნესისთვის.',
        'hero-cta-primary': 'დაიწყე პროექტი',
        'hero-cta-secondary': 'ნახე პორტფოლიო',
        
        // Services section
        'services-title': 'ჩვენი სერვისები',
        'services-subtitle': 'ყოვლისმომცველი ციფრული გადაწყვეტილებები თქვენი ბიზნეს საჭიროებებისთვის',
        
        // Technologies section
        'tech-title': 'თანამედროვე ტექნოლოგიური სტეკი',
        'tech-subtitle': 'ვიყენებთ უახლეს ტექნოლოგიებს და ფრეიმვორქებს ძლიერი, მასშტაბური გადაწყვეტილებების შესაქმნელად',
        
        // Why Choose section
        'why-choose-title': 'რატომ აირჩიოთ iDigital?',
        'why-choose-subtitle': 'ვაერთიანებთ ტექნიკურ ექსპერტიზას ბიზნეს გონებასთან განსაკუთრებული შედეგების მისაღწევად',
        
        // Footer
        'footer-copyright': '2025 iDigital. ყველა უფლება დაცულია.',
        'footer-privacy': 'კონფიდენციალურობის პოლიტიკა',
        'footer-terms': 'სერვისის პირობები',
        'footer-contact-info': 'საკონტაქტო ინფორმაცია',
        'footer-global-presence': 'გლობალური არსებობა 10 ქვეყანაში',
        
        // Contact page
        'contact-title': 'დაგვიკავშირდით',
        'contact-subtitle': 'მზად ხართ დაიწყოთ პროექტი? დაუკავშირდით ჩვენს გუნდს.',
        'contact-form-name': 'სრული სახელი',
        'contact-form-email': 'ელ-ფოსტის მისამართი',
        'contact-form-company': 'კომპანიის სახელი',
        'contact-form-phone': 'ტელეფონის ნომერი',
        'contact-form-service': 'საჭირო სერვისი',
        'contact-form-budget': 'პროექტის ბიუჯეტი',
        'contact-form-timeline': 'ვადები',
        'contact-form-message': 'მოგვიყევით თქვენი პროექტის, მიზნებისა და მოთხოვნების შესახებ...',
        'contact-form-newsletter': 'გამოიწერეთ ჩვენი სიახლეები ტექნიკური ინსაითებისა და განახლებებისთვის',
        'contact-form-privacy': 'ვეთანხმები კონფიდენციალურობის პოლიტიკასა და სერვისის პირობებს',
        'contact-form-submit': 'გაგზავნა',
        
        // About page
        'about-title': 'iDigital-ის შესახებ',
        'about-subtitle': 'ვართ გულმოდგინე ტექნოლოგების გუნდი, რომელიც ეძღვნება ბიზნესის გარდაქმნას უსაფრთხო, ინოვაციური ციფრული გადაწყვეტილებებით.',
        'about-mission-title': 'ჩვენი მისია',
        'about-expertise-title': 'სრული სტეკის AI ექსპერტიზა'
    }
};

// Language management
class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('selectedLanguage') || 'en';
        this.supportedLanguages = {
            'en': { name: 'English', flag: '🇺🇸' },
            'ar': { name: 'العربية', flag: '🇸🇦' },
            'es': { name: 'Español', flag: '🇪🇸' },
            'ru': { name: 'Русский', flag: '🇷🇺' },
            'tr': { name: 'Türkçe', flag: '🇹🇷' },
            'pt': { name: 'Português', flag: '🇵🇹' },
            'ka': { name: 'ქართული', flag: '🇬🇪' }
        };
    }

    init() {
        this.updateLanguageSelectors();
        this.attachEventListeners();
        this.translatePage();
        this.updateDocumentDirection();
    }

    updateLanguageSelectors() {
        const languageSelectors = document.querySelectorAll('.language-selector .dropdown-toggle');
        languageSelectors.forEach(selector => {
            const flag = this.supportedLanguages[this.currentLanguage].flag;
            const code = this.currentLanguage.toUpperCase();
            selector.innerHTML = `${flag} ${code} <i class="fas fa-chevron-down"></i>`;
        });

        // Update active state in dropdowns
        const dropdownItems = document.querySelectorAll('.language-selector .dropdown-item');
        dropdownItems.forEach(item => {
            item.classList.remove('active');
            const itemLang = item.getAttribute('data-lang');
            if (itemLang === this.currentLanguage) {
                item.classList.add('active');
            }
        });
    }

    attachEventListeners() {
        const dropdownItems = document.querySelectorAll('.language-selector .dropdown-item');
        dropdownItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const selectedLang = item.getAttribute('data-lang');
                this.changeLanguage(selectedLang);
            });
        });
    }

    changeLanguage(langCode) {
        if (langCode && this.supportedLanguages[langCode]) {
            this.currentLanguage = langCode;
            localStorage.setItem('selectedLanguage', langCode);
            this.updateLanguageSelectors();
            this.translatePage();
            this.updateDocumentDirection();
        }
    }

    translatePage() {
        const currentTranslations = translations[this.currentLanguage] || translations.en;
        
        // Translate elements with data-translate attributes
        const translatableElements = document.querySelectorAll('[data-translate]');
        translatableElements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (currentTranslations[key]) {
                if (element.tagName === 'INPUT' && element.type === 'submit') {
                    element.value = currentTranslations[key];
                } else if (element.placeholder !== undefined) {
                    element.placeholder = currentTranslations[key];
                } else {
                    element.textContent = currentTranslations[key];
                }
            }
        });
        
        // Trigger custom event for other components
        document.dispatchEvent(new CustomEvent('languageChanged', { 
            detail: { language: this.currentLanguage } 
        }));
    }

    updateDocumentDirection() {
        // Set RTL for Arabic
        if (this.currentLanguage === 'ar') {
            document.documentElement.setAttribute('dir', 'rtl');
            document.documentElement.setAttribute('lang', 'ar');
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
            document.documentElement.setAttribute('lang', this.currentLanguage);
        }
    }
}

// Initialize language manager when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const languageManager = new LanguageManager();
    languageManager.init();
});