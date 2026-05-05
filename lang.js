(function () {
    var translations = {
        en: {
            nav_logo: "Portfolio",
            nav_home: "Home",
            nav_projects: "Projects",
            nav_portfolio: "Portfolio",
            nav_skills: "Skills",
            nav_contact: "Contact",
            nav_hire: "Hire Me!",

            hero_greeting: "Hello, <span>my name is</span>",
            hero_tagline: "Turning data into decisions that drive growth.",
            hero_desc: "As a data scientist, I leverage advanced statistical analysis,<br> machine learning, and data visualization techniques to extract insights from complex datasets and drive strategic decision-making.<br> With a strong background in computer science and a passion for problem-solving,<br> I thrive on transforming raw data into actionable intelligence for business growth.",
            hero_download_cv: "Download Resume/CV",
            hero_my_skills: "My Skills",
            scroll_bottom: "Scroll Bottom",

            skills_title: "My Skills",
            da_title: "Data Analysis",
            da_desc: "I have experience in analyzing and interpreting complex data sets to extract valuable insights.<br>Relevant Skills: SQL, R, Excel, Python",
            ml_title: "Machine Learning",
            ml_desc: "I am proficient in developing and implementing machine learning algorithms for predictive modeling and pattern recognition.<br>Relevant Skills: Machine Learning, DeepLearning, Big Data",
            viz_title: "Data Visualization",
            viz_desc: "I excel in creating visually appealing and informative data visualizations to communicate findings effectively.<br>Relevant Skills: Tableau, Dashboard, Seaborn, Matplotlib",
            ai_title: "AI Engineering",
            ai_desc: "I build production AI systems including RAG (Retrieval-Augmented Generation), LLM integrations, and intelligent applications.<br>Relevant Skills: RAG, LangChain, Vector DBs, Embeddings, Prompt Engineering",

            projects_title: "Projects",
            brain_tumor_title: "Brain Tumor Classification",
            aws_title: "Autonomous Car Programming using AWS DeepRacer",
            house_title: "House Data Prediction",
            stock_title: "Stock Market Prediction",
            fraud_title: "Credit Card Fraud Detection",
            view_project_overlay: "View project",
            view_project_btn: "View Project",

            contact_title: "Contact Me",
            label_name: "Name",
            ph_name: "Your name",
            label_email: "Email",
            ph_email: "you@example.com",
            label_message: "Message",
            ph_message: "Your message...",
            send_btn: "Send message",

            footer_projects: "Projects",
            footer_contact: "Contact",
            footer_resume: "Resume",
            footer_credit: "© 2025 Shouhaybou Mbow · All Rights Reserved",

            back_to_projects: "← Back to Projects",
            download_code: "Download Code",
            read_paper: "Read Paper",
            view_on_github: "View on GitHub",
            back_to_projects_inline: "Back to Projects",

            bt_title: "Brain Tumor Detection Project",
            bt_desc: "This project involves the development of a machine learning model to detect brain tumors from MRI scans. The model leverages advanced deep learning techniques to accurately classify images as either containing a tumor or not. The project includes data preprocessing, model training, and evaluation phases, ensuring high accuracy and reliability.",
            bt_details: "Project Details",
            bt_tech: "<strong>Technologies Used:</strong> Python, TensorFlow, Keras, OpenCV<br><strong>Data Source:</strong> Kaggle<br><strong>Key Features:</strong>",
            bt_f1: "Data preprocessing and augmentation",
            bt_f2: "Custom convolutional neural network (CNN) architecture",
            bt_f3: "Model evaluation and validation",
            bt_f4: "F1-score computed on the test dataset",

            aws_title_page: "Autonomous Car Programming for AWS DeepRacer",
            aws_desc: "This project focuses on training an autonomous vehicle using AWS DeepRacer. AWS DeepRacer allows you to get hands-on with reinforcement learning, an advanced machine learning technique. The project involves setting up the simulation environment, training the model, and evaluating its performance. I have presented and effectively communicated complex technical concepts and results to both technical and non-technical audiences in multiple symposiums. Two videos which show the training phase and testing phase can be viewed at the bottom.",
            aws_details: "Project Details",
            aws_tech: "<strong>Technologies Used:</strong> AWS DeepRacer, Python, Reinforcement Learning<br><strong>Key Features:</strong>",
            aws_f1: "Simulation setup in AWS DeepRacer console",
            aws_f2: "Custom reward function development",
            aws_f3: "Training and evaluating the reinforcement learning model",
            aws_f4: "Deployment for real-world testing",
            aws_code_title: "Some of the Code",
            aws_poster_title: "Poster",
            aws_videos_title: "Videos",

            housing_title: "Housing Data Prediction Project",
            housing_desc: "This project involves building a predictive model to forecast housing prices using a variety of data features. The project includes data preprocessing, feature engineering, model training, and evaluation. The model aims to provide accurate predictions to assist in making informed decisions in the real estate market.",
            housing_details: "Project Details",
            housing_tech: "<strong>Technologies Used:</strong> Python, Scikit-learn, Pandas, NumPy<br><strong>Data Source:</strong> Github<br><strong>Key Features:</strong>",
            housing_f1: "Data cleaning and preprocessing",
            housing_f2: "Exploratory data analysis and feature engineering",
            housing_f3: "Model training with various regression algorithms",
            housing_f4: "Model evaluation and selection",
            housing_code_title: "Some of the Code",

            stock_title_page: "Stock Market Prediction",
            stock_overview: "Project Overview",
            stock_overview_desc: "Data collection and preprocessing from financial APIs.<br>Conducted Exploratory Data Analysis (EDA) to analyze market trends and identify patterns.<br>Implemented Recurrent Neural Networks (RNN) for stock market prediction.<br>Evaluated the RNN model using performance metrics such as Mean Absolute Error (MAE) and Root Mean Squared Error (RMSE).<br>Visualized and analyzed predictions versus actual stock prices to assess model accuracy and performance.",
            stock_tech: "Technologies Used",
            stock_features: "Key Features",
            stock_f1: "Data collection and preprocessing from financial APIs.",
            stock_f2: "Exploratory Data Analysis (EDA) to understand market trends.",
            stock_f3: "Implementation of various machine learning models like Linear Regression, Decision Trees, and LSTM neural networks.",
            stock_f4: "Model evaluation using metrics such as Mean Absolute Error (MAE) and Root Mean Squared Error (RMSE).",
            stock_f5: "Visualization of predictions vs actual stock prices.",
            stock_results: "Results",
            stock_results_desc: "The model achieved significant accuracy in predicting stock prices, demonstrating the potential of machine learning in financial forecasting.",

            fraud_title_page: "Credit Card Fraud Detection",
            fraud_overview: "Project Overview",
            fraud_overview_desc: "This project focuses on detecting fraudulent transactions in credit card data using machine learning algorithms. By analyzing transactional data and identifying anomalous patterns, the goal is to build a robust model that can accurately flag fraudulent activities and minimize financial losses for credit card companies and users.",
            fraud_tech: "Technologies Used",
            fraud_features: "Key Features",
            fraud_f1: "Data preprocessing to handle imbalanced datasets and normalize features.",
            fraud_f2: "Application of machine learning models such as Logistic Regression, Random Forest, and Neural Networks.",
            fraud_f3: "Evaluation using metrics like Precision, Recall, and F1-score to assess model performance.",
            fraud_results: "Results",
            fraud_results_desc: "The developed model achieved high accuracy of 93% in detecting fraudulent transactions, demonstrating its effectiveness in safeguarding credit card transactions against potential fraud."
        },
        fr: {
            nav_logo: "Portfolio",
            nav_home: "Accueil",
            nav_projects: "Projets",
            nav_portfolio: "Portfolio",
            nav_skills: "Compétences",
            nav_contact: "Contact",
            nav_hire: "Engagez-moi !",

            hero_greeting: "Bonjour, <span>je m'appelle</span>",
            hero_tagline: "Transformer les données en décisions qui stimulent la croissance.",
            hero_desc: "En tant que data scientist, j'exploite l'analyse statistique avancée,<br> le machine learning et la visualisation de données pour extraire des insights de jeux de données complexes et orienter les décisions stratégiques.<br> Grâce à une solide formation en informatique et une passion pour la résolution de problèmes,<br> je transforme les données brutes en intelligence actionnable pour la croissance des entreprises.",
            hero_download_cv: "Télécharger le CV",
            hero_my_skills: "Mes compétences",
            scroll_bottom: "Bas de page",

            skills_title: "Mes Compétences",
            da_title: "Analyse de données",
            da_desc: "J'ai de l'expérience dans l'analyse et l'interprétation de jeux de données complexes.<br>Compétences : SQL, R, Excel, Python",
            ml_title: "Apprentissage automatique",
            ml_desc: "Je maîtrise le développement d'algorithmes de machine learning pour la modélisation prédictive.<br>Compétences : Machine Learning, Deep Learning, Big Data",
            viz_title: "Visualisation de données",
            viz_desc: "J'excelle dans la création de visualisations de données attrayantes pour communiquer les résultats.<br>Compétences : Tableau, Dashboard, Seaborn, Matplotlib",
            ai_title: "Ingénierie IA",
            ai_desc: "Je développe des systèmes IA en production : RAG, intégrations LLM et applications intelligentes.<br>Compétences : RAG, LangChain, Bases vectorielles, Embeddings, Prompt Engineering",

            projects_title: "Projets",
            brain_tumor_title: "Classification de tumeur cérébrale",
            aws_title: "Voiture autonome avec AWS DeepRacer",
            house_title: "Prédiction des prix immobiliers",
            stock_title: "Prédiction du marché boursier",
            fraud_title: "Détection de fraude bancaire",
            view_project_overlay: "Voir le projet",
            view_project_btn: "Voir le projet",

            contact_title: "Contactez-moi",
            label_name: "Nom",
            ph_name: "Votre nom",
            label_email: "E-mail",
            ph_email: "vous@exemple.com",
            label_message: "Message",
            ph_message: "Votre message...",
            send_btn: "Envoyer",

            footer_projects: "Projets",
            footer_contact: "Contact",
            footer_resume: "CV",
            footer_credit: "© 2025 Shouhaybou Mbow · Tous droits réservés",

            back_to_projects: "← Retour aux projets",
            download_code: "Télécharger le code",
            read_paper: "Lire l'article",
            view_on_github: "Voir sur GitHub",
            back_to_projects_inline: "Retour aux projets",

            bt_title: "Projet de détection de tumeur cérébrale",
            bt_desc: "Ce projet porte sur le développement d'un modèle de machine learning pour détecter les tumeurs cérébrales à partir d'IRM. Il utilise des techniques avancées de deep learning pour classifier les images. Le projet comprend le prétraitement des données, l'entraînement et l'évaluation du modèle.",
            bt_details: "Détails du projet",
            bt_tech: "<strong>Technologies :</strong> Python, TensorFlow, Keras, OpenCV<br><strong>Source des données :</strong> Kaggle<br><strong>Fonctionnalités :</strong>",
            bt_f1: "Prétraitement et augmentation des données",
            bt_f2: "Architecture CNN personnalisée",
            bt_f3: "Évaluation et validation du modèle",
            bt_f4: "Score F1 calculé sur le jeu de test",

            aws_title_page: "Programmation de voiture autonome pour AWS DeepRacer",
            aws_desc: "Ce projet se concentre sur l'entraînement d'un véhicule autonome avec AWS DeepRacer via l'apprentissage par renforcement. Il comprend la configuration de la simulation, l'entraînement du modèle et l'évaluation des performances. J'ai présenté ces travaux dans plusieurs symposiums.",
            aws_details: "Détails du projet",
            aws_tech: "<strong>Technologies :</strong> AWS DeepRacer, Python, Apprentissage par renforcement<br><strong>Fonctionnalités :</strong>",
            aws_f1: "Configuration de la simulation dans la console AWS DeepRacer",
            aws_f2: "Développement d'une fonction de récompense personnalisée",
            aws_f3: "Entraînement et évaluation du modèle",
            aws_f4: "Déploiement pour les tests réels",
            aws_code_title: "Extrait du code",
            aws_poster_title: "Affiche",
            aws_videos_title: "Vidéos",

            housing_title: "Projet de prédiction des prix immobiliers",
            housing_desc: "Ce projet consiste à construire un modèle prédictif pour estimer les prix immobiliers. Il comprend le prétraitement des données, l'ingénierie des variables, l'entraînement et l'évaluation du modèle afin de fournir des prédictions précises.",
            housing_details: "Détails du projet",
            housing_tech: "<strong>Technologies :</strong> Python, Scikit-learn, Pandas, NumPy<br><strong>Source des données :</strong> Github<br><strong>Fonctionnalités :</strong>",
            housing_f1: "Nettoyage et prétraitement des données",
            housing_f2: "Analyse exploratoire et ingénierie des variables",
            housing_f3: "Entraînement avec divers algorithmes de régression",
            housing_f4: "Évaluation et sélection du modèle",
            housing_code_title: "Extrait du code",

            stock_title_page: "Prédiction du marché boursier",
            stock_overview: "Aperçu du projet",
            stock_overview_desc: "Collecte et prétraitement de données depuis des API financières.<br>Analyse exploratoire (EDA) pour identifier les tendances du marché.<br>Implémentation de réseaux neuronaux récurrents (RNN) pour la prédiction boursière.<br>Évaluation avec MAE et RMSE.<br>Visualisation des prédictions par rapport aux prix réels.",
            stock_tech: "Technologies utilisées",
            stock_features: "Fonctionnalités clés",
            stock_f1: "Collecte et prétraitement des données depuis des API financières.",
            stock_f2: "Analyse exploratoire (EDA) pour comprendre les tendances du marché.",
            stock_f3: "Implémentation de modèles ML : Régression linéaire, Arbres de décision, LSTM.",
            stock_f4: "Évaluation avec MAE et RMSE.",
            stock_f5: "Visualisation des prédictions vs prix réels.",
            stock_results: "Résultats",
            stock_results_desc: "Le modèle a atteint une précision significative dans la prédiction des prix boursiers, démontrant le potentiel du machine learning en finance.",

            fraud_title_page: "Détection de fraude bancaire",
            fraud_overview: "Aperçu du projet",
            fraud_overview_desc: "Ce projet vise à détecter les transactions frauduleuses dans des données de carte bancaire via des algorithmes de machine learning. L'objectif est de construire un modèle robuste pour signaler les activités frauduleuses et réduire les pertes financières.",
            fraud_tech: "Technologies utilisées",
            fraud_features: "Fonctionnalités clés",
            fraud_f1: "Prétraitement pour gérer les données déséquilibrées et normaliser les variables.",
            fraud_f2: "Application de modèles ML : Régression logistique, Random Forest, Réseaux de neurones.",
            fraud_f3: "Évaluation avec Précision, Rappel et Score F1.",
            fraud_results: "Résultats",
            fraud_results_desc: "Le modèle a atteint une précision de 93% dans la détection des transactions frauduleuses."
        }
    };

    function applyLang(lang) {
        document.documentElement.lang = lang;
        localStorage.setItem("lang", lang);

        document.querySelectorAll("[data-i18n]").forEach(function (el) {
            var key = el.getAttribute("data-i18n");
            if (translations[lang][key] !== undefined) {
                el.innerHTML = translations[lang][key];
            }
        });

        document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
            var key = el.getAttribute("data-i18n-ph");
            if (translations[lang][key] !== undefined) {
                el.placeholder = translations[lang][key];
            }
        });

        var btn = document.getElementById("lang-toggle");
        if (btn) btn.textContent = lang === "en" ? "FR" : "EN";

        // Re-initialise Typed.js if on the homepage
        var typedEl = document.querySelector(".input");
        if (typedEl && window.Typed) {
            if (window.__typedInstance) {
                window.__typedInstance.destroy();
                typedEl.textContent = "";
            }
            var strings = lang === "en"
                ? ["Data Scientist", "Data Analyst", "Machine Learning Engineer", "AI Engineer"]
                : ["Scientifique des données", "Analyste de données", "Ingénieur Machine Learning", "Ingénieur IA"];
            window.__typedInstance = new Typed(".input", {
                strings: strings,
                typeSpeed: 80,
                backSpeed: 70,
                loop: true
            });
        }
    }

    function init() {
        var saved = localStorage.getItem("lang") || "en";
        applyLang(saved);

        var btn = document.getElementById("lang-toggle");
        if (btn) {
            btn.addEventListener("click", function () {
                var current = localStorage.getItem("lang") || "en";
                applyLang(current === "en" ? "fr" : "en");
            });
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
