# Resep default
default:
    @just --list

# Instal dependensi untuk semua proyek
install:
    cd fs/server && npm ci
    cd fs/client && npm ci
    cd fs/marketing && npm ci

# Format kode untuk semua proyek
format:
    cd fs/server && npm run format
    cd fs/client && npm run format
    cd fs/marketing && npm run format

# Lint kode untuk semua proyek
lint:
    cd fs/server && npm run lint
    cd fs/client && npm run lint
    cd fs/marketing && npm run lint

# Jalankan Prisma studio
db-studio:
    cd fs/server && npx prisma studio

# -- DEV SERVERS --

# Jalankan pengembangan server
dev-server:
    cd fs/server && npm run dev

# Jalankan pengembangan client
dev-client:
    cd fs/client && npm run dev

# Jalankan pengembangan situs marketing
dev-marketing:
    cd fs/marketing && npm run dev

# Bersihkan node_modules (gunakan dengan hati-hati)
clean:
    find . -name "node_modules" -type d -prune -exec rm -rf '{}' +
    find . -name "dist" -type d -prune -exec rm -rf '{}' +
