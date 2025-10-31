// Translation data - English and Japanese only
const translations = {
    en: {
        appName: "Katari",
        navFeatures: "Features",
        navHowItWorks: "How It Works",
        navLanguages: "Languages",
        navPricing: "Pricing",
        navContact: "Contact",
        downloadApp: "Download App",
        heroTitle: "Master Language Through<br>Detailed Explanations",
        heroSubtitle: "Transform casual conversation into professional communication. Practice expressing complex ideas with AI-powered feedback.",
        getOnGooglePlay: "Get it on Google Play",
        androidOnly: "Currently available for Android devices",
        
        // Features
        featuresTitle: "Why Choose Katari?",
        featuresSubtitle: "Everything you need to master professional communication",
        feature1Title: "AI-Powered Feedback",
        feature1Desc: "Get instant, contextual feedback on grammar, vocabulary, and expression quality from advanced AI",
        feature2Title: "Structured Learning",
        feature2Desc: "4-step proven method: Question → Note → Express → Evaluate",
        feature3Title: "Voice Recognition",
        feature3Desc: "Practice speaking naturally with advanced speech-to-text technology",
        feature4Title: "Native Language Notes",
        feature4Desc: "Organize your thoughts in your native language before expressing them",
        feature5Title: "Progress Tracking",
        feature5Desc: "Monitor your improvement with detailed history and self-evaluation",
        feature6Title: "Customizable Learning",
        feature6Desc: "Adjust difficulty, conversation style, and topics to match your goals",
        
        // How it works
        howTitle: "How It Works",
        howSubtitle: "Simple, effective, proven",
        step1Title: "Choose a Question",
        step1Desc: "Select from various topics and difficulty levels, or let the AI suggest questions based on your preferences",
        step2Title: "Organize Your Thoughts",
        step2Desc: "Take notes in your native language to structure key points before expressing them in your target language",
        step3Title: "Express in Target Language",
        step3Desc: "Type or speak your detailed explanation in the language you're learning with voice recognition support",
        step4Title: "Get Feedback & Self-Evaluate",
        step4Desc: "Review AI suggestions and rate your own performance to accelerate your learning journey",
        
        // Languages
        languagesTitle: "65+ Languages Supported",
        languagesSubtitle: "Learn any major language with comprehensive support",
        langCatMajor: "Major Languages",
        langCatEuropean: "European Languages",
        langCatAsian: "Asian Languages",
        langCatOther: "Other Languages",
        
        // Language names
        langEnUS: "English (US)",
        langEnGB: "English (UK)",
        langJa: "Japanese",
        langKo: "Korean",
        langZhCN: "Chinese (Simplified)",
        langZhTW: "Chinese (Traditional)",
        langDe: "German",
        langFr: "French",
        langEs: "Spanish",
        langIt: "Italian",
        langPt: "Portuguese",
        langRu: "Russian",
        langNl: "Dutch",
        langPl: "Polish",
        langSv: "Swedish",
        langDa: "Danish",
        langNo: "Norwegian",
        langFi: "Finnish",
        langTr: "Turkish",
        langEl: "Greek",
        langCs: "Czech",
        langHu: "Hungarian",
        langTh: "Thai",
        langVi: "Vietnamese",
        langId: "Indonesian",
        langTl: "Filipino",
        langHi: "Hindi",
        langTa: "Tamil",
        langBn: "Bengali",
        langUr: "Urdu",
        langAr: "Arabic",
        langHe: "Hebrew",
        langFa: "Persian",
        langAf: "Afrikaans",
        langSw: "Swahili",
        andMore: "...and 40+ more",
        
        // Pricing
        pricingTitle: "Simple, Transparent Pricing",
        pricingSubtitle: "Start free, upgrade anytime",
        planFree: "Free Plan",
        planPremium: "Premium",
        perMonth: "/month",
        recommended: "Recommended",
        freeFeat1: "3 AI evaluations per day",
        freeFeat2: "Basic question selection",
        freeFeat3: "View latest record only",
        freeFeat4: "Voice recognition",
        freeFeat5: "All core features",
        premFeat1: "Unlimited AI evaluations",
        premFeat2: "Choose any question deck",
        premFeat3: "Customize difficulty & style",
        premFeat4: "Filter by categories",
        premFeat5: "Re-edit & retry questions",
        premFeat6: "Full history access",
        premFeat7: "Priority support",
        pricingNote: "All plans include voice recognition and core learning features. Upgrade anytime from within the app.",
        
        // Contact
        contactTitle: "Get In Touch",
        contactEmail: "Email:",
        contactSupport: "Support:",
        contactBusiness: "Business Inquiries:",
        
        // Terms
        termsTitle: "Terms of Service",
        termsLastUpdated: "Last Updated:",
        terms1Title: "1. Acceptance of Terms",
        terms1Content: "By accessing and using Katari, you accept and agree to be bound by these Terms of Service.",
        terms2Title: "2. Subscription & Payment",
        terms2Content: "Premium subscriptions are billed monthly. Pricing varies by region: $3.50/month (US) or ¥480/month (Japan). You may cancel at any time. All payments are processed securely through the Google Play Store.",
        terms2aTitle: "2.1 Pricing and Fees",
        terms2aItem1: "Premium Plan: $3.50 USD per month (United States) or ¥480 JPY per month (Japan)",
        terms2aItem2: "Free Plan: $0 - includes 3 AI evaluations per day with basic features",
        terms2aItem3: "All prices are in the currency shown and include applicable taxes where required by law",
        terms2aItem4: "Subscription fees are non-refundable except as required by law or as specified in our refund policy",
        terms2bTitle: "2.2 Billing and Renewal",
        terms2bItem1: "Subscriptions automatically renew monthly until cancelled",
        terms2bItem2: "You will be charged at the beginning of each billing period",
        terms2bItem3: "Payment is processed through Google Play Store's secure payment system",
        terms2bItem4: "Price changes will be notified 30 days in advance",
        terms3Title: "3. User Accounts",
        terms3Content: "You are responsible for maintaining the confidentiality of your account credentials and all activities under your account.",
        terms4Title: "4. Refund Policy",
        terms4Content: "Refunds are handled through Google Play Store's refund policy. If unsatisfied, please request a refund through the Play Store within the applicable refund window.",
        terms4aTitle: "4.1 Refund Eligibility",
        terms4aItem1: "Refunds for Google Play purchases must be requested within 48 hours of purchase",
        terms4aItem2: "Refund requests should be submitted directly through the Google Play Store",
        terms4aItem3: "We follow Google Play's refund policy and guidelines",
        terms4aItem4: "For technical issues preventing service use, please contact support before requesting a refund",
        terms5Title: "5. Cancellation",
        terms5Content: "You may cancel your subscription at any time through your Google Play Store subscription settings. Access continues until the end of the billing period.",
        terms5aTitle: "5.1 How to Cancel",
        terms5aItem1: "Open Google Play Store app on your Android device",
        terms5aItem2: "Tap Menu → Subscriptions",
        terms5aItem3: "Select Katari Premium and tap Cancel subscription",
        terms5aItem4: "Your access will continue until the end of your current billing period",
        terms5aItem5: "No refunds will be provided for the remaining days of the current billing period",
        terms6Title: "6. Service Availability",
        terms6Content: "While we strive to provide continuous service availability, we do not guarantee uninterrupted access. Service may be temporarily unavailable due to maintenance, updates, or unforeseen technical issues.",
        terms7Title: "7. Customer Support",
        terms7Content: "For questions about billing, subscriptions, or technical issues, please contact our support team at support@katari-app.com. We aim to respond within 24-48 hours during business days.",
        contactUs: "Contact us:",
        
        // Privacy
        privacyTitle: "Privacy Policy",
        privacyLastUpdated: "Last Updated:",
        privacy1Title: "1. Information We Collect",
        privacy1Content: "We collect information you provide directly (email, name, practice data) and automatically (device info, usage data).",
        privacy2Title: "2. How We Use Your Information",
        privacy2Content: "We use your information to provide the service, improve features, and provide customer support. Your practice data is used to generate AI feedback.",
        privacy3Title: "3. Data Security",
        privacy3Content: "We implement industry-standard security measures to protect your data. All data is encrypted in transit and at rest using Firebase security.",
        privacy4Title: "4. Data Retention",
        privacy4Content: "We retain your data while your account is active. You may request deletion at any time by contacting support.",
        privacy5Title: "5. Third-Party Services",
        privacy5Content: "We use Google Cloud Platform for AI services, Firebase for data storage, and Google Play for payment processing.",
        privacyContact: "Privacy inquiries:",
        
        // Footer
        footerProduct: "Product",
        footerLegal: "Legal",
        footerDownload: "Download",
        footerTagline: "Master language through detailed explanations",
        footerRights: "All rights reserved.",
        googlePlay: "Google Play"
    },
    ja: {
        appName: "Katari",
        navFeatures: "機能",
        navHowItWorks: "使い方",
        navLanguages: "対応言語",
        navPricing: "料金",
        navContact: "お問い合わせ",
        downloadApp: "アプリをダウンロード",
        heroTitle: "説明力を鍛えて<br>言語をマスター",
        heroSubtitle: "カジュアルな会話スキルをプロフェッショナルなコミュニケーション力に変換。AIフィードバックで複雑なアイデアを表現する練習ができます。",
        getOnGooglePlay: "Google Playで入手",
        androidOnly: "現在Androidデバイスで利用可能",
        
        // Features
        featuresTitle: "Katariを選ぶ理由",
        featuresSubtitle: "プロフェッショナルなコミュニケーションをマスターするために必要なすべて",
        feature1Title: "AI搭載フィードバック",
        feature1Desc: "高度なAIから文法、語彙、表現の質について即座に文脈に沿ったフィードバックを受け取れます",
        feature2Title: "体系的な学習",
        feature2Desc: "実証済みの4ステップ方法：質問 → メモ → 表現 → 評価",
        feature3Title: "音声認識",
        feature3Desc: "高度な音声認識技術で自然な話し方を練習できます",
        feature4Title: "母国語でのメモ",
        feature4Desc: "表現する前に母国語で考えを整理できます",
        feature5Title: "進捗管理",
        feature5Desc: "詳細な履歴と自己評価で上達を追跡できます",
        feature6Title: "カスタマイズ可能な学習",
        feature6Desc: "難易度、会話スタイル、トピックを目標に合わせて調整できます",
        
        // How it works
        howTitle: "使い方",
        howSubtitle: "シンプル、効果的、実証済み",
        step1Title: "質問を選ぶ",
        step1Desc: "様々なトピックと難易度から選ぶか、好みに基づいてAIが質問を提案します",
        step2Title: "考えを整理する",
        step2Desc: "目標言語で表現する前に、母国語でメモを取り要点を構造化します",
        step3Title: "目標言語で表現する",
        step3Desc: "音声認識サポートで、学習中の言語で話すことができます",
        step4Title: "フィードバックを受けて自己評価する",
        step4Desc: "AIの提案を確認し、自分のパフォーマンスを評価して学習を加速させます",
        
        // Languages
        languagesTitle: "65以上の言語に対応",
        languagesSubtitle: "包括的なサポートで主要な言語を学習",
        langCatMajor: "主要言語",
        langCatEuropean: "ヨーロッパ言語",
        langCatAsian: "アジア言語",
        langCatOther: "その他の言語",
        
        // Language names
        langEnUS: "英語（米国）",
        langEnGB: "英語（英国）",
        langJa: "日本語",
        langKo: "韓国語",
        langZhCN: "中国語（簡体字）",
        langZhTW: "中国語（繁体字）",
        langDe: "ドイツ語",
        langFr: "フランス語",
        langEs: "スペイン語",
        langIt: "イタリア語",
        langPt: "ポルトガル語",
        langRu: "ロシア語",
        langNl: "オランダ語",
        langPl: "ポーランド語",
        langSv: "スウェーデン語",
        langDa: "デンマーク語",
        langNo: "ノルウェー語",
        langFi: "フィンランド語",
        langTr: "トルコ語",
        langEl: "ギリシャ語",
        langCs: "チェコ語",
        langHu: "ハンガリー語",
        langTh: "タイ語",
        langVi: "ベトナム語",
        langId: "インドネシア語",
        langTl: "フィリピン語",
        langHi: "ヒンディー語",
        langTa: "タミル語",
        langBn: "ベンガル語",
        langUr: "ウルドゥー語",
        langAr: "アラビア語",
        langHe: "ヘブライ語",
        langFa: "ペルシャ語",
        langAf: "アフリカーンス語",
        langSw: "スワヒリ語",
        andMore: "...他40以上",
        
        // Pricing
        pricingTitle: "シンプルで透明な料金",
        pricingSubtitle: "無料で始めて、いつでもアップグレード",
        planFree: "無料プラン",
        planPremium: "プレミアム",
        perMonth: "/月",
        recommended: "おすすめ",
        freeFeat1: "1日3回のAI評価",
        freeFeat2: "基本的な質問選択",
        freeFeat3: "最新の記録のみ表示",
        freeFeat4: "音声認識",
        freeFeat5: "すべてのコア機能",
        premFeat1: "無制限のAI評価",
        premFeat2: "すべての質問デッキを選択",
        premFeat3: "難易度とスタイルのカスタマイズ",
        premFeat4: "カテゴリーでフィルタリング",
        premFeat5: "質問の再編集と再挑戦",
        premFeat6: "全履歴へのアクセス",
        premFeat7: "優先サポート",
        pricingNote: "すべてのプランに音声認識とコア学習機能が含まれます。アプリ内からいつでもアップグレードできます。",
        
        // Contact
        contactTitle: "お問い合わせ",
        contactEmail: "メール：",
        contactSupport: "サポート：",
        contactBusiness: "ビジネスに関するお問い合わせ：",
        
        // Terms
        termsTitle: "利用規約",
        termsLastUpdated: "最終更新日：",
        terms1Title: "1. 規約の承認",
        terms1Content: "Katariにアクセスして使用することで、本利用規約に同意したものとみなされます。",
        terms2Title: "2. サブスクリプションと支払い",
        terms2Content: "プレミアムサブスクリプションは月額¥480で請求されます。いつでもキャンセルできます。すべての支払いはGoogle Playストアを通じて安全に処理されます。",
        terms3Title: "3. ユーザーアカウント",
        terms3Content: "アカウント認証情報の機密性を維持し、アカウント下のすべての活動に責任を負います。",
        terms4Title: "4. 返金ポリシー",
        terms4Content: "返金はGoogle Playストアの返金ポリシーに従って処理されます。ご満足いただけない場合は、適用される返金期間内にPlayストアから返金をリクエストしてください。",
        terms5Title: "5. キャンセル",
        terms5Content: "Google Playストアのサブスクリプション設定からいつでもサブスクリプションをキャンセルできます。請求期間の終了までアクセスが継続されます。",
        contactUs: "お問い合わせ：",
        
        // Privacy
        privacyTitle: "プライバシーポリシー",
        privacyLastUpdated: "最終更新日：",
        privacy1Title: "1. 収集する情報",
        privacy1Content: "直接提供された情報（メール、名前、練習データ）と自動的に収集される情報（デバイス情報、使用データ）を収集します。",
        privacy2Title: "2. 情報の使用方法",
        privacy2Content: "サービスの提供、機能の改善、カスタマーサポートの提供のために情報を使用します。練習データはAIフィードバックの生成に使用されます。",
        privacy3Title: "3. データセキュリティ",
        privacy3Content: "業界標準のセキュリティ対策を実装してデータを保護しています。すべてのデータはFirebaseセキュリティを使用して転送中および保存時に暗号化されます。",
        privacy4Title: "4. データ保持",
        privacy4Content: "アカウントがアクティブな間、データを保持します。いつでもサポートに連絡して削除をリクエストできます。",
        privacy5Title: "5. サードパーティサービス",
        privacy5Content: "AIサービスにはGoogle Cloud Platform、データストレージにはFirebase、支払い処理にはGoogle Playを使用しています。",
        privacyContact: "プライバシーに関するお問い合わせ：",
        
        // Footer
        footerProduct: "製品",
        footerLegal: "法的情報",
        footerDownload: "ダウンロード",
        footerTagline: "説明力を鍛えて言語をマスター",
        footerRights: "無断転載禁止。",
        googlePlay: "Google Play"
    }
};

