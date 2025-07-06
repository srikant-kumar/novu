## 🛠️ Setup & Run Instructions (Self-Hosted)

### 📁 Prerequisites

- **Node.js** & **pnpm** installed
- **Docker** and **Docker Compose** installed

---

### 🔧 Step-by-Step Instructions

1. **Install dependencies**

   ```bash
   pnpm install
   ```

2. **Build the project**

   ```bash
   pnpm build
   ```

3. **(Re)Install to sync post-build dependencies**

   ```bash
   pnpm install
   ```

4. **Start local services with Docker**

   ```bash
   cd docker/local
   docker compose up -d
   ```

5. **Start the main application**

   ```bash
   pnpm start
   ```

---

6. **Set environment variable**
   Ensure this is set in your apps/dashboard `.env` file or in your shell:

   ```bash
   VITE_SELF_HOSTED=true
   ```

### 🚀 Start Individual Services (for development)

Start these in **separate terminals** or via **tmux**/scripts:

```bash
pnpm start:api:dev      # Starts the API in dev mode
pnpm worker:start       # Starts background workers
pnpm ws:start           # Starts WebSocket service
pnpm dashboard:start    # Starts the dashboard/frontend
```
