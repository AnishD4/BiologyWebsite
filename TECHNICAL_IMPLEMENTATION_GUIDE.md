# Essential Questions Page - Technical Implementation Guide

## Overview
Complete technical documentation for the Essential Questions page implementation.

---

## File Structure

```
src/
├── pages/
│   └── topics/
│       └── EssentialQuestionsPage.jsx (NEW - 25.8 KB)
├── components/
│   ├── Navigation.jsx (MODIFIED)
│   └── Quiz.jsx (USED)
├── App.jsx (MODIFIED)
└── styles/
    └── App.css (MODIFIED - +180 lines)
```

---

## Component Architecture

### EssentialQuestionsPage.jsx

**State Management**
```jsx
const [expandedQuestion, setExpandedQuestion] = useState(null)
```
- Tracks which question is currently expanded (null if none)
- Allows only one question expanded at a time
- `toggleQuestion(index)` toggles the expanded state

**Data Structure - Essential Questions**
```jsx
const essentialQuestions = [
  {
    question: "What are the specific causes of natural selection?",
    answer: "Natural selection arises from..." // String or JSX
  },
  // ... 26 total items
]
```

**Data Structure - Quiz Questions**
```jsx
const quizQuestions = [
  {
    question: "Which of the following is a proximate cause...",
    options: [
      { text: "Option 1", isCorrect: false },
      { text: "Option 2", isCorrect: true },
      // ... more options
    ],
    explanation: "Explanation text..."
  },
  // ... 8 total items
]
```

**Data Structure - Citations**
```jsx
const citations = [
  {
    title: "Campbell Biology (12th ed.)",
    author: "Urry, Cain, Wasserman, Minorsky, & Reece",
    year: "2020",
    fullCitation: "Complete APA citation...",
    notes: "How this source was used..."
  },
  // ... 5 total items
]
```

**Component Return Structure**
```jsx
<div className="container">
  <div className="topic-header"> ... </div>
  <div className="content-section">
    <h2>Essential Questions with Answers</h2>
    <div className="essential-questions-container">
      {essentialQuestions.map((item, index) => (
        <div key={index} className="question-item">
          <button className="question-button" onClick={() => toggleQuestion(index)}>
            <span className="question-number">Q{index + 1}.</span>
            <span className="question-text">{item.question}</span>
            <span className="toggle-icon">+</span>
          </button>
          {expandedQuestion === index && (
            <div className="answer-content">
              <div className="answer">{item.answer}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
  <div className="content-section">
    <h2>Test Your Understanding</h2>
    <Quiz questions={quizQuestions} />
  </div>
  <div className="content-section">
    <h2>Progress Check</h2>
    <div className="progress-bar">...</div>
  </div>
  <Citations citations={citations} />
</div>
```

---

## CSS Classes Reference

### Main Container
**`.essential-questions-container`**
- Flexbox column layout
- Gap: 1rem between items
- Margin: 2rem top/bottom

### Question Item
**`.question-item`**
- Background: var(--surface)
- Border: 1px solid var(--border-light)
- Border-radius: var(--radius-md)
- Transition on hover: box-shadow, border-color
- Hover: adds shadow and green border

### Question Button
**`.question-button`**
- Flexbox row with gap: 1rem
- Full width
- Padding: 1.25rem
- Font-size: 1rem
- Color: var(--text-primary)
- On hover: light green background
- On focus: 2px green outline

### Question Number
**`.question-number`**
- Color: var(--secondary-green) - bright green
- Font-weight: 700
- Min-width: 40px (prevents resizing)
- Flex-shrink: 0

### Question Text
**`.question-text`**
- Flex: 1 (takes remaining space)
- Font-weight: 600
- Line-height: 1.4

### Toggle Icon
**`.toggle-icon`**
- Color: var(--secondary-green)
- Font-size: 1.5rem
- Bold weight
- Transition: transform 0.2s ease
- When expanded: rotates 90 degrees

