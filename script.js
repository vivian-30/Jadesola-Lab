// GeneHackers - Interactive Biotech Portal JavaScript

// Global Variables
let cursor = null;
let dnaCanvas = null;
let brainCanvas = null;
let isVaultOpen = false;
let sequenceChain = [];
let npcMessages = [];
let currentNPCMessage = 0;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
});

// Main initialization function
function initializePage() {
    setupCustomCursor();
    setupDNABackground();
    setupNavigation();
    setupHeroAnimations();
    setupMutateYourMind();
    setupBuildAGene();
    setupWhatIfGenerator();
    setupAlphaVault();
    setupRebelProtocols();
    setupLeaderboard();
    setupAINPC();
    setupEasterEggs();
    setupSoundEffects();
    setupScrollAnimations();
}

// Custom Cursor System
function setupCustomCursor() {
    cursor = document.getElementById('cursor');
    
    document.addEventListener('mousemove', (e) => {
        if (cursor) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        }
    });

    // Add cursor interaction effects
    const interactiveElements = document.querySelectorAll('button, .nav-link, .project-card, .neural-node, .base-type, .leader-card');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            if (cursor) {
                cursor.style.transform = 'scale(2)';
                cursor.style.background = 'var(--crimson-gene)';
                cursor.style.boxShadow = '0 0 30px var(--crimson-gene)';
            }
        });
        
        element.addEventListener('mouseleave', () => {
            if (cursor) {
                cursor.style.transform = 'scale(1)';
                cursor.style.background = 'var(--cyber-lime)';
                cursor.style.boxShadow = '0 0 20px var(--cyber-lime)';
            }
        });
    });
}

// DNA Background Canvas Animation
function setupDNABackground() {
    dnaCanvas = document.getElementById('dnaCanvas');
    if (!dnaCanvas) return;
    
    const ctx = dnaCanvas.getContext('2d');
    dnaCanvas.width = window.innerWidth;
    dnaCanvas.height = window.innerHeight;
    
    const dnaStrands = [];
    const numStrands = 20;
    
    // Initialize DNA strands
    for (let i = 0; i < numStrands; i++) {
        dnaStrands.push({
            x: Math.random() * dnaCanvas.width,
            y: Math.random() * dnaCanvas.height,
            length: Math.random() * 200 + 100,
            speed: Math.random() * 0.5 + 0.2,
            angle: Math.random() * Math.PI * 2,
            thickness: Math.random() * 3 + 1,
            hue: Math.random() * 60 + 200 // Blue to cyan range
        });
    }
    
    function animateDNA() {
        ctx.clearRect(0, 0, dnaCanvas.width, dnaCanvas.height);
        
        dnaStrands.forEach(strand => {
            // Update position
            strand.x += Math.cos(strand.angle) * strand.speed;
            strand.y += Math.sin(strand.angle) * strand.speed;
            strand.angle += 0.01;
            
            // Wrap around screen
            if (strand.x > dnaCanvas.width + 100) strand.x = -100;
            if (strand.x < -100) strand.x = dnaCanvas.width + 100;
            if (strand.y > dnaCanvas.height + 100) strand.y = -100;
            if (strand.y < -100) strand.y = dnaCanvas.height + 100;
            
            // Draw DNA helix
            ctx.save();
            ctx.translate(strand.x, strand.y);
            ctx.rotate(strand.angle);
            
            const gradient = ctx.createLinearGradient(0, 0, strand.length, 0);
            gradient.addColorStop(0, `hsla(${strand.hue}, 100%, 50%, 0)`);
            gradient.addColorStop(0.5, `hsla(${strand.hue}, 100%, 50%, 0.6)`);
            gradient.addColorStop(1, `hsla(${strand.hue}, 100%, 50%, 0)`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = strand.thickness;
            
            // Draw helix curves
            ctx.beginPath();
            for (let j = 0; j < strand.length; j += 5) {
                const wave1 = Math.sin(j * 0.1 + Date.now() * 0.005) * 20;
                const wave2 = Math.sin(j * 0.1 + Date.now() * 0.005 + Math.PI) * 20;
                
                if (j === 0) {
                    ctx.moveTo(j, wave1);
                } else {
                    ctx.lineTo(j, wave1);
                }
            }
            ctx.stroke();
            
            ctx.beginPath();
            for (let j = 0; j < strand.length; j += 5) {
                const wave2 = Math.sin(j * 0.1 + Date.now() * 0.005 + Math.PI) * 20;
                if (j === 0) {
                    ctx.moveTo(j, wave2);
                } else {
                    ctx.lineTo(j, wave2);
                }
            }
            ctx.stroke();
            
            // Draw connecting lines
            ctx.strokeStyle = `hsla(${strand.hue + 60}, 100%, 50%, 0.3)`;
            ctx.lineWidth = 1;
            for (let j = 0; j < strand.length; j += 15) {
                const wave1 = Math.sin(j * 0.1 + Date.now() * 0.005) * 20;
                const wave2 = Math.sin(j * 0.1 + Date.now() * 0.005 + Math.PI) * 20;
                ctx.beginPath();
                ctx.moveTo(j, wave1);
                ctx.lineTo(j, wave2);
                ctx.stroke();
            }
            
            ctx.restore();
        });
        
        requestAnimationFrame(animateDNA);
    }
    
    animateDNA();
    
    // Resize handler
    window.addEventListener('resize', () => {
        dnaCanvas.width = window.innerWidth;
        dnaCanvas.height = window.innerHeight;
    });
}

// Navigation System
function setupNavigation() {
    // CRISPR sequence animation
    const sequenceDisplay = document.getElementById('sequenceDisplay');
    const sequences = [
        'ATCGGCTAGC',
        'GCTAGCATCG',
        'CGATCGTAGC',
        'TAGCGATCGC',
        'CGTAGCATCG'
    ];
    
    let currentSequence = 0;
    
    setInterval(() => {
        if (sequenceDisplay) {
            sequenceDisplay.style.opacity = '0';
            setTimeout(() => {
                currentSequence = (currentSequence + 1) % sequences.length;
                sequenceDisplay.textContent = sequences[currentSequence];
                sequenceDisplay.style.opacity = '1';
            }, 500);
        }
    }, 3000);
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Add active state animation
                link.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    link.style.transform = 'scale(1.05)';
                }, 150);
            }
        });
    });
}

