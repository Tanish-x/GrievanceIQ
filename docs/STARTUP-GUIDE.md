# 🇮🇳 BharatChain - One-Click Startup Guide 🇮🇳

## 🚀 The Easiest Way to Start BharatChain

**Just double-click `start.bat` and everything will be automatically set up!**

## 📋 What You Need (Prerequisites)

1. **Node.js** (v16 or higher)
   - Download: https://nodejs.org/
   - Used for: Backend API & Frontend React App

2. **Python** (v3.8 or higher)
   - Download: https://python.org/
   - Used for: AI OCR Service

3. **Windows OS** (for .bat files)
   - Alternative: Use PowerShell scripts on other systems

## 🎯 One-Click Startup

### Method 1: Double-Click Launch
```
📁 BharatChain/
├── start.bat          ← Double-click this!
├── stop.bat           ← To stop all services
└── status.bat         ← To check service status
```

### Method 2: Command Line
```cmd
cd BharatChain
start.bat
```

## 🔧 What `start.bat` Does Automatically

### ✅ **Step 1: System Check**
- Verifies Node.js installation
- Verifies Python installation
- Checks for existing services

### ✅ **Step 2: Cleanup**
- Stops any existing BharatChain services
- Cleans up processes safely

### ✅ **Step 3: Dependencies**
- Automatically installs npm packages (if missing)
- Installs Python requirements (if missing)
- No manual installation needed!

### ✅ **Step 4: Services Launch**
1. **Blockchain Network** (Port 8545)
   - Hardhat local blockchain
   - Smart contracts deployed automatically

2. **AI Service** (Port 5001)
   - OCR document processing
   - Grievance analysis

3. **Backend API** (Port 3001)
   - Express server with JWT auth
   - SQLite database
   - All government service APIs

4. **Frontend App** (Port 3000)
   - React app with Material-UI
   - Responsive design
   - MetaMask integration

### ✅ **Step 5: Browser Launch**
- Automatically opens http://localhost:3000
- Platform ready to use immediately!

## 🌐 Service URLs After Startup

| Service | URL | Description |
|---------|-----|-------------|
| 🎨 **Frontend** | http://localhost:3000 | Main BharatChain app |
| ⚙️ **Backend API** | http://localhost:3001 | REST API endpoints |
| 🧠 **AI Service** | http://localhost:5001 | OCR & document processing |
| ⛓️ **Blockchain** | http://localhost:8545 | Hardhat RPC endpoint |

## 🛠️ Service Management

### Start Everything
```cmd
start.bat
```

### Stop Everything
```cmd
stop.bat
```

### Check Status
```cmd
status.bat
```

### Manual Startup (if needed)
```cmd
# Backend
cd server
npm start

# Frontend
cd client
npm start

# AI Service
cd ai-service
python simple_ai_service.py

# Blockchain
npx hardhat node
```

## 🏛️ Platform Features

### ✅ **Core Services**
- **Citizen Registration** - Digital identity creation
- **Document Management** - Upload, OCR processing, blockchain verification
- **QR Code System** - Document authentication via QR codes
- **Grievance System** - Complaint filing and tracking
- **Payment Processing** - Government service fee collection
- **MetaMask Integration** - Web3 wallet connectivity

### ✅ **Technical Features**
- **Multi-language Support** - Hindi & English
- **Responsive Design** - Mobile-friendly interface
- **JWT Authentication** - Secure user sessions
- **Rate Limiting** - API protection
- **Error Handling** - Comprehensive error management
- **Real-time Updates** - Live status monitoring

## 🔍 Troubleshooting

### ❌ If start.bat fails:

1. **Check Prerequisites**
   ```cmd
   node --version    # Should show v16+
   python --version  # Should show v3.8+
   ```

2. **Manual Dependency Install**
   ```cmd
   cd server
   npm install
   
   cd ../client
   npm install
   
   cd ../ai-service
   pip install -r requirements.txt
   ```

3. **Check Port Conflicts**
   - Ports 3000, 3001, 5001, 8545 must be free
   - Close other applications using these ports

4. **Firewall/Antivirus**
   - Allow Node.js and Python through firewall
   - Whitelist the BharatChain folder

### ❌ If services don't start:

1. **Run status.bat** to check what's running
2. **Run stop.bat** then **start.bat** again
3. **Check individual service logs** in their terminal windows

### ❌ If browser doesn't open:
- Manually navigate to http://localhost:3000
- Wait 30-60 seconds for React development server

## 📊 Development Mode

The startup script runs all services in **development mode**:
- **Hot reloading** enabled for React
- **Nodemon** for backend auto-restart
- **Debug logging** enabled
- **Source maps** for debugging

## 🔒 Security Features

- **JWT Authentication** with secure token handling
- **CORS Protection** for API endpoints
- **Rate Limiting** to prevent abuse
- **Input Validation** on all forms
- **SQL Injection Protection** via parameterized queries
- **XSS Protection** with Content Security Policy

## 🌟 Quick Start Checklist

- [ ] Install Node.js (v16+)
- [ ] Install Python (v3.8+)
- [ ] Double-click `start.bat`
- [ ] Wait for browser to open
- [ ] Register as a citizen
- [ ] Upload your first document
- [ ] Connect MetaMask wallet
- [ ] Explore government services!

## 🎯 That's It!

The `start.bat` file is designed to be the **easiest possible way** to start BharatChain. No complex setup, no manual configuration - just one click and everything works!

---

**🇮🇳 BharatChain - Empowering India's Digital Identity Revolution 🇮🇳**
<!-- Project Update: Verified -->
