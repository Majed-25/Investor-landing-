import { useState } from "react";

export default function InvestorLandingPage() {
  const [language, setLanguage] = useState("ar");

  const content = {
    ar: {
      title: "مرحبا بكم في صفحتي الاستثمارية",
      intro: "أنا تقني صيانة صناعية وشغوف بعالم المال والاستثمار. هدفي هو مشاركة معرفتي وتجربتي مع مستثمرين طموحين.\n\nتابعوا مقابلاتي وفيديوهاتي التعليمية في مجال البورصة.",
      contact: "تواصل معي",
      name: "الاسم",
      email: "البريد الإلكتروني",
      message: "رسالتك",
      send: "إرسال",
    },
    fr: {
      title: "Bienvenue sur ma page d'investissement",
      intro: "Je suis technicien en maintenance industrielle et passionné par le monde de la finance. Mon objectif est de partager mes connaissances et mon expérience avec des investisseurs ambitieux.\n\nSuivez mes interviews et vidéos éducatives sur la bourse.",
      contact: "Contactez-moi",
      name: "Nom",
      email: "Email",
      message: "Votre message",
      send: "Envoyer",
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-gray-100 p-6 font-sans">
      <header className="flex items-center justify-between mb-6">
        <img src="/logo-majed.png" alt="Logo" className="h-16" />
        <div>
          <button onClick={() => setLanguage("ar")} className="mr-2 px-4 py-2 bg-blue-600 text-white rounded-xl">العربية</button>
          <button onClick={() => setLanguage("fr")} className="px-4 py-2 bg-blue-600 text-white rounded-xl">Français</button>
        </div>
      </header>

      <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-xl">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">{t.title}</h1>
        <p className="text-lg mb-8 whitespace-pre-line text-gray-800 leading-relaxed">{t.intro}</p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-700">{t.contact}</h2>
        <form className="grid gap-4">
          <input type="text" placeholder={t.name} className="p-3 rounded-xl border border-gray-300 shadow-sm" />
          <input type="email" placeholder={t.email} className="p-3 rounded-xl border border-gray-300 shadow-sm" />
          <textarea placeholder={t.message} className="p-3 rounded-xl border border-gray-300 shadow-sm" rows={4}></textarea>
          <button type="submit" className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition">{t.send}</button>
        </form>
      </div>
    </div>
  );
}