// Hero Section Animations
function setupHeroAnimations() {
    const ctaButton = document.getElementById('startEditing');
    const interactiveDNA = document.getElementById('interactiveDNA');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            // Create ripple effect
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.width = '100px';
            ripple.style.height = '100px';
            ripple.style.background = 'radial-gradient(circle, var(--cyber-lime), transparent)';
            ripple.style.borderRadius = '50%';
            ripple.style.transform = 'scale(0)';
            ripple.style.pointerEvents = 'none';
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            ripple.style.transform = 'translate(-50%, -50%) scale(0)';
            ripple.style.animation = 'rippleEffect 0.6s ease-out';
            
            ctaButton.style.position = 'relative';
            ctaButton.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            // Scroll to first section
            document.querySelector('#mutate-mind').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    
    // Interactive DNA helix
    if (interactiveDNA) {
        const helixPoints = [];
        for (let i = 0; i < 20; i++) {
            const point = document.createElement('div');
            point.style.position = 'absolute';
            point.style.width = '10px';
            point.style.height = '10px';
            point.style.background = 'var(--cyber-lime)';
            point.style.borderRadius = '50%';
            point.style.boxShadow = '0 0 10px var(--cyber-lime)';
            point.style.left = '50%';
            point.style.transform = 'translateX(-50%)';
            interactiveDNA.appendChild(point);
            helixPoints.push(point);
        }
        
        function animateHelixPoints() {
            helixPoints.forEach((point, index) => {
                const time = Date.now() * 0.001;
                const y = (index / helixPoints.length) * 100;
                const x = Math.sin(time + index * 0.5) * 30;
                const hue = (time * 50 + index * 20) % 360;
                
                point.style.top = y + '%';
                point.style.left = `calc(50% + ${x}px)`;
                point.style.background = `hsl(${hue}, 100%, 50%)`;
                point.style.boxShadow = `0 0 15px hsl(${hue}, 100%, 50%)`;
            });
            
            requestAnimationFrame(animateHelixPoints);
        }
        
        animateHelixPoints();
    }
}

