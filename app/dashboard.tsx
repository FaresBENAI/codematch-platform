import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  Eye, 
  Edit, 
  Trash2, 
  Users, 
  Clock, 
  DollarSign, 
  TrendingUp, 
  MessageSquare, 
  Star,
  Calendar,
  MapPin,
  Code,
  Brain,
  Zap,
  Building2,
  Bell,
  Settings,
  LogOut
} from 'lucide-react';

export default function EnterpriseDashboard() {
  const [currentView, setCurrentView] = useState('dashboard'); // 'dashboard', 'projects', 'createProject', 'candidates'
  const [projectForm, setProjectForm] = useState({});

  // Données exemple
  const stats = {
    activeProjects: 8,
    totalCandidates: 24,
    completedProjects: 12,
    avgResponseTime: '2h'
  };

  const projects = [
    {
      id: 1,
      title: "Chatbot IA Customer Service",
      description: "Développement d'un chatbot intelligent pour notre support client avec GPT-4",
      budget: "15,000€ - 25,000€",
      duration: "3 mois",
      skills: ["NLP", "Python", "OpenAI API", "React"],
      status: "active",
      candidates: 8,
      createdAt: "2025-01-15",
      urgency: "medium"
    },
    {
      id: 2,
      title: "Automatisation RPA Comptabilité",
      description: "Automatiser les processus de facturation et rapprochement bancaire",
      budget: "8,000€ - 12,000€",
      duration: "2 mois",
      skills: ["RPA", "UiPath", "Python", "API"],
      status: "draft",
      candidates: 0,
      createdAt: "2025-01-20",
      urgency: "high"
    },
    {
      id: 3,
      title: "Analyse Prédictive Ventes",
      description: "Modèle ML pour prédire les ventes et optimiser les stocks",
      budget: "20,000€ - 30,000€",
      duration: "4 mois",
      skills: ["Machine Learning", "Python", "TensorFlow", "Data Science"],
      status: "completed",
      candidates: 15,
      createdAt: "2024-11-10",
      urgency: "low"
    }
  ];

  const handleInputChange = (field, value) => {
    setProjectForm(prev => ({ ...prev, [field]: value }));
  };

  const handleCreateProject = () => {
    console.log('Nouveau projet:', projectForm);
    alert('Projet créé avec succès ! 🎉');
    setCurrentView('projects');
    setProjectForm({});
  };

  // Sidebar Navigation
  const Sidebar = () => (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg flex items-center justify-center">
            <Code className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">CodeMatch</h1>
            <p className="text-sm text-gray-500">Entreprise</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        <button
          onClick={() => setCurrentView('dashboard')}
          className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
            currentView === 'dashboard' 
              ? 'bg-gradient-to-r from-purple-100 to-cyan-100 text-purple-700' 
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <TrendingUp className="w-5 h-5" />
          <span>Dashboard</span>
        </button>

        <button
          onClick={() => setCurrentView('projects')}
          className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
            currentView === 'projects' 
              ? 'bg-gradient-to-r from-purple-100 to-cyan-100 text-purple-700' 
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <Code className="w-5 h-5" />
          <span>Mes Projets</span>
        </button>

        <button
          onClick={() => setCurrentView('candidates')}
          className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
            currentView === 'candidates' 
              ? 'bg-gradient-to-r from-purple-100 to-cyan-100 text-purple-700' 
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <Users className="w-5 h-5" />
          <span>Candidatures</span>
        </button>

        <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
          <MessageSquare className="w-5 h-5" />
          <span>Messages</span>
        </button>
      </nav>

      <div className="p-4 border-t border-gray-200 space-y-2">
        <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
          <Settings className="w-5 h-5" />
          <span>Paramètres</span>
        </button>
        <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
          <LogOut className="w-5 h-5" />
          <span>Déconnexion</span>
        </button>
      </div>
    </div>
  );

  // Header avec stats
  const Header = () => (
    <div className="bg-white border-b border-gray-200 px-8 py-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Bonjour, TechCorp ! 👋
          </h1>
          <p className="text-gray-600 mt-1">Gérez vos projets IA et trouvez les meilleurs développeurs</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>
          <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full flex items-center justify-center">
            <Building2 className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-purple-50 to-cyan-50 p-6 rounded-xl border border-purple-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Projets Actifs</p>
              <p className="text-3xl font-bold text-purple-700">{stats.activeProjects}</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Code className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl border border-cyan-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Candidatures</p>
              <p className="text-3xl font-bold text-cyan-700">{stats.totalCandidates}</p>
            </div>
            <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-cyan-600" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-xl border border-emerald-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Projets Terminés</p>
              <p className="text-3xl font-bold text-emerald-700">{stats.completedProjects}</p>
            </div>
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
              <Star className="w-6 h-6 text-emerald-600" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-xl border border-orange-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Temps de Réponse</p>
              <p className="text-3xl font-bold text-orange-700">{stats.avgResponseTime}</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Vue Dashboard
  if (currentView === 'dashboard') {
    return (
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 overflow-auto">
          <Header />
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Projets récents */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Projets Récents</h2>
                  <button 
                    onClick={() => setCurrentView('projects')}
                    className="text-purple-600 hover:text-purple-800 font-medium"
                  >
                    Voir tout
                  </button>
                </div>
                <div className="space-y-4">
                  {projects.slice(0, 3).map(project => (
                    <div key={project.id} className="border border-gray-100 rounded-lg p-4 hover:border-purple-200 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-900">{project.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          project.status === 'active' ? 'bg-green-100 text-green-700' :
                          project.status === 'draft' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {project.status === 'active' ? 'Actif' : 
                           project.status === 'draft' ? 'Brouillon' : 'Terminé'}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <span>{project.budget}</span>
                        <span>{project.candidates} candidatures</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions rapides */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Actions Rapides</h2>
                <div className="space-y-4">
                  <button 
                    onClick={() => setCurrentView('createProject')}
                    className="w-full p-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-lg hover:from-purple-700 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                  >
                    <Plus className="w-5 h-5" />
                    <span>Créer un nouveau projet</span>
                  </button>
                  
                  <button className="w-full p-4 border-2 border-purple-200 text-purple-700 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-all flex items-center justify-center space-x-2">
                    <Search className="w-5 h-5" />
                    <span>Rechercher des développeurs</span>
                  </button>
                  
                  <button className="w-full p-4 border-2 border-cyan-200 text-cyan-700 rounded-lg hover:border-cyan-300 hover:bg-cyan-50 transition-all flex items-center justify-center space-x-2">
                    <MessageSquare className="w-5 h-5" />
                    <span>Voir les messages</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Vue Liste des projets
  if (currentView === 'projects') {
    return (
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 overflow-auto">
          <div className="bg-white border-b border-gray-200 px-8 py-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Mes Projets</h1>
                <p className="text-gray-600 mt-1">Gérez et suivez tous vos projets IA</p>
              </div>
              <button 
                onClick={() => setCurrentView('createProject')}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-lg hover:from-purple-700 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-lg flex items-center space-x-2"
              >
                <Plus className="w-5 h-5" />
                <span>Nouveau Projet</span>
              </button>
            </div>
          </div>

          <div className="p-8">
            {/* Filtres */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center space-x-2">
                  <Search className="w-5 h-5 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Rechercher un projet..."
                    className="border-none outline-none bg-transparent"
                  />
                </div>
                <div className="flex items-center space-x-4">
                  <select className="border border-gray-300 rounded-lg px-3 py-2">
                    <option>Tous les statuts</option>
                    <option>Actif</option>
                    <option>Brouillon</option>
                    <option>Terminé</option>
                  </select>
                  <select className="border border-gray-300 rounded-lg px-3 py-2">
                    <option>Toutes les urgences</option>
                    <option>Élevée</option>
                    <option>Moyenne</option>
                    <option>Faible</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Liste des projets */}
            <div className="space-y-6">
              {projects.map(project => (
                <div key={project.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          project.status === 'active' ? 'bg-green-100 text-green-700' :
                          project.status === 'draft' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {project.status === 'active' ? 'Actif' : 
                           project.status === 'draft' ? 'Brouillon' : 'Terminé'}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          project.urgency === 'high' ? 'bg-red-100 text-red-700' :
                          project.urgency === 'medium' ? 'bg-orange-100 text-orange-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {project.urgency === 'high' ? 'Urgent' : 
                           project.urgency === 'medium' ? 'Moyen' : 'Normal'}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <DollarSign className="w-4 h-4 text-green-500" />
                          <span>{project.budget}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-blue-500" />
                          <span>{project.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-purple-500" />
                          <span>{project.candidates} candidatures</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-orange-500" />
                          <span>{project.createdAt}</span>
                        </div>
                      </div>

                      <div className="mt-4">
                        <p className="text-sm text-gray-500 mb-2">Compétences requises :</p>
                        <div className="flex flex-wrap gap-2">
                          {project.skills.map(skill => (
                            <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 ml-6">
                      <button className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors">
                        <Edit className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Vue Création de projet
  if (currentView === 'createProject') {
    return (
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 overflow-auto">
          <div className="bg-white border-b border-gray-200 px-8 py-6">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setCurrentView('projects')}
                className="text-purple-600 hover:text-purple-800 font-medium"
              >
                ← Retour aux projets
              </button>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Créer un Nouveau Projet</h1>
                <p className="text-gray-600 mt-1">Décrivez votre projet IA pour attirer les meilleurs développeurs</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <div className="space-y-8">
                  {/* Informations générales */}
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Informations Générales</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Titre du projet *</label>
                        <input 
                          type="text" 
                          placeholder="Ex: Chatbot IA pour service client"
                          onChange={(e) => handleInputChange('title', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Catégorie *</label>
                        <select 
                          onChange={(e) => handleInputChange('category', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        >
                          <option value="">Sélectionnez une catégorie</option>
                          <option value="machine-learning">Machine Learning</option>
                          <option value="nlp">Natural Language Processing</option>
                          <option value="computer-vision">Computer Vision</option>
                          <option value="automation">Automatisation RPA</option>
                          <option value="data-science">Data Science</option>
                          <option value="ai-integration">Intégration IA</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Description détaillée *</label>
                      <textarea 
                        rows={6}
                        placeholder="Décrivez votre projet en détail : objectifs, fonctionnalités attendues, contraintes techniques..."
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Budget et durée */}
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Budget et Délais</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Budget minimum *</label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                          <input 
                            type="number" 
                            placeholder="5000"
                            onChange={(e) => handleInputChange('budgetMin', e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Budget maximum *</label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                          <input 
                            type="number" 
                            placeholder="15000"
                            onChange={(e) => handleInputChange('budgetMax', e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Durée estimée *</label>
                        <select 
                          onChange={(e) => handleInputChange('duration', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        >
                          <option value="">Sélectionnez</option>
                          <option value="1-month">1 mois</option>
                          <option value="2-months">2 mois</option>
                          <option value="3-months">3 mois</option>
                          <option value="6-months">6 mois</option>
                          <option value="12-months">12+ mois</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Urgence du projet</label>
                        <div className="space-y-3">
                          {['low', 'medium', 'high'].map(urgency => (
                            <label key={urgency} className="flex items-center space-x-3">
                              <input 
                                type="radio" 
                                name="urgency" 
                                value={urgency}
                                onChange={(e) => handleInputChange('urgency', e.target.value)}
                                className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                              />
                              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                urgency === 'high' ? 'bg-red-100 text-red-700' :
                                urgency === 'medium' ? 'bg-orange-100 text-orange-700' :
                                'bg-blue-100 text-blue-700'
                              }`}>
                                {urgency === 'high' ? 'Urgent (1-2 semaines)' : 
                                 urgency === 'medium' ? 'Moyen (1 mois)' : 'Normal (flexible)'}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Mode de travail</label>
                        <div className="space-y-3">
                          {['remote', 'hybrid', 'onsite'].map(mode => (
                            <label key={mode} className="flex items-center space-x-3">
                              <input 
                                type="radio" 
                                name="workMode" 
                                value={mode}
                                onChange={(e) => handleInputChange('workMode', e.target.value)}
                                className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                              />
                              <span>
                                {mode === 'remote' ? 'Télétravail complet' : 
                                 mode === 'hybrid' ? 'Hybride (télétravail + présentiel)' : 'Présentiel uniquement'}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Compétences requises */}
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Compétences et Technologies</h2>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Compétences principales requises *</label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {[
                            'Python', 'JavaScript', 'TensorFlow', 'PyTorch', 
                            'OpenAI API', 'Hugging Face', 'React', 'Node.js',
                            'Docker', 'AWS', 'Azure', 'GCP',
                            'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision',
                            'RPA', 'UiPath', 'Automation Anywhere', 'Data Science'
                          ].map(skill => (
                            <label key={skill} className="flex items-center space-x-2">
                              <input 
                                type="checkbox" 
                                value={skill}
                                onChange={(e) => {
                                  const skills = projectForm.skills || [];
                                  if (e.target.checked) {
                                    handleInputChange('skills', [...skills, skill]);
                                  } else {
                                    handleInputChange('skills', skills.filter(s => s !== skill));
                                  }
                                }}
                                className="w-4 h-4 text-purple-600 focus:ring-purple-500 rounded"
                              />
                              <span className="text-sm">{skill}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Niveau d'expérience souhaité</label>
                        <select 
                          onChange={(e) => handleInputChange('experienceLevel', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        >
                          <option value="">Sélectionnez le niveau</option>
                          <option value="junior">Junior (0-2 ans)</option>
                          <option value="mid">Intermédiaire (3-5 ans)</option>
                          <option value="senior">Senior (5+ ans)</option>
                          <option value="expert">Expert (10+ ans)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Technologies supplémentaires (optionnel)</label>
                        <textarea 
                          rows={3}
                          placeholder="Mentionnez d'autres technologies, frameworks ou outils spécifiques..."
                          onChange={(e) => handleInputChange('additionalTech', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Critères de sélection */}
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Critères de Sélection</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Localisation</label>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <input 
                              type="text" 
                              placeholder="Paris, France ou Europe"
                              onChange={(e) => handleInputChange('location', e.target.value)}
                              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                          </div>
                          <label className="flex items-center space-x-2">
                            <input 
                              type="checkbox" 
                              onChange={(e) => handleInputChange('remoteOk', e.target.checked)}
                              className="w-4 h-4 text-purple-600 focus:ring-purple-500 rounded"
                            />
                            <span className="text-sm">Accepter les candidats en télétravail</span>
                          </label>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Nombre de développeurs</label>
                        <select 
                          onChange={(e) => handleInputChange('teamSize', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        >
                          <option value="1">1 développeur</option>
                          <option value="2-3">2-3 développeurs</option>
                          <option value="4-5">4-5 développeurs</option>
                          <option value="team">Équipe complète (6+)</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Critères prioritaires</label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                          'Portfolio démontré', 'Expérience secteur', 'Références clients',
                          'Certifications', 'Communication', 'Réactivité',
                          'Prix compétitif', 'Disponibilité immédiate', 'Équipe locale'
                        ].map(criteria => (
                          <label key={criteria} className="flex items-center space-x-2">
                            <input 
                              type="checkbox" 
                              value={criteria}
                              onChange={(e) => {
                                const criterias = projectForm.criteria || [];
                                if (e.target.checked) {
                                  handleInputChange('criteria', [...criterias, criteria]);
                                } else {
                                  handleInputChange('criteria', criterias.filter(c => c !== criteria));
                                }
                              }}
                              className="w-4 h-4 text-purple-600 focus:ring-purple-500 rounded"
                            />
                            <span className="text-sm">{criteria}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Informations complémentaires */}
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Informations Complémentaires</h2>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Contexte de l'entreprise</label>
                        <textarea 
                          rows={4}
                          placeholder="Présentez votre entreprise, votre secteur d'activité, l'équipe technique existante..."
                          onChange={(e) => handleInputChange('companyContext', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Livrables attendus</label>
                        <textarea 
                          rows={4}
                          placeholder="Décrivez les livrables attendus : code source, documentation, formation, mise en production..."
                          onChange={(e) => handleInputChange('deliverables', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Contact principal</label>
                          <input 
                            type="text" 
                            placeholder="Nom du responsable projet"
                            onChange={(e) => handleInputChange('contactName', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Email de contact</label>
                          <input 
                            type="email" 
                            placeholder="contact@entreprise.com"
                            onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex justify-between items-center pt-8 border-t border-gray-200">
                    <button 
                      onClick={() => setCurrentView('projects')}
                      className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium transition-colors"
                    >
                      Annuler
                    </button>
                    
                    <div className="flex space-x-4">
                      <button 
                        onClick={() => {
                          console.log('Projet sauvegardé en brouillon:', projectForm);
                          alert('Projet sauvegardé en brouillon !');
                        }}
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                      >
                        Sauvegarder en brouillon
                      </button>
                      
                      <button 
                        onClick={handleCreateProject}
                        className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-lg hover:from-purple-700 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-lg font-medium"
                      >
                        Publier le projet
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Vue Candidatures
  if (currentView === 'candidates') {
    const candidates = [
      {
        id: 1,
        name: "Marie Dubois",
        title: "ML Engineer Senior",
        experience: "7 ans",
        rating: 4.9,
        hourlyRate: "85€/h",
        location: "Paris, France",
        skills: ["Python", "TensorFlow", "NLP", "AWS"],
        projectId: 1,
        projectTitle: "Chatbot IA Customer Service",
        proposedBudget: "18,000€",
        timeline: "2.5 mois",
        coverLetter: "J'ai développé plusieurs chatbots similaires pour des entreprises du secteur financier...",
        portfolio: ["Chatbot Crédit Agricole", "Assistant virtuel Orange", "Bot e-commerce Cdiscount"],
        availability: "Disponible immédiatement"
      },
      {
        id: 2,
        name: "Thomas Chen",
        title: "Data Scientist Expert",
        experience: "10 ans",
        rating: 4.8,
        hourlyRate: "95€/h",
        location: "Lyon, France",
        skills: ["Python", "PyTorch", "Computer Vision", "MLOps"],
        projectId: 1,
        projectTitle: "Chatbot IA Customer Service",
        proposedBudget: "22,000€",
        timeline: "3 mois",
        coverLetter: "Spécialisé en IA conversationnelle depuis 5 ans, j'ai créé des solutions pour...",
        portfolio: ["Chatbot SNCF", "IA Conversationnelle BNP", "Assistant vocal EDF"],
        availability: "Disponible dans 2 semaines"
      },
      {
        id: 3,
        name: "Sarah Johnson",
        title: "RPA Developer",
        experience: "5 ans",
        rating: 4.7,
        hourlyRate: "70€/h",
        location: "Remote (UK)",
        skills: ["UiPath", "Python", "Power Automate", "API"],
        projectId: 2,
        projectTitle: "Automatisation RPA Comptabilité",
        proposedBudget: "9,500€",
        timeline: "1.5 mois",
        coverLetter: "Experte en automatisation des processus financiers avec plus de 50 projets...",
        portfolio: ["Automatisation Société Générale", "RPA Decathlon", "Bot comptable Carrefour"],
        availability: "Disponible immédiatement"
      }
    ];

    return (
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 overflow-auto">
          <div className="bg-white border-b border-gray-200 px-8 py-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Candidatures Reçues</h1>
                <p className="text-gray-600 mt-1">Découvrez les développeurs intéressés par vos projets</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-purple-700">{candidates.length}</p>
                <p className="text-sm text-gray-500">candidatures actives</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Filtres */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
              <div className="flex flex-wrap items-center gap-4">
                <select className="border border-gray-300 rounded-lg px-3 py-2">
                  <option>Tous les projets</option>
                  <option>Chatbot IA Customer Service</option>
                  <option>Automatisation RPA Comptabilité</option>
                </select>
                <select className="border border-gray-300 rounded-lg px-3 py-2">
                  <option>Toutes les notes</option>
                  <option>5 étoiles</option>
                  <option>4+ étoiles</option>
                  <option>3+ étoiles</option>
                </select>
                <select className="border border-gray-300 rounded-lg px-3 py-2">
                  <option>Toutes les localisations</option>
                  <option>France</option>
                  <option>Europe</option>
                  <option>Remote</option>
                </select>
              </div>
            </div>

            {/* Liste des candidatures */}
            <div className="space-y-6">
              {candidates.map(candidate => (
                <div key={candidate.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-cyan-100 rounded-full flex items-center justify-center">
                        <span className="text-xl font-bold text-purple-700">
                          {candidate.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{candidate.name}</h3>
                        <p className="text-purple-600 font-medium">{candidate.title}</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span>{candidate.rating}</span>
                          </div>
                          <span>•</span>
                          <span>{candidate.experience} d'expérience</span>
                          <span>•</span>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{candidate.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-lg font-bold text-green-600">{candidate.proposedBudget}</p>
                      <p className="text-sm text-gray-500">{candidate.timeline}</p>
                      <p className="text-sm text-gray-500 mt-1">{candidate.hourlyRate}</p>
                    </div>
                  </div>

                  {/* Projet candidaté */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <p className="text-sm text-gray-600 mb-1">Candidature pour :</p>
                    <p className="font-semibold text-gray-900">{candidate.projectTitle}</p>
                  </div>

                  {/* Compétences */}
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Compétences :</p>
                    <div className="flex flex-wrap gap-2">
                      {candidate.skills.map(skill => (
                        <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Lettre de motivation */}
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Message du candidat :</p>
                    <p className="text-gray-600 text-sm">{candidate.coverLetter}</p>
                  </div>

                  {/* Portfolio */}
                  <div className="mb-6">
                    <p className="text-sm font-medium text-gray-700 mb-2">Projets similaires :</p>
                    <div className="flex flex-wrap gap-2">
                      {candidate.portfolio.map(project => (
                        <span key={project} className="px-2 py-1 bg-cyan-100 text-cyan-700 rounded text-sm">
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Disponibilité et actions */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-green-600 font-medium">{candidate.availability}</span>
                    </div>

                    <div className="flex space-x-3">
                      <button className="px-4 py-2 text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        Voir profil
                      </button>
                      <button className="px-4 py-2 text-purple-600 hover:text-purple-800 border border-purple-300 rounded-lg hover:bg-purple-50 transition-colors">
                        Contacter
                      </button>
                      <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-lg hover:from-purple-700 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-lg">
                        Accepter
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
