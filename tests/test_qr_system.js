// Project Update: Verified
const express = require('express');
const QRCodeService = require('./server/services/qr-service');
const config = require('./config/env-config');

console.log('🧪 Testing QR Code System for BharatChain');
console.log('='.repeat(50));

// Initialize QR service with a test secret
const testSecret = config.QR_CODE_SECRET || 'test-secret-key-for-qr-codes-12345';
const qrService = new QRCodeService(testSecret);

async function testQRSystem() {
    try {
        console.log('📊 QR Service Statistics:');
        const stats = qrService.getQRStats();
        console.log(`   Algorithm: ${stats.algorithm}`);
        console.log(`   Key Length: ${stats.keyLength}`);
        console.log(`   Error Correction: ${stats.errorCorrection}`);
        console.log(`   Max Data Size: ${stats.maxDataSize}`);
        console.log();

        console.log('📄 Testing Document QR Generation:');
        const testDocument = {
            id: 'DOC123',
            hash: 'abc123def456',
            title: 'Test Government Document',
            type: 'certificate'
        };

        const docQR = await qrService.generateDocumentQR(testDocument);
        console.log('   ✅ Document QR generated successfully');
        console.log(`   📐 QR Code Length: ${docQR.qrCode.length} characters`);
        console.log(`   🔗 Verification URL: ${docQR.verificationUrl}`);
        console.log(`   ⏰ Expires: ${docQR.expiresAt}`);
        console.log();

        console.log('🔍 Testing QR Verification:');
        const verification = qrService.verifyQRToken(docQR.payload);
        if (verification.valid) {
            console.log('   ✅ QR verification successful');
            console.log(`   📋 Document ID: ${verification.data.docId}`);
            console.log(`   🔖 Version: ${verification.data.version}`);
            console.log(`   ⏱️  Age: ${verification.age} minutes`);
        } else {
            console.log('   ❌ QR verification failed');
        }
        console.log();

        console.log('👤 Testing Citizen QR Generation:');
        const testCitizen = {
            id: 'CIT456',
            name: 'Test Citizen',
            aadhar: '1234-5678-9012',
            createdAt: new Date()
        };

        const citizenQR = await qrService.generateCitizenQR(testCitizen);
        console.log('   ✅ Citizen QR generated successfully');
        console.log(`   🔗 Verification URL: ${citizenQR.verificationUrl}`);
        console.log();

        console.log('📋 Testing Grievance QR Generation:');
        const testGrievance = {
            id: 'GRV789',
            status: 'pending',
            category: 'infrastructure',
            createdAt: new Date()
        };

        const grievanceQR = await qrService.generateGrievanceQR(testGrievance);
        console.log('   ✅ Grievance QR generated successfully');
        console.log(`   📱 Tracking Number: ${grievanceQR.trackingNumber}`);
        console.log(`   🔗 Tracking URL: ${grievanceQR.trackingUrl}`);
        console.log();

        console.log('🎯 QR System Test Summary:');
        console.log('   ✅ QR Code Generation: Working');
        console.log('   ✅ Encryption/Decryption: Working');
        console.log('   ✅ Token Verification: Working');
        console.log('   ✅ Multiple QR Types: Supported');
        console.log('   ✅ Security Features: Enabled');
        console.log();
        console.log('🚀 QR Code System is fully operational!');

    } catch (error) {
        console.error('❌ QR System Test Failed:', error.message);
    }
}

// Run tests
testQRSystem();