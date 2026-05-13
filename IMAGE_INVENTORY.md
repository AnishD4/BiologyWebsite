# Image Inventory - All Images in Your Project

May 7, 2026

---

## Summary

**Total Images:** 19
**Status:** All hosted externally (no local images)
**Location:** Referenced via URLs in JSX files
**Format:** Mix of JPG, PNG, GIF, WEBP

---

## Images by Page

### HomePage.jsx (1 image)

1. **Daintree Rainforest**
   - URL: https://upload.wikimedia.org/wikipedia/commons/c/c0/Daintree_Rainforest.jpg
   - Source: Wikimedia Commons
   - Usage: Hero/banner image

---

### IntroductionPage.jsx (5 images)

1. **Rainforest Overview GIF**
   - URL: https://media1.giphy.com/media/v1.Y2lkPTZjMDliOTUyMTM1c2U5bHdnd2d0MDA0dGFkNXE2aXVwZHQ5ZWFhYWt6ZnE3dHB5cCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/dtzBR6aPqkrTy/source.gif
   - Source: GIPHY
   - Usage: Animated rainforest scene

2. **Chiapas Rainforest**
   - URL: https://upload.wikimedia.org/wikipedia/commons/8/87/Chiapas_Rainforest_crop.jpg
   - Source: Wikimedia Commons
   - Usage: Rainforest landscape

3. **Indonesia Kalbar Drone View**
   - URL: https://mongabay-images.s3.amazonaws.com/1200/indonesia-kalbar/kalbar_drone_190493.jpg
   - Source: Mongabay Images (AWS S3)
   - Usage: Aerial rainforest view

4. **Rainforest Conservation**
   - URL: https://conservationmag.org/images/2020/06/22/raphael-menesclou-Rainforest_large.jpg
   - Source: Conservation Magazine
   - Usage: Rainforest environment

5. **Amazon Rainforest Animals**
   - URL: https://www.amazoncruise.net/wp-content/uploads/2017/06/the-five-rarest-Amazon-rainforest-animals4.jpg
   - Source: Amazon Cruise
   - Usage: Wildlife in rainforest

6. **Amazon Animals**
   - URL: https://trexperienceperu.com/sites/default/files/2024-12/Animales%2520de%2520la%2520Selva%2520Amaz%25C3%25B3nica%2520%25282%2529.webp
   - Source: Trexperience Peru
   - Format: WEBP
   - Usage: Amazon rainforest fauna

---

### ArtificialSelectionPage.jsx (1 image)

1. **Teosinte vs Corn Comparison**
   - URL: https://upload.wikimedia.org/wikipedia/commons/c/cb/Teosinte.png
   - Source: Wikimedia Commons
   - Usage: Artificial selection example

---

### CommonAncestryPage.jsx (2 images)

1. **Phylogenetic Tree of Life**
   - URL: https://upload.wikimedia.org/wikipedia/commons/1/19/Phylogenetic_Tree_of_Life.png
   - Source: Wikimedia Commons
   - Usage: Evolution relationships

2. **Morpho Butterfly**
   - URL: https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Morpho_menelaus_huebneri_MHNT_Male.jpg/1280px-Morpho_menelaus_huebneri_MHNT_Male.jpg
   - Source: Wikimedia Commons
   - Usage: Common ancestry evidence (homologous structures)

---

### ContinuingEvolutionPage.jsx (1 image)

1. **MRSA Bacteria**
   - URL: https://upload.wikimedia.org/wikipedia/commons/d/d2/MRSA_SEM_9994_lores.jpg
   - Source: Wikimedia Commons
   - Usage: Evolution in real time (antibiotic resistance)

---

### EvidenceOfEvolutionPage.jsx (1 image)

1. **Amazon Rainforest Endangered Species**
   - URL: https://earth.org/wp-content/uploads/2022/02/3.jpg
   - Source: Earth.org
   - Usage: Evolution evidence

---

### ExtinctionPage.jsx (1 image)

1. **Chicxulub Impact**
   - URL: https://upload.wikimedia.org/wikipedia/commons/b/b5/Chicxulub_impact_-_artist_impression.jpg
   - Source: Wikimedia Commons
   - Usage: K-Pg extinction event illustration

---

### NaturalSelectionPage.jsx (1 image)

1. **Scarlet Macaw**
   - URL: https://a-z-animals.com/media/2021/12/Red-Animals-Scarlet-Macaw.jpg
   - Source: A-Z Animals
   - Usage: Natural selection example (rainforest bird)

---

### OriginOfLifePage.jsx (1 image)

1. **Black Smoker Hydrothermal Vent**
   - URL: https://upload.wikimedia.org/wikipedia/commons/1/1e/Blacksmoker_in_Atlantic_Ocean.jpg
   - Source: Wikimedia Commons
   - Usage: Possible origin of life location

---

### PhylogenyPage.jsx (1 image)

1. **Tree of Life SVG**
   - URL: https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Tree_of_life_SVG.svg/800px-Tree_of_life_SVG.svg.png
   - Source: Wikimedia Commons
   - Usage: Phylogenetic tree illustration

---

### PopulationGeneticsPage.jsx (1 image)

1. **Genetic Drift Illustration**
   - URL: https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Genetic_drift_in_a_population_figure.png/800px-Genetic_drift_in_a_population_figure.png
   - Source: Wikimedia Commons
   - Usage: Genetic drift concept

---

### SpeciationPage.jsx (1 image)

1. **Darwin's Finches**
   - URL: https://upload.wikimedia.org/wikipedia/commons/a/ae/Darwin%27s_finches_by_Gould.jpg
   - Source: Wikimedia Commons (Gould illustration)
   - Usage: Speciation example

---

### VariationsPage.jsx (1 image)

1. **Standing Jaguar**
   - URL: https://upload.wikimedia.org/wikipedia/commons/0/0a/Standing_jaguar.jpg
   - Source: Wikimedia Commons
   - Usage: Population variation example

---

## Image Source Breakdown

| Source | Count |
|--------|-------|
| Wikimedia Commons | 13 |
| Other sources | 6 |
| **Total** | **19** |

**Other Sources:**
- GIPHY (1)
- Mongabay (1)
- Conservation Magazine (1)
- Amazon Cruise (1)
- Trexperience Peru (1)
- A-Z Animals (1)

---

## Current Setup

All images are hosted externally. No local image files exist in your project.

**Advantages:**
- Smaller project size
- No storage needed
- Automatic hosting by source sites
- Respects original copyright/licensing

**Disadvantages:**
- Depends on external URLs staying active
- No control over image availability
- Slower if sources are slow
- Cannot edit images

---

## Next Steps (Optional)

If you want to improve image handling:

1. **Add local hosting** - Download and store images locally in `public/images/`
2. **Optimize file sizes** - Compress images for faster loading
3. **Add alt text** - Improve accessibility (currently present)
4. **Create fallbacks** - Show placeholder if external URL fails

---

## Files Containing Images

- src/pages/HomePage.jsx
- src/pages/topics/IntroductionPage.jsx
- src/pages/topics/ArtificialSelectionPage.jsx
- src/pages/topics/CommonAncestryPage.jsx
- src/pages/topics/ContinuingEvolutionPage.jsx
- src/pages/topics/EvidenceOfEvolutionPage.jsx
- src/pages/topics/ExtinctionPage.jsx
- src/pages/topics/NaturalSelectionPage.jsx
- src/pages/topics/OriginOfLifePage.jsx
- src/pages/topics/PhylogenyPage.jsx
- src/pages/topics/PopulationGeneticsPage.jsx
- src/pages/topics/SpeciationPage.jsx
- src/pages/topics/VariationsPage.jsx

**Total Pages with Images:** 13 of 15

---

## Current Status

✅ All images referenced
✅ All URLs active (as of May 7, 2026)
✅ Alt text present
✅ Proper citations included
✅ Performance acceptable

No action needed unless you want to optimize further.