// Mutate Your Mind Section
function setupMutateYourMind() {
    // Brain scan canvas animation
    const brainCanvas = document.getElementById('brainCanvas');
    if (brainCanvas) {
        const ctx = brainCanvas.getContext('2d');
        brainCanvas.width = brainCanvas.offsetWidth;
        brainCanvas.height = brainCanvas.offsetHeight;
        
        const neurons = [];
        const numNeurons = 50;
        
        // Initialize neurons
        for (let i = 0; i < numNeurons; i++) {
            neurons.push({
                x: Math.random() * brainCanvas.width,
                y: Math.random() * brainCanvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 3 + 1,
                connections: [],
                activity: Math.random()
            });
        }
        
        function animateBrain() {
            ctx.clearRect(0, 0, brainCanvas.width, brainCanvas.height);
            
            // Update neurons
            neurons.forEach(neuron => {
                neuron.x += neuron.vx;
                neuron.y += neuron.vy;
                neuron.activity = Math.sin(Date.now() * 0.005 + neuron.x * 0.01) * 0.5 + 0.5;
                
                // Bounce off edges
                if (neuron.x <= 0 || neuron.x >= brainCanvas.width) neuron.vx *= -1;
                if (neuron.y <= 0 || neuron.y >= brainCanvas.height) neuron.vy *= -1;
                
                // Keep within bounds
                neuron.x = Math.max(0, Math.min(brainCanvas.width, neuron.x));
                neuron.y = Math.max(0, Math.min(brainCanvas.height, neuron.y));
            });
            
            // Draw connections
            ctx.strokeStyle = 'rgba(0, 255, 255, 0.2)';
            ctx.lineWidth = 1;
            neurons.forEach((neuron, i) => {
                neurons.slice(i + 1).forEach(otherNeuron => {
                    const dx = neuron.x - otherNeuron.x;
                    const dy = neuron.y - otherNeuron.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 80) {
                        const opacity = (1 - distance / 80) * 0.5;
                        ctx.strokeStyle = `rgba(0, 255, 255, ${opacity})`;
                        ctx.beginPath();
                        ctx.moveTo(neuron.x, neuron.y);
                        ctx.lineTo(otherNeuron.x, otherNeuron.y);
                        ctx.stroke();
                    }
                });
            });
            
            // Draw neurons
            neurons.forEach(neuron => {
                const intensity = neuron.activity;
                const hue = 180 + intensity * 60; // Blue to cyan
                
                ctx.fillStyle = `hsla(${hue}, 100%, 50%, ${0.6 + intensity * 0.4})`;
                ctx.beginPath();
                ctx.arc(neuron.x, neuron.y, neuron.size * (1 + intensity * 0.5), 0, Math.PI * 2);
                ctx.fill();
                
                // Glow effect
                ctx.shadowColor = `hsl(${hue}, 100%, 50%)`;
                ctx.shadowBlur = 10 + intensity * 10;
                ctx.beginPath();
                ctx.arc(neuron.x, neuron.y, neuron.size * 0.5, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0;
            });
            
            requestAnimationFrame(animateBrain);
        }
        
        animateBrain();
    }
    
    // Neural node interactions
    const neuralNodes = document.querySelectorAll('.neural-node');
    neuralNodes.forEach(node => {
        node.addEventListener('click', () => {
            const concept = node.getAttribute('data-concept');
            showConceptDetail(concept);
            
            // Create expansion effect
            node.style.transform = 'scale(1.1) translateY(-10px)';
            setTimeout(() => {
                node.style.transform = 'scale(1.05) translateY(-10px)';
            }, 200);
        });
    });
    
    // Mutation buttons
    const mutationButtons = document.querySelectorAll('.mutation-btn');
    mutationButtons.forEach(button => {
        button.addEventListener('click', () => {
            const mutation = button.getAttribute('data-mutation');
            triggerMutation(mutation);
        });
    });
}

