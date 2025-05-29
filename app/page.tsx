'use client';

import React, { useState } from 'react';
import { User, Building2, Code, Zap, ArrowRight, Check } from 'lucide-react';

export default function CodeMatchHomepage() {
  const [currentView, setCurrentView] = useState('home');
  const [formData, setFormData] = useState({});

  const handleLogin = () => {
    setCurrentView('login');
  };

  const handleSignup = () => {
    setCurrentView('userType');
  };

  const handleUserTypeSelect = (type: string) => {
    setFormData({ userType: type });
    setCurrentView(type === 'developer' ? 'devForm' : 'companyForm');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Inscription réussie ! (En développement)');
  };

  // Page d'accueil
  if (currentView === 'home') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Header */}
        <header className="container mx-auto px-6 py-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">CodeMatch</h1>
            </div>
            <div className="space-x-4">
              <button 
                onClick={handleLogin}
                className="px-6 py-2 text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
              >
                Log In
              </button>
              <button 
                onClick={handleSignup}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
              >
                Sign Up
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <main className="container mx-auto px-6 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Connectez vos projets aux 
              <span className="text-indigo-600"> meilleurs développeurs IA</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              CodeMatch réunit les entreprises innovantes et les développeurs spécialisés 
              en Intelligence Artificielle et Automatisation pour créer l'avenir ensemble.
            </p>
            
            <div className="flex justify-center space-x-6 mb-16">
              <button 
                onClick={handleSignup}
                className="px-8 py-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all transform hover:scale-105 font-semibold text-lg flex items-center space-x-2"
              >
                <span>Commencer maintenant</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pour les Entreprises</h3>
                <ul className="text-left space-y-3 text-gray-600">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Accès à des développeurs IA vérifiés</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Matching intelligent selon vos besoins</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Gestion de projet intégrée</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pour les Développeurs</h3>
                <ul className="text-left space-y-3 text-gray-600">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Projets IA et automatisation premium</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Rémunération transparente et sécurisée</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Portfolio et réputation valorisés</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Page de connexion
  if (currentView === 'login') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-6">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Connexion à CodeMatch</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="votre@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label>
              <input 
                type="password" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="••••••••"
              />
            </div>
            <button 
              onClick={() => alert('Connexion en cours... (En développement)')}
              className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
            >
              Se connecter
            </button>
          </div>
          
          <div className="text-center mt-6">
            <button 
              onClick={() => setCurrentView('home')}
              className="text-indigo-600 hover:text-indigo-800 font-medium"
            >
              ← Retour à l'accueil
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Sélection du type d'utilisateur
  if (currentView === 'userType') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-6">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl w-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Rejoignez CodeMatch</h2>
            <p className="text-gray-600">Choisissez votre profil pour continuer</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <button 
              onClick={() => handleUserTypeSelect('developer')}
              className="p-8 border-2 border-gray-200 rounded-xl hover:border-indigo-500 hover:bg-indigo-50 transition-all group"
            >
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-200">
                <Code className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Développeur</h3>
              <p className="text-gray-600">Spécialisé en IA et Automatisation</p>
            </button>
            
            <button 
              onClick={() => handleUserTypeSelect('company')}
              className="p-8 border-2 border-gray-200 rounded-xl hover:border-indigo-500 hover:bg-indigo-50 transition-all group"
            >
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-200">
                <Building2 className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Entreprise</h3>
              <p className="text-gray-600">À la recherche de talents IA</p>
            </button>
          </div>
          
          <div className="text-center mt-8">
            <button 
              onClick={() => setCurrentView('home')}
              className="text-indigo-600 hover:text-indigo-800 font-medium"
            >
              ← Retour à l'accueil
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Formulaire développeur
  if (currentView === 'devForm') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-6">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Profil Développeur</h2>
            <p className="text-gray-600">Créez votre profil professionnel</p>
          </div>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Prénom *</label>
                <input 
                  type="text" 
                  required
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nom *</label>
                <input 
                  type="text" 
                  required
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
              <input 
                type="email" 
                required
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Spécialisations *</label>
              <select 
                required
                onChange={(e) => handleInputChange('specialization', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="">Sélectionnez votre spécialisation</option>
                <option value="machine-learning">Machine Learning</option>
                <option value="nlp">Natural Language Processing</option>
                <option value="computer-vision">Computer Vision</option>
                <option value="automation">Automatisation RPA</option>
                <option value="data-science">Data Science</option>
                <option value="ai-integration">Intégration IA</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Expérience</label>
              <select 
                onChange={(e) => handleInputChange('experience', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="">Années d'expérience</option>
                <option value="junior">0-2 ans (Junior)</option>
                <option value="mid">3-5 ans (Intermédiaire)</option>
                <option value="senior">5+ ans (Senior)</option>
                <option value="expert">10+ ans (Expert)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Technologies maîtrisées</label>
              <textarea 
                placeholder="Python, TensorFlow, PyTorch, OpenAI API..."
                onChange={(e) => handleInputChange('technologies', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent h-24"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Portfolio / GitHub</label>
              <input 
                type="url" 
                placeholder="https://github.com/votreprofil"
                onChange={(e) => handleInputChange('portfolio', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            
            <button 
              onClick={handleSubmit}
              className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
            >
              Créer mon profil développeur
            </button>
          </div>
          
          <div className="text-center mt-6">
            <button 
              onClick={() => setCurrentView('userType')}
              className="text-indigo-600 hover:text-indigo-800 font-medium"
            >
              ← Retour au choix du profil
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Formulaire entreprise
  if (currentView === 'companyForm') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-6">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Profil Entreprise</h2>
            <p className="text-gray-600">Présentez votre entreprise</p>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nom de l'entreprise *</label>
              <input 
                type="text" 
                required
                onChange={(e) => handleInputChange('companyName', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Prénom du contact *</label>
                <input 
                  type="text" 
                  required
                  onChange={(e) => handleInputChange('contactFirstName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nom du contact *</label>
                <input 
                  type="text" 
                  required
                  onChange={(e) => handleInputChange('contactLastName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email professionnel *</label>
              <input 
                type="email" 
                required
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Secteur d'activité *</label>
              <select 
                required
                onChange={(e) => handleInputChange('industry', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="">Sélectionnez votre secteur</option>
                <option value="tech">Technologies</option>
                <option value="finance">Finance</option>
                <option value="healthcare">Santé</option>
                <option value="retail">Commerce/Retail</option>
                <option value="manufacturing">Industrie</option>
                <option value="consulting">Conseil</option>
                <option value="other">Autre</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Taille de l'entreprise</label>
              <select 
                onChange={(e) => handleInputChange('companySize', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="">Nombre d'employés</option>
                <option value="startup">1-10 employés</option>
                <option value="small">11-50 employés</option>
                <option value="medium">51-200 employés</option>
                <option value="large">200+ employés</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Besoins en IA/Automatisation</label>
              <textarea 
                placeholder="Décrivez vos projets ou besoins en Intelligence Artificielle et Automatisation..."
                onChange={(e) => handleInputChange('needs', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent h-32"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Site web</label>
              <input 
                type="url" 
                placeholder="https://votreentreprise.com"
                onChange={(e) => handleInputChange('website', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            
            <button 
              onClick={handleSubmit}
              className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
            >
              Créer mon profil entreprise
            </button>
          </div>
          
          <div className="text-center mt-6">
            <button 
              onClick={() => setCurrentView('userType')}
              className="text-indigo-600 hover:text-indigo-800 font-medium"
            >
              ← Retour au choix du profil
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
