# HealthContentAI

## Generador de FAQs Médicas con Inteligencia Artificial

HealthContentAI utiliza IA avanzada para generar respuestas precisas a preguntas médicas frecuentes en español.

### Características:
- 🤖 **Respuestas generadas por IA** en múltiples especialidades médicas
- 💾 **Base de datos automática** de FAQs
- 🎯 **Especialidades disponibles**: Cardiología, Neurología, Pediatría, Ginecología, Oncología y Medicina General
- ⚠️ **Disclaimers médicos automáticos** en cada respuesta
- 📱 **Diseño responsivo** para todos los dispositivos

### Vista en vivo:
[HealthContentAI](https://echo-Nitram.github.io/healthcontentai)

### Tech Stack:
- Next.js 15
- TypeScript
- Tailwind CSS
- Firebase/Firestore
- OpenAI API
- Google AdSense

### Instalación local:
```bash
git clone https://github.com/echo-Nitram/healthcontentai.git
cd healthcontentai
npm install
cp .env.local.example .env.local
# Configurar variables de entorno
npm run dev
```

### Variables de entorno necesarias:
```
OPENAI_API_KEY=tu-api-key
NEXT_PUBLIC_FIREBASE_API_KEY=tu-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=tu-dominio
NEXT_PUBLIC_FIREBASE_PROJECT_ID=tu-proyecto
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=tu-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=tu-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=tu-app-id
```

### Próximas mejoras:
- [ ] Agregar más especialidades médicas
- [ ] Implementar caché de respuestas
- [ ] Integrar WhatsApp/SMS
- [ ] Crear panel de administración
- [ ] Añadir soporte multiidioma

### Licencia:
MIT License

### Contacto:
Para consultas o colaboraciones: healthcontentai@ejemplo.com