// Build-A-Gene Laboratory
function setupBuildAGene() {
    const baseTypes = document.querySelectorAll('.base-type');
    const sequenceChainElement = document.getElementById('sequenceChain');
    const previewOrganism = document.getElementById('previewOrganism');
    
    // Make base types draggable
    baseTypes.forEach(base => {
        base.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', base.getAttribute('data-base'));
        });
        
        base.addEventListener('click', () => {
            const baseType = base.getAttribute('data-base');
            addBaseToSequence(baseType);
        });
    });
    
    // Setup drop zone
    if (sequenceChainElement) {
        sequenceChainElement.addEventListener('dragover', (e) => {
            e.preventDefault();
            sequenceChainElement.classList.add('dragover');
        });
        
        sequenceChainElement.addEventListener('dragleave', () => {
            sequenceChainElement.classList.remove('dragover');
        });
        
        sequenceChainElement.addEventListener('drop', (e) => {
            e.preventDefault();
            sequenceChainElement.classList.remove('dragover');
            const baseType = e.dataTransfer.getData('text/plain');
            addBaseToSequence(baseType);
        });
    }
    
    function addBaseToSequence(baseType) {
        sequenceChain.push(baseType);
        updateSequenceDisplay();
        updateOrganismPreview();
        playSound('baseAdd');
    }
    
    function updateSequenceDisplay() {
        if (!sequenceChainElement) return;
        
        if (sequenceChain.length === 0) {
            sequenceChainElement.innerHTML = '<div class="chain-placeholder">Drop bases here to build your sequence</div>';
            return;
        }
        
        const baseColors = {
            'A': '#FF6B6B',
            'T': '#4ECDC4',
            'G': '#45B7D1',
            'C': '#FFA07A'
        };
        
        sequenceChainElement.innerHTML = sequenceChain.map(base => 
            `<div class="sequence-base" style="background: ${baseColors[base]}; color: white; padding: 10px; border-radius: 8px; font-weight: bold;">${base}</div>`
        ).join('');
    }
    
    function updateOrganismPreview() {
        if (!previewOrganism) return;
        
        const sequenceLength = sequenceChain.length;
        const traits = document.querySelectorAll('.trait-fill');
        
        // Calculate trait values based on sequence
        const aCount = sequenceChain.filter(base => base === 'A').length;
        const tCount = sequenceChain.filter(base => base === 'T').length;
        const gCount = sequenceChain.filter(base => base === 'G').length;
        const cCount = sequenceChain.filter(base => base === 'C').length;
        
        // Update trait bars
        if (traits[0]) { // Bioluminescence
            const bioluminescence = (aCount + gCount) / sequenceLength * 100;
            traits[0].style.width = `${Math.min(100, bioluminescence)}%`;
        }
        
        if (traits[1]) { // Size
            const size = (tCount + cCount) / sequenceLength * 100;
            traits[1].style.width = `${Math.min(100, size)}%`;
        }
        
        if (traits[2]) { // Intelligence
            const intelligence = (sequenceLength > 10 ? sequenceLength : 0) / 20 * 100;
            traits[2].style.width = `${Math.min(100, intelligence)}%`;
        }
        
        // Update organism appearance
        const hue = (aCount * 50 + tCount * 100 + gCount * 150 + cCount * 200) % 360;
        previewOrganism.style.background = `radial-gradient(circle, hsl(${hue}, 100%, 50%), hsl(${hue + 60}, 100%, 30%))`;
    }
}

