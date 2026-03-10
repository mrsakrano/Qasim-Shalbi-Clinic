import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Mail, 
  Facebook, 
  Instagram, 
  Youtube, 
  Search, 
  Menu, 
  X, 
  Twitter,
  MessageSquare,
  Globe,
  FileText,
  Music2,
  Share2,
  ChevronLeft, 
  Star, 
  CheckCircle2, 
  Users, 
  Heart, 
  History,
  ArrowRight,
  MessageCircle,
  Clock,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import ChatAssistant from './components/ChatAssistant';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'الخدمات', href: '#services' },
    { name: 'حول', href: '#about' },
    { name: 'تاريخ العائلة', href: '#history' },
    { name: 'المقالات', href: '#articles' },
    { name: 'الأسئلة الشائعة', href: '#faq' },
    { name: 'اتصل', href: '#contact' },
  ];

  const stats = [
    { label: 'سنة خبرة عائلية', value: '100+' },
    { label: 'طفل تم خدمتهم', value: '5000+' },
    { label: 'رضا العملاء', value: '100%' },
  ];

  const features = [
    { 
      title: 'خدمات متخصصة', 
      desc: 'خدمات تطهير آمنة وموثوقة باستخدام أحدث التقنيات الطبية',
      icon: <Award className="w-8 h-8 text-emerald-600" />
    },
    { 
      title: 'فريق متخصص', 
      desc: 'فريق طبي ذو خبرة عالية في مجال التطهير والعناية بالأطفال',
      icon: <Users className="w-8 h-8 text-emerald-600" />
    },
    { 
      title: 'رعاية شاملة', 
      desc: 'متابعة دقيقة وشاملة للأطفال بعد العملية',
      icon: <Heart className="w-8 h-8 text-emerald-600" />
    },
    { 
      title: '100% رضا', 
      desc: 'رضا العملاء هو أولويتنا الأولى',
      icon: <CheckCircle2 className="w-8 h-8 text-emerald-600" />
    },
  ];

  const services = [
    {
      title: 'الختان الجراحي التقليدي',
      desc: 'الطريقة الكلاسيكية الآمنة التي تضمن نتائج تجميلية ممتازة مع استخدام أحدث أدوات التعقيم والخياطة الطبية الدقيقة.',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
      features: ['خياطة تجميلية', 'تعقيم عالي المستوى', 'تخدير موضعي آمن'],
      benefits: ['نتائج تجميلية دائمة', 'أقل عرضة للمضاعفات', 'مناسب لجميع الأعمار'],
      badge: 'الأكثر طلباً',
      icon: <Award className="w-6 h-6" />
    },
    {
      title: 'تقنية الحلقة (Plastibell)',
      desc: 'تقنية حديثة ومبتكرة للختان بدون خياطة، تتميز بسرعة الإجراء وسهولة العناية بعد العملية، وهي مثالية لحديثي الولادة.',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800',
      features: ['بدون خياطة', 'إجراء سريع', 'عناية بسيطة'],
      benefits: ['وقت تعافي أسرع', 'لا حاجة لغرز جراحية', 'مثالي للرضع'],
      badge: 'حديث',
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: 'المتابعة والرعاية الشاملة',
      desc: 'نقدم خدمة متابعة دقيقة بعد العملية لضمان التئام الجرح بشكل سليم، مع توفير استشارات هاتفية ومنزلية عند الحاجة.',
      image: 'https://images.unsplash.com/photo-1581594632702-52c11a7c0e73?auto=format&fit=crop&q=80&w=800',
      features: ['متابعة 24/7', 'استشارات هاتفية', 'زيارات منزلية'],
      benefits: ['راحة بال تامة للأهل', 'كشف مبكر لأي ملاحظات', 'دعم طبي مستمر'],
      badge: 'مجاني',
      icon: <Heart className="w-6 h-6" />
    },
  ];

  const instructions = {
    pre: [
      'يجب أن يكون الطفل صائماً عن الطعام والشراب لمدة ساعتين قبل الموعد.',
      'يفضل تحميم الطفل جيداً قبل الحضور للعيادة.',
      'إحضار ملابس قطنية واسعة (حفاظات أكبر بنمرة واحدة).',
      'التأكد من عدم وجود حرارة أو رشح لدى الطفل في يوم العملية.'
    ],
    post: [
      'الحفاظ على نظافة منطقة الجرح وتغيير الحفاظ بانتظام.',
      'استخدام المرهم الطبي الموصوف من قبل الطبيب عند كل غيار.',
      'إعطاء المسكنات حسب الجدول الزمني المحدد من الطبيب.',
      'مراجعة العيادة فوراً في حال وجود نزيف مستمر أو تورم غير طبيعي.'
    ]
  };

  const gallery = [
    { url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800', title: 'العيادة قديماً' },
    { url: 'https://images.unsplash.com/photo-1583324113626-70df0f4deaab?auto=format&fit=crop&q=80&w=800', title: 'أدوات طبية تاريخية' },
    { url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800', title: 'تجهيزات حديثة' },
    { url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800', title: 'فريق العمل' },
  ];

  const timeline = [
    { year: '1920', title: 'البداية والتأسيس', desc: 'وضع الجد الأول حجر الأساس لمهنة التطهير في مدينة إربد كأمانة طبية وإنسانية.' },
    { year: '1950', title: 'جيل الحاج قاسم الشلبي', desc: 'انتقال الخبرة وتطوير أساليب العمل مع الحفاظ على الدقة والأمانة المهنية.' },
    { year: '1985', title: 'عميد مطهري إربد', desc: 'الحاج قاسم الشلبي (رحمه الله) يصبح المرجع الأول والملقب بعميد مطهري إربد.' },
    { year: '2010', title: 'التحديث والجيل الجديد', desc: 'انضمام الأبناء وتحديث العيادة بأحدث تقنيات التعقيم والأدوات الطبية الحديثة.' },
    { year: 'اليوم', title: 'استمرار المسيرة', desc: 'نواصل تقديم خدماتنا بأعلى معايير الجودة العالمية مع الحفاظ على إرثنا العريق.' },
  ];

  const reviews = [
    {
      name: 'أحمد بني هاني',
      rating: 5,
      text: 'خدمة ممتازة وتعامل راقي جداً. الدكتور أبو زيد خبير جداً في عمله والطفل لم يشعر بأي ألم يذكر. أنصح الجميع بالتعامل معهم.'
    },
    {
      name: 'محمد الزعبي',
      rating: 5,
      text: 'نظافة تامة واحترافية عالية. الخبرة العائلية واضحة في كل تفصيل. شكراً جزيلاً لكم على الرعاية الرائعة.'
    },
    {
      name: 'ياسين الشقران',
      rating: 5,
      text: 'أفضل عيادة تطهير في إربد بلا منازع. المتابعة بعد العملية كانت ممتازة جداً وأعطونا كل التعليمات اللازمة.'
    }
  ];

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: 'ما هو العمر المناسب للختان؟',
      a: 'يفضل إجراء الختان في الأيام الأولى من عمر الطفل (حديثي الولادة) لسرعة الالتئام، ولكن يمكن إجراؤه في أي عمر تحت إشراف طبي متخصص وتقييم الحالة.'
    },
    {
      q: 'كم تستغرق عملية الختان؟',
      a: 'العملية نفسها تستغرق عادة ما بين 10 إلى 20 دقيقة. نطلب من الأهل البقاء في العيادة لمدة 30 دقيقة إضافية للملاحظة والتأكد من سلامة الطفل قبل المغادرة.'
    },
    {
      q: 'هل العملية مؤلمة للطفل؟',
      a: 'نستخدم تخديراً موضعياً آمناً وفعالاً جداً. بفضل خبرتنا الطويلة وتقنياتنا الحديثة، نحرص على أن تكون التجربة مريحة وبأقل قدر ممكن من الانزعاج للطفل.'
    },
    {
      q: 'كيف يمكنني حجز موعد؟',
      a: 'يمكنك الحجز بسهولة عبر نموذج الحجز الموجود أسفل هذه الصفحة، أو الاتصال بنا مباشرة على أرقامنا، أو عبر الواتساب وسنقوم بتأكيد الموعد معك فوراً.'
    },
    {
      q: 'ما هي مدة التئام الجرح؟',
      a: 'عادة ما يلتئم الجرح بشكل كامل خلال 7 إلى 10 أيام. سنقوم بتزويدكم بجدول زمني واضح للمتابعة وتعليمات العناية اليومية لضمان أفضل النتائج.'
    },
    {
      q: 'هل أحتاج لإحضار أي شيء معي للعيادة؟',
      a: 'نعم، يرجى إحضار حفاظات أكبر بنمرة واحدة من مقاس الطفل الحالي، وملابس قطنية واسعة، والتأكد من إرضاع الطفل قبل ساعة من الموعد.'
    },
    {
      q: 'ما هي ساعات العمل في العيادة؟',
      a: 'نستقبلكم يومياً من السبت إلى الخميس، من الساعة 10 صباحاً وحتى 6 مساءً. يفضل دائماً حجز موعد مسبق لضمان عدم الانتظار.'
    },
    {
      q: 'هل هناك زيارة مراجعة بعد العملية؟',
      a: 'نعم، المراجعة الأولى تكون عادة بعد 24 إلى 48 ساعة من العملية للاطمئنان على الجرح، وهي مشمولة ضمن تكلفة العملية الأصلية.'
    },
    {
      q: 'ماذا أفعل في حال لاحظت وجود نزيف؟',
      a: 'النزيف البسيط جداً في الساعات الأولى طبيعي، ولكن في حال وجود نزيف مستمر، يرجى الضغط بقطعة شاش معقمة والاتصال بنا فوراً على أرقام الطوارئ المتاحة 24/7.'
    },
    {
      q: 'هل تقبل العيادة التأمين الصحي؟',
      a: 'نحن نتعامل مع معظم شركات التأمين الكبرى في الأردن. يرجى تزويدنا بتفاصيل تأمينك عند الحجز للتحقق من التغطية والإجراءات المطلوبة.'
    }
  ];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    date: '',
    details: ''
  });

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `طلب حجز موعد جديد:%0Aالاسم: ${formData.name}%0Aرقم الهاتف: ${formData.phone}%0Aعمر الطفل: ${formData.age}%0Aالتاريخ المفضل: ${formData.date}%0Aالتفاصيل: ${formData.details}`;
    window.open(`https://wa.me/962777246833?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Top Bar */}
      <div className="bg-emerald-900 text-white py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><MapPin size={14} /> شارع عين جالوت، إربد، الأردن</span>
            <span className="flex items-center gap-2"><Phone size={14} /> +962 77 7246 833</span>
          </div>
          <div className="flex gap-4">
            <a href="https://web.facebook.com/abuzaidshalbi" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-200 transition-colors">
              <Facebook size={16} />
            </a>
            <a href="https://instagram.com/abu_zaid.a" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-200 transition-colors">
              <Instagram size={16} />
            </a>
            <a href="https://www.youtube.com/@alshalbicom" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-200 transition-colors">
              <Youtube size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <a href="https://alshalbi.com" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img 
                src="/logo.png" 
                alt="شعار أبناء قاسم الشلبي" 
                className="w-12 h-12 object-contain"
                referrerPolicy="no-referrer"
              />
              <div>
                <h1 className="text-xl font-bold text-zinc-900 leading-tight">عيادة الشلبي</h1>
                <p className="text-xs text-emerald-600 font-medium tracking-wide">أبو زيد الشلبي</p>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-zinc-600 hover:text-emerald-600 font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="relative group">
                <Search className="w-5 h-5 text-zinc-400 cursor-pointer group-hover:text-emerald-600 transition-colors" />
              </div>
              <button className="bg-emerald-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100 active:scale-95">
                احجز الآن
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center gap-4">
              <button className="p-2 text-zinc-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-zinc-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block px-3 py-3 text-base font-medium text-zinc-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 px-3">
                  <button className="w-full bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold">
                    احجز الآن
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-12 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-50/50 -z-10 rounded-bl-[100px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold mb-6">
                خبرة عائلية عريقة منذ 1920
              </span>
              <h2 className="text-4xl lg:text-6xl font-extrabold text-zinc-900 leading-[1.15] mb-6">
                عيادة أبو زيد الشلبي <br />
                <span className="text-emerald-600">التميز في خدمات الختان</span>
              </h2>
              <p className="text-lg text-zinc-600 mb-10 leading-relaxed max-w-xl">
                نقدم لكم خدمات التطهير الآمنة للأطفال باستخدام أحدث التقنيات الطبية والمعايير الصحية العالمية، بخبرة عائلية عريقة تضمن لكم الراحة والأمان.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200 active:scale-95">
                  احجز موعداً الآن
                </button>
                <button className="bg-white border-2 border-zinc-200 text-zinc-700 px-8 py-4 rounded-full font-bold text-lg hover:border-emerald-600 hover:text-emerald-600 transition-all active:scale-95">
                  استكشف خدماتنا
                </button>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/abu-zaid.png" 
                  alt="عيادة أبو زيد الشلبي" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-zinc-100 animate-fade-in">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                    <History size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-zinc-900 leading-none">100+</p>
                    <p className="text-sm text-zinc-500 font-medium">سنة من الخبرة</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 mb-4">لماذا تختار عيادة أبو زيد الشلبي؟</h2>
            <div className="w-20 h-1.5 bg-emerald-600 mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl border border-zinc-100 hover:border-emerald-100 hover:bg-emerald-50/30 transition-all group"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{feature.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-emerald-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 border-8 border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-96 h-96 border-8 border-white rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <p className="text-4xl lg:text-6xl font-black mb-2">{stat.value}</p>
                <p className="text-emerald-200 font-medium">{stat.label}</p>
              </div>
            ))}
            <div>
              <p className="text-4xl lg:text-6xl font-black mb-2">100+</p>
              <p className="text-emerald-200 font-medium">سنة خبرة عائلية</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 mb-4">خدماتنا الرئيسية</h2>
              <p className="text-zinc-600 text-lg">نقدم مجموعة متكاملة من الخدمات الطبية المتخصصة في الختان والرعاية الصحية للأطفال.</p>
            </div>
            <button className="text-emerald-600 font-bold flex items-center gap-2 hover:gap-4 transition-all group">
              عرض جميع الخدمات <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-zinc-100 group flex flex-col"
              >
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-emerald-700 text-xs font-bold rounded-full shadow-sm">
                      {service.badge}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-900">{service.title}</h3>
                  </div>
                  <p className="text-zinc-600 mb-6 leading-relaxed text-sm">{service.desc}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">المميزات والفوائد</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-zinc-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-6 border-t border-zinc-50">
                    <a 
                      href="#contact"
                      className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100"
                    >
                      احجز موعداً <ArrowRight className="w-4 h-4 rotate-180" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Update Banner */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-50 rounded-[40px] p-8 lg:p-16 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-200/30 rounded-full blur-3xl" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-emerald-600 rounded-full text-sm font-bold mb-6 shadow-sm">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse" /> ✨ تحديث جديد
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 mb-6">تجديد واجهة المركز</h2>
                <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                  يسرنا إعلامكم بأنه تم تجديد واجهة مركزنا وموقعنا الإلكتروني بالكامل لتقديم تجربة أكثر سهولة واحترافية لعملائنا. نحن ملتزمون دائماً بالتطوير المستمر لتقديم أفضل الخدمات الطبية.
                </p>
                <button className="bg-emerald-600 text-white px-8 py-3.5 rounded-full font-bold hover:bg-emerald-700 transition-all">
                  اكتشف تاريخ عائلتنا العريق
                </button>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-xl rotate-2">
                <img 
                  src="https://picsum.photos/seed/update/800/500" 
                  alt="Update" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parental Guide Section */}
      <section id="articles" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 mb-4">دليل الوالدين</h2>
            <p className="text-zinc-600">كل ما تحتاج معرفته لضمان سلامة وراحة طفلك</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-emerald-50 p-10 rounded-[40px] border border-emerald-100"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm">
                  <Clock size={24} />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900">تعليمات ما قبل العملية</h3>
              </div>
              <ul className="space-y-4">
                {instructions.pre.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-700 leading-relaxed">
                    <div className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center shrink-0 text-xs font-bold mt-1">
                      {i + 1}
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-50 p-10 rounded-[40px] border border-zinc-100"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm">
                  <Heart size={24} />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900">العناية بعد العملية</h3>
              </div>
              <ul className="space-y-4">
                {instructions.post.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-700 leading-relaxed">
                    <div className="w-6 h-6 bg-zinc-900 text-white rounded-full flex items-center justify-center shrink-0 text-xs font-bold mt-1">
                      {i + 1}
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Heritage & Gallery Section */}
      <section id="history" className="py-24 bg-zinc-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-4 block">تراثنا العريق</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 mb-8 leading-tight">
                أكثر من قرن من الزمان <br />
                في خدمة أهالي إربد
              </h2>
              <div className="space-y-6 text-lg text-zinc-600 leading-relaxed mb-8">
                <p>
                  بدأت الحكاية من قلب مدينة إربد، حين وضع والد المرحوم الحاج قاسم الشلبي حجر الأساس لمهنة "التطهير" كأمانة طبية وإنسانية. هذا الإرث انتقل بالتعليم المباشر والممارسة الدقيقة إلى المرحوم الحاج قاسم الشلبي (رحمه الله)، الذي قضى حياته مرجعاً وملاذاً للعائلات، حتى غدا يُعرف بلقب <span className="text-emerald-700 font-bold">"عميد مطهري إربد"</span>.
                </p>
                <p>
                  واليوم، يكمل أبناؤه هذه المسيرة بذات المهارة، مستندين إلى خبرة تراكمية تتجاوز القرن من الزمان، جامعين بين الأصالة والخبرة المتراكمة وبين أحدث ما توصل إليه العلم الحديث في مجال الجراحة والتعقيم.
                </p>
              </div>
              
              {/* Timeline */}
              <div className="relative mt-12 pr-4 border-r-2 border-emerald-100 space-y-10">
                {timeline.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute -right-[25px] top-1 w-4 h-4 bg-emerald-600 rounded-full border-4 border-white shadow-sm" />
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:border-emerald-200 transition-colors">
                      <span className="text-emerald-600 font-black text-xl mb-1 block">{item.year}</span>
                      <h4 className="text-lg font-bold text-zinc-900 mb-2">{item.title}</h4>
                      <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="sticky top-24">
              <div className="text-center mb-8 lg:text-right">
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">معرض الصور التاريخي</h3>
                <p className="text-zinc-500 italic">لقطات توثق مسيرة العطاء عبر الأجيال</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {gallery.map((img, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className={`rounded-3xl overflow-hidden shadow-lg relative group ${i % 2 === 1 ? 'mt-8' : ''}`}
                  >
                    <img 
                      src={img.url} 
                      alt={img.title} 
                      className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                      referrerPolicy="no-referrer" 
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <p className="text-white font-bold text-sm">{img.title}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 mb-4">تقييمات العملاء</h2>
            <p className="text-zinc-600 mb-6">ماذا يقول الآباء عن خدماتنا</p>
            <div className="flex items-center justify-center gap-1 text-amber-400 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
            </div>
            <p className="text-sm font-bold text-zinc-500">متوسط التقييم: 5.0/5 بناءً على 120 تقييم</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100 relative">
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
                </div>
                <p className="text-zinc-700 italic mb-8 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-700 font-bold">
                    {review.name[0]}
                  </div>
                  <p className="font-bold text-zinc-900">{review.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 mb-4">فريق العمل</h2>
            <p className="text-zinc-600">نفخر بفريقنا الطبي المتخصص ذو الخبرة العالية</p>
          </div>
          <div className="max-w-md mx-auto">
              <div className="bg-white rounded-[40px] overflow-hidden shadow-xl border border-zinc-100 group">
                <div className="h-80 overflow-hidden">
                  <img 
                    src="/abu-zaid.png" 
                    alt="أبو زيد الشلبي" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
              <div className="p-10 text-center">
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">أبو زيد الشلبي</h3>
                <p className="text-emerald-600 font-bold mb-6">مختص في التطهير الآمن للأطفال</p>
                <p className="text-zinc-600 leading-relaxed">
                  خبرة عائلية ممتدة منذ 1920، متخصص في تقديم خدمات التطهير الآمنة للأطفال باستخدام أحدث التقنيات الطبية
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-zinc-50">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.a
                }
              }))
            })
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 mb-4">الأسئلة الشائعة</h2>
            <p className="text-zinc-600">إجابات على أكثر الاستفسارات تكراراً من قبل الآباء</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl border border-zinc-100 overflow-hidden shadow-sm transition-all"
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 text-right flex justify-between items-center hover:bg-zinc-50 transition-colors"
                >
                  <span className="text-lg font-bold text-zinc-900">{faq.q}</span>
                  <ChevronLeft 
                    className={`w-5 h-5 text-emerald-600 transition-transform duration-300 ${activeFaq === idx ? '-rotate-90' : ''}`} 
                  />
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-6 text-zinc-600 leading-relaxed border-t border-zinc-50 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Form */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 mb-6">أرسل استفسارك عبر واتساب</h2>
              <p className="text-lg text-zinc-600 mb-10">املأ البيانات التالية وسيتم تحويلك مباشرة للمحادثة مع فريقنا الطبي للإجابة على جميع استفساراتك.</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 font-medium">اتصل بنا</p>
                    <p className="text-lg font-bold text-zinc-900">+962 77 7246 833</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 font-medium">موقعنا</p>
                    <p className="text-lg font-bold text-zinc-900">شارع عين جالوت، إربد، الأردن</p>
                  </div>
                </div>
              </div>

              {/* Interactive Map */}
              <div className="mt-10 rounded-[32px] overflow-hidden border border-zinc-100 shadow-sm h-[300px] relative group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3378.681137446536!2d35.8584855!3d32.5484834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c76906236b23b%3A0x280e551e186e26b!2z2LTYp9ix2Lkg2LnZitmGINis2KfZhNmI2Kog2KXYsdio2K8!5e0!3m2!1sar!2sjo!4v1710000000000!5m2!1sar!2sjo"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="موقع عيادة أبو زيد الشلبي"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl text-xs font-bold text-emerald-700 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  انقر لتكبير الخريطة
                </div>
              </div>
            </div>

            <div className="bg-zinc-50 p-8 lg:p-12 rounded-[40px] border border-zinc-100 shadow-sm">
              <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-zinc-700 mb-2">الاسم الكامل</label>
                    <input 
                      type="text" 
                      required
                      placeholder="أدخل اسمك هنا"
                      className="w-full px-6 py-4 rounded-2xl border border-zinc-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-zinc-700 mb-2">رقم الهاتف</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="07XXXXXXXX"
                      className="w-full px-6 py-4 rounded-2xl border border-zinc-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-zinc-700 mb-2">عمر الطفل</label>
                    <input 
                      type="text" 
                      required
                      placeholder="مثلاً: شهرين"
                      className="w-full px-6 py-4 rounded-2xl border border-zinc-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all"
                      value={formData.age}
                      onChange={(e) => setFormData({...formData, age: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-zinc-700 mb-2">التاريخ المفضل</label>
                    <input 
                      type="date" 
                      required
                      className="w-full px-6 py-4 rounded-2xl border border-zinc-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-zinc-700 mb-2">تفاصيل إضافية</label>
                  <textarea 
                    rows={3}
                    placeholder="هل هناك أي ملاحظات طبية؟"
                    className="w-full px-6 py-4 rounded-2xl border border-zinc-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all resize-none"
                    value={formData.details}
                    onChange={(e) => setFormData({...formData, details: e.target.value})}
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200 active:scale-[0.98]"
                >
                  <MessageCircle size={24} /> حجز موعد عبر واتساب
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-emerald-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-white rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white rounded-full" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">هل لديك أسئلة؟</h2>
          <p className="text-xl text-emerald-50 mb-12">نحن هنا للإجابة على جميع استفساراتك والمساعدة في حجز موعد</p>
          <button className="bg-white text-emerald-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-emerald-50 transition-all shadow-2xl active:scale-95">
            تواصل معنا الآن
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 text-zinc-400 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12 mb-20">
            <div className="lg:col-span-1">
              <a href="https://alshalbi.com" className="flex items-center gap-3 mb-8 hover:opacity-80 transition-opacity">
                <img 
                  src="/logo.png" 
                  alt="شعار أبناء قاسم الشلبي" 
                  className="w-10 h-10 object-contain"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <h2 className="text-xl font-bold text-white">عيادة أبو زيد الشلبي</h2>
              </a>
              <p className="leading-relaxed mb-8">
                من عائلة أبناء قاسم الشلبي - خبرة عائلية عريقة في خدمات الختان الطبي منذ عام 1920 في مدينة إربد.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://web.facebook.com/abuzaidshalbi" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all" title="صفحة الفيسبوك"><Facebook size={18} /></a>
                <a href="https://web.facebook.com/mthrawlad.abw.zyd" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all" title="الملف الشخصي فيسبوك"><Users size={18} /></a>
                <a href="https://instagram.com/abu_zaid.a" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all" title="إنستغرام"><Instagram size={18} /></a>
                <a href="https://www.youtube.com/@alshalbicom" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all" title="يوتيوب"><Youtube size={18} /></a>
                <a href="https://x.com/AbuZaidAlshalbi" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all" title="X (تويتر)"><Twitter size={18} /></a>
                <a href="https://tiktok.com/@abu_za_id.a" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all" title="تيك توك"><Music2 size={18} /></a>
                <a href="https://threads.net/@abu_zaid.a" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all" title="ثريدز"><Share2 size={18} /></a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-8">الروابط السريعة</h3>
              <ul className="space-y-4">
                {navLinks.map(link => (
                  <li key={link.name}><a href={link.href} className="hover:text-emerald-500 transition-colors">{link.name}</a></li>
                ))}
                <li><a href="https://alshalbi.com/blog" className="hover:text-emerald-500 transition-colors flex items-center gap-2"><Globe size={14} /> المدونة</a></li>
                <li><a href="https://alshalbi.com/press.html" className="hover:text-emerald-500 transition-colors flex items-center gap-2"><FileText size={14} /> المركز الصحفي</a></li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-white font-bold text-lg mb-8">معلومات الاتصال</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <p className="flex items-start gap-3"><MapPin className="text-emerald-600 shrink-0" size={20} /> 📍 شارع عين جالوت، إربد، الأردن</p>
                  <p className="flex items-center gap-3"><Mail className="text-emerald-600 shrink-0" size={20} /> info@alshalbi.com</p>
                </div>
                <div className="space-y-4">
                  <p className="flex items-center gap-3"><Phone className="text-emerald-600 shrink-0" size={20} /> +962 77 7246 833</p>
                  <p className="flex items-center gap-3"><Phone className="text-emerald-600 shrink-0" size={20} /> +962 79 6590 826</p>
                  <p className="flex items-center gap-3"><Phone className="text-emerald-600 shrink-0" size={20} /> +962 78 5550 720</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
            <p>© 2024 عيادة أبو زيد الشلبي - جميع الحقوق محفوظة</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
              <a href="#" className="hover:text-white transition-colors">تاريخ العائلة</a>
              <a href="#" className="hover:text-white transition-colors">المقالات</a>
            </div>
          </div>
        </div>
      </footer>
      <ChatAssistant />
    </div>
  );
};

export default App;
