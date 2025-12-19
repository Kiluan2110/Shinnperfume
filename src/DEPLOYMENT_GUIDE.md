# 🚀 DEPLOYMENT GUIDE - SHINN PERFUME

## ⚠️ IMPORTANT: Two-Part Deployment Required

SHINN PERFUME requires **TWO separate deployments**:

1. **Frontend** → Vercel (React app)
2. **Backend** → Supabase Edge Functions (API server)

---

## 📦 PART 1: Deploy Frontend to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/new
   - Connect your GitHub account

2. **Import Repository**
   - Import: `https://github.com/Kiluan2110/Web-Shinn-Perfume`
   - Framework: **Vite**
   - Root Directory: `./`

3. **Build Settings** (Auto-detected)
   ```
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

4. **Environment Variables**
   - ✅ **NO ENV VARS NEEDED** - Supabase credentials are pre-configured in code

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - ✅ Frontend deployed!

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

---

## 🔧 PART 2: Deploy Backend to Supabase

The backend API is **ALREADY DEPLOYED** on Supabase Edge Functions:

```
API Endpoint: https://ynhtownozrawefwlxjyf.supabase.co/functions/v1/make-server-335e3812
```

### Supabase Functions Status

✅ **Already Running:**
- `/health` - Health check
- `/perfumes` - Get all perfumes
- `/perfumes/:category` - Get perfumes by category (her/him)
- `/perfumes` (POST) - Add new perfume
- `/perfumes/:category/:id` (PUT) - Update perfume
- `/perfumes/:category/:id` (DELETE) - Delete perfume
- `/init-data` - Initialize database with sample data
- `/debug/all-data` - Debug: Get all raw data
- `/debug/clear-all` - Debug: Clear all data

### If You Need to Redeploy Supabase Functions

```bash
# Install Supabase CLI
npm install -g supabase

# Login to Supabase
supabase login

# Link to project
supabase link --project-ref ynhtownozrawefwlxjyf

# Deploy functions
supabase functions deploy make-server-335e3812
```

---

## 🧪 TESTING DEPLOYMENT

### 1. Test Frontend

Visit your Vercel URL:
```
https://your-project.vercel.app
```

Expected behavior:
- ✅ Home page loads with luxury perfume background
- ✅ "For Her" and "For Him" buttons work
- ✅ Page transitions are smooth
- ✅ AI chatbot appears in bottom-right corner

### 2. Test Backend API

Open browser console and run:
```javascript
fetch('https://ynhtownozrawefwlxjyf.supabase.co/functions/v1/make-server-335e3812/health')
  .then(r => r.json())
  .then(console.log)
// Expected: { status: "ok" }
```

### 3. Test Database Connection

1. Press **Ctrl+Shift+A** to open Admin Panel
2. Click "Initialize Database" button
3. Should see: "✅ Database initialized successfully with 20 perfumes"
4. Go to "For Her" or "For Him" pages
5. Should see 10 perfumes per category

---

## ❌ COMMON ISSUES & FIXES

### Issue 1: "Build Completed in 69ms" (No files prepared)

**Cause:** Missing `package.json` or build configuration

**Fix:**
```bash
# Ensure these files exist:
✅ package.json
✅ vite.config.ts
✅ vercel.json
✅ index.html
✅ main.tsx
```

### Issue 2: "Failed to fetch perfumes"

**Cause:** Backend API not responding or CORS issues

**Fix:**
- Check Supabase project is active: https://supabase.com/dashboard/project/ynhtownozrawefwlxjyf
- Verify API endpoint in browser: https://ynhtownozrawefwlxjyf.supabase.co/functions/v1/make-server-335e3812/health
- If 404: Redeploy Supabase functions (see Part 2)

### Issue 3: "Blank page after deployment"

**Cause:** Missing `index.html` or incorrect routing

**Fix:**
- Check `vercel.json` has rewrite rules
- Ensure `index.html` references `/main.tsx`
- Check browser console for errors

### Issue 4: "Chatbot not loading"

**Cause:** n8n webhook URL not accessible

**Fix:**
- Chatbot URL: `https://kiluan318.app.n8n.cloud/webhook/012d5660-0c40-485f-8add-4f1d5329b9a6/chat`
- Test in browser: Should show n8n chat interface
- If 404: n8n workflow might be inactive

---

## 🎯 VERCEL DEPLOYMENT CHECKLIST

Before deploying to Vercel, ensure:

- [x] `package.json` exists
- [x] `vite.config.ts` configured
- [x] `vercel.json` with rewrite rules
- [x] `index.html` entry point
- [x] `main.tsx` React entry
- [x] `tsconfig.json` TypeScript config
- [x] `.gitignore` excludes `node_modules` and `dist`
- [x] Supabase API endpoint is hardcoded in `/utils/supabase/info.tsx`
- [x] n8n chatbot URL is hardcoded in `/components/CustomChatWidget.tsx`

---

## 🌐 PRODUCTION URLS

After deployment, you will have:

1. **Frontend (Vercel)**
   - URL: `https://your-project.vercel.app`
   - Handles: UI, routing, client-side logic

2. **Backend (Supabase)**
   - URL: `https://ynhtownozrawefwlxjyf.supabase.co/functions/v1/make-server-335e3812`
   - Handles: API, database, server-side logic

3. **AI Chatbot (n8n)**
   - URL: `https://kiluan318.app.n8n.cloud/webhook/012d5660-0c40-485f-8add-4f1d5329b9a6/chat`
   - Handles: AI conversations, product recommendations

---

## 📞 SUPPORT

If deployment fails, check:
1. Vercel build logs
2. Browser console errors
3. Network tab for failed API calls
4. Supabase project status

**Need help?** Open an issue on GitHub: https://github.com/Kiluan2110/Web-Shinn-Perfume/issues
