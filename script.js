const questions = [
    {
        id: 1,
        type: "QCU",
        question: "Quel est le critère d'éligibilité pour l'entretien femme enceinte (EFE) ?",
        options: [
            "Uniquement les femmes au premier trimestre",
            "Toute femme enceinte, quel que soit le terme de la grossesse",
            "Uniquement les femmes avec un traitement chronique",
            "Uniquement les femmes multipares"
        ],
        correct: [1],
        explanation: "L'entretien EFE est universel : toute femme enceinte est éligible, quel que soit le terme de sa grossesse. C'est un entretien de prévention non renouvelable (1 seul par grossesse)."
    },
    {
        id: 2,
        type: "QCM",
        question: "Parmi ces médicaments, lesquels sont considérés comme tératogènes majeurs ? (Plusieurs réponses possibles)",
        options: [
            "Isotrétinoïne (Roaccutane®)",
            "Valproate de sodium",
            "Paracétamol",
            "AVK (Anti-Vitamine K)"
        ],
        correct: [0, 1, 3],
        explanation: "Les tératogènes majeurs incluent l'isotrétinoïne, le valproate et les AVK. Le paracétamol est l'antalgique de référence pendant la grossesse (si adapté)."
    },
    {
        id: 3,
        type: "QCU",
        question: "À partir de quel mois de grossesse les AINS sont-ils CONTRE-INDIQUÉS ?",
        options: [
            "Dès le début de grossesse",
            "À partir du 3ème mois",
            "À partir du 6ème mois (début du T3)",
            "Jamais contre-indiqués"
        ],
        correct: [2],
        explanation: "Les AINS sont déconseillés durant toute la grossesse, mais deviennent CONTRE-INDIQUÉS à partir du 6ème mois (T3) en raison du risque rénal et cardiopulmonaire fœtal."
    },
    {
        id: 4,
        type: "QCM",
        question: "Quels sont les messages clés à transmettre systématiquement lors d'un EFE ? (Plusieurs réponses possibles)",
        options: [
            "Aucune automédication sans avis professionnel",
            "Repérer et lire les pictogrammes grossesse sur les boîtes",
            "La vaccination antigrippale est contre-indiquée pendant la grossesse",
            "Prudence avec la phytothérapie et les huiles essentielles"
        ],
        correct: [0, 1, 3],
        explanation: "Les messages clés incluent : zéro automédication, attention aux pictogrammes grossesse, et prudence avec phyto/HE. La vaccination antigrippale et le DTPCa sont au contraire RECOMMANDÉS."
    },
    {
        id: 5,
        type: "QCU",
        question: "Combien d'entretiens EFE peuvent être facturés par grossesse ?",
        options: [
            "Aucun, c'est un conseil gratuit",
            "1 seul entretien par grossesse",
            "3 entretiens (un par trimestre)",
            "Autant que nécessaire"
        ],
        correct: [1],
        explanation: "L'EFE est un acte conventionné NON RENOUVELABLE : 1 seul entretien par grossesse, facturé 5€ TTC (70% AMO ou 100% en maternité)."
    },
    {
        id: 6,
        type: "QCU",
        question: "Une patiente enceinte de 2 mois sous Levothyrox® vous demande si elle peut continuer son traitement. Que répondez-vous ?",
        options: [
            "Arrêtez immédiatement, ce médicament est tératogène",
            "Ne jamais arrêter sans avis médical, vérifiez le suivi TSH rapproché",
            "Réduisez la dose de moitié pendant la grossesse",
            "Remplacez par un traitement naturel"
        ],
        correct: [1],
        explanation: "Les traitements thyroïdiens (Levothyrox®) ne doivent JAMAIS être arrêtés sans avis. Le suivi TSH doit être rapproché pendant la grossesse. C'est un traitement compatible et essentiel."
    },
    {
        id: 7,
        type: "QCM",
        question: "Quelles situations nécessitent une orientation immédiate (red flags) ? (Plusieurs réponses possibles)",
        options: [
            "Prise d'un tératogène en cours",
            "Demande d'acide folique au 5ème mois",
            "Automédication d'AINS au 3ème trimestre",
            "Patiente sous paracétamol"
        ],
        correct: [0, 2],
        explanation: "Red flags : prise de tératogène (→ stopper/appeler prescripteur immédiatement) et AINS au T3 (contre-indication absolue). L'acide folique tardif n'est pas une urgence, le paracétamol est adapté."
    },
    {
        id: 8,
        type: "QCU",
        question: "Quel est le tarif de l'entretien femme enceinte (EFE) en métropole ?",
        options: [
            "Gratuit",
            "5 € TTC",
            "10 € TTC",
            "15 € TTC"
        ],
        correct: [1],
        explanation: "L'EFE est facturé 5 € TTC en métropole (×1,05 en outre-mer = 5,25€). Prise en charge : 70% AMO ou 100% en maternité. Acte isolé non cumulable."
    },
    {
        id: 9,
        type: "QCM",
        question: "Quelles vaccinations sont RECOMMANDÉES pendant la grossesse ? (Plusieurs réponses possibles)",
        options: [
            "Vaccination antigrippale",
            "DTPCa (diphtérie, tétanos, poliomyélite, coqueluche)",
            "ROR (rougeole, oreillons, rubéole)",
            "Vaccination contre la varicelle"
        ],
        correct: [0, 1],
        explanation: "Vaccinations recommandées : grippe saisonnière et DTPCa (protection coqueluche du nouveau-né). ROR et varicelle sont des vaccins vivants CONTRE-INDIQUÉS pendant la grossesse."
    },
    {
        id: 10,
        type: "QCU",
        question: "Une patiente enceinte demande un complément alimentaire à base de vitamine A. Que lui conseillez-vous ?",
        options: [
            "C'est parfait pour la grossesse",
            "Attention, pas de vitamine A en excès (risque tératogène), privilégiez les compléments spécifiques grossesse",
            "Doublez la dose pour le développement du bébé",
            "Remplacez par de la vitamine D uniquement"
        ],
        correct: [1],
        explanation: "La vitamine A en excès est TÉRATOGÈNE. Il faut privilégier les compléments spécifiques grossesse (dosage adapté) et éviter l'automédication de vitamine A."
    },
    {
        id: 11,
        type: "QCM",
        question: "Quels sont les outils à remettre systématiquement lors d'un EFE ? (Plusieurs réponses possibles)",
        options: [
            "Flyer ANSM 'Enceinte, les médicaments...'",
            "Guide Assurance Maladie grossesse",
            "Bon de réduction pour la maternité",
            "Lien vers dossier ameli 'Grossesse en bonne santé'"
        ],
        correct: [0, 1, 3],
        explanation: "Outils à remettre : flyer ANSM (papier/mail), guide AM grossesse, et lien vers ressources ameli via Mon Espace Santé. Pas de bon de réduction."
    },
    {
        id: 12,
        type: "QCU",
        question: "Comment doit-on tracer un entretien EFE ?",
        options: [
            "Aucune traçabilité nécessaire",
            "Uniquement dans le logiciel de facturation",
            "Dans le DP/DMP : date, objet, éléments clés, et conserver une preuve",
            "Seulement si la patiente le demande"
        ],
        correct: [2],
        explanation: "La traçabilité est OBLIGATOIRE : noter dans le DP/DMP (date, objet, éléments clés) et conserver une preuve écrite. C'est une obligation médico-légale et de coordination."
    },
    {
        id: 13,
        type: "QCU",
        question: "Mme K., enceinte de 6 mois, vient avec une ordonnance d'ibuprofène prescrit par son dentiste pour des douleurs dentaires. Quelle est votre conduite ?",
        options: [
            "Délivrer normalement, c'est une ordonnance médicale",
            "Refuser la délivrance, contacter le prescripteur et proposer une alternative (paracétamol si adapté)",
            "Délivrer mais conseiller de réduire la dose",
            "Demander à la patiente de signer une décharge"
        ],
        correct: [1],
        explanation: "AINS contre-indiqués au T3 (6ème mois) : il faut REFUSER la délivrance, contacter immédiatement le prescripteur et proposer du paracétamol si adapté. C'est une obligation déontologique."
    },
    {
        id: 14,
        type: "QCM",
        question: "Quels éléments doivent être recueillis lors de l'entretien EFE ? (Plusieurs réponses possibles)",
        options: [
            "Ordonnances en cours",
            "Automédication (OTC, phyto, compléments)",
            "Revenus du foyer",
            "Huiles essentielles utilisées"
        ],
        correct: [0, 1, 3],
        explanation: "Le recueil doit être complet : ordonnances, OTC, phytothérapie, HE, compléments. Les revenus ne sont pas pertinents pour un EFE. L'objectif est d'identifier tous les produits à risque."
    },
    {
        id: 15,
        type: "QCU",
        question: "Quel est le délai optimal pour la supplémentation en acide folique ?",
        options: [
            "Dès le 3ème mois de grossesse",
            "4 semaines avant la conception et jusqu'à 8-12 semaines de grossesse",
            "Uniquement après l'accouchement",
            "Durant toute la grossesse"
        ],
        correct: [1],
        explanation: "L'acide folique doit être pris idéalement 4 semaines AVANT la conception et poursuivi jusqu'à 8-12 semaines de grossesse (fermeture du tube neural). C'est une prévention des anomalies du tube neural."
    }
];