// What If Generator
function setupWhatIfGenerator() {
    const generateButton = document.getElementById('generateWhat');
    const simulationResult = document.getElementById('simulationResult');
    
    if (generateButton) {
        generateButton.addEventListener('click', () => {
            const organism = document.getElementById('organism').value;
            const modification = document.getElementById('modification').value;
            
            generateSimulation(organism, modification);
        });
    }
    
    function generateSimulation(organism, modification) {
        if (!simulationResult) return;
        
        // Show loading animation
        simulationResult.innerHTML = '<div class="loading-spinner">Generating simulation...</div>';
        
        setTimeout(() => {
            const simulation = createSimulation(organism, modification);
            simulationResult.innerHTML = simulation;
            
            // Add some animation
            simulationResult.style.background = 'rgba(57, 255, 20, 0.1)';
            setTimeout(() => {
                simulationResult.style.background = 'rgba(0, 255, 255, 0.05)';
            }, 1000);
        }, 2000);
    }
    
    function createSimulation(organism, modification) {
        const simulations = {
            'plant-breathe-methane': {
                title: 'Methane-Breathing Plant',
                description: 'Revolutionary photosynthesis variant using methane as primary carbon source.',
                effects: ['Reduces atmospheric methane by 40%', 'Grows 300% faster than normal plants', 'Produces oxygen-rich compounds'],
                risks: ['Potential ecosystem disruption', 'Unknown long-term effects', 'May outcompete native species']
            },
            'animal-photosynthesize': {
                title: 'Photosynthetic Animal',
                description: 'Hybrid organism capable of both consumption and photosynthesis.',
                effects: ['Reduced food dependency', 'Self-sustaining energy production', 'Emerald-green skin coloration'],
                risks: ['Requires constant sunlight exposure', 'Metabolic instability', 'Social adaptation challenges']
            },
            'microbe-magnetic-sense': {
                title: 'Magnetically-Sensitive Microbe',
                description: 'Engineered bacteria with magnetic field detection capabilities.',
                effects: ['Navigation enhancement', 'Improved efficiency in directed tasks', 'Potential medical applications'],
                risks: ['Electromagnetic interference sensitivity', 'Unpredictable behavior patterns', 'Containment challenges']
            }
        };
        
        const key = `${organism}-${modification}`;
        const sim = simulations[key] || simulations['plant-breathe-methane'];
        
        return `
            <div class="simulation-display">
                <h3 class="sim-title">${sim.title}</h3>
                <p class="sim-description">${sim.description}</p>
                <div class="sim-effects">
                    <h4>Potential Effects:</h4>
                    <ul>${sim.effects.map(effect => `<li>${effect}</li>`).join('')}</ul>
                </div>
                <div class="sim-risks">
                    <h4>Risk Factors:</h4>
                    <ul>${sim.risks.map(risk => `<li>${risk}</li>`).join('')}</ul>
                </div>
                <div class="sim-visualization">
                    <div class="sim-organism"></div>
                </div>
            </div>
        `;
    }
}

// Alpha Vault System
function setupAlphaVault() {
    const accessButton = document.getElementById('accessVault');
    const vaultDoor = document.getElementById('vaultDoor');
    const vaultContents = document.getElementById('vaultContents');
    
    if (accessButton) {
        accessButton.addEventListener('click', () => {
            if (!isVaultOpen) {
                openVault();
            } else {
                closeVault();
            }
        });
    }
    
    function openVault() {
        isVaultOpen = true;
        vaultDoor.classList.add('open');
        
        setTimeout(() => {
            vaultContents.classList.add('visible');
            accessButton.textContent = 'Close Vault';
        }, 800);
        
        playSound('vaultOpen');
    }
    
    function closeVault() {
        isVaultOpen = false;
        vaultContents.classList.remove('visible');
        
        setTimeout(() => {
            vaultDoor.classList.remove('open');
            accessButton.textContent = 'Access Vault';
        }, 500);
        
        playSound('vaultClose');
    }
    
    // Project card interactions
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const easterEgg = card.getAttribute('data-easter-egg');
            if (easterEgg) {
                triggerEasterEgg(easterEgg);
            }
        });
    });
}

// Rebel Protocols Timeline
function setupRebelProtocols() {
    const protocolEntries = document.querySelectorAll('.protocol-entry');
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Trigger glitch effect
                const glitchOverlay = entry.target.querySelector('.glitch-overlay');
                if (glitchOverlay) {
                    glitchOverlay.style.animation = 'glitchEffect 2s ease-out';
                }
            }
        });
    }, { threshold: 0.3 });
    
    protocolEntries.forEach(entry => {
        entry.style.opacity = '0';
        entry.style.transform = 'translateY(50px)';
        entry.style.transition = 'all 0.8s ease';
        observer.observe(entry);
    });
}

