/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Box, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function LoginHome() {
    const navigate = useNavigate();

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
            bgcolor="#e3f2fd" // Hafif bir mavi tonuyla arka plan
            padding="20px"
        >
            {/* İçerik kutusu */}
            <Paper
                elevation={3}
                style={{
                    padding: '40px',
                    borderRadius: '15px',
                    backgroundColor: '#ffffff', // Beyaz arka plan
                    maxWidth: '400px',
                    width: '100%',
                    textAlign: 'center',
                }}
            >
                <Typography variant="h3" gutterBottom style={{ fontWeight: 'bold', color: '#1565c0' }}>
                    Depo Yönetim Sistemi
                </Typography>

                <Typography variant="h4" gutterBottom style={{ marginBottom: '20px', color: '#0d47a1' }}>
                    Hoşgeldiniz
                </Typography>

                <Box display="flex" flexDirection="column" gap={2}>
                    <Button
                        variant="contained"
                        fullWidth
                        style={{
                            padding: '10px',
                            fontSize: '16px',
                            backgroundColor: '#1e88e5', // Orta mavi tonu
                            color: '#fff', // Beyaz yazı
                            textTransform: 'none', // Büyük harf yerine normal metin
                        }}
                        onClick={() => navigate('/calisanLogin')}
                    >
                        Çalışan Girişi
                    </Button>
                    <Button
                        variant="contained"
                        fullWidth
                        style={{
                            padding: '10px',
                            fontSize: '16px',
                            backgroundColor: '#1976d2', // Biraz daha koyu mavi
                            color: '#fff',
                            textTransform: 'none', // Büyük harf yerine normal metin
                        }}
                        onClick={() => navigate('/adminLogin')}
                    >
                        Yönetici Girişi
                    </Button>
                    <Button
                        variant="contained"
                        fullWidth
                        style={{
                            padding: '10px',
                            fontSize: '16px',
                            backgroundColor: '#1565c0', // En koyu mavi
                            color: '#fff',
                            textTransform: 'none', // Büyük harf yerine normal metin
                        }}
                        onClick={() => navigate('/magazaLogin')}
                    >
                        Mağaza Girişi
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
}

export default LoginHome;