// Current language
let currentLanguage = 'en';

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Detect browser language
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'ja') {
        currentLanguage = 'ja';
        document.getElementById('languageSelect').value = 'ja';
        updateContent();
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.feature-card, .step, .pricing-card, .language-category').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

// Change language function
function changeLanguage(lang) {
    currentLanguage = lang;
    updateContent();
}

// Update content based on selected language
function updateContent() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[currentLanguage][key];
            } else {
                element.innerHTML = translations[currentLanguage][key];
            }
        }
    });

    // Update premium price based on language
    const priceElement = document.getElementById('premiumPrice');
    if (priceElement) {
        if (currentLanguage === 'ja') {
            priceElement.innerHTML = `
                <span class="price-currency">¥</span>
                <span class="price-amount">480</span>
                <span class="price-period">/月</span>
            `;
        } else {
            priceElement.innerHTML = `
                <span class="price-currency">$</span>
                <span class="price-amount">3.5</span>
                <span class="price-period">/month</span>
            `;
        }
    }

    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
}

// Add sticky navbar effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = 'none';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
    
    lastScroll = currentScroll;
});

// Analytics tracking (placeholder)
function trackEvent(category, action, label) {
    console.log('Event tracked:', category, action, label);
}

// Track button clicks
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function() {
            trackEvent('Navigation', 'Click', this.getAttribute('href'));
        });
    });
    
    document.querySelectorAll('.btn-primary, .btn-hero').forEach(button => {
        button.addEventListener('click', function() {
            trackEvent('CTA', 'Click', this.textContent);
        });
    });
});