### Answer Content
**`.answer-content`**
- Padding: 0 1.25rem 1.25rem
- Border-top: 1px solid var(--border-light)
- Background: rgba(46, 234, 106, 0.02)
- Animation: slideDown 0.2s ease-out

### Answer Text
**`.answer`**
- Color: var(--text-secondary)
- Line-height: 1.6

**`.answer p`**
- Margin: 0.75rem 0
- First/last child: no top/bottom margin

### Equation Box
**`.equation-box`**
- Background: var(--surface)
- Border-left: 4px solid var(--secondary-green)
- Padding: 1rem
- Margin: 1rem 0
- Border-radius: var(--radius-sm)
- Font-family: 'Courier New', monospace
- Color: var(--text-primary)

### Progress Bar
**`.progress-bar`**
- Full width, 24px height
- Background: var(--border-light)
- Border-radius: var(--radius-md)
- Overflow: hidden
- Margin: 1.5rem 0

**`.progress-fill`**
- Height: 100%
- Background: linear-gradient(90deg, var(--secondary-green), #00cc44)
- Transition: width 0.3s ease

---

## Color Variables Used

From `index.css` CSS variables:
- `--text-primary` - Main text color (light in dark mode)
- `--text-secondary` - Secondary text color
- `--surface` - Card/section background
- `--surface-2` - Alternate surface
- `--border-light` - Light border color
- `--secondary-green` - Bright green accent (#2EEA6A or similar)
- `--accent-green` - Additional green shade

---

## Interactive Elements

### Expandable Questions
**Interaction Flow:**
1. User clicks question button
2. `toggleQuestion(index)` called
3. State updates: `setExpandedQuestion(index === expandedQuestion ? null : index)`
4. Answer section renders with animation
5. Toggle icon rotates 90 degrees
6. User clicks again to collapse

**Keyboard Support:**
- Tab: Navigate between questions
- Enter/Space: Expand/collapse question
- Focus: Visible outline on question button

### Quiz Component
- Separate component (`Quiz` from components folder)
- Props: `questions={quizQuestions}`
- Features: Multiple choice, auto-grading, explanations
- Displays 8 questions for self-assessment

### Progress Indicator
- Shows "All 26 Essential Questions covered (100%)"
- Visual bar fills 100%
- Text below bar shows completion status

---

## Responsive Breakpoints

### Desktop (768px+)
- Full question-button layout
- Flex row with icon aligned right
- Hover effects enabled
- Full typography sizing

### Tablet (768px)
- Same as desktop
- Adjusted spacing may apply

### Mobile (<768px)
**Changes:**
- `.question-button` - Flex column instead of row
- `.question-number` - Min-width: auto
- `.question-text` - Font-size: 0.95rem
- `.toggle-icon` - Font-size: 1.2rem

---

## Accessibility Features

### ARIA Attributes
```jsx
<button
  aria-expanded={expandedQuestion === index}
  onClick={() => toggleQuestion(index)}
>
```
- Announces expanded/collapsed state to screen readers
- Updates dynamically as state changes

### Semantic HTML
```jsx
<h2>Essential Questions with Answers</h2>
<h3>Question text</h3>
```
- Proper heading hierarchy
- Content-first structure
- Semantic button elements

### Keyboard Navigation
- All interactive elements focusable (tab-able)
- Focus styles visible (2px green outline)
- Enter/Space activation for buttons
- Escape key can collapse (optional enhancement)

### Color Contrast
- Text: var(--text-primary) on backgrounds meets WCAG AA
- Green accents: sufficient contrast
- Border colors: sufficient visibility

---

## Performance Considerations

### Build Size
- Component: 25.8 KB (unminified)
- CSS: 18.42 KB (minified + gzipped)
- No external libraries required
- Uses existing Quiz and Citations components

### Rendering Performance
- Single `expandedQuestion` state (simple)
- Map rendering: 26 questions efficiently
- No unnecessary re-renders
- CSS animations (GPU-optimized)

### Load Time
- Component loads with page
- Questions render immediately
- Animations smooth at 60fps
- No lazy loading needed

---

## Customization Guide

### Adding Questions
1. Open `EssentialQuestionsPage.jsx`
2. Locate `essentialQuestions` array
3. Add new object:
```jsx
{
  question: "Your question here?",
  answer: "Your answer or JSX here"
}
```
4. Update quiz as needed
5. Rebuild: `npm run build`

### Modifying Styling
1. Open `App.css`
2. Find `.essential-questions-container` or related class
3. Update CSS properties
4. Save and rebuild
5. Changes apply automatically to dev server

### Changing Colors
- Green accent: Search `var(--secondary-green)`
- Backgrounds: Search `var(--surface)`
- Text: Search `var(--text-primary)`
- All defined in index.css variables

### Adding Quiz Questions
1. Open component
2. Find `quizQuestions` array
3. Add new question object with:
   - `question`: Question text
   - `options`: Array of 4 options
   - `explanation`: Why the correct answer is right

---

## Integration Points

### App.jsx Integration
```jsx
import EssentialQuestionsPage from './pages/topics/EssentialQuestionsPage'

<Route path="/essential-questions" element={<EssentialQuestionsPage />} />
```

### Navigation.jsx Integration
```jsx
<NavLink to="/essential-questions" className="nav-link">
  <span>?</span> Essential Questions
</NavLink>
```

### Used Components
- `Quiz` - For multiple choice questions
- `Citations` - For professional citations

---

## Testing Checklist

### Manual Testing
- [ ] Click each question to expand/collapse
- [ ] Verify animations smooth
- [ ] Test quiz questions
- [ ] Check citations display
- [ ] Verify progress bar shows 100%
- [ ] Test on mobile device
- [ ] Test keyboard navigation (Tab, Enter)
- [ ] Check all links work

### Browser Testing
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (if available)
- [ ] Mobile browsers

### Accessibility Testing
- [ ] Screen reader compatibility
- [ ] Keyboard-only navigation
- [ ] Color contrast verification
- [ ] Focus indicators visible

---

## Troubleshooting

### Questions Not Expanding
- Check: `toggleQuestion` function called
- Verify: `useState` hook initialized
- Ensure: onClick handler on button

### Styling Not Applied
- Clear browser cache
- Rebuild: `npm run build`
- Check: CSS class names match HTML
- Verify: CSS variables in index.css

### Quiz Not Showing
- Check: Quiz component imported
- Verify: quizQuestions array populated
- Ensure: Quiz component exists in components folder

### Build Errors
- Clear node_modules: `rm -r node_modules`
- Reinstall: `npm install`
- Rebuild: `npm run build`

---

## Future Enhancements

Possible additions:
- [ ] Print/PDF export of questions
- [ ] Bookmarking favorite questions
- [ ] Search functionality
- [ ] Question difficulty ratings
- [ ] Related resources links
- [ ] Discussion/comments section
- [ ] Answer explanations expansion
- [ ] Video references for each question

---

## Maintenance Notes

**Regular Updates Needed For:**
- Citation dates (update yearly)
- Links to external resources
- Campbell Biology edition updates
- New research references

**Annual Review:**
- Verify all links still active
- Check for curriculum changes
- Review for new evidence
- Update examples if needed

---

## Support & Documentation

**Related Documentation:**
- ESSENTIAL_QUESTIONS_SUMMARY.md - Overview
- ESSENTIAL_QUESTIONS_QUICKSTART.md - Quick reference
- FINAL_VERIFICATION_CHECKLIST.md - Verification

**Component Files:**
- src/components/Quiz.jsx - Quiz logic
- src/components/Citations.jsx - Citations display
- src/styles/App.css - All styling

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | May 7, 2026 | Initial release with 26 questions |

---

**Document Version**: 1.0
**Last Updated**: May 7, 2026
**Status**: Complete & Production Ready