let currentQuestion = 0;
let score = 0;
let userAnswers = [];

function init() {
    displayQuestion();
}

function displayQuestion() {
    const question = questions[currentQuestion];
    const content = document.getElementById('quizContent');
    
    let optionsHTML = '';
    const inputType = question.type === 'QCU' ? 'radio' : 'checkbox';
    
    question.options.forEach((option, index) => {
        optionsHTML += `
            <label class="option" data-index="${index}">
                <input type="${inputType}" name="question${question.id}" value="${index}">
                <span>${option}</span>
            </label>
        `;
    });

    content.innerHTML = `
        <div class="question-card active">
            <span class="question-type">${question.type} - ${question.type === 'QCU' ? '1 seule réponse' : 'Plusieurs réponses possibles'}</span>
            <h2 class="question-title">${question.question}</h2>
            <div class="options" id="options">
                ${optionsHTML}
            </div>
            <div class="feedback" id="feedback"></div>
            <div class="buttons">
                <button class="btn btn-secondary" onclick="previousQuestion()" ${currentQuestion === 0 ? 'disabled' : ''}>← Précédent</button>
                <button class="btn btn-primary" id="validateBtn" onclick="validateAnswer()">Valider</button>
            </div>
        </div>
    `;

    updateProgress();
    addOptionListeners();
}

