# 🧬 GeneHackers - Edit Reality Itself

A futuristic, interactive website that combines the aesthetics of a biotech lab, hacker command center, and alien archive of evolution blueprints. Welcome to the portal where nature meets AI and gives birth to revolution.

## 🌟 Features

### 🎨 Visual Design
- **Ultraviolet Purple** (#8E44AD) - Mystery, transformation, rebellion
- **Electric Blue** (#00FFFF) - CRISPR energy, precision
- **Deep Void Black** (#00010F) - Depth, danger, darkness
- **Cyber Lime Green** (#39FF14) - Code pulse, highlights
- **Crimson Gene Red** (#D72638) - Alerts, mutations, danger

### 🧭 Interactive Sections

#### 1. **Mutate Your Mind**
- Interactive neural network visualization
- Real-time brain scan animation with 50+ neurons
- Clickable mutation enhancement buttons
- Educational content about genetic concepts

#### 2. **Build-A-Gene Laboratory** 
- Drag-and-drop DNA base builder (A, T, G, C)
- Real-time organism trait visualization
- Dynamic color changes based on genetic sequence
- Trait bars for bioluminescence, size, and intelligence

#### 3. **Alpha Vault of Species**
- Animated vault door with rotating lock mechanism
- Project cards showcasing revolutionary genetic modifications
- Upload interface for sharing gene-editing ideas
- Hidden easter eggs in project descriptions

#### 4. **Rebel Protocols Timeline**
- Scroll-triggered animations with glitch effects
- Historical milestones in genetic engineering
- Graffiti-style overlays telling forbidden stories
- Timeline spanning from 1973 to 2025

#### 5. **What If Generator**
- Extreme genetic modification simulator
- Dropdown selection for organisms and modifications
- Dynamic result generation with effects and risks
- Visual organism representations

#### 6. **Gene Rebel Leaderboard**
- Top innovators with evolution points
- Animated particle effects on interaction
- Rank badges with metallic gradients
- Dynamic glow animations

### 🤖 AI Features

#### HELIX - Digital Lab Mentor
- Interactive NPC guide system
- Context-aware chat responses
- Auto-messaging every 15 seconds
- Educational tips and encouragement

#### Easter Egg System
- Hidden genetic terms trigger special modals
- Double-click detection for secret content
- Educational information about:
  - Hemoglobin
  - Chloroplast
  - Telomere
  - Ribosome
  - Mitochondria

### 🎵 Audio & Animation

#### Sound Effects
- Base addition tones (880Hz sine wave)
- Vault opening/closing sounds
- Easter egg discovery chords
- Mutation sweep effects (200-800Hz)

#### Visual Effects
- Custom CRISPR scalpel cursor
- DNA helix background animation
- Particle explosion effects
- Ripple effects on button clicks
- Smooth scroll animations
- Glitch effects on timeline

### 🧪 Interactive Elements

#### Custom Cursor
- Morphs into CRISPR scalpel design
- Color changes on hover (lime to crimson)
- Scale animations for emphasis
- Mix-blend-mode effects

#### Live CRISPR Sequence
- Rotating genetic sequences in navbar
- Smooth opacity transitions
- Scientific accuracy in displayed codes

#### 3D DNA Visualization
- 20+ animated DNA strands
- HSL color cycling
- Canvas-based rendering
- Responsive to window resize

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (Python, Node.js, or any HTTP server)

### Installation

1. Clone or download the project files:
```bash
git clone <repository-url>
cd genehackers
```

2. Start a local web server:
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js
npx http-server
```

3. Open your browser and navigate to:
```
http://localhost:8000
```

### File Structure
```
genehackers/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling and animations
├── script.js           # Interactive functionality
└── README.md           # This file
```

## 🎮 How to Use

### Navigation
- Use the floating navbar to jump between sections
- Watch the live CRISPR sequence animation
- Smooth scroll to any section

### Building Genes
1. Visit the "Build-A-Gene" section
2. Drag or click DNA bases (A, T, G, C) 
3. Watch organism traits update in real-time
4. Experiment with different sequences

### Vault Access
1. Navigate to "Alpha Vault of Species"
2. Click "Access Vault" to open the door
3. Explore revolutionary project cards
4. Click cards to trigger easter eggs

### AI Interaction
1. Click the AI avatar (HELIX) in bottom-right
2. Receive educational tips and guidance
3. Auto-messages appear every 15 seconds

### Easter Eggs
1. Double-click on genetic terms throughout the site
2. Terms include: hemoglobin, chloroplast, telomere, ribosome, mitochondria
3. Unlock educational modals with historical context

### Simulation Generator
1. Use "What If Generator" section
2. Select organism and modification types
3. Generate detailed simulation results
4. Explore potential effects and risks

## 🔧 Technical Details

### Technologies Used
- **HTML5** - Semantic structure and canvas elements
- **CSS3** - Advanced animations, gradients, and responsive design
- **Vanilla JavaScript** - Interactive functionality and canvas animations
- **Web Audio API** - Dynamic sound effect generation
- **Intersection Observer API** - Scroll-triggered animations
- **Canvas API** - DNA background and brain scan visualizations

### Performance Optimizations
- Efficient animation loops using `requestAnimationFrame`
- Reduced motion support for accessibility
- High DPI display optimizations
- Optimized particle effects with automatic cleanup

### Browser Compatibility
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly interactions
- Adaptive layouts for all screen sizes

## 🎨 Customization

### Color Scheme
Edit CSS variables in `styles.css`:
```css
:root {
    --ultraviolet: #8E44AD;
    --electric-blue: #00FFFF;
    --void-black: #00010F;
    --cyber-lime: #39FF14;
    --crimson-gene: #D72638;
}
```

### Adding New Easter Eggs
1. Add new terms to `easterEggWords` array in `script.js`
2. Define content in `easterEggs` object
3. Include title, content, and genetic code

### Sound Customization
Modify sound parameters in `setupSoundEffects()`:
- Frequency ranges
- Duration values
- Waveform types (sine, sawtooth, triangle)

## 🧬 Educational Content

### Genetic Concepts Covered
- CRISPR-Cas9 gene editing
- DNA base pairs (A-T, G-C)
- Protein synthesis
- Cellular organelles
- Evolutionary biology
- Synthetic biology

### Historical Timeline
- 1973: DNA Recombination Revolution
- 2012: CRISPR Discovery
- 2025: Underground Awakening

## 🤝 Contributing

This project is designed to inspire young minds to explore genetic engineering and biotechnology. Contributions welcome for:

- Educational content improvements
- Animation enhancements
- Additional easter eggs
- Mobile experience optimization
- Accessibility features

## 📜 License

This project is open source and available under the MIT License.

## 🌟 Credits

Inspired by the revolutionary potential of genetic engineering and the young innovators who will shape the future of biotechnology.

**"Where rebels rewrite the code of life itself."**

---

*Built with passion for the future of genetic engineering* 🧬✨