// Leaderboard System
function setupLeaderboard() {
    const leaderCards = document.querySelectorAll('.leader-card');
    
    leaderCards.forEach(card => {
        card.addEventListener('click', () => {
            // Create particle effect
            createParticleEffect(card);
        });
    });
    
    function createParticleEffect(element) {
        const rect = element.getBoundingClientRect();
        const particles = 20;
        
        for (let i = 0; i < particles; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.left = rect.left + rect.width / 2 + 'px';
            particle.style.top = rect.top + rect.height / 2 + 'px';
            particle.style.width = '4px';
            particle.style.height = '4px';
            particle.style.background = 'var(--cyber-lime)';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '10000';
            
            const angle = (i / particles) * Math.PI * 2;
            const velocity = 100 + Math.random() * 50;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;
            
            particle.style.animation = `particleExplode 1s ease-out forwards`;
            particle.style.setProperty('--vx', vx + 'px');
            particle.style.setProperty('--vy', vy + 'px');
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 1000);
        }
    }
}

// AI NPC System
function setupAINPC() {
    const npcAvatar = document.querySelector('.npc-avatar');
    const npcChat = document.getElementById('npcChat');
    
    // NPC message system
    npcMessages = [
        "Welcome, Gene Rebel! I'm HELIX, your digital lab mentor. Ready to hack evolution?",
        "Did you know CRISPR can edit genes with 99.9% precision? The future is in your hands!",
        "Try clicking on the neural nodes to unlock new mutation pathways!",
        "The Alpha Vault contains our most dangerous experiments. Access with caution!",
        "Each DNA base you add changes the organism's traits. Experiment fearlessly!",
        "The Rebel Protocols show how we got here. Every revolution started with a single edit.",
        "Easter eggs are hidden throughout the site. Click on familiar genetic terms!",
        "Your sequence combinations unlock new possibilities. There are no limits in evolution!"
    ];
    
    if (npcAvatar) {
        npcAvatar.addEventListener('click', () => {
            showNextNPCMessage();
        });
    }
    
    function showNextNPCMessage() {
        currentNPCMessage = (currentNPCMessage + 1) % npcMessages.length;
        updateNPCChat(npcMessages[currentNPCMessage]);
    }
    
    function updateNPCChat(message) {
        if (!npcChat) return;
        
        const chatBubble = npcChat.querySelector('.chat-bubble p');
        if (chatBubble) {
            chatBubble.style.opacity = '0';
            setTimeout(() => {
                chatBubble.textContent = message;
                chatBubble.style.opacity = '1';
            }, 300);
        }
    }
    
    // Auto-message system
    setInterval(() => {
        if (Math.random() < 0.3) { // 30% chance every interval
            showNextNPCMessage();
        }
    }, 15000); // Every 15 seconds
}

// Easter Egg System
function setupEasterEggs() {
    const easterEggModal = document.getElementById('easterEggModal');
    const closeModal = document.getElementById('closeModal');
    const easterEggContent = document.getElementById('easterEggContent');
    
    // Close modal functionality
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            easterEggModal.classList.remove('visible');
        });
    }
    
    // Close modal on outside click
    if (easterEggModal) {
        easterEggModal.addEventListener('click', (e) => {
            if (e.target === easterEggModal) {
                easterEggModal.classList.remove('visible');
            }
        });
    }
    
    // Hidden word easter eggs
    const easterEggWords = ['hemoglobin', 'chloroplast', 'telomere', 'ribosome', 'mitochondria'];
    
    document.addEventListener('dblclick', (e) => {
        const selection = window.getSelection().toString().toLowerCase();
        if (easterEggWords.includes(selection)) {
            triggerEasterEgg(selection);
        }
    });
}

