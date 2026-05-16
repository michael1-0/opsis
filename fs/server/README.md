# Opsis Main Server

Ini adalah backend server untuk proyek Opsis, dibangun menggunakan Express dan Prisma.

## Inisialisasi

1.  Disarankan untuk menggunakan `npm ci` guna memastikan instalasi bersih sesuai dengan versi yang ditentukan dalam lockfile.

    ```bash
    npm ci
    ```

2.  Salin file `.env.example` menjadi `.env` dan sesuaikan konfigurasinya:

    ```bash
    cp .env.example .env
    ```

3.  Push ke DB:

    ```bash
    npx prisma db push
    ```

4.  Generate Prisma Client:

    ```bash
    npx prisma generate
    ```

## Pengembangan

Jalankan server dalam mode dev:

```bash
npm run dev
```
