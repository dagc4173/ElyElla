"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlConfig = void 0;
exports.sqlConfig = {
    user: 'sa',
    password: '12345',
    database: 'ElyEllaBD',
    server: 'localhost',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true,
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
};