function addOptionListeners() {
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.addEventListener('click', function() {
            const input = this.querySelector('input');
            if (input.type === 'radio') {
                document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
                this.classList.add('selected');
            } else {
                this.classList.toggle('selected');
            }
        });
    });
}

function validateAnswer() {
    const question = questions[currentQuestion];
    const selectedOptions = Array.from(document.querySelectorAll(`input[name="question${question.id}"]:checked`))
        .map(input => parseInt(input.value));

    if (selectedOptions.length === 0) {
        alert('Veuillez sélectionner au moins une réponse.');
        return;
    }

    const isCorrect = JSON.stringify(selectedOptions.sort()) === JSON.stringify(question.correct.sort());
    
    userAnswers.push({
        questionId: question.id,
        selected: selectedOptions,
        correct: question.correct,
        isCorrect: isCorrect
    });

    if (isCorrect) {
        score++;
    }

    // Désactiver les options
    document.querySelectorAll('.option').forEach(option => {
        option.classList.add('disabled');
        const index = parseInt(option.dataset.index);
        if (question.correct.includes(index)) {
            option.classList.add('correct');
        } else if (selectedOptions.includes(index)) {
            option.classList.add('incorrect');
        }
    });

    // Afficher le feedback
    const feedback = document.getElementById('feedback');
    feedback.className = `feedback show ${isCorrect ? 'correct' : 'incorrect'}`;
    feedback.innerHTML = `
        <div class="feedback-title">
            ${isCorrect ? '✅ Bonne réponse !' : '❌ Réponse incorrecte'}
        </div>
        <div>💡 ${question.explanation}</div>
    `;

    // Changer le bouton
    const validateBtn = document.getElementById('validateBtn');
    validateBtn.textContent = currentQuestion < questions.length - 1 ? 'Question suivante →' : 'Voir les résultats 🎯';
    validateBtn.onclick = currentQuestion < questions.length - 1 ? nextQuestion : showResults;

    updateScore();
}

function nextQuestion() {
    currentQuestion++;
    displayQuestion();
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
    }
}

