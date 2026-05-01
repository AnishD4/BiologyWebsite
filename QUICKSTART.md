# Quick Start Guide

## 🚀 Getting the Website Running

### Step 1: Install Dependencies
Open a terminal/PowerShell and navigate to the project folder:

```powershell
cd C:\Users\1005598\WebstormProjects\BioWebsite
npm install
```

### Step 2: Start Development Server
```powershell
npm run dev
```

The website will automatically open in your browser at `http://localhost:3000`

### Step 3: Navigate the Site
- **Home Page**: Overview and topic listing
- **Sidebar Menu**: Click topics to navigate (or use the menu icon on mobile)
- **Topics**: Each page has content, essential questions, and a quiz
- **Quizzes**: Take them to test your knowledge!

---

## 📚 Website Features

### Interactive Components
✅ **Hardy-Weinberg Calculator** - Calculate genotype frequencies (Topic 7.5)  
✅ **Quizzes** - 3-4 questions per topic with instant feedback  
✅ **Essential Questions** - Key learning objectives highlighted  
✅ **Citations** - Expandable APA-formatted references  

### All 13 Topics Covered
✅ 7.1 - Introduction to Natural Selection  
✅ 7.2 - Natural Selection  
✅ 7.3 - Artificial Selection  
✅ 7.4 - Population Genetics  
✅ 7.5 - Hardy-Weinberg Equilibrium  
✅ 7.6 - Evidence of Evolution  
✅ 7.7 - Common Ancestry  
✅ 7.8 - Continuing Evolution  
✅ 7.9 - Phylogeny  
✅ 7.10 - Speciation  
✅ 7.11 - Extinction  
✅ 7.12 - Variations in Population  
✅ 7.13 - Origin of Life  

---

## 💡 How to Use This Website

### As a Student
1. Start with the Introduction (7.1) to learn basics
2. Follow topics in order for logical progression
3. Read content carefully
4. Study rainforest examples
5. Take quizzes to check understanding
6. Review citations for deeper learning

### As an Educator
1. Use as supplementary material for class
2. Assign individual topics as homework
3. Use quizzes for assessment
4. Have students explore independently
5. Use rainforest examples in discussions

---

## 🎨 Customization

### Modify Content
All content is in the `src/pages/topics/` files. Edit any `.jsx` file to change text, add examples, or modify quizzes.

### Change Colors
Edit `src/styles/index.css` to modify the color scheme. Key variables:
- `--primary-green`
- `--secondary-green`
- `--accent-green`

### Add New Content
1. Create new page file in `src/pages/topics/`
2. Add route in `src/App.jsx`
3. Add navigation link in `src/components/Navigation.jsx`

---

## 🔧 Troubleshooting

### Port 3000 Already in Use
Change the port in `vite.config.js`:
```javascript
server: {
  port: 3001,  // Change to a different port
  open: true
}
```

### Styles Not Loading
Ensure CSS files are imported in main.jsx and App.jsx

### Components Not Showing
Check that all imports in topic pages are correct

---

## 📦 Build for Production

To create a production build:
```powershell
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

---

## 📖 Content Overview

Each topic page includes:
- **Header**: Topic number and overview
- **Main Content**: Detailed explanations with rainforest examples
- **Subsections**: Organized learning points
- **Interactive Box**: Visual or interactive element
- **Essential Questions**: Key learning objectives
- **Quiz**: Self-assessment with feedback
- **Citations**: APA-formatted sources

---

## ✨ Key Highlights

🌴 **Rainforest Context**: All topics connected to rainforest ecosystems  
🧬 **Scientific Rigor**: Based on peer-reviewed research  
🎯 **Complete Curriculum**: All 13 standards covered  
📊 **Interactive Learning**: Quizzes, calculators, visualizations  
📚 **Proper Citations**: APA format with expandable details  
📱 **Responsive Design**: Works on all devices  
🎨 **Beautiful Design**: Green rainforest theme throughout  

---

## 🌍 Educational Standards

This website addresses:
- ✅ NGSS Evolution Standards
- ✅ AP Biology Evolution Unit
- ✅ IB Biology Evolution Topic
- ✅ State Biology Standards
- ✅ 25+ Essential Questions

---

## 📞 Need Help?

1. Check the README.md file for detailed documentation
2. Review the code comments in source files
3. Test individual components in browser console
4. Check browser console for any error messages

---

**Ready to explore evolution? Start with the Home page!** 🚀