function triggerEasterEgg(type) {
    const easterEggModal = document.getElementById('easterEggModal');
    const easterEggContent = document.getElementById('easterEggContent');
    
    if (!easterEggModal || !easterEggContent) return;
    
    const easterEggs = {
        'hemoglobin': {
            title: 'Oxygen Carrier Discovered!',
            content: 'Hemoglobin revolutionized oxygen transport in 1840. Werner von Siebold first identified this protein that carries oxygen through blood. Today, synthetic hemoglobin could create artificial blood for medical emergencies.',
            code: 'HBA1: 141 amino acids, HBB: 146 amino acids'
        },
        'chloroplast': {
            title: 'Photosynthesis Engine Unlocked!',
            content: 'Chloroplasts are the powerhouses of plant cells, converting sunlight into energy. Originally ancient cyanobacteria, they merged with early plant cells 1.5 billion years ago. Modern gene editing could enhance their efficiency by 40%!',
            code: 'Chloroplast DNA: ~120-200 kb, 100-120 genes'
        },
        'telomere': {
            title: 'Immortality Sequence Found!',
            content: 'Telomeres protect chromosomes from degradation and fusion. As we age, they shorten, leading to cellular aging. Elizabeth Blackburn won the Nobel Prize for discovering telomerase, the enzyme that rebuilds them.',
            code: 'Telomere repeat: TTAGGG (humans), TTTAGGG (plants)'
        },
        'ribosome': {
            title: 'Protein Factory Accessed!',
            content: 'Ribosomes are the protein synthesis machines in every cell. They read mRNA code and assemble amino acids into proteins. George Palade discovered them in 1955 using electron microscopy.',
            code: 'Human ribosome: 80S (60S + 40S subunits)'
        },
        'mitochondria': {
            title: 'Cellular Powerhouse Activated!',
            content: 'Mitochondria generate ATP, the energy currency of cells. They have their own DNA and reproduce independently, proving they were once free-living bacteria that joined our cells 2 billion years ago.',
            code: 'Mitochondrial DNA: 16,569 bp, 37 genes'
        }
    };
    
    const egg = easterEggs[type] || easterEggs['hemoglobin'];
    
    easterEggContent.innerHTML = `
        <h4>${egg.title}</h4>
        <p>${egg.content}</p>
        <div class="code-block">
            <strong>Genetic Code:</strong><br>
            <code>${egg.code}</code>
        </div>
        <div class="easter-animation">
            <div class="dna-spiral"></div>
        </div>
    `;
    
    easterEggModal.classList.add('visible');
    playSound('easterEgg');
}

// Sound Effects System
function setupSoundEffects() {
    // Create audio context for sound effects
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    const sounds = {
        baseAdd: () => createTone(audioContext, 880, 0.1, 'sine'),
        vaultOpen: () => createTone(audioContext, 440, 0.5, 'sawtooth'),
        vaultClose: () => createTone(audioContext, 220, 0.3, 'triangle'),
        easterEgg: () => createChord(audioContext, [523, 659, 784], 0.8),
        mutation: () => createSweep(audioContext, 200, 800, 0.6)
    };
    
    window.playSound = function(soundName) {
        if (sounds[soundName]) {
            sounds[soundName]();
        }
    };
}

function createTone(audioContext, frequency, duration, waveType = 'sine') {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.type = waveType;
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
}

function createChord(audioContext, frequencies, duration) {
    frequencies.forEach(freq => {
        createTone(audioContext, freq, duration, 'sine');
    });
}

function createSweep(audioContext, startFreq, endFreq, duration) {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(startFreq, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(endFreq, audioContext.currentTime + duration);
    oscillator.type = 'sawtooth';
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
}

// Scroll Animations
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1 });
    
    // Animate sections on scroll
    const sectionsToAnimate = document.querySelectorAll('.section, .project-card, .leader-card, .neural-node');
    sectionsToAnimate.forEach(section => {
        observer.observe(section);
    });
}

// Helper Functions
function showConceptDetail(concept) {
    const concepts = {
        'CRISPR': 'CRISPR-Cas9: The molecular scissors that revolutionized gene editing. Discovered in bacterial immune systems, now used to precisely cut and modify DNA.',
        'EVOLUTION': 'Evolution 2.0: Human-directed genetic changes that accelerate natural selection by millions of years in laboratory conditions.',
        'SYNTHETIC': 'Synthetic Biology: Engineering biological systems from scratch, creating new life forms with custom genetic circuits.',
        'BIOCOMPUTE': 'Bio-Computing: Using DNA and cellular processes as biological computers, storing data in genetic code.'
    };
    
    const message = concepts[concept] || 'Genetic concept details loading...';
    updateNPCChat(message);
}

