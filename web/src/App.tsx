import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { initAuthListener } from './store/authStore';
import AnnouncementBar from './components/layout/AnnouncementBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ProtectedRoute from './components/common/ProtectedRoute';

// Pages (lazy imports는 추후 최적화)
import LandingPage from './pages/Landing/LandingPage';
import LoginPage from './pages/Auth/LoginPage';
import SignupPage from './pages/Auth/SignupPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import AnalysisPage from './pages/Analysis/AnalysisPage';
import AnalysisLoadingPage from './pages/Analysis/AnalysisLoadingPage';
import AnalysisResultPage from './pages/Analysis/AnalysisResultPage';
import HistoryPage from './pages/History/HistoryPage';
import GoalsPage from './pages/Goals/GoalsPage';
import GardenPage from './pages/Garden/GardenPage';
import BadgesPage from './pages/Badges/BadgesPage';
import PricingPage from './pages/Pricing/PricingPage';

// Footer Pages
import DownloadPage from './pages/Footer/DownloadPage';
import BlogPage from './pages/Footer/BlogPage';
import ResearchPage from './pages/Footer/ResearchPage';
import FAQPage from './pages/Footer/FAQPage';
import CommunityPage from './pages/Footer/CommunityPage';
import AboutPage from './pages/Footer/AboutPage';
import CareersPage from './pages/Footer/CareersPage';
import PartnersPage from './pages/Footer/PartnersPage';
import ContactPage from './pages/Footer/ContactPage';
import TermsPage from './pages/Footer/TermsPage';
import PrivacyPage from './pages/Footer/PrivacyPage';
import CookiesPage from './pages/Footer/CookiesPage';

export default function App() {
    useEffect(() => {
        const unsubscribe = initAuthListener();
        return () => unsubscribe();
    }, []);

    return (
        <BrowserRouter>
            <AnnouncementBar />
            <Navbar />
            <Routes>
                {/* Public */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/pricing" element={<PricingPage />} />

                {/* Footer Pages (Public) */}
                <Route path="/download" element={<DownloadPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/research" element={<ResearchPage />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/community" element={<CommunityPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/partners" element={<PartnersPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/cookies" element={<CookiesPage />} />

                {/* Protected */}
                <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
                <Route path="/analysis" element={<ProtectedRoute><AnalysisPage /></ProtectedRoute>} />
                <Route path="/analysis/loading" element={<ProtectedRoute><AnalysisLoadingPage /></ProtectedRoute>} />
                <Route path="/analysis/result" element={<ProtectedRoute><AnalysisResultPage /></ProtectedRoute>} />
                <Route path="/history" element={<ProtectedRoute><HistoryPage /></ProtectedRoute>} />
                <Route path="/goals" element={<ProtectedRoute><GoalsPage /></ProtectedRoute>} />
                <Route path="/garden" element={<ProtectedRoute><GardenPage /></ProtectedRoute>} />
                <Route path="/badges" element={<ProtectedRoute><BadgesPage /></ProtectedRoute>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}