function updateProgress() {
    const progress = ((currentQuestion) / questions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('progressText').textContent = `Question ${currentQuestion + 1}/${questions.length}`;
}

function updateScore() {
    document.getElementById('scoreText').textContent = `Score: ${score}/${questions.length}`;
}

function showResults() {
    const percentage = Math.round((score / questions.length) * 100);
    const content = document.getElementById('quizContent');
    const results = document.getElementById('results');
    
    content.style.display = 'none';
    results.classList.add('show');

    document.getElementById('scoreCircle').textContent = percentage + '%';
    
    let title, message, badgeClass, badgeText;
    
    if (percentage >= 90) {
        title = '🎉 Excellent !';
        message = 'Vous maîtrisez parfaitement la prise en charge pharmaceutique des femmes enceintes. Votre expertise est remarquable !';
        badgeClass = 'badge-excellent';
        badgeText = '⭐ Expert en conseil femme enceinte';
    } else if (percentage >= 75) {
        title = '👏 Très bien !';
        message = 'Vous avez une bonne compréhension de l\'entretien EFE. Continuez à approfondir certains points pour parfaire votre pratique.';
        badgeClass = 'badge-good';
        badgeText = '✅ Compétences solides';
    } else if (percentage >= 60) {
        title = '👍 Bien !';
        message = 'Vous avez les bases de l\'entretien femme enceinte. Il serait bénéfique de revoir certains concepts clés et les situations à risque.';
        badgeClass = 'badge-average';
        badgeText = '📚 À approfondir';
    } else {
        title = '💪 À améliorer';
        message = 'L\'entretien femme enceinte nécessite encore du travail. Reprenez les concepts fondamentaux et les messages clés pour sécuriser votre pratique.';
        badgeClass = 'badge-needs-improvement';
        badgeText = '📖 Révision nécessaire';
    }

    document.getElementById('resultsTitle').textContent = title;
    document.getElementById('resultsMessage').textContent = message + ` Vous avez répondu correctement à ${score} questions sur ${questions.length}.`;
    document.getElementById('badge').innerHTML = `<span class="badge ${badgeClass}">${badgeText}</span>`;
}

function showPractical() {
    document.getElementById('results').classList.remove('show');
    document.getElementById('practicalSection').classList.add('show');
}

function validateCase(caseNumber) {
    const selectedOption = document.querySelector(`input[name="case${caseNumber}"]:checked`);
    
    if (!selectedOption) {
        alert('Veuillez sélectionner une réponse.');
        return;
    }

    const correctAnswers = {
        1: 'b',
        2: 'b',
        3: 'b'
    };

    const feedbacks = {
        1: {
            correct: '✅ Excellente approche ! Vous communiquez clairement le risque des AINS, proposez une alternative adaptée (paracétamol) et adoptez une posture d\'écoute active en proposant un échange. C\'est une communication professionnelle exemplaire.',
            incorrect: '❌ Attention, votre approche manque de nuance ou de clarté. Il est important de : 1) Expliquer clairement que les AINS sont déconseillés dès le début et contre-indiqués au T3, 2) Proposer une alternative (paracétamol), 3) Adopter une communication empathique et rassurante.'
        },
        2: {
            correct: '✅ Parfait ! Vous rassurez la patiente, vous affirmez la compatibilité du traitement thyroïdien avec la grossesse, et vous orientez vers le médecin pour un suivi adapté. C\'est une approche sécurisante et professionnelle.',
            incorrect: '❌ Votre réponse peut être anxiogène ou dangereuse. Le Levothyrox® ne doit jamais être arrêté sans avis médical. Il faut rassurer, expliquer la compatibilité du traitement avec la grossesse et orienter vers le médecin pour un ajustement si nécessaire.'
        },
        3: {
            correct: '✅ Excellente approche pharmaceutique ! Vous : 1) Vérifiez la compatibilité du gingembre (pas de contre-indication connue), 2) Profitez de l\'opportunité pour transmettre TOUS les messages clés de prévention (zéro automédication, pictogrammes, vaccination), 3) Proposez l\'entretien EFE structuré et facturez l\'acte. C\'est une démarche professionnelle complète et opportuniste.',
            incorrect: '❌ Votre réponse manque l\'opportunité d\'un conseil complet. La bonne approche : vérifier que le gingembre ne pose pas de problème, puis saisir cette occasion pour rappeler TOUS les messages clés au comptoir (automédication, pictogrammes, vaccination), et proposer l\'entretien EFE formalisé et facturable. C\'est du conseil pharmaceutique structuré.'
        }
    };

    const isCorrect = selectedOption.value === correctAnswers[caseNumber];
    const feedback = document.getElementById(`case${caseNumber}Feedback`);
    
    feedback.className = `feedback show ${isCorrect ? 'correct' : 'incorrect'}`;
    feedback.innerHTML = isCorrect ? feedbacks[caseNumber].correct : feedbacks[caseNumber].incorrect;

    // Désactiver les options
    document.getElementById(`case${caseNumber}Options`).querySelectorAll('.option').forEach(option => {
        option.classList.add('disabled');
        if (option.querySelector('input').value === correctAnswers[caseNumber]) {
            option.classList.add('correct');
        } else if (option.querySelector('input').checked) {
            option.classList.add('incorrect');
        }
    });
}

// Initialize quiz on page load
window.onload = init;