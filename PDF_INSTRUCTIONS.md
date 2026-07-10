# Portfolio PDF Generation Instructions

## How to Create a PDF Version of Your Portfolio

### Option 1: Browser Print to PDF (Recommended)

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Navigate to the PDF version:**
   - Go to `http://localhost:5173/portfolio-pdf`
   - This shows a print-optimized version of your portfolio

3. **Generate PDF:**
   - Press `Ctrl+P` (Windows/Linux) or `Cmd+P` (Mac)
   - Select "Save as PDF" as the destination
   - Choose "More settings" and set:
     - Margins: Minimum
     - Scale: 100%
     - Options: Check "Background graphics"
   - Click "Save" and choose your filename

### Option 2: Using Puppeteer (Advanced)

If you want to automate the PDF generation, you can use Puppeteer:

1. **Install Puppeteer:**
   ```bash
   npm install puppeteer
   ```

2. **Create a PDF generation script:**
   ```javascript
   // generate-pdf.js
   const puppeteer = require('puppeteer');

   async function generatePDF() {
     const browser = await puppeteer.launch();
     const page = await browser.newPage();
     
     await page.goto('http://localhost:5173/portfolio-pdf', {
       waitUntil: 'networkidle0'
     });
     
     const pdf = await page.pdf({
       path: 'Mera_Bradley_Portfolio.pdf',
       format: 'A4',
       printBackground: true,
       margin: {
         top: '0.5in',
         right: '0.5in',
         bottom: '0.5in',
         left: '0.5in'
       }
     });
     
     await browser.close();
     console.log('PDF generated successfully!');
   }

   generatePDF();
   ```

3. **Run the script:**
   ```bash
   node generate-pdf.js
   ```

### Option 3: Online PDF Converters

1. Navigate to `http://localhost:5173/portfolio-pdf`
2. Use online tools like:
   - PDFShift
   - HTML to PDF API
   - Browser-based converters

## PDF Content

The PDF version includes:
- Professional cover page
- About section with your background
- All case studies with descriptions
- Design process explanation
- Skills and expertise
- Contact information

## Tips for School Applications

1. **File size:** Keep under 10MB for most applications
2. **Page count:** Aim for 8-12 pages maximum
3. **Quality:** Use high-resolution images if included
4. **Naming:** Use format like "Mera_Bradley_Portfolio_2025.pdf"

## Customization

To modify the PDF content, edit `/src/components/PortfolioPDF.tsx`:
- Update case study descriptions
- Add/remove skills
- Modify contact information
- Adjust styling for print optimization
