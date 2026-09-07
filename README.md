# 🎯 Whop Hunter: Content Rewards Campaign Finder

[![Version](https://img.shields.io/badge/version-1.0.5-purple.svg?style=for-the-badge&color=6d28d9)](https://github.com)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![Platform](https://img.shields.io/badge/platform-Chrome%20%7C%20Brave%20%7C%20Edge-black.svg?style=for-the-badge&logo=googlechrome)](https://whop.com)
[![Status](https://img.shields.io/badge/access-100%25%20Free%20Forever-success.svg?style=for-the-badge)](#)

> **Whop Hunter** is an open-source, ultra-fast Chrome extension engineered for clippers and creators to effortlessly discover, analyze, and filter high-paying **Whop Content Rewards** campaigns in real-time.

---

## ✨ Features

- ⚡ **Instant Multi-Metric Filtering**:
  - **Payout Rate (CPM)**: Filter minimum rate per 1,000 views across TikTok, YouTube, Instagram, Facebook, and X.
  - **Budget Range**: Target campaigns with specific minimum and maximum budget pools.
  - **Clippers Count**: Hunt undiscovered campaigns with low creator competition.
  - **Views Remaining**: Filter by minimum views the campaign can still afford to pay out.
  - **Campaign Age**: Find newly launched or established campaigns.
  - **Owner Verification**: Filter by verified brand owners.
  - **Platform Selection**: Filter campaigns supporting your preferred platforms.
- 🎨 **Floating Glassmorphism UI**: Beautiful, dark midnight drawer (`#090514`) with royal purple accents and high-contrast typography.
- 🔓 **100% Free & Open**: No sign-in, no sign-up, no subscriptions, and zero paywalls. Works instantly out of the box.
- 🔒 **Privacy-First**: Operates purely on client-side DOM & network hooks. Zero tracking or sensitive credential collection.

---

## 🚀 Quick Installation Guide (Unpacked)

Since this extension is 100% free and open-source, you can install it in less than 30 seconds:

### Step 1: Download the Code
1. Click the green **Code** button at the top of this repository and select **Download ZIP** (or clone via git):
   ```bash
   git clone https://github.com/YOUR_USERNAME/whop-hunter.git
   ```
2. Extract / unzip the folder onto your computer.

### Step 2: Load into Your Browser
1. Open your browser and navigate to the Extensions page:
   - **Chrome**: `chrome://extensions`
   - **Brave**: `brave://extensions`
   - **Edge**: `edge://extensions`
2. Enable **Developer mode** (toggle located in the top-right corner).
3. Click the **Load unpacked** button in the top-left corner.
4. Select the unzipped folder containing `manifest.json`.

### Step 3: Start Hunting!
1. Go to [Whop Content Rewards Discover](https://whop.com/discover/app/app_QRxsQodZgK1r4D).
2. Click the **Whop Hunter** extension icon in your browser toolbar to open the drawer.
3. Configure your filters and click **Filter**!

---

## 📁 Repository Structure

```
whop-hunter/
├── icons/              # Extension brand icons (16x16, 32x32, 48x48, 128x128)
├── background.js       # Manifest V3 service worker & session coordination
├── injected.js         # Whop Content Rewards API discovery hooks
├── scanner.js          # DOM scanner & real-time campaign card filtering engine
├── panel.js            # Floating glassmorphism filter drawer UI
├── popup.html          # Browser action popup dialog
├── popup.js            # Quick-launch script for Whop Content Rewards
├── manifest.json       # Chrome Extension Manifest V3 configuration
├── LICENSE             # MIT Open Source License
└── README.md           # Project documentation & installation guide
```

---

## 🛡️ License

Distributed under the **MIT License**. See `LICENSE` for more details.

---

## 💬 Community & Support

Found an issue or have an idea for a feature? Feel free to open an [Issue](https://github.com) or submit a Pull Request!