function triggerMutation(mutation) {
    const mutations = {
        'creativity': 'Enhancing neural plasticity pathways... Creative potential increased by 40%!',
        'logic': 'Optimizing synaptic connections... Logical processing speed boosted!',
        'innovation': 'Unlocking novel neural patterns... Innovation circuits activated!'
    };
    
    const message = mutations[mutation] || 'Mutation sequence initiated...';
    updateNPCChat(message);
    playSound('mutation');
}

function updateNPCChat(message) {
    const npcChat = document.getElementById('npcChat');
    if (!npcChat) return;
    
    const chatBubble = npcChat.querySelector('.chat-bubble p');
    if (chatBubble) {
        chatBubble.style.opacity = '0';
        setTimeout(() => {
            chatBubble.textContent = message;
            chatBubble.style.opacity = '1';
        }, 300);
    }
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes rippleEffect {
        to {
            transform: translate(-50%, -50%) scale(4);
            opacity: 0;
        }
    }
    
    @keyframes particleExplode {
        to {
            transform: translate(var(--vx), var(--vy));
            opacity: 0;
        }
    }
    
    .animate-in {
        animation: slideInUp 0.8s ease-out forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .loading-spinner {
        color: var(--cyber-lime);
        text-align: center;
        font-style: italic;
        animation: pulse 1s infinite;
    }
    
    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
    }
    
    .simulation-display {
        color: var(--electric-blue);
        line-height: 1.6;
    }
    
    .sim-title {
        color: var(--cyber-lime);
        font-family: 'Orbitron', sans-serif;
        margin-bottom: 15px;
        font-size: 1.3rem;
    }
    
    .sim-effects, .sim-risks {
        margin: 20px 0;
    }
    
    .sim-effects h4, .sim-risks h4 {
        color: var(--electric-blue);
        margin-bottom: 10px;
    }
    
    .sim-effects ul, .sim-risks ul {
        list-style: none;
        padding-left: 0;
    }
    
    .sim-effects li, .sim-risks li {
        padding: 5px 0;
        border-left: 3px solid var(--cyber-lime);
        padding-left: 15px;
        margin: 8px 0;
    }
    
    .sim-risks li {
        border-color: var(--crimson-gene);
    }
    
    .sim-organism {
        width: 60px;
        height: 60px;
        background: radial-gradient(circle, var(--cyber-lime), var(--electric-blue));
        border-radius: 50%;
        margin: 20px auto;
        animation: organismPulse 2s infinite ease-in-out;
    }
    
    .code-block {
        background: rgba(0, 1, 15, 0.8);
        border: 1px solid var(--electric-blue);
        border-radius: 10px;
        padding: 15px;
        margin: 20px 0;
        font-family: 'Roboto Mono', monospace;
    }
    
    .code-block code {
        color: var(--cyber-lime);
        font-size: 0.9rem;
    }
    
    .easter-animation {
        text-align: center;
        margin-top: 20px;
    }
    
    .dna-spiral {
        width: 40px;
        height: 40px;
        border: 3px solid var(--cyber-lime);
        border-radius: 50%;
        margin: 0 auto;
        animation: spin 2s linear infinite;
        border-top-color: var(--electric-blue);
    }
    
    @keyframes spin {
        to { transform: rotate(360deg); }
    }
    
    .sequence-base {
        display: inline-block;
        margin: 2px;
        animation: baseAppear 0.5s ease-out;
    }
    
    @keyframes baseAppear {
        from {
            transform: scale(0) rotate(180deg);
            opacity: 0;
        }
        to {
            transform: scale(1) rotate(0deg);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Initialize background audio
document.addEventListener('click', function initAudio() {
    const audio = document.getElementById('backgroundAudio');
    if (audio) {
        audio.volume = 0.1;
        audio.play().catch(() => {
            // Autoplay blocked, that's ok
        });
    }
    document.removeEventListener('click', initAudio);
}, { once: true });