import React from "react";
import "./StateCouncilPage.css";

const StateCouncilPage = () => {
  return (
    <div className="state-council-page">
      <img src="/logo-hor.png" alt="شعار مجلس الدولة" className="page-logo" />

      <button
        className="login-button"
        onClick={() => (window.location.href = "/login")}
      >
        تسجيل الدخول
      </button>

      <header className="header">
        <nav className="nav">
          <ul>
            <li>الرئيسية</li>
            <li>عن مجلس الدولة</li>
            <li>أقسام مجلس الدولة</li>
            <li>مركز الدراسات والبحوث القضائية</li>
            <li>المركز الإعلامي</li>
            <li>تواصل معنا</li>
          </ul>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            {/* ترتيب الصناديق حسب الطلب */}
            <div className="boxes-row">
              <div className="news-box">
                <h3>أخبار مجلس الدولة</h3>
                <div className="news-item">
                  <p>
                    السيدات عضوات المجلس والهيئات القضائية يتقدمن بخالص التهاني
                    بمناسبة عيد الفطر المبارك...
                  </p>
                  <span>أبريل 2025</span>
                  <button>قراءة المزيد</button>
                </div>
              </div>

              <div className="stats-box">
                <h3>إحصاءات مجلس الدولة للعام القضائي 2023/2024</h3>
                <div className="stats">
                  <div className="stat">
                    <div className="stat-number">33</div>
                    <div className="stat-label">المحاكم الإدارية</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">25</div>
                    <div className="stat-label">المحاكم التأديبية</div>
                  </div>
                </div>
              </div>

              <div className="events-box">
                <h3>الأحداث الهامة</h3>
                <p>
                  يشهد مجلس الدولة تدشين أول مكتب للعدالة الإلكترونية لقضاة مجلس
                  الدولة، والتي تأتي تتويجًا لإيماننا الراسخ بأهمية التكنولوجيا
                  الحديثة ومنظومتها المتطورة عبر شبكة الإنترنت...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StateCouncilPage